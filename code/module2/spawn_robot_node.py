import rclpy
from rclpy.node import Node
from gazebo_msgs.srv import SpawnEntity
import os
import xacro

class SpawnRobotNode(Node):

    def __init__(self):
        super().__init__('spawn_robot_node')
        self.cli = self.create_client(SpawnEntity, '/spawn_entity')
        
        while not self.cli.wait_for_service(timeout_sec=1.0):
            self.get_logger().info('spawn_entity service not available, waiting again...')
        
        self.declare_parameter('robot_name', 'my_robot')
        self.declare_parameter('robot_urdf_path', '')
        self.declare_parameter('x_pos', 0.0)
        self.declare_parameter('y_pos', 0.0)
        self.declare_parameter('z_pos', 0.1)

    def spawn_robot(self):
        robot_name = self.get_parameter('robot_name').get_parameter_value().string_value
        robot_urdf_path = self.get_parameter('robot_urdf_path').get_parameter_value().string_value
        x_pos = self.get_parameter('x_pos').get_parameter_value().double_value
        y_pos = self.get_parameter('y_pos').get_parameter_value().double_value
        z_pos = self.get_parameter('z_pos').get_parameter_value().double_value

        if not os.path.exists(robot_urdf_path):
            self.get_logger().error(f"URDF file not found at: {robot_urdf_path}")
            return

        # Parse XACRO to URDF if it's a .xacro file
        if robot_urdf_path.endswith('.xacro'):
            self.get_logger().info(f"Parsing XACRO file: {robot_urdf_path}")
            robot_description = xacro.process_file(robot_urdf_path).toxml_string()
        else:
            with open(robot_urdf_path, 'r') as file:
                robot_description = file.read()

        req = SpawnEntity.Request()
        req.name = robot_name
        req.xml = robot_description
        req.robot_namespace = robot_name
        req.initial_pose.position.x = x_pos
        req.initial_pose.position.y = y_pos
        req.initial_pose.position.z = z_pos

        self.get_logger().info(f"Spawning {robot_name} from {robot_urdf_path} at ({x_pos}, {y_pos}, {z_pos})")
        
        self.future = self.cli.call_async(req)
        rclpy.spin_until_future_complete(self, self.future)

        if self.future.result() is not None:
            self.get_logger().info(f'Spawn service response: {self.future.result().status_message}')
        else:
            self.get_logger().error('Service call failed %r' % (self.future.exception(),))

def main(args=None):
    rclpy.init(args=args)
    spawn_robot_node = SpawnRobotNode()
    spawn_robot_node.spawn_robot()
    spawn_robot_node.destroy_node()
    rclpy.shutdown()

if __name__ == '__main__':
    main()

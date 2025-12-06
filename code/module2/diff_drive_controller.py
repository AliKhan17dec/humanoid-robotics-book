import rclpy
from rclpy.node import Node
from geometry_msgs.msg import Twist

class DiffDriveController(Node):

    def __init__(self):
        super().__init__('diff_drive_controller')
        self.publisher_ = self.create_publisher(Twist, '/cmd_vel', 10)
        timer_period = 0.5  # seconds
        self.timer = self.create_timer(timer_period, self.timer_callback)
        self.get_logger().info('Differential Drive Controller Node has been started.')

    def timer_callback(self):
        msg = Twist()
        msg.linear.x = 0.5  # Move forward at 0.5 m/s
        msg.angular.z = 0.1  # Turn slowly
        self.publisher_.publish(msg)
        self.get_logger().info('Publishing Twist: Linear.x=%.2f, Angular.z=%.2f' % (msg.linear.x, msg.angular.z))

def main(args=None):
    rclpy.init(args=args)
    diff_drive_controller = DiffDriveController()
    rclpy.spin(diff_drive_controller)
    diff_drive_controller.destroy_node()
    rclpy.shutdown()

if __name__ == '__main__':
    main()

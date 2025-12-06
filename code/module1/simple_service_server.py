import rclpy
from rclpy.node import Node
from example_interfaces.srv import AddTwoInts

class SimpleServiceServer(Node):

    def __init__(self):
        super().__init__('simple_service_server')
        self.srv = self.create_service(AddTwoInts, 'add_two_ints', self.add_two_ints_callback)
        self.get_logger().info('Service server started.')

    def add_two_ints_callback(self, request, response):
        response.sum = request.a + request.b
        self.get_logger().info('Incoming request\na: %d b: %d' % (request.a, request.b))
        self.get_logger().info('Returning sum: %d' % response.sum)
        return response

def main(args=None):
    rclpy.init(args=args)
    simple_service_server = SimpleServiceServer()
    rclpy.spin(simple_service_server)
    rclpy.shutdown()

if __name__ == '__main__':
    main()


import omni.isaac.core.utils.nucleus as nucleus_utils
from omni.isaac.core.articulations import Articulation
from omni.isaac.core.scenes import Scene
from omni.isaac.core import World
import omni.isaac.core.utils.stage as stage_utils
from omni.isaac.core.utils.prims import define_prim, delete_prim
from pxr import Gf, UsdLux, UsdGeom

import asyncio

# This script is designed to be run within the Isaac Sim Script Editor or as an extension.
# It requires the Isaac Sim application to be running.

async def setup_isaac_sim_environment():
    world = World(stage_units_in_meters=1.0)
    
    # Add a scene with a default ground plane
    scene = Scene(prim_path="/World", set_defaults=True)
    scene.add_default_ground_plane()

    # Add a simple dome light for illumination
    dome_light_prim = define_prim("/World/DomeLight", "DomeLight")
    dome_light = UsdLux.DomeLight(dome_light_prim)
    dome_light.GetIntensityAttr().Set(1000.0)
    dome_light.GetColorAttr().Set(Gf.Vec3f(1.0, 1.0, 1.0))

    # Load a humanoid robot model (replace with your desired humanoid USD)
    # For this example, we'll use a placeholder or a simpler robot if a humanoid USD isn't readily available.
    # Typically, humanoid USDs are found in Isaac Sim assets or imported.
    # Let's use a simpler mobile robot for demonstration if a humanoid isn't trivial to find.
    assets_root_path = nucleus_utils.get_assets_root_path()
    if assets_root_path is None:
        print("Could not find Isaac Sim assets folder. Please ensure Nucleus is configured correctly.")
        return

    # Using a simpler mobile robot for initial setup
    robot_usd_path = assets_root_path + "/Isaac/Robots/Clearpath/Jackal/jackal_holonomic.usd"
    # If a humanoid USD is available, uncomment and replace
    # robot_usd_path = assets_root_path + "/Isaac/Robots/Humanoids/YourHumanoidRobot.usd" 

    robot_prim_path = "/World/MyRobot"
    robot = scene.add(
        Articulation(
            prim_path=robot_prim_path,
            usd_path=robot_usd_path,
            position=Gf.Vec3d(0.0, 0.0, 0.5), # Adjust Z to be above ground
            orientation=Gf.Quatf(1.0, 0.0, 0.0, 0.0),
            name="my_isaac_robot"
        )
    )

    # Set up the camera (viewpoint)
    camera_prim = define_prim("/World/Camera", "Camera")
    camera_geom = UsdGeom.Camera(camera_prim)
    camera_geom.GetFocusDistanceAttr().Set(600)
    camera_geom.GetFocalLengthAttr().Set(24)
    camera_prim.GetAttribute("focalLength").Set(24) # Ensure this is also set for newer versions

    # Set camera position and target
    camera_prim.GetAttribute("xformOp:translate").Set(Gf.Vec3d(5, 5, 3))
    camera_prim.GetAttribute("xformOp:orient").Set(Gf.Quatf(1, 0, 0, 0)) # Identity quaternion
    # Rotate camera to look at origin (robot)
    # The look_at function is a common utility but not directly in pxr.Gf for prims.
    # This usually involves setting 'xformOp:rotate' or using a helper function.
    # For simplicity, we'll just set its position for a general view.
    
    # Reset the simulation environment
    await world.reset_async()
    print("Isaac Sim environment setup complete. Robot loaded.")

    # You can add more logic here, e.g., applying forces, controlling joints, running simulation steps
    # while simulation_app.is_running():
    #     await world.step_async()
    #     if world.is_playing():
    #         # Do something here
    #         pass

    # Example of moving the robot (simplified)
    # await world.play_async()
    # await omni.usd.commands.MovePrimCommand(
    #     path_from=robot_prim_path,
    #     path_to=robot_prim_path,
    #     new_position=Gf.Vec3d(1.0, 0.0, 0.5)
    # ).do_async()
    # print("Robot moved slightly.")


if __name__ == "__main__":
    print("This script is meant to be run inside Isaac Sim's Python environment.")
    print("For a full execution, launch Isaac Sim and open its Script Editor.")
    print("Then, paste and run the code, or save as an extension.")
    # Example of how you would run it if it were a standalone app
    # from omni.isaac.kit import SimulationApp
    # simulation_app = SimulationApp({"headless": False})
    # asyncio.run(setup_isaac_sim_environment())
    # simulation_app.close()

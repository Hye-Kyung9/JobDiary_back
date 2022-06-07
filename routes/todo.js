// Controller 를 불러와서 exports 메소드 사용
import controller from "../controller/todo";
// Main
router.get("/", controller.get); // http://localhost:3000/todo/

// Write
router.post("/write", controller.write); // http://localhost:3000/todo/write

// Edit
router.get("/edit/:id", controller.edit);

// Update
router.post("/update/:id", controller.update);

// Remove
router.get("/remove/:id", controller.remove);

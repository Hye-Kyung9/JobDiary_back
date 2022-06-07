import Todo from "../models/Todo.js";

exports.get = function (req, res) {
  TodoTask.find({}, null, { sort: { date: -1 } }, (err, tasks) => {
    res.render("todo", { Todo: tasks });
  });
};

// 작성
exports.write = async function (req, res) {
  try {
    const todoTask = new TodoTask({
      //새로운 TodoTask를 만들어서 todoTask에 저장
      content: req.body.content, //입력한 부분
      date: moment().format("YYYY-MM-DD HH:mm:ss"), //현재 시간
    });
    await todoTask.save(); //save()를 통해 db에 저장
    console.log("==== Success!! Save New TodoTask ====");
    console.table([
      { id: todoTask._id, content: todoTask.content, date: todoTask.date },
    ]);
    res.redirect("/todo"); //localhost:3000/todo로 귀환
  } catch (err) {
    console.err("==== Fail!! Save TodoTask ====");
    res.redirect("/todo");
  }
};

// 편집
exports.edit = function (req, res) {
  const id = req.params.id; //파라미터로 받은 id를 id에 저장
  TodoTask.find({}, null, { sort: { date: -1 } }, (err, tasks) => {
    //db에서 조회해서
    res.render("todo-edit", { todoTasks: tasks, idTask: id }); //todo-edit.ejs에 id와 함께 보낸다
  });
};

// 수정
exports.update = function (req, res) {
  const id = req.params.id;
  TodoTask.findByIdAndUpdate(id, { content: req.body.content }, (err) => {
    //해당 id값의 content를 변경
    if (err) {
      console.log("==== Fail!! Update TodoTask ====");
      console.error(err);
    }
    console.log("==== Success!! Update TodoTask ====");
    console.log("id: " + id + "\nchanged content: " + req.body.content);
    res.redirect("/todo");
  });
};

//삭제
exports.remove = function (req, res) {
  const id = req.params.id;
  TodoTask.findByIdAndRemove(id, (err) => {
    //해당 id의 데이터를 삭제
    if (err) {
      console.log("==== Fail!! Remove TodoTask ====");
      console.error(err);
    }
    console.log("==== Success!! Remove TodoTask ====");
    console.log("id: " + id);
    res.redirect("/todo");
  });
};

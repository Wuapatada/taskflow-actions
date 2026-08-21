const { createTask } = require("../src/task");

test("Debe crear una tarea correctamente", () => {
    const task = createTask("Aprender GitHub Actions");

    expect(task.title).toBe("Aprender GitHub Actions");
    expect(task.completed).toBe(false);
});
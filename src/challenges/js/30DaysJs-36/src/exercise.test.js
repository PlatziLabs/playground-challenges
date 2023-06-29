import { taskManager } from "./exercise";

describe("tests", () => {
  let tm;
  beforeEach(() => {
    tm = taskManager();
  });

  it("should add a Task", () => {
    tm.addTask("task1", ["tag1", "tag2"]);
    expect(tm.printTasks().size).toBe(1);
  });

  it("should add tags to an existing task", () => {
    tm.addTask("task1", ["tag1", "tag2"]);
    tm.addTask("task1", ["tag3", "tag4"]);
    expect(tm.printTasks().get("task1")).toEqual(
      new Set(["tag1", "tag2", "tag3", "tag4"])
    );
  });

  it("should convert task to lowercase", () => {
    tm.addTask("Task1", ["tag1", "tag2"]);
    expect(tm.printTasks().has("task1")).toBe(true);
  });

  it("should print Tasks", () => {
    expect(tm.printTasks()).toBeInstanceOf(Map);
  });

  it("should add a new task to the task manager", () => {
    tm.addTask("Finish homework", ["School", "Homework"]);
    tm.addTask("study", ["School", "Homework"]);
    expect(tm.printTasks().size).toBe(2);
  });

  it("should not repeat tags to an existing task", () => {
    tm.addTask("Finish homework", ["School", "Homework"]);
    tm.addTask("finish homework", ["School"]);
    expect(tm.printTasks().get("finish homework")).toEqual(
      new Set(["School", "Homework"])
    );
  });

  it("should return a Map containing all the tasks", () => {
    tm.addTask("Finish homework", ["School", "Homework"]);
    tm.addTask("Clean the room", ["Home"]);
    expect(tm.printTasks().size).toBe(2);
    expect(tm.printTasks()).toBeInstanceOf(Map);
  });
});

import { createTaskPlanner } from "./exercise";

describe("tests", () => {
  const planner = createTaskPlanner();

  it("should add a new task with completed property", () => {
    planner.addTask({
      id: 1,
      name: "Comprar leche",
      priority: 3,
      tags: ["shopping", "home"],
    });

    const rta = planner.getTasks();

    expect(rta).toEqual([
      {
        id: 1,
        name: "Comprar leche",
        priority: 3,
        completed: false,
        tags: ["shopping", "home"],
      },
    ]);
  });

  it("should remove a task with id", () => {
    planner.removeTask(1);
    const rta = planner.getTasks();
    expect(rta).toEqual([]);
  });

  it("should remove a task with name", () => {
    planner.addTask({
      id: 2,
      name: "Llamar a Juan",
      priority: "1",
      tags: ["personal"],
    });
    planner.removeTask("Llamar a Juan");

    const rta = planner.getTasks();
    expect(rta).toEqual([]);
  });

  it("should mark as a complete one task with id", () => {
    planner.addTask({
      id: 1,
      name: "Comprar leche",
      priority: 3,
      tags: ["shopping", "home"],
    });

    planner.markTaskAsCompleted(1);
    const rta = planner.getTasks();
    expect(rta).toEqual([
      {
        id: 1,
        name: "Comprar leche",
        priority: 3,
        completed: true,
        tags: ["shopping", "home"],
      },
    ]);
  });

  it("should mark as a complete one task with name", () => {
    planner.addTask({
      id: 2,
      name: "Llamar a Juan",
      priority: 1,
      tags: ["personal"],
    });

    planner.markTaskAsCompleted("Llamar a Juan");
    const rta = planner.getTasks();
    expect(rta).toEqual([
      {
        id: 1,
        name: "Comprar leche",
        priority: 3,
        completed: true,
        tags: ["shopping", "home"],
      },
      {
        id: 2,
        name: "Llamar a Juan",
        priority: 1,
        completed: true,
        tags: ["personal"],
      },
    ]);
  });

  it("should filter by tag", () => {
    const rta = planner.filterTasksByTag("personal");
    expect(rta).toEqual([
      {
        id: 2,
        name: "Llamar a Juan",
        priority: 1,
        completed: true,
        tags: ["personal"],
      },
    ]);
  });

  it("should return tasks ordered by priority", () => {
    const rta = planner.getSortedTasksByPriority();
    expect(rta).toEqual([
      {
        id: 2,
        name: "Llamar a Juan",
        priority: 1,
        tags: ["personal"],
        completed: true,
      },
      {
        id: 1,
        name: "Comprar leche",
        priority: 3,
        tags: ["shopping", "home"],
        completed: true,
      },
    ]);
  });

  it("should not modify the original array", () => {
    const rta = planner.getCompletedTasks();
    expect(rta).toEqual([
      {
        id: 1,
        name: "Comprar leche",
        priority: 3,
        tags: ["shopping", "home"],
        completed: true,
      },
      {
        id: 2,
        name: "Llamar a Juan",
        priority: 1,
        tags: ["personal"],
        completed: true,
      },
    ]);
  });

  it("should extend a task", () => {
    planner.updateTask(1, {
      notes: "Leche deslactosada",
      place: "supermercado",
    });
    const rta = planner.getTasks();
    expect(rta).toEqual([
      {
        id: 1,
        name: "Comprar leche",
        priority: 3,
        tags: ["shopping", "home"],
        completed: true,
        notes: "Leche deslactosada",
        place: "supermercado",
      },
      {
        id: 2,
        name: "Llamar a Juan",
        priority: 1,
        tags: ["personal"],
        completed: true,
      },
    ]);
  });
});

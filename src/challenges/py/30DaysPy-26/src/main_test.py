import pytest
from main import TaskManager

@pytest.fixture
def task_manager():
    return TaskManager()

def test_add_task(task_manager):
    task_manager.addTask("task1", ["tag1", "tag2"])
    assert len(task_manager.printTasks()) == 1

def test_add_tags_to_existing_task(task_manager):
    task_manager.addTask("task1", ["tag1", "tag2"])
    task_manager.addTask("task1", ["tag3", "tag4"])
    assert task_manager.printTasks()["task1"] == {"tag1", "tag2", "tag3", "tag4"}

def test_convert_task_to_lowercase(task_manager):
    task_manager.addTask("Task1", ["tag1", "tag2"])
    assert "task1" in task_manager.printTasks()

def test_print_tasks(task_manager):
    assert isinstance(task_manager.printTasks(), dict)

def test_add_new_task_to_task_manager(task_manager):
    task_manager.addTask("Finish homework", ["School", "Homework"])
    task_manager.addTask("study", ["School", "Homework"])
    assert len(task_manager.printTasks()) == 2

def test_not_repeat_tags_to_existing_task(task_manager):
    task_manager.addTask("Finish homework", ["School", "Homework"])
    task_manager.addTask("finish homework", ["School"])
    assert task_manager.printTasks()["finish homework"] == {"School", "Homework"}

def test_return_map_containing_all_tasks(task_manager):
    task_manager.addTask("Finish homework", ["School", "Homework"])
    task_manager.addTask("Clean the room", ["Home"])
    assert len(task_manager.printTasks()) == 2
    assert isinstance(task_manager.printTasks(), dict)
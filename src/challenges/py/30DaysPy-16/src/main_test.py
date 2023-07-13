from main import createTaskPlanner

def test_add_task_with_completed_property():
  planner = createTaskPlanner()

  planner['addTask']({
    'id': 1,
    'name': 'Comprar leche',
    'priority': 3,
    'tags': ['shopping', 'home'],
  })

  rta = planner['getTasks']()

  assert rta == [
    {
      'id': 1,
      'name': 'Comprar leche',
      'priority': 3,
      'completed': False,
      'tags': ['shopping', 'home'],
    },
  ]


def test_remove_task_with_id():
  planner = createTaskPlanner()

  planner['addTask']({
    'id': 1,
    'name': 'Comprar leche',
    'priority': 3,
    'tags': ['shopping', 'home'],
  })

  planner['removeTask'](1)

  rta = planner['getTasks']()

  assert rta == []


def test_remove_task_with_name():
  planner = createTaskPlanner()

  planner['addTask']({
    'id': 2,
    'name': 'Llamar a Juan',
    'priority': 1,
    'tags': ['personal'],
  })

  planner['removeTask']('Llamar a Juan')

  rta = planner['getTasks']()

  assert rta == []


def test_mark_task_as_completed_with_id():
  planner = createTaskPlanner()

  planner['addTask']({
    'id': 1,
    'name': 'Comprar leche',
    'priority': 3,
    'tags': ['shopping', 'home'],
  })

  planner['markTaskAsCompleted'](1)

  rta = planner['getTasks']()

  assert rta == [
    {
      'id': 1,
      'name': 'Comprar leche',
      'priority': 3,
      'completed': True,
      'tags': ['shopping', 'home'],
    },
  ]


def test_mark_task_as_completed_with_name():
  planner = createTaskPlanner()

  planner['addTask']({
    'id': 2,
    'name': 'Llamar a Juan',
    'priority': 1,
    'tags': ['personal'],
  })

  planner['markTaskAsCompleted']('Llamar a Juan')

  rta = planner['getTasks']()

  assert rta == [
    {
      'id': 2,
      'name': 'Llamar a Juan',
      'priority': 1,
      'completed': True,
      'tags': ['personal'],
    },
  ]


def test_filter_tasks_by_tag():
  planner = createTaskPlanner()

  planner['addTask']({
    'id': 2,
    'name': 'Llamar a Juan',
    'priority': 1,
    'tags': ['personal'],
  })

  rta = planner['filterTasksByTag']('personal')

  assert rta == [
      {
        'id': 2,
        'name': 'Llamar a Juan',
        'priority': 1,
        'completed': False,
        'tags': ['personal'],
      },
  ]


def test_get_sorted_tasks_by_priority():
  planner = createTaskPlanner()

  planner['addTask']({
    'id': 1,
    'name': 'Comprar leche',
    'priority': 3,
    'tags': ['shopping', 'home'],
  })

  planner['addTask']({
    'id': 2,
    'name': 'Llamar a Juan',
    'priority': 1,
    'tags': ['personal'],
  })

  rta = planner['getSortedTasksByPriority']()

  assert rta == [
      {
        'id': 2,
        'name': 'Llamar a Juan',
        'priority': 1,
        'tags': ['personal'],
        'completed': False,
      },
      {
        'id': 1,
        'name': 'Comprar leche',
        'priority': 3,
        'tags': ['shopping', 'home'],
        'completed': False,
      },
  ]


def test_get_completed_tasks():
  planner = createTaskPlanner()

  rta = planner['getCompletedTasks']()

  assert rta == []


def test_update_task():
  planner = createTaskPlanner()

  planner['addTask']({
    'id': 1,
    'name': 'Comprar leche',
    'priority': 3,
    'tags': ['shopping', 'home'],
  })

  planner['updateTask'](1, {
    'notes': 'Leche deslactosada',
    'place': 'supermercado',
  })

  rta = planner['getTasks']()

  assert rta == [
    {
      'id': 1,
      'name': 'Comprar leche',
      'priority': 3,
      'tags': ['shopping', 'home'],
      'completed': False,
      'notes': 'Leche deslactosada',
      'place': 'supermercado',
    },
  ]
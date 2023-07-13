import pytest
from main import PatientList

def test_add_patient_to_list():
  list = PatientList(3)
  list.addPatient("Paciente 1", 20)
  list.addPatient("Paciente 2", 30)

  list.addPatient("Paciente 3", 25)
  assert len(list.getPatientList()) == 3

def test_decrement_beds_available():
  list = PatientList(3)
  list.addPatient("Paciente 1", 20)
  list.addPatient("Paciente 2", 30)

  list.addPatient("Paciente 3", 25)
  assert list.getAvailableBeds() == 0

def test_throw_error_if_no_beds_available():
  list = PatientList(3)
  list.addPatient("Paciente 1", 20)
  list.addPatient("Paciente 2", 30)

  list.addPatient("Paciente 3", 25)
  with pytest.raises(Exception):
    list.addPatient("Paciente 4", 50)

def test_remove_patient_from_list():
  list = PatientList(3)
  list.addPatient("Paciente 1", 20)
  list.addPatient("Paciente 2", 30)

  list.removePatient("Paciente 2")
  assert len(list.getPatientList()) == 1

def test_increment_beds_available():
  list = PatientList(3)
  list.addPatient("Paciente 1", 20)
  list.addPatient("Paciente 2", 30)

  list.removePatient("Paciente 2")
  assert list.getAvailableBeds() == 2

def test_throw_error_if_patient_not_found():
  list = PatientList(3)
  list.addPatient("Paciente 1", 20)
  list.addPatient("Paciente 2", 30)

  with pytest.raises(Exception):
    list.removePatient("Paciente 3")

def test_return_patient_object():
  list = PatientList(3)
  list.addPatient("Paciente 1", 20)
  list.addPatient("Paciente 2", 30)

  assert list.getPatient("Paciente 1") == {
    'name': 'Paciente 1',
    'age': 20,
    'bedNumber': 1
  }

def test_throw_error_if_patient_not_found():
  list = PatientList(3)
  list.addPatient("Paciente 1", 20)
  list.addPatient("Paciente 2", 30)

  with pytest.raises(Exception):
    list.getPatient("Paciente 3")

def test_return_array_of_patient_objects():
  list = PatientList(3)
  list.addPatient("Paciente 1", 20)
  list.addPatient("Paciente 2", 30)

  assert list.getPatientList() == [
    {'name': 'Paciente 1', 'age': 20, 'bedNumber': 1},
    {'name': 'Paciente 2', 'age': 30, 'bedNumber': 2}
  ]
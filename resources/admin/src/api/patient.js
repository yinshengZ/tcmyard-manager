import request from "@/utils/request";

export function searchPatient(data) {
  return request({
    url: "/patient/search",
    method: "post",
    data,
  });
}
export function getAll() {
  return request({
    url: "/patient",
    method: "get",
  });
}

export function getSingle(id) {
  return request({
    url: "/patient/" + id,
    method: "get",
  });
}

export function getPatientInfo(id) {
  return request({
    url: "/patient/info/" + id,
    method: "get",
  });
}

export function AddPatient(data) {
  return request({
    url: "/patient",
    method: "post",
    data,
  });
}

export function updatePatient(data, id) {
  return request({
    url: "/patient/" + id,
    method: "put",
    data,
  });
}

export function deletePatient(data) {
  return request({
    url: "/patient/" + data,
    method: "delete",
  });
}

export function addGender(data) {
  return request({
    url: "/gender",
    method: "post",
    data,
  });
}

export function getGenders() {
  return request({
    url: "/gender",
    method: "get",
  });
}

export function deleteGender(id) {
  return request({
    url: "/gender",
    method: "delete",
    id,
  });
}

export function addMarital(data) {
  return request({
    url: "/marital",
    method: "post",
    data,
  });
}

export function getMarital() {
  return request({
    url: "/marital",
    method: "get",
  });
}

export function deleteMarital(id) {
  return request({
    url: "/marital",
    method: "delete",
    id,
  });
}

export function addAllergies(data) {
  return request({
    url: "/allergy",
    method: "post",
    data,
  });
}

export function getAllergies() {
  return request({
    url: "/allergy",
    method: "get",
  });
}

export function deleteAllergies(id) {
  return request({
    url: "/allergy",
    method: "delete",
    id,
  });
}

export function addSymptoms(data) {
  return request({
    url: "/symptom",
    method: "post",
    data,
  });
}

export function getSymptoms() {
  return request({
    url: "/symptom",
    method: "get",
  });
}

export function deleteSymptoms(id) {
  return request({
    url: "/symptom",
    method: "delete",
    id,
  });
}

export function addPatientDisease(data) {
  return request({
    url: "/patient/disease/tag",
    method: "post",
    data,
  });
}

export function addPatientAllergy(data) {
  return request({
    url: "/patient/allergy/tag",
    method: "post",
    data,
  });
}

export function addPatientSymptom(data) {
  return request({
    url: "/patient/symptom/tag",
    method: "post",
    data,
  });
}

export function addPatientMedication(data) {
  return request({
    url: "/patient/medication/tag",
    method: "post",
    data,
  });
}

export function deletePatientDisease(patient_id, disease_id) {
  return request({
    url: "/patient/disease/" + patient_id + "/" + disease_id,
    method: "delete",
  });
}

export function deletePatientSymptom(patient_id, symptom_id) {
  return request({
    url: "/patient/symptom/" + patient_id + "/" + symptom_id,
    method: "delete",
  });
}

export function deletePatientMedication(patient_id, medication_id) {
  return request({
    url: "/patient/medication/" + patient_id + "/" + medication_id,
    method: "delete",
  });
}

export function deletePatientAllergy(patient_id, allergy_id) {
  return request({
    url: "/patient/allergy/" + patient_id + "/" + allergy_id,
    method: "delete",
  });
}

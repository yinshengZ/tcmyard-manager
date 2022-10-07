import request from '@/utils/request'

export function searchPatient(data) {
  return request({
    url: '/patient/search',
    method: 'post',
    data
  })
}
export function getAll() {
  return request({
    url: '/patient',
    method: 'get'
  })
}

export function getSingle(id) {
  return request({
    url: '/patient/'+id,
    method: 'get',
    
  })
}

export function AddPatient(data) {
  return request({
    url: '/patient',
    method: 'post',
    data

  })
}

export function addGender(data) {
  return request({
    url: '/gender',
    method: 'post',
    data
  })
}

export function getGenders() {
  return request({
    url: '/gender',
    method: 'get'
  })
}

export function deleteGender(id) {
  return request({
    url: '/gender',
    method: 'delete',
    id
  })
}

export function addMarital(data) {
  return request({
    url: '/marital',
    method: 'post',
    data
  })
}

export function getMarital() {
  return request({
    url: '/marital',
    method: 'get'
  })
}

export function deleteMarital(id) {
  return request({
    url: '/marital',
    method: 'delete',
    id
  })
}

export function addAllergies(data) {
  return request({
    url: '/allergy',
    method: 'post',
    data
  })
}

export function getAllergies() {
  return request({
    url: '/allergy',
    method: 'get'
  })
}

export function deleteAllergies(id) {
  return request({
    url: '/allergy',
    method: 'delete',
    id
  })
}

export function addSymptoms(data) {
  return request({
    url: '/symptom',
    method: 'post',
    data
  })
}

export function getSymptoms() {
  return request({
    url: '/symptom',
    method: 'get'
  })
}

export function deleteSymptoms(id) {
  return request({
    url: '/symptom',
    method: 'delete',
    id
  })
}

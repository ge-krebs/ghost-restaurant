import request from 'superagent'

export async function getAllLockers(){
  
}

export async function getUnfilledLockers(){
  const res = await request.get('/api/v1/locker')
  if (!res.ok){
    throw new Error()
  }
  return res.body
}

export async function fillLocker(id: number) {
  const res = await request.put(`/api/v1/locker/${id}`)
  if (!res.ok){
    throw new Error()
  }
  return 'locker id ' + id + 'was filled'
}
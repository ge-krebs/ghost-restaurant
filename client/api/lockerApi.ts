import request from 'superagent'

//--FRONTEND LOCKER API FUNCTIONS--//

export async function getAllLockers(){
  const res = await request.get('/api/v1/locker/pickup')
  if (!res.ok){
    throw new Error()
  }
  return res.body //all lockers
}

export async function getUnfilledLockers(){
  const res = await request.get('/api/v1/locker')
  if (!res.ok){
    throw new Error()
  }
  return res.body //all unfilled lockers
}

export async function fillLocker(id: number) {
  const res = await request.put(`/api/v1/locker/${id}`) //marks a locker as filled (true)
  if (!res.ok){
    throw new Error()
  }
  return res.status(200)
}
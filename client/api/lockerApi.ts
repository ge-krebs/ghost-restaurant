import request from 'superagent'

export async function fillLocker(id: number) {
  console.log('stuck here?')
  const res = await request.put(`/api/v1/locker/${id}`)
  console.log(res)
  if (!res.ok){
    throw new Error()
  }
  return 'locker id ' + id + 'was filled'
}
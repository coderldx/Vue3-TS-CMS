import dxRequest from '../../index'

export function getPageList(pageUrl: string, queryInfo: any) {
  return dxRequest.post({
    url: pageUrl,
    data: queryInfo
  })
}

// 列表的删除/新建/编辑
// url: /users/id
export function deletePageData(pageUrl: string) {
  return dxRequest.delete({
    url: pageUrl
  })
}

export function newPageData(pageUrl: string, newData: any) {
  return dxRequest.post({
    url: pageUrl,
    data: newData
  })
}

export function editPageData(pageUrl: string, editData: any) {
  return dxRequest.patch({
    url: pageUrl,
    data: editData
  })
}

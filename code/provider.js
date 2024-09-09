async function scheduleHtmlProvider() {
  await loadTool('AIScheduleTools')
  try {
    var res = await fetch('https://jw.ustc.edu.cn/for-std/course-table',{
      method: 'GET',
    })

    path_parts = res.url.split('/')
    const dataId = parseInt(path_parts[path_parts.length-1]) // 获取 dataId

    res = await fetch('https://jw.ustc.edu.cn/for-std/course-table').then(data => data.text())
    var doc = new DOMParser().parseFromString(res, 'text/xml')
    const semesterId = doc.querySelectorAll('option[selected="selected"]')[0].value // 获取 semesterId

    res = await fetch(`https://jw.ustc.edu.cn/for-std/course-table/semester/${semesterId}/print-data/${dataId}?weekIndex=`)
    const resJson = await res.json()
    return JSON.stringify(resJson.studentTableVm.activities)
  } catch (error) {
    console.error(error)
    await AIScheduleAlert(error.message)
    return 'do not continue'
  }
}
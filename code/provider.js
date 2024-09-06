async function scheduleHtmlProvider() {
  await loadTool('AIScheduleTools')
  try {
    var res = await fetch('https://jw.ustc.edu.cn/for-std/course-table',{
      method: 'GET',
    }) // 获取 dataId

    path_parts = res.url.split('/')
    const dataId = parseInt(path_parts[path_parts.length-1])
    res = await fetch(`https://jw.ustc.edu.cn/for-std/course-table/semester/362/print-data/${dataId}?weekIndex=`)
    return await res.text()
  } catch (error) {
    console.error(error)
    await AIScheduleAlert(error.message)
    return 'do not continue'
  }
}
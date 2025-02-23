/* 示例
[
  {
    name: "数学", // 课程名称
    position: "教学楼1", // 上课地点
    teacher: "张三", // 教师名称
    weeks: [1, 2, 3, 4], // 周数
    day: 3, // 星期
    sections: [1, 2, 3], // 节次
  },{
    name: "数学",
    position: "教学楼1",
    teacher: "张三",
    weeks: [1, 2, 3, 4],
    day: 1,
    sections: [1, 2, 3],
  },
] 
  */

function weeksParser(weeksStr) {

  const weeksParts = weeksStr.split(',')

  var weeks = weeksParts.flatMap((weeksPart) => {
    if (weeksPart.endsWith('单')) { // 单周
      weeksPart = weeksPart.slice(0, -1)
      const [weeks_start, weeks_end] = weeksPart.split('-').map(Number);
      return Array.from({ length: weeks_end - weeks_start + 1 }, (_, i) => weeks_start + i)
          .filter((week) => week % 2 === 1 && week !== 0);
        } else if (weeksPart.endsWith('双')) { // 双周
      weeksPart = weeksPart.slice(0, -1)
      const [weeks_start, weeks_end] = weeksPart.split('-').map(Number);
      return Array.from({ length: weeks_end - weeks_start + 1 }, (_, i) => weeks_start + i)
          .filter((week) => week % 2 === 0 && week !== 0);
        } else if (weeksPart.includes('-')) {
      const [weeks_start, weeks_end] = weeksPart.split('-').map(Number);
      return Array.from({ length: weeks_end - weeks_start + 1 }, (_, i) => weeks_start + i)
          .filter((week) => week !== 0);
        } else { // 独周
      const week = Number(weeksPart);
      return week !== 0 ? [week] : [];
        }
      })

      // // 全局去除 weeks 中的 0
      // weeks = weeks.filter((week) => week !== 0);

      return weeks;
    }


function scheduleHtmlParser(resJson) {
  var courseInfos = []
  // try {
  const courses = JSON.parse(resJson)
  // } catch (e) {
  //   console.error("Parsing error:", e); // TODO:
  // }
  // console.log(courses)

  courseInfos = courses.map((course) => {
    weeks = weeksParser(course.weeksStr)
    var sections = [];
    sections.push(...Array.from({ length: course.endUnit - course.startUnit + 1 }, (_, i) => course.startUnit + i));
    return {
      name: course.courseName,
      position: course.room == null ? '' : course.room,
      teacher: course.teachers.join(', '),
      weeks: weeks,
      day: course.weekday,
      sections: sections.filter(section => section !== 0)
    }
  })
  return courseInfos
}
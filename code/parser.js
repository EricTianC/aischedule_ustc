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

function scheduleHtmlParser(html) { // html 实为 json string
  var courseInfos = []
  // try {
  const courses = JSON.parse(html).studentTableVm.activities
  // } catch (e) {
  //   console.error("Parsing error:", e); // TODO:
  // }
  // console.log(courses)

  courseInfos = courses.map((course) => {
    var weeks = [];
    const [weeks_start, weeks_end] = course.weeksStr.split('-').map(Number);

// 使用Array.from()和箭头函数创建数组
    weeks.push(...Array.from({ length: weeks_end - weeks_start + 1 }, (_, i) => weeks_start + i));
    var sections = [];
    sections.push(...Array.from({ length: course.endUnit - course.startUnit + 1}, (_, i) => course.startUnit + i));
    return {
      name: course.courseName,
      position: course.room == null ? '' : course.room,
      teacher: course.teachers.join(','),
      weeks: weeks,
      day: course.weekday,
      sections: sections
    }
  })
  return courseInfos
}
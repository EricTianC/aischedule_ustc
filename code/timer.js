/**
 * 时间配置函数，此为入口函数，不要改动函数名
 */
async function scheduleTimer({
} = {}) {
  return {
    totalWeek: 20, // 总周数：[1, 30]之间的整数
    startSemester: '', // 开学时间：时间戳，13位长度字符串，推荐用代码生成
    startWithSunday: false, // 是否是周日为起始日，该选项为true时，会开启显示周末选项
    showWeekend: true, // 是否显示周末
    forenoon: 5, // 上午课程节数：[1, 10]之间的整数
    afternoon: 5, // 下午课程节数：[0, 10]之间的整数
    night: 3, // 晚间课程节数：[0, 10]之间的整数
    sections: [{
      section: 1, // 节次：[1, 30]之间的整数
      startTime: '07:50', // 开始时间：参照这个标准格式5位长度字符串
      endTime: '08:35', // 结束时间：同上
    },
    {
      section: 2, // 节次：[1, 30]之间的整数
      startTime: '08:40', // 开始时间：参照这个标准格式5位长度字符串
      endTime: '09:25', // 结束时间：同上
    },
    {
      section: 3, // 节次：[1, 30]之间的整数
      startTime: '09:45', // 开始时间：参照这个标准格式5位长度字符串
      endTime: '10:30', // 结束时间：同上
    },
    {
      section: 4, // 节次：[1, 30]之间的整数
      startTime: '10:35', // 开始时间：参照这个标准格式5位长度字符串
      endTime: '11:20', // 结束时间：同上
    },
    {
      section: 5, // 节次：[1, 30]之间的整数
      startTime: '11:25', // 开始时间：参照这个标准格式5位长度字符串
      endTime: '12:10', // 结束时间：同上
    },
    {
      section: 6, // 节次：[1, 30]之间的整数
      startTime: '14:00', // 开始时间：参照这个标准格式5位长度字符串
      endTime: '14:45', // 结束时间：同上
    },
    {
      section: 7, // 节次：[1, 30]之间的整数
      startTime: '14:50', // 开始时间：参照这个标准格式5位长度字符串
      endTime: '15:35', // 结束时间：同上
    },
    {
      section: 8, // 节次：[1, 30]之间的整数
      startTime: '15:55', // 开始时间：参照这个标准格式5位长度字符串
      endTime: '16:40', // 结束时间：同上
    },
    {
      section: 9, // 节次：[1, 30]之间的整数
      startTime: '16:45', // 开始时间：参照这个标准格式5位长度字符串
      endTime: '17:30', // 结束时间：同上
    },
    {
      section: 10, // 节次：[1, 30]之间的整数
      startTime: '17:35', // 开始时间：参照这个标准格式5位长度字符串
      endTime: '18:20', // 结束时间：同上
    },
    {
      section: 11, // 节次：[1, 30]之间的整数
      startTime: '19:30', // 开始时间：参照这个标准格式5位长度字符串
      endTime: '20:15', // 结束时间：同上
    },
    {
      section: 12, // 节次：[1, 30]之间的整数
      startTime: '20:20', // 开始时间：参照这个标准格式5位长度字符串
      endTime: '21:05', // 结束时间：同上
    },
    {
      section: 13, // 节次：[1, 30]之间的整数
      startTime: '21:10', // 开始时间：参照这个标准格式5位长度字符串
      endTime: '21:55', // 结束时间：同上
    },
    ], // 课程时间表，注意：总长度要和上边配置的节数加和对齐
  }
}
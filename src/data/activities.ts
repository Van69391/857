export type Activity = {
  id: string;
  title: string;
  time: string;
  location: string;
};

export const activities: Activity[] = [
  { id: 'club', title: '社团开放日', time: '周三 16:00', location: '活动中心' },
  { id: 'code', title: 'APP 开发分享会', time: '周五 19:00', location: '教学楼 201' },
  { id: 'run', title: '校园夜跑', time: '周六 19:30', location: '操场' },
  { id: 'math', title: '高数', time: '周五 10:00', location: '教学楼 101' },
];
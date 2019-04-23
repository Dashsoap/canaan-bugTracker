export default
[
  { type: 'f-single-line', label: '姓名', value: '' },
  { type: 'f-single-line', label: '年龄', value: '' },
  {
    type: 'f-radio',
    label: '单选',
    value: '',
    options: [
      {
        label: '选项1',
        value: 1,
      },
      { label: '选项2', value: 2 },
      { label: '选项3', value: 3 },
    ],
  },
  {
    type: 'f-select',
    label: '产品',
    value: '',
    options: [
      {
        label: '选项1',
        value: 1,
      },
      { label: '选项2', value: 2 },
      { label: '选项3', value: 3 },
    ],
    tip: '1',
  },
  // {
  //   type: 'select',
  //   label: '问题',
  //   value: '',
  //   options: [
  //     {
  //       label: '选项1',
  //       value: 1,
  //     },
  //     { label: '选项2', value: 2 },
  //     { label: '选项3', value: 3 },
  //   ],
  // },
];

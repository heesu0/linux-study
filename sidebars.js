/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  studySidebar: [
    '리눅스 스터디',
    {
      type: 'category',
      label: '리눅스 설치 가이드',
      items: [
        '리눅스 설치 가이드/MacOS 환경에서 CentOS 7 설치',
        '리눅스 설치 가이드/Windows 환경에서 CentOS 7 설치',
      ],
    },
    {
      type: 'category',
      label: 'Part 01. 리눅스 실무의 이해',
      collapsed: false,
      items: [
        {
          type: 'category',
          label: 'Chapter 01. 리눅스의 개요',
          items: [
            'Part 01. 리눅스 실무의 이해/Chapter 01. 리눅스의 개요/1.1 운영체제 개요',
            'Part 01. 리눅스 실무의 이해/Chapter 01. 리눅스의 개요/1.2 리눅스 기초',
          ],
        },
        {
          type: 'category',
          label: 'Chapter 02. 리눅스 시스템의 이해',
          items: [
            'Part 01. 리눅스 실무의 이해/Chapter 02. 리눅스 시스템의 이해/2.1 리눅스와 하드웨어',
            'Part 01. 리눅스 실무의 이해/Chapter 02. 리눅스 시스템의 이해/2.2 리눅스 구조',
            'Part 01. 리눅스 실무의 이해/Chapter 02. 리눅스 시스템의 이해/2.3 X 윈도',
            'Part 01. 리눅스 실무의 이해/Chapter 02. 리눅스 시스템의 이해/2.4 Shell',
            'Part 01. 리눅스 실무의 이해/Chapter 02. 리눅스 시스템의 이해/2.5 프로세스'
          ],
        },
        {
          type: 'category',
          label: 'Chapter 03. 네트워크의 이해',
          items: [
            'Part 01. 리눅스 실무의 이해/Chapter 03. 네트워크의 이해/3.1 네트워크 기초',
            'Part 01. 리눅스 실무의 이해/Chapter 03. 네트워크의 이해/3.2 네트워크 환경',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: '추가 공부',
      items: [
        '추가 공부/커널 종류',
        '추가 공부/리눅스 클러스터링',
      ],
    },
  ],

  guideSidebar: [
    '스터디 문서 작성 가이드',
  ],
};

module.exports = sidebars;

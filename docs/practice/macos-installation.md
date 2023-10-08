---
sidebar_position: 1
---

# MacOS 환경에서 CentOS 7 (RHEL 9) 설치

## 설치 환경
- MacOS Ventura
- Apple Silicon (Apple M1 Pro)

## Parallels Desktop

![Alt text](./img/image-23.png)

MacOS 환경에서 다른 운영체제를 설치하려면 가상화 프로그램인 Parallels Desktop을 사용해야 합니다.

Apple Silicon을 사용하는 경우, Parallels Desktop에 운영체제를 설치하기 위해서는 ARM 아키텍쳐에 맞게 빌드된 ISO 파일이 필요합니다.

## Parallels Desktop CentOS 7 설치 실패

[CentOS 다운로드 페이지](https://www.centos.org/centos-linux/)에서는 ARM64(aarch64) 전용 CentOS 7 ISO 파일을 제공합니다.

![Alt text](./img/image-24.png)

그러나 Parallels Desktop에서 CentOS 7 운영체제를 설치하지 못했습니다. (아래 상태에서 진행이 안되는 문제가 발생합니다.)

![Alt text](./img/image-25.png)

원인을 확인해보니 ARM64(aarch64) CentOS 7은 64KB 페이지 크기를 사용하도록 빌드되었지만 Apple Silicon은 4KB와 16KB 페이지 크기만 지원하기 때문에 설치가 불가능한 이슈가 있었습니다. (https://forums.centos.org/viewtopic.php?t=78547)

현재 명확한 해결책이 없다고 판단되어 CentOS와 호환되면서 Apple Silicon Parallels Desktop에 설치 가능한 RHEL 9 운영체제를 설치합니다.

## Parallels Desktop RHEL 9 설치

RHEL은 기본적으로 유료로 제공되는 운영체제입니다. 그러나 개인 개발 용도로는 무료로 사용할 수 있습니다.

우선 [Red Hat 홈페이지](https://www.redhat.com/en)에 접속하여 계정을 생성합니다.

![Alt text](./img/image-26.png)

그 다음 [RHEL 다운로드 페이지](https://developers.redhat.com/products/rhel/download)에서 ARM64(aarch64) 전용 RHEL 9.2 ISO 파일을 다운로드합니다.

![Alt text](./img/image-27.png)

Parallels Desktop에서 해당 ISO 파일을 설치합니다.

![Alt text](./img/image-28.png)

![Alt text](./img/image-29.png)

![Alt text](./img/image-30.png)

![Alt text](./img/image.png)

![Alt text](./img/image-1.png)

![Alt text](./img/image-2.png)

![Alt text](./img/image-3.png)

![Alt text](./img/image-4.png)

![Alt text](./img/image-5.png)

![Alt text](./img/image-6.png)

수동 파티션 설정은 [Red Hat 권장 사항](https://access.redhat.com/documentation/ko-kr/red_hat_enterprise_linux/9/html/performing_a_standard_rhel_9_installation/recommended-partitioning-scheme_partitioning-reference)을 참고해서 ~~대충~~ 설정합니다.

- `/` : 30 Gib
- `/var` : 5 Gib 
- `/home` : 10 Gib
- `/boot` : 1 Gib
- `/boot/efi` : 200 Mib
- `swap` : 8 Gib

![Alt text](./img/image-7.png)

![Alt text](./img/image-8.png)

![Alt text](./img/image-9.png)

![Alt text](./img/image-10.png)

![Alt text](./img/image-11.png)

![Alt text](./img/image-12.png)

## RHEL 9 설정

RHEL 9 설치가 완료되면 계정에 접속합니다.

![Alt text](./img/image-13.png)

![Alt text](./img/image-14.png)

![Alt text](./img/image-15.png)

한글 폴더명을 영어 폴더명으로 업데이트합니다.

```bash
$ export LANG=C
$ xdg-user-dirs-gtk-update
```

![Alt text](./img/image-16.png)

![Alt text](./img/image-17.png)

![Alt text](./img/image-18.png)

유저 계정에 root 권한을 부여하기 위해 sudoers 파일을 수정합니다.

```bash
$ su
$ visudo -f /etc/sudoers
$ exit
```

![Alt text](./img/image-19.png)

![Alt text](./img/image-20.png)

다음 명령어를 통해 Red Hat 구독 관리 시스템에 계정을 등록합니다.

```bash
$ sudo subscription-manager register --username=username --password=password
```

![Alt text](./img/image-21.png)

다음 명령어로 구독 관리 시스템 정보를 확인할 수 있습니다.

```bash
$ sudo subscription-manager list --installed
```

![Alt text](./img/image-22.png)

이제 RHEL 9 운영체제를 사용할 수 있습니다.


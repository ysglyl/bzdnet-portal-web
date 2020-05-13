import React from 'react';
import styles from './index.less';
import logo from '../assets/logo.png';
import iconScp from '../assets/apps/scp.png';
import iconMessageBoard from '../assets/apps/message_board.png';
import iconTimetable from '../assets/apps/timetable.png';

class Index extends React.PureComponent {
  state = {
    apps: [
      {
        id: 1,
        name: '进销存',
        icon: iconScp,
        url: 'http://scp.bzdnet.com',
        description: '简单的产品进销存管理系统',
      },
      {
        id: 2,
        name: '留言板',
        icon: iconMessageBoard,
        url: 'http://msgboard.bzdnet.com',
        description: '留言板',
      },
      {
        id: 3,
        name: '简易排课工具',
        icon: iconTimetable,
        url: 'http://timetable.bzdnet.com',
        description: '排课',
      },
    ],
  };

  render() {
    const { apps } = this.state;
    return (
      <div className={styles.pageContainer}>
        <div className={styles.header}>
          <img className={styles.logo} src={logo} />
          <div className={styles.name}>自由自在的鱼</div>
        </div>
        <div className={styles.appList}>
          {apps.map(app => (
            <div key={app.id} className={styles.appContainer}>
              <a target="_blank" href={app.url}>
                <div className={styles.icon}>
                  <img src={app.icon} />
                </div>
                <div className={styles.name}>{app.name}</div>
              </a>
              <div className={styles.desc}>{app.description}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Index;

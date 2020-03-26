import React from 'react';
import styles from './index.less';
import logo from '../../public/logo.png';
import iconScp from '../../public/apps/scp.png';
import iconTimer from '../../public/apps/timer.png';

class Index extends React.PureComponent {

  state = {
    apps: [
      {id: 1, name: '进销存系统', icon: iconScp, url: 'http://scp.bzdnet.com', description: '简单的产品进销存管理系统'},
      {id: 2, name: '计时器', icon: iconTimer, url: 'http://timer.bzdnet.com', description: '计时器工具，分正计时和倒计时'},
    ]
  };

  render() {
    const {apps} = this.state;
    return (
      <div className={styles.pageContainer}>
        <div className={styles.header}>
          <img className={styles.logo} src={logo}/>
          <div className={styles.name}>x</div>
        </div>
        <div className={styles.appList}>
          {apps.map(app => (
            <div key={app.id} className={styles.appContainer}>
              <div className={styles.icon}>
                <img src={app.icon}/>
              </div>
              <div className={styles.name}>
                <a target="_blank" href={app.url}>{app.name}</a>
              </div>
              <div className={styles.desc}>{app.description}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }

}

export default Index;

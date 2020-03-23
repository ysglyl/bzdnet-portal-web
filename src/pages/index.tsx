import React from 'react';
import styles from './index.less';
import logo from '../assets/logo.png';

class Index extends React.PureComponent {
  state = {
    apps: [
      {id: 1, name: 'a', icon: '', url: '', description: 'aaa'},
      {id: 2, name: 'b', icon: '', url: '', description: 'bbb'},
      {id: 3, name: 'c', icon: '', url: '', description: 'ccc'},
    ]
  }

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
              <div className={styles.icon}></div>
              <div className={styles.name}>
                <a href={app.url}>{app.name}</a>
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

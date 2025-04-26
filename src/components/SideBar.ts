import * as React from 'react';
import '../styles/SideBar.css';

const SideBar = (): React.ReactElement => {
  return React.createElement('div', { className: 'sidebar' }, [
    React.createElement('div', { className: 'logo', key: 'logo' }, [
      React.createElement('div', { className: 'logo-icon', key: 'logo-icon' }, '🛡️'),
      React.createElement('div', { className: 'logo-text', key: 'logo-text' }, 'HumanChain')
    ]),
    React.createElement('nav', { className: 'nav-menu', key: 'nav-menu' }, 
      React.createElement('ul', {}, [
        React.createElement('li', { className: 'active', key: 'analytics' }, [
          React.createElement('div', { className: 'nav-icon', key: 'analytics-icon' }, '📊'),
          React.createElement('div', { className: 'nav-text', key: 'analytics-text' }, 'Analytics')
        ]),
        React.createElement('li', { key: 'incidents' }, [
          React.createElement('div', { className: 'nav-icon', key: 'incidents-icon' }, '🔍'),
          React.createElement('div', { className: 'nav-text', key: 'incidents-text' }, 'Incidents')
        ]),
        React.createElement('li', { key: 'alerts' }, [
          React.createElement('div', { className: 'nav-icon', key: 'alerts-icon' }, '🔔'),
          React.createElement('div', { className: 'nav-text', key: 'alerts-text' }, 'Alerts')
        ]),
        React.createElement('li', { key: 'settings' }, [
          React.createElement('div', { className: 'nav-icon', key: 'settings-icon' }, '⚙️'),
          React.createElement('div', { className: 'nav-text', key: 'settings-text' }, 'Settings')
        ]),
        React.createElement('li', { key: 'reports' }, [
          React.createElement('div', { className: 'nav-icon', key: 'reports-icon' }, '📝'),
          React.createElement('div', { className: 'nav-text', key: 'reports-text' }, 'Reports')
        ])
      ])
    ),
    React.createElement('div', { className: 'sidebar-footer', key: 'sidebar-footer' }, 
      React.createElement('div', { className: 'user-profile' }, [
        React.createElement('div', { className: 'user-avatar', key: 'user-avatar' }, '👤'),
        React.createElement('div', { className: 'user-name', key: 'user-name' }, 'User')
      ])
    )
  ]);
};

export default SideBar;
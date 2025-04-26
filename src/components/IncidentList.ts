import * as React from 'react';
import { Incident } from '../types/types';
import '../styles/IncidentList.css';

interface IncidentListProps {
  incidents: Incident[];
  onToggleExpand: (id: string) => void;
}

const IncidentList = (props: IncidentListProps): React.ReactElement => {
  const { incidents, onToggleExpand } = props;

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  const getSeverityClass = (severity: string): string => {
    switch (severity) {
      case 'Low': return 'severity-low';
      case 'Medium': return 'severity-medium';
      case 'High': return 'severity-high';
      default: return '';
    }
  };

  // Header row
  const headerRow = React.createElement('div', { className: 'incident-header' }, [
    React.createElement('div', { className: 'incident-title-header', key: 'title-header' }, 'Title'),
    React.createElement('div', { className: 'incident-severity-header', key: 'severity-header' }, 'Severity'),
    React.createElement('div', { className: 'incident-date-header', key: 'date-header' }, 'Reported Date'),
    React.createElement('div', { className: 'incident-actions-header', key: 'actions-header' }, 'Actions')
  ]);

  // Create list content
  let listContent; 
  
  if (incidents.length === 0) {
    listContent = React.createElement('div', { className: 'no-incidents' }, 'No incidents found matching the filter criteria.');
  } else {
    // Create an array of incident items
    const incidentItems = incidents.map(incident => {
      const mainRow = React.createElement('div', { className: 'incident-main', key: 'main-' + incident.id }, [
        React.createElement('div', { className: 'incident-title', key: 'title-' + incident.id }, incident.title),
        React.createElement('div', { 
          className: `incident-severity ${getSeverityClass(incident.severity)}`, 
          key: 'severity-' + incident.id 
        }, incident.severity),
        React.createElement('div', { className: 'incident-date', key: 'date-' + incident.id }, formatDate(incident.reportedDate)),
        React.createElement('div', { className: 'incident-actions', key: 'actions-' + incident.id }, 
          React.createElement('button', { 
            className: 'view-details-btn',
            onClick: () => onToggleExpand(incident.id)
          }, incident.expanded ? 'Hide Details' : 'View Details')
        )
      ]);

      const descriptionRow = incident.expanded 
        ? React.createElement('div', { className: 'incident-description', key: 'desc-' + incident.id }, [
            React.createElement('h4', { key: 'desc-title-' + incident.id }, 'Description:'),
            React.createElement('p', { key: 'desc-text-' + incident.id }, incident.description)
          ])
        : null;

      return React.createElement('div', { 
        className: 'incident-item', 
        key: 'incident-' + incident.id 
      }, [mainRow, descriptionRow]);
    });
    
    // Create the list div with header row and all incident items
    listContent = React.createElement('div', { className: 'incident-list' }, [
      headerRow,
      // Instead of using spread operator, append each item individually
      ...incidentItems
    ]);
  }

  return React.createElement('div', { className: 'incident-list-container' }, [
    React.createElement('h2', { key: 'title' }, 'AI Safety Incidents'),
    listContent
  ]);
};

export default IncidentList;
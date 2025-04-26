import * as React from 'react';
import { Incident, SeverityFilter, SortOrder } from '../types/types';
import { mockIncidents } from '../data/mockIncidents';
import IncidentList from './IncidentList';
import IncidentForm from './IncidentForm';
import SideBar from './SideBar';
import '../styles/Dashboard.css';

const Dashboard = (): React.ReactElement => {
  const [incidents, setIncidents] = React.useState<Incident[]>(mockIncidents);
  const [severityFilter, setSeverityFilter] = React.useState<SeverityFilter>("All");
  const [sortOrder, setSortOrder] = React.useState<SortOrder>("Newest");

  const filteredIncidents = incidents
    .filter(incident => severityFilter === "All" || incident.severity === severityFilter)
    .sort((a, b) => {
      if (sortOrder === "Newest") {
        return new Date(b.reportedDate).getTime() - new Date(a.reportedDate).getTime();
      } else {
        return new Date(a.reportedDate).getTime() - new Date(b.reportedDate).getTime();
      }
    });

  const handleAddIncident = (newIncident: Omit<Incident, 'id' | 'reportedDate'>): void => {
    const incident: Incident = {
      ...newIncident,
      id: (incidents.length + 1).toString(),
      reportedDate: new Date().toISOString(),
    };
    setIncidents([...incidents, incident]);
  };

  const toggleExpand = (id: string): void => {
    setIncidents(
      incidents.map(incident => 
        incident.id === id ? { ...incident, expanded: !incident.expanded } : incident
      )
    );
  };
  
  // Create filter select element
  const filterSelect = React.createElement('div', { className: 'filter-control' }, [
    React.createElement('label', { key: 'filter-label' }, 'Filter by Severity:'),
    
    React.createElement('select', { 
        value: severityFilter, 
        onChange: (e: React.ChangeEvent<HTMLSelectElement>) => setSeverityFilter(e.target.value as SeverityFilter),
        key: 'filter-select'
      }, [
        React.createElement('option', { value: 'All', key: 'filter-all' }, 'All Severities'),
        React.createElement('option', { value: 'Low', key: 'filter-low' }, 'Low'),
        React.createElement('option', { value: 'Medium', key: 'filter-medium' }, 'Medium'),
        React.createElement('option', { value: 'High', key: 'filter-high' }, 'High')
      ])
  ]);

  // Create sort select element
  const sortSelect = React.createElement('div', { className: 'sort-control' }, [
    React.createElement('label', { key: 'sort-label' }, 'Sort by Date:'),
    React.createElement('select', { 
        value: sortOrder, 
        onChange: (e: React.ChangeEvent<HTMLSelectElement>) => setSortOrder(e.target.value as SortOrder),
        key: 'sort-select'
      }, [
        React.createElement('option', { value: 'Newest', key: 'sort-newest' }, 'Newest First'),
        React.createElement('option', { value: 'Oldest', key: 'sort-oldest' }, 'Oldest First')
      ])
  ]);

  
  // Create summary card
  const summaryCard = React.createElement('div', { className: 'dashboard-card summary-card' }, [
    React.createElement('h2', { key: 'summary-title' }, 'Total Incidents'),
    React.createElement('div', { className: 'summary-count', key: 'summary-count' }, incidents.length),
    React.createElement('div', { className: 'summary-breakdown', key: 'summary-breakdown' }, [
      React.createElement('div', { key: 'summary-low' }, `Low: ${incidents.filter(i => i.severity === "Low").length}`),
      React.createElement('div', { key: 'summary-medium' }, `Medium: ${incidents.filter(i => i.severity === "Medium").length}`),
      React.createElement('div', { key: 'summary-high' }, `High: ${incidents.filter(i => i.severity === "High").length}`)
    ])
  ]);

  return React.createElement('div', { className: 'dashboard' }, [
    React.createElement(SideBar, { key: 'sidebar' }),
    React.createElement('div', { className: 'dashboard-content', key: 'content' }, [
      // Header
      React.createElement('header', { className: 'dashboard-header', key: 'header' }, [
        React.createElement('h1', { key: 'dashboard-title' }, 'AI Safety Incident Dashboard'),
        React.createElement('div', { className: 'dashboard-controls', key: 'controls' }, [
          filterSelect,
          sortSelect
        ])
      ]),
      
      // Main content
      React.createElement('div', { className: 'dashboard-main', key: 'main' }, [
        // Left panel
        React.createElement('div', { className: 'left-panel', key: 'left-panel' }, [
          summaryCard,
          React.createElement(IncidentForm, { 
            onAddIncident: handleAddIncident,
            key: 'incident-form' 
          })
        ]),
        
        // Right panel
        React.createElement('div', { className: 'right-panel', key: 'right-panel' }, 
          React.createElement(IncidentList, { 
            incidents: filteredIncidents, 
            onToggleExpand: toggleExpand,
            key: 'incident-list'
          })
        )
      ])
    ])
  ]);
};

export default Dashboard;
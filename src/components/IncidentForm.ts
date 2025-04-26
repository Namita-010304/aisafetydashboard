import * as React from 'react';
import { Incident } from '../types/types';
import '../styles/IncidentForm.css';

interface IncidentFormProps {
  onAddIncident: (incident: Omit<Incident, 'id' | 'reportedDate'>) => void;
}

const IncidentForm = (props: IncidentFormProps): React.ReactElement => {
  const { onAddIncident } = props;
  const [title, setTitle] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [severity, setSeverity] = React.useState<'Low' | 'Medium' | 'High'>('Medium');
  const [errors, setErrors] = React.useState<{ title?: string; description?: string }>({});

  const validateForm = (): boolean => {
    const newErrors: { title?: string; description?: string } = {};
    
    if (!title.trim()) {
      newErrors.title = 'Title is required';
    }
    
    if (!description.trim()) {
      newErrors.description = 'Description is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    
    if (validateForm()) {
      onAddIncident({
        title,
        description,
        severity,
      });
      
      // Reset form
      setTitle('');
      setDescription('');
      setSeverity('Medium');
      setErrors({});
    }
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    setDescription(e.target.value);
  };

  const titleInput = React.createElement('div', { className: 'form-group' }, [
    React.createElement('label', { htmlFor: 'title', key: 'title-label' }, 'Title:'),
    React.createElement('input', { 
      type: 'text',
      id: 'title',
      value: title,
      onChange: handleTitleChange,
      placeholder: 'Enter incident title',
      className: errors.title ? 'input-error' : '',
      key: 'title-input'
    }),
    errors.title ? React.createElement('div', { className: 'error-message', key: 'title-error' }, errors.title) : null
  ]);

  const descriptionInput = React.createElement('div', { className: 'form-group' }, [
    React.createElement('label', { htmlFor: 'description', key: 'desc-label' }, 'Description:'),
    React.createElement('textarea', { 
      id: 'description',
      value: description,
      onChange: handleDescriptionChange,
      placeholder: 'Describe the incident in detail',
      rows: 4,
      className: errors.description ? 'input-error' : '',
      key: 'desc-input'
    }),
    errors.description ? React.createElement('div', { className: 'error-message', key: 'desc-error' }, errors.description) : null
  ]);

  const severityOptions = React.createElement('div', { className: 'form-group' }, [
    React.createElement('label', { htmlFor: 'severity', key: 'severity-label' }, 'Severity:'),
    React.createElement('div', { className: 'severity-options', key: 'severity-options' }, [
      React.createElement('label', { className: 'radio-label', key: 'severity-low' }, [
        React.createElement('input', { 
          type: 'radio',
          name: 'severity',
          value: 'Low',
          checked: severity === 'Low',
          onChange: () => setSeverity('Low'),
          key: 'severity-low-input'
        }),
        'Low'
      ]),
      React.createElement('label', { className: 'radio-label', key: 'severity-medium' }, [
        React.createElement('input', { 
          type: 'radio',
          name: 'severity',
          value: 'Medium',
          checked: severity === 'Medium',
          onChange: () => setSeverity('Medium'),
          key: 'severity-medium-input'
        }),
        'Medium'
      ]),
      React.createElement('label', { className: 'radio-label', key: 'severity-high' }, [
        React.createElement('input', { 
          type: 'radio',
          name: 'severity',
          value: 'High',
          checked: severity === 'High',
          onChange: () => setSeverity('High'),
          key: 'severity-high-input'
        }),
        'High'
      ])
    ])
  ]);

  const submitButton = React.createElement('button', { 
    type: 'submit', 
    className: 'submit-btn',
    key: 'submit-button'
  }, 'Report Incident');

  return React.createElement('div', { className: 'incident-form-container' }, [
    React.createElement('h2', { key: 'form-title' }, 'Report New Incident'),
    React.createElement('form', { 
      className: 'incident-form', 
      onSubmit: handleSubmit,
      key: 'form'
    }, [
      titleInput,
      descriptionInput,
      severityOptions,
      submitButton
    ])
  ]);
};

export default IncidentForm;
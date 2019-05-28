import React from 'react';
import { Visability } from '../../../consts';

interface ILink {
  filter: string;
  currentFilter: string;
  onClick: (filter: string) => void;
}

const FilterLink: React.FC<ILink> = ({ filter, children, currentFilter, onClick }) => {
  if (filter === currentFilter) {
    return <span>{children}</span>;
  }
  return (
    <a  href="#" 
        onClick={(e) => {
          e.preventDefault();
          onClick(filter);
        }}>{children}</a>
  );
} 

interface IFooter {
  visabilityFilter: string;
  onFilterClick: (filter: string) => void;
}

const Footer: React.FC <IFooter> = ({ visabilityFilter, onFilterClick }) => {
  return(
    <p>
      Show:
      <FilterLink 
      filter={Visability.SHOW_ALL} 
      currentFilter={visabilityFilter} 
      onClick={onFilterClick}>All</FilterLink>
      {' '}
      <FilterLink 
      filter={Visability.SHOW_ACTIVE} 
      currentFilter={visabilityFilter} 
      onClick={onFilterClick}>Active</FilterLink>
      {' '}
      <FilterLink 
      filter={Visability.SHOW_COMPLETED} 
      currentFilter={visabilityFilter} 
      onClick={onFilterClick}>Completed</FilterLink>
    </p>
  );
};

export default Footer;

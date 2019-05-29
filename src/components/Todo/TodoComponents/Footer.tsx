import React from 'react';
import { VisabilityList } from '../../../consts';

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
}; 

interface IFooter {
  visabilityFilter: string;
  onFilterClick: (filter: string) => void;
}

const Footer: React.FC <IFooter> = ({ visabilityFilter, onFilterClick }) => {
  let filterLinks = [];
  for (const i in VisabilityList) {
    filterLinks.push(i);
  }
  return(
    <p>
      Show:
      {filterLinks.map(filter => {
        const filterName = filter.charAt(0) + filter.toLowerCase().slice(1);

        return ( <FilterLink 
                    key={filter} 
                    filter={filter}
                    currentFilter={visabilityFilter}
                    onClick={onFilterClick}
                  >{filterName} </FilterLink>
        );
      })}
    </p>
  );
};

export default Footer;

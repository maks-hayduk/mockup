import React from 'react';

import { VisabilityList } from '../../consts';
import { getObjValues, convertToLowerCase } from '../../utils';

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
  return(
    <p>
      Show:
      { getObjValues(VisabilityList).map(filter => {
        const filterName = convertToLowerCase(filter);

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

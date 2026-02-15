import React, { Component } from 'react';
import ProjectsData from './ProjectsData';
import Toolbar from './Toolbar';
import ProjectList from './ProjectsList';
import '../App.css';

export default class Portfolio extends React.Component {
constructor(props) {
        super(props);
        this.projects = ProjectsData;
        this.filters = ["All", "Websites", "Flayers", "Business Cards"];
        this.state = {
            selectedFilter: 'All'
        }
        this.handleFilterChange = this.handleFilterChange.bind(this);
    }

    handleFilterChange(filter){
        this.setState({selectedFilter: filter});
    }

    getFilteredProjects() {
        const { selectedFilter } = this.state;
        return selectedFilter === 'All' ? this.projects : this.projects.filter(p => p.category === selectedFilter);
    }
    sortCategory(){
        
    }
    render() {
        const { selectedFilter } = this.state;
        const filteredProjects = this.getFilteredProjects();

        return (
            <div className='portfolio'>
                <Toolbar
                filters={this.filters}
                selected={selectedFilter}
                onSelectFilter={this.handleFilterChange}
                />
                <ProjectList projects={filteredProjects}/>
            </div>
        )
    }


}
    
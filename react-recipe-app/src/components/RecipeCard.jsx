import React from 'react'
import { MdMarkunread } from "react-icons/md";
import { FaNoteSticky } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { FormatDate } from './FormatDate';


const RecipeCard = ({recipe}) => {

  const body = `${recipe.body.split(" ").slice(0,20).join(" ")} ...`
  const color = recipe.category == "BREAKFAST" ? "#FFD700" : 
              recipe.category == "LUNCH" ? "#90EE90" : 
              recipe.category == "DINNER" ? "#FF8C00" : 
              recipe.category == "SNACKS" ? "#87CEFA" : 
              recipe.category == "DESSERTS" ? "#FF69B4" : 
              recipe.category == "BEVERAGES" ? "#008080" : 
              "#FFFFFF";
  return (
    <div className="col-md-4 single-note-item all-category">
                <div className="card card-body">
                    <Link to={`/recipes/${recipe.slug}`} style={{textDecoration: "none", color: "black"}}>                  
                      <h5 className="note-title text-truncate w-75 mb-0" data-noteheading="Book a Ticket for Movie">{recipe.title} </h5>
                    </Link>
                    <p className="note-date font-12 text-muted">{FormatDate(recipe.created)}</p>
                    <img 
                            src={`http://localhost:8000${recipe.image}`} 
                            alt={recipe.title} 
                            className="img-fluid" 
                            style={{ height: "200px", objectFit: "cover", marginBottom: "10px" }} 
                    />
                    <div className="note-content">
                        <p className="note-inner-content text-muted" data-notecontent="Blandit tempus porttitor aasfs. Integer posuere erat a ante venenatis.">{body}</p>
                    </div>
                    <div className="d-flex align-items-center">
                        <a href="/notes-detail"></a>
                        <div>
                            <h5 style={{
                                color: color,
                                border: `2px solid ${color}`,
                                padding: '5px',
                                borderRadius: '4px',
                                display: 'inline-block'
                            }}>
                                {recipe.category}
                            </h5>
                        </div>
                        <span className="mr-1"><i className="fa fa-trash remove-note"></i></span>
                        <div className="ml-auto">
                            <div className="category-selector btn-group">
                                <a className="nav-link dropdown-toggle category-dropdown label-group p-0" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="true">
                                    <div className="category">
                                        <div className="category-business"></div>
                                        <div className="category-social"></div>
                                        <div className="category-important"></div>
                                        <span className="more-options text-dark"><i className="icon-options-vertical"></i></span>
                                    </div>
                                </a>
                                <div className="dropdown-menu dropdown-menu-right category-menu">
                                    <a className="note-business badge-group-item badge-business dropdown-item position-relative category-business text-success" href="javascript:void(0);">
                                        <i className="mdi mdi-checkbox-blank-circle-outline mr-1"></i>Business
                                    </a>
                                    <a className="note-social badge-group-item badge-social dropdown-item position-relative category-social text-info" href="javascript:void(0);">
                                        <i className="mdi mdi-checkbox-blank-circle-outline mr-1"></i> Social
                                    </a>
                                    <a className="note-important badge-group-item badge-important dropdown-item position-relative category-important text-danger" href="javascript:void(0);">
                                        <i className="mdi mdi-checkbox-blank-circle-outline mr-1"></i> Important
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
  )
}

export default RecipeCard
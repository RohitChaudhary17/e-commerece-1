



function sidebar(){

return (<>

<div
      class="offcanvas offcanvas-start col-6 css-sidebar-main"
      data-bs-scroll="true"
      tabindex="-1"
      id="offcanvasWithBothOptions"
      aria-labelledby="offcanvasWithBothOptionsLabel"
    >
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasWithBothOptionsLabel">
          Choose News Category
        </h5>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>

      <div class="offcanvas-body">
        <div class="css-category-div" id="business">
          <img src="bussiness.png" class="css-category-img" />
          <span class="css-category-name">Bussiness</span>
        </div>

        <div class="css-category-div" id="sports">
          <img src="sports.png" class="css-category-img" />
          <span class="css-category-name">Sports</span>
        </div>

        <div class="css-category-div" id="technology">
          <img src="technology.png" class="css-category-img" />
          <span class="css-category-name">Technology</span>
        </div>

        <div class="css-category-div" id="politics">
          <img src="politics.png" class="css-category-img" />
          <span class="css-category-name">Politics</span>
        </div>

        <div class="css-category-div" id="science">
          <img src="science.png" class="css-category-img" />
          <span class="css-category-name">Science</span>
        </div>

        <div class="css-category-div" id="general">
          <img src="general.png" class="css-category-img" />
          <span class="css-category-name">General</span>
        </div>

        <div class="css-category-div" id="health">
          <img src="health.png" class="css-category-img" />
          <span class="css-category-name">Health</span>
        </div>
      </div>
    </div>

</>)

}

export default sidebar;






export const formTemplates = {
  links: `<form class="form">
            <button class="sidebar-close-btn form-close-cross">
          <i class="fa-solid fa-xmark"></i>
        </button>
          <h5 class="form-title underline">Create Link form</h5>
          <div class="alert alert-danger create-form-alert">
            Please provide smth
          </div>
          <label for="name" class="form-label">Link Name</label>
          <input
            type="text"
            name="name"
            placeholder="Link Name"
            class="form-input"
          />
          <label for="link" class="form-label">Link Url</label>
          <input
            type="text"
            name="link"
            placeholder="Link Url"
            class="form-input"
          />
          <button type="submit" class="submit-form-btn">create</button>
        </form>`,
  metrics: `        <form class="form">
  <button class="sidebar-close-btn form-close-cross">
          <i class="fa-solid fa-xmark"></i>
        </button>
          <h5 class="form-title underline">Create Metric form</h5>
          <div class="alert alert-danger create-form-alert">
            Please provide smth
          </div>
          <label for="name" class="form-label">Metric Name</label>
          <input
            type="text"
            name="name"
            placeholder="Metric Name"
            class="form-input"
          />
          <label for="number" class="form-label">Metric Number</label>
          <input
            type="text"
            name="number"
            placeholder="Metric Number"
            class="form-input"
          />
          <button type="submit" class="submit-form-btn">create</button>
        </form>`,
  works: `<form class="form">
  <button class="sidebar-close-btn form-close-cross">
          <i class="fa-solid fa-xmark"></i>
        </button>
          <h5 class="form-title underline">Create Work form</h5>
          <div class="alert alert-danger create-form-alert">
            Please provide smth
          </div>
          <label for="name" class="form-label">Work Name</label>
          <input
            type="text"
            name="name"
            placeholder="Work Name"
            class="form-input"
          />
          <label for="info" class="form-label">Work Info</label>
          <input
            type="text"
            name="info"
            placeholder="Work Info"
            class="form-input"
          />
          <label for="siteUrl" class="form-label">Website Url</label>
          <input
            type="text"
            name="siteUrl"
            placeholder="Website Url"
            class="form-input"
          />
          <label for="clientName" class="form-label">Client Name</label>
          <input
            type="text"
            name="clientName"
            placeholder="Client Name"
            class="form-input"
          />
          <label for="clientReview" class="form-label">Client Review</label>
          <textarea
            name="clientReview"
            id=""
            cols="30"
            rows="10"
            placeholder="Client Review"
            class="form-textarea"
          ></textarea>
          <button type="submit" class="submit-form-btn">create</button>
        </form>`,
  projects: `<form class="form">
  <button class="sidebar-close-btn form-close-cross">
          <i class="fa-solid fa-xmark"></i>
        </button>
          <h5 class="form-title underline">Create Project form</h5>
          <div class="alert alert-danger create-form-alert">
            Please provide smth
          </div>
          <label for="name" class="form-label">Project Name</label>
          <input
            type="text"
            name="name"
            placeholder="Project Name"
            class="form-input"
          />
          <label for="info" class="form-label">Project Info</label>
          <input
            type="text"
            name="info"
            placeholder="Project Info"
            class="form-input"
          />
          <label for="siteUrl" class="form-label">Website Url</label>
          <input
            type="text"
            name="siteUrl"
            placeholder="Website Url"
            class="form-input"
          />
          <label for="githubUrl" class="form-label">Github Repo Url</label>
          <input
            type="text"
            name="githubUrl"
            placeholder="Github Repo Url"
            class="form-input"
          />
          <button type="submit" class="submit-form-btn">create</button>
        </form>`,
};

export const createFormTemplates = {
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
          <label for="text" class="form-label">Work Info</label>
          <input
            type="text"
            name="text"
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
          <label for="text" class="form-label">Project Info</label>
          <input
            type="text"
            name="text"
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
          <label for="gitHubLink" class="form-label">Github Repo Url</label>
          <input
            type="text"
            name="gitHubLink"
            placeholder="Github Repo Url"
            class="form-input"
          />
          <button type="submit" class="submit-form-btn">create</button>
        </form>`,
};

export const updateFormTemplates = {
  links: function (item) {
    return `<form class="form">
            <button class="sidebar-close-btn form-close-cross">
          <i class="fa-solid fa-xmark"></i>
        </button>
          <h5 class="form-title underline">Update Link form</h5>
          <div class="alert alert-danger create-form-alert">
            Please provide smth
          </div>
          <label for="name" class="form-label">Link Name</label>
          <input
            type="text"
            name="name"
            value=${item.name}
            class="form-input"
          />
          <label for="link" class="form-label">Link Url</label>
          <input
            type="text"
            name="link"
           value=${item.link}
            class="form-input"
          />
          <button type="submit" class="submit-form-btn">Update</button>
        </form>`;
  },
  works: function (item) {
    return `<form class="form">
  <button class="sidebar-close-btn form-close-cross">
          <i class="fa-solid fa-xmark"></i>
        </button>
          <h5 class="form-title underline">Update Work form</h5>
          <div class="alert alert-danger create-form-alert">
            Please provide smth
          </div>
          <label for="name" class="form-label">Work Name</label>
          <input
            type="text"
            name="name"
            value=${item.name}
            class="form-input"
          />
          <label for="text" class="form-label">Work Info</label>
          <input
            type="text"
            name="text"
            value=${item.text}
            class="form-input"
          />
          <label for="siteUrl" class="form-label">Website Url</label>
          <input
            type="text"
            name="siteUrl"
            value=${item.siteUrl}
            class="form-input"
          />
          <label for="clientName" class="form-label">Client Name</label>
          <input
            type="text"
            name="clientName"
            value=${item.client.name}
            class="form-input"
          />
          <label for="clientReview" class="form-label">Client Review</label>
          <textarea
            name="clientReview"
            value=${item.client.review}
            placeholder=${item.client.review}
            cols="30"
            rows="10"
            class="form-textarea"
          ></textarea>
          <button type="submit" class="submit-form-btn">Update</button>
        </form>`;
  },
  projects: function (item) {
    return `<form class="form">
  <button class="sidebar-close-btn form-close-cross">
          <i class="fa-solid fa-xmark"></i>
        </button>
          <h5 class="form-title underline">Update Project form</h5>
          <div class="alert alert-danger create-form-alert">
            Please provide smth
          </div>
          <label for="name" class="form-label">Project Name</label>
          <input
            type="text"
            name="name"
            value=${String(item.name)}
            class="form-input"
          />
          <label for="text" class="form-label">Project Info</label>
          <input
            type="text"
            name="text"
            value=${String(item.text)}
            class="form-input"
          />
          <label for="siteUrl" class="form-label">Website Url</label>
          <input
            type="text"
            name="siteUrl"
            value=${String(item.siteUrl)}
            class="form-input"
          />
          <label for="gitHubLink" class="form-label">Github Repo Url</label>
          <input
            type="text"
            name="gitHubLink"
            value=${String(item.gitHubLink)}
            class="form-input"
          />
          <button type="submit" class="submit-form-btn">Update</button>
        </form>`;
  },
  metrics: function (item) {
    return `        <form class="form">
  <button class="sidebar-close-btn form-close-cross">
          <i class="fa-solid fa-xmark"></i>
        </button>
          <h5 class="form-title underline">Update Metric form</h5>
          <div class="alert alert-danger create-form-alert">
            Please provide smth
          </div>
          <label for="name" class="form-label">Metric Name</label>
          <input
            type="text"
            name="name"
            value=${item.name}
            class="form-input"
          />
          <label for="number" class="form-label">Metric Number</label>
          <input
            type="text"
            name="number"
            value=${item.number}
            class="form-input"
          />
          <button type="submit" class="submit-form-btn">Update</button>
        </form>`;
  },
};

export const itemTemplates = {
  links: function (item) {
    return `<article class="content-item">
              <h3 class="link-name underline">${item.name}</h3>
              <h3 class="content-item-id">ID: ${item._id}</h3>
              <h3 class="link">
                ${item.link}
              </h3>
              <div class="link-buttons">
                <button class="link-update-button" data-type ="links">
                  <i class="fa-solid fa-pen-to-square"></i>
                </button>
                <button class="link-delete-button" data-type ="links">
                  <i class="fa-solid fa-trash"></i>
                </button>
              </div>
            </article>`;
  },
  "metrics/nonFormattedMetrics": function (item) {
    return `<article class="content-item">
              <h3 class="link-name underline">${item.name}</h3>
              <h3 class="content-item-id">ID: ${item._id}</h3>
              <h3 class="link">${item.number}</h3>
              <div class="link-buttons">
                <button class="link-update-button" data-type ="metrics">
                  <i class="fa-solid fa-pen-to-square"></i>
                </button>
                <button class="link-delete-button" data-type ="metrics">
                  <i class="fa-solid fa-trash"></i>
                </button>
              </div>
            </article>`;
  },
  works: function (item) {
    return `<article class="content-item">
              <!-- item image -->
              <img
                src=${item.img}
                alt="work"
                class="content-item-img img"
              />
              <!-- end of item image -->
              <!-- item info -->
              <div class="content-item-info">
                <h3 class="content-item-name underline">${item.name}</h3>
                <h3 class="content-item-id">ID: ${item._id}</h3>
                <p class="content-item-text">
                  ${item.text}
                </p>
                <h3 class="content-item-url-title">Website Link</h3>
                <h3 class="content-item-url">
                  ${item.siteUrl}
                </h3>
                <h3 class="work-item-client-name">${item.client.name} says:</h3>
                <p class="work-item-client-review">
                  ${item.client.review}
                </p>
              </div>
              <!-- end of item info -->
              <div class="link-buttons">
                <button class="link-update-button" data-type ="works">
                  <i class="fa-solid fa-pen-to-square"></i>
                </button>
                <button class="link-delete-button" data-type ="works">
                  <i class="fa-solid fa-trash"></i>
                </button>
              </div>
            </article>`;
  },
  projects: function (item) {
    return `<article class="content-item">
              <!-- item image -->
              <img
                src="${item.img}"
                alt="work"
                class="content-item-img img"
              />
              <!-- end of item image -->
              <!-- item info -->
              <div class="content-item-info">
                <h3 class="content-item-name underline">${item.name}</h3>
                <h3 class="content-item-id">ID: ${item._id}</h3>

                <p class="content-item-text">
                  ${item.text}
                </p>
                <h3 class="content-item-url-title">Website Link</h3>
                <h3 class="content-item-url">
                  ${item.siteUrl}
                </h3>
                <h3 class="project-item-github-url-title">Github Link</h3>
                <h3 class="project-item-github-url">
                  ${item.gitHubLink}
                </h3>
              </div>
              <!-- end of item info -->
              <div class="link-buttons">
                <button class="link-update-button" data-type ="projects">
                  <i class="fa-solid fa-pen-to-square"></i>
                </button>
                <button class="link-delete-button" data-type ="projects">
                  <i class="fa-solid fa-trash"></i>
                </button>
              </div>
            </article>`;
  },
};

//api base urls
export var localBaseUrl = "http://localhost:5000/api/v1";
export var productionBaseUrl = "https://my-portfolio-a88p.onrender.com/api/v1";

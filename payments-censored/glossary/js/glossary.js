document.addEventListener("DOMContentLoaded", () => {
  const filterPopup = document.getElementById("pc-filter-popup")
  const filterToggleBtn = document.getElementById("pc-filter-button")
  const filterForm = document.getElementById("pc-filter-form")

  // Function to toggle the visibility of the filter popup
  function toggleFilterPopup() {
    filterPopup.classList.toggle("visible")
  }

  // Event listener for the filter button to toggle popup visibility
  filterToggleBtn.addEventListener("click", toggleFilterPopup)

  // Array of categories with their IDs and labels
  const categories = [
    { id: "all", label: "All" },
    {
      id: "authorization-authentication",
      label: "Authorization & Authentication",
    },
    {
      id: "emerging-technologies-trends",
      label: "Emerging Technologies & Trends",
    },
    { id: "merchant-acquirer-services", label: "Merchant & Acquirer Services" },
    {
      id: "payment-infrastructure-networks",
      label: "Payment Infrastructure, Networks & Schemes",
    },
    {
      id: "payment-methods-instruments",
      label: "Payment Methods & Instruments",
    },
    { id: "pricing-fees", label: "Pricing & Fees" },
    {
      id: "security-compliance-risk",
      label: "Security, Compliance & Risk Management",
    },
    { id: "transaction-processing", label: "Transaction Processing" },
  ]

  // Generate filter options dynamically
  function generateFilterOptions() {
    categories.forEach((category) => {
      // Create label for the radio button and wrap the input inside it
      const label = document.createElement("label")
      label.classList.add("pc-filter-label")
      label.textContent = category.label

      // Create radio button input and append it inside the label
      const input = document.createElement("input")
      input.type = "radio"
      input.name = "category-filter"
      input.value = category.id
      input.id = `radio-${category.id}` // Generate a unique ID with 'radio-' prefix
      input.classList.add("pc-filter-radio")
      label.prepend(input) // Append the radio button inside the label

      // Set "All" option as checked by default
      if (category.id === "all") {
        input.checked = true
      }

      // Append the label (containing the radio button) to the filter form
      filterForm.appendChild(label)
    })
  }

  // Filter sections based on the selected category
  function filterSections(selectedValue) {
    const sections = document.querySelectorAll(".pc-glossary__category")
    const selectedCategory = selectedValue === "all" ? "all" : selectedValue

    sections.forEach((section) => {
      section.style.display =
        section.id === selectedCategory || selectedCategory === "all"
          ? "block"
          : "none"
    })

    // Scroll the page to the top
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  // Add or remove the 'active' class on the filter items based on the selected radio button
  function updateActiveFilterItem() {
    const radioButtons = document.querySelectorAll(".pc-filter-radio")

    radioButtons.forEach((radioButton) => {
      const label = radioButton.parentElement // The label is the parent of the radio button

      if (radioButton.checked) {
        label.classList.add("active")
      } else {
        label.classList.remove("active")
      }
    })
  }

  // Initialize the filter options and event listeners
  function initialize() {
    generateFilterOptions()

    // Event listener for category selection (radio button change)
    filterForm.addEventListener("change", (e) => {
      if (e.target && e.target.classList.contains("pc-filter-radio")) {
        filterSections(e.target.value)
        updateActiveFilterItem() // Update the active filter item
        // Hide the filter popup after selection
        filterPopup.classList.remove("visible")
      }
    })

    // Initially, show all categories and set the "All" filter item as active
    filterSections("all")
    updateActiveFilterItem()
  }

  // Run the initialization once the DOM is fully loaded
  initialize()
})

// Array of regions with available jobs
const regions = {
    "North": 5,  // 5 job opportunities
    "South": 0,  // No job opportunities
    "East": 3,   // 3 job opportunities
    "West": 2    // 2 job opportunities
};

// Function to simulate job application process
function applyForJobs(region) {
    // Check if the region has job opportunities
    if (regions[region] > 0) {
        console.log(`Jobs available in ${region}: ${regions[region]}`);
        
        // Simulate applicants applying for jobs
        let applicants = 0;
        while (regions[region] > 0) {
            applicants++;
            regions[region]--;  // Decrease job availability after an applicant gets a job
            console.log(`Applicant ${applicants} got a job. Jobs remaining: ${regions[region]}`);
        }
        console.log(`All jobs in ${region} have been filled!\n`);
    } else {
        console.log(`No job opportunities available in ${region}.\n`);
    }
}

// Test the program with different regions
applyForJobs("North");
applyForJobs("South");
applyForJobs("East");
applyForJobs("West");

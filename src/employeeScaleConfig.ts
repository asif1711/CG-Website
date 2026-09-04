/**
 * Employee Cut-Out Image Scale Factor Configuration
 * 
 * Adjust the scale factor to zoom/scale each employee's image.
 * - Anchored at the bottom baseline (scales upwards, left, and right).
 * - 1.0 = Normal (100%) scale (default baseline, as in Marketing Team)
 * - > 1.0 (e.g., 1.15, 1.25, 1.3) = Zoom in / scale up upwards & outwards
 * - < 1.0 (e.g., 0.9, 0.85) = Zoom out / scale down towards the bottom anchor
 * 
 * You can match by Employee Name, Employee ID (e.g. 'CG-CON-002'), or WordPress Post ID.
 */

export const EMPLOYEE_IMAGE_SCALE: Record<string, number> = {
  // ==========================================
  // MARKETING TEAM (Baseline Scale = 1.0)
  // ==========================================
  "Deepanshu Gupta": 1.0,      // CG-MKT-002
  "K Zothanpuia": 1.0,         // CG-MKT-001
  "Nurul Islam": 1.2,          // CG-MKT-003
  "Antu Tanchangya": 1.0,      // CG-MKT-004

  // ==========================================
  // CONSULTANT TEAM
  // Adjust these values to zoom the cut-out photos from center
  // ==========================================
  "Ratul Dasgupta": 1.2,       // CG-CON-002 (has cut-out photo)
  "Abhik Purkayastha": 1.2,    // CG-CON-019 (has cut-out photo)
  "Ankit Chattopadhyay": 1.0,  // CG-CON-028 (has cut-out photo)
  "Arpan Sinha": 1.0,          // CG-CON-003
  "Rajdeep Singh": 1.0,        // CG-CON-004
  "Paulami Saha": 1.0,         // CG-CON-006
  "Arya Sah": 1.0,             // CG-CON-007
  "Sweta Kumari": 1.0,         // CG-CON-008
  "Debankur Dey": 1.0,         // CG-CON-009
  "Shreyasi Ghatak": 1.0,      // CG-CON-010
  "Yashi Sharma": 1.0,         // CG-CON-011
  "Soudip Das": 1.0,           // CG-CON-012
  "Bishu Roy": 1.0,            // CG-CON-013
  "Shounak Banerjee": 1.0,     // CG-CON-015
  "Gopal Kochak": 1.0,         // CG-CON-016
  "Dr. Nisha Kalra Chadda": 1.0, // CG-CON-017
  "Dr. Shweta Solanki": 1.0,   // CG-CON-018
  "Srijita Chakraborty": 1.0,  // CG-CON-020
  "Rishikesh Das": 1.0,        // CG-CON-021
  "Sagnik Saha": 1.0,          // CG-CON-022
  "Priya Pal Singh": 1.0,      // CG-CON-023
  "Iffat Ali": 1.0,            // CG-CON-024
  "Debangshu Roy": 1.0,        // CG-CON-025
  "Dibyashri Chakraborty": 1.0,// CG-CON-026
  "Upasana Saha": 1.0,         // CG-CON-027
  "Soumi Kar": 1.0,            // CG-CON-029
  "Soujanna Chowdhury": 1.0,   // CG-CON-030
  "Sagnik Chatterjee": 1.0,    // CG-CON-031
  "Aswini Devi": 1.0,          // CG-CON-032
  "Priya Kumari": 1.0,         // CG-CON-033
  "Sevuloni Ratu": 1.0,        // CG-CON-034
  "Avigyan Ray": 1.0,          // CG-CON-035
  "Alvin Rao": 1.0,            // CG-CON-036
  "Sumedha Sadhu": 1.0,        // CG-CON-037
  "Deb Acharyya": 1.0,         // CG-CON-038
  "Krishnendu Roy": 1.0,       // CG-CON-039
  "Sudip Meddya": 1.0,         // CG-CON-040

  // ==========================================
  // OPERATIONAL SUPPORT TEAM
  // ==========================================
  "Nilanjan Kumar": 1.0,       // CG-OPS-001
  "Dev Panda": 1.0,            // CG-OPS-002
  "Tanmoy Dey": 1.0,           // CG-OPS-003
  "Wasim Rajjak": 1.0,         // CG-OPS-004
  "Sharmishtha Chakraborty": 1.0, // CG-OPS-005
  "Knight Yontawin": 1.0,      // CG-OPS-006
  "Kenji Panwa": 1.0,          // CG-OPS-007
  "Andrew Moitra": 1.0,        // CG-OPS-008
  "Ming Atthamaethakul": 1.0,  // CG-OPS-009
  "Somrik Nath": 1.0,          // CG-OPS-010
  "Suyash Murty": 1.0,         // CG-OPS-011
  "Pritam Goswami": 1.0,       // CG-OPS-012
  "Partho Mukherjee": 1.0,     // CG-OPS-013
  "Anurupa Saha": 1.0,         // CG-OPS-014
  "Uma Dutta": 1.0,            // CG-OPS-015
  "Adri Basu": 1.0,            // CG-OPS-016
  "Kaokla Gerttawee": 1.0,     // CG-OPS-017
  "Jay Prakash Singh": 1.0,    // CG-OPS-018
  "Ayan Mitra": 1.0,           // CG-OPS-019
  "Farhan Javed": 1.0,         // CG-OPS-020
  "Soham Chakraborty": 1.0,    // CG-OPS-021
  "Abraz Arshad": 1.0,         // CG-OPS-022
  "Siddhartha Sikder": 1.0,    // CG-OPS-023
  "Shemonti Mitra": 1.0,       // CG-OPS-024
  "Puja Dutta": 1.0,           // CG-OPS-025
  "Anjali Yadav": 1.0,         // CG-OPS-026
  "Ayan Bhattacharya": 1.0,    // CG-OPS-027
  "Debdoot Karmakar": 1.0,     // CG-OPS-028
  "Sobana Pakhira": 1.0,       // CG-OPS-029
  "Parvinder Singh": 1.0,      // CG-OPS-030
  "Ahraz Arshad": 1.0,         // 22268

  // ==========================================
  // LEARNING & ACADEMIC OPERATIONS TEAM
  // ==========================================
  "Jaidan Krishna": 1.0,       // CG-ADM-001
  "John Mark Verar": 1.0,      // CG-ADM-002
  "Coleen Delos Santos": 1.0,  // CG-ADM-003
  "Jess Parajas": 1.0,         // CG-ADM-004
  "Sailosi Davetanivalu": 1.0, // CG-ADM-005
  "Animesh Dutta": 1.0,        // CG-ADM-006
  "Suchandra Dhar": 1.0,       // CG-ADM-007
  "Princess Ara Jean Tapil": 1.0, // CG-ADM-008
  "Charlene Papa": 1.0,        // CG-ADM-009
  "Kim Reyes": 1.0,            // CG-ADM-010
  "Michale Jacomilla": 1.0,    // CG-ADM-011
  "Susan Cruiz": 1.0,          // CG-ADM-012
  "Cyril Parilla": 1.0,        // CG-ADM-013
  "Genevieve Pamintuan": 1.0,  // CG-ADM-014
  "Joey Mitchel R. Alia": 1.0, // CG-ADM-015
  "Aditi Nagar": 1.0,          // CG-ADM-016
  "Tracy Noval": 1.0,          // CG-ADM-017
  "Kartika": 1.0,              // CG-ADM-019
  "Ellyshah La Torre": 1.0,    // CG-ADM-020
  "Tessa Abigail G. Parawan": 1.0, // CG-ADM-021
  "Annette Silva": 1.0,        // CG-ADM-023
  "Maria Pedrosa": 1.0,        // CG-ADM-024
  "Soumili Chakraborty": 1.0,  // CG-ADM-025

  // ==========================================
  // HUMAN STRATEGY TEAM
  // ==========================================
  "Cole Thumpongkol": 1.0,     // CG-HS-001
  "Hugo Aungsuphat": 1.0,      // CG-HS-002
  "Tania Parvin": 1.0,         // CG-HS-003
  "Sweta Singh": 1.0,          // CG-HS-004
  "Arm Goenchanart": 1.0,      // CG-HS-005
  "Bireswar Chatterjee": 1.0,  // CG-HS-006
  "Sohom Sinha": 1.0,          // CG-HS-007

  // ==========================================
  // EXECUTIVE ASSISTANT TEAM
  // ==========================================
  "Jitesh Agarwal": 1.0,       // CG-EA-002
  "Faruk Biswas": 1.0,         // CG-EA-003
  "Sayan Sai": 1.0,            // CG-EA-004
  "Rittik Yadav": 1.0,         // CG-EA-005
};

/**
 * Returns the scale factor for a given employee (defaults to 1.0).
 */
export function getEmployeeImageScale(emp?: {
  id?: string | number;
  employee_id?: string;
  name?: string;
}): number {
  if (!emp) return 1.0;

  // 1. Match by name
  if (emp.name && EMPLOYEE_IMAGE_SCALE[emp.name] !== undefined) {
    return EMPLOYEE_IMAGE_SCALE[emp.name];
  }

  // 2. Match by employee_id (e.g. CG-CON-002)
  if (emp.employee_id && EMPLOYEE_IMAGE_SCALE[emp.employee_id] !== undefined) {
    return EMPLOYEE_IMAGE_SCALE[emp.employee_id];
  }

  // 3. Match by ID / Post ID
  if (emp.id && EMPLOYEE_IMAGE_SCALE[String(emp.id)] !== undefined) {
    return EMPLOYEE_IMAGE_SCALE[String(emp.id)];
  }

  return 1.0;
}

/**
 * DMR Earthmoving Training Specialists (Zimbabwe)
 * Machine Configuration & Knowledge Architecture
 * 
 * Central registry for all physical training machines at DMR.
 * Every machine ID represents a physical training machine / digital classroom.
 */

export interface MachineModule {
  id: string;
  number: string;
  title: string;
  description: string;
  estimatedMinutes: number;
  keyTopics: string[];
  inspectionItems?: string[];
  safetyWarnings?: string[];
  lessonContent: string;
  quiz: {
    question: string;
    options: string[];
    correctIndex: number;
    explanation: string;
  }[];
}

export interface DMRMachineConfig {
  id: string;
  name: string;
  shortName: string;
  type: string;
  assetNumber: string;
  qrUrl: string;
  description: string;
  serialRange: string;
  trainingLevel: string;
  modules: MachineModule[];
  // Private server-side knowledge configuration - NEVER EXPOSED TO FRONTEND
  knowledgeBaseId: string;
  knowledgeExcerpts: {
    topic: string;
    moduleId: string;
    sourceDocument: string;
    text: string;
  }[];
  unsupportedTopics?: string[];
}

export const DMR_MACHINES: Record<string, DMRMachineConfig> = {
  cat428: {
    id: "cat428",
    name: "CAT 428 Backhoe Loader",
    shortName: "CAT 428",
    type: "Backhoe Loader",
    assetNumber: "DMR-ZW-428-01",
    qrUrl: "https://dmrearthmovers.co.zw/learn/cat428",
    description: "DMR training environment for the CAT 428 Backhoe Loader. Covers walkaround inspection, hydraulic controls, stabilizer deployment, front loader operations, backhoe trenching, and site safety.",
    serialRange: "CAT 428 Series F/D Training Fleet (Zimbabwe)",
    trainingLevel: "Operator Certification Level 1 & 2",
    knowledgeBaseId: "dmr-kb-cat428-core-v1",
    modules: [
      {
        id: "module-01",
        number: "01",
        title: "Machine Orientation",
        description: "General architecture, main assemblies, tractor frame, front loader arms, rear backhoe swing and boom.",
        estimatedMinutes: 20,
        keyTopics: [
          "Tractor chassis & 4WD drivetrain layout",
          "Front loader assembly & bucket rollback geometry",
          "Rear boom, stick, and bucket mechanism",
          "Operator cabin, ROPS/FOPS rollover protection",
          "Stabilizer legs (outriggers) and ground contact pads"
        ],
        lessonContent: `[DEMO CONTENT - DMR APPROVED ORIENTATION]
The CAT 428 Backhoe Loader is a versatile earthmoving machine combining a front-mounted loading bucket with a rear-mounted excavator backhoe.
1. Front Loader: Designed for material handling, stockpile loading, backfilling, and light grading. Uses dual lift arms and hydraulic tilt cylinders.
2. Rear Backhoe: Features a heavy-duty boom, crowd stick, and digging bucket mounted to a side-shift or center-pivot carriage.
3. Operator Station: Equipped with ISO/SAE dual-pattern control joysticks, 180-degree swivel seat for transitioning between loader and backhoe operations, and ROPS (Roll-Over Protective Structure).
4. Powertrain: Powered by a 4-cylinder turbocharged diesel engine driving a power-shuttle torque converter transmission with 4 forward and 4 reverse gears.`,
        quiz: [
          {
            question: "What is the primary function of the 180-degree swivel seat on the CAT 428?",
            options: [
              "To let the operator rest comfortably during breaks",
              "To easily transition between front loader controls and rear backhoe operation",
              "To inspect the rear engine radiator while driving",
              "To assist with passenger seating"
            ],
            correctIndex: 1,
            explanation: "The swivel seat allows the trainee to face forward for loader/driving operations and rotate 180 degrees to face rearward for backhoe digging."
          }
        ]
      },
      {
        id: "module-02",
        number: "02",
        title: "Safety",
        description: "DMR earthmoving site safety, exclusion zones, PPE standards, and rollover protection procedures.",
        estimatedMinutes: 25,
        keyTopics: [
          "Mandatory PPE (Hard hat, high-vis vest, steel-toe boots, eye protection)",
          "Three points of contact during mounting and dismounting",
          "Machine swing exclusion zone (min 5-meter safety perimeter)",
          "Overhead powerline clearance protocols",
          "Trench edge standoff distances to prevent cave-ins"
        ],
        safetyWarnings: [
          "CRITICAL: Always lower all implements (front bucket and backhoe) to the ground before dismounting.",
          "DANGER: Never enter the swing radius of the backhoe while the engine is running.",
          "WARNING: Do not bypass neutral start safety interlocks."
        ],
        lessonContent: `[DEMO CONTENT - DMR SAFETY PROTOCOLS]
Safety is DMR's non-negotiable operational baseline for earthmoving training in Zimbabwe:
1. Personal Protective Equipment (PPE): Steel-toe safety boots (min 200J cap), high-visibility vest, hard hat (Class E/G), hearing protection during continuous operation, and UV-filtering eye wear.
2. Mounting / Dismounting: Trainees MUST maintain 3 points of contact (two hands and one foot, or two feet and one hand) on steps and handrails at all times. NEVER jump from the cab.
3. Swing Exclusion Zone: A designated 5-meter radius around the backhoe swing arc is strictly off-limits to ground personnel while the machine is live.
4. Overhead Hazards: Maintain minimum 3-meter clearance from low-voltage lines and 10 meters from high-voltage lines (ZETDC standards).
5. Ground Instability: Always position the machine perpendicular to the trench edge or at a distance equal to the trench depth plus 1 meter to avoid bank collapse.`,
        quiz: [
          {
            question: "What rule must trainees strictly obey when entering or exiting the CAT 428 cab?",
            options: [
              "Jump quickly away from the tires",
              "Maintain 3 points of contact on steps and handrails at all times",
              "Hold onto the steering wheel with both hands while stepping down backwards",
              "Exit only when someone is assisting from the ground"
            ],
            correctIndex: 1,
            explanation: "Maintaining three points of contact at all times prevents fatal slips and falls on muddy or oily steps."
          }
        ]
      },
      {
        id: "module-03",
        number: "03",
        title: "Pre-Start Inspection",
        description: "Step-by-step daily walkaround inspection checklist before engine ignition.",
        estimatedMinutes: 30,
        keyTopics: [
          "Walkaround circle starting from operator cab left-hand step",
          "Engine oil level dipstick check and coolant reservoir level",
          "Hydraulic fluid sight glass inspection",
          "Tire pressure, wheel lug torque, and tread cut checks",
          "Hydraulic cylinder rods for scratches, leaks, or weeping seals",
          "Bucket teeth, pins, and keeper bolts security"
        ],
        inspectionItems: [
          "Cab glass, mirrors, and safety belt condition",
          "Engine oil dipstick between MIN and MAX marks",
          "Engine coolant level in clear expansion tank",
          "Hydraulic tank sight gauge (loader bucket on ground, backhoe folded)",
          "Tires: inflation, rim damage, embedded stones",
          "Loader lift arm safety support strut functional",
          "Backhoe boom transport locking pin and swing lock"
        ],
        lessonContent: `[DEMO CONTENT - DMR PRE-START WALK-AROUND]
The DMR Pre-Start Inspection must be completed systematically clockwise around the CAT 428:
1. Cab Area: Check glass cleanliness, mirror alignment, horn operation, seatbelt anchor integrity, and that all control levers are in NEUTRAL.
2. Left Side & Engine Bay: Check engine oil dipstick. Ensure fluid is within the cross-hatched operating zone. Inspect air filter restriction indicator. Inspect fan belts for tension and cracks.
3. Front Loader Implements: Inspect front lift cylinders, tilt linkage, bucket cutting edge wear, and pivot pins for grease presence.
4. Right Side: Check hydraulic oil level at the sight gauge with the machine parked on level ground, loader bucket flat, and backhoe in transport lock.
5. Undercarriage / Tires: Check tire pressure (front and rear), wheel nuts for signs of loosening (rust streaks), and tire sidewalls for cuts.
6. Rear Backhoe: Inspect boom cylinder rod for pitting, hydraulic hoses for chafing, swing cylinder clevis pins, and bucket teeth lock retainers.
7. Fluid Leaks: Look underneath the machine for puddles of diesel, engine oil, transmission fluid, or hydraulic oil.`,
        quiz: [
          {
            question: "In what state must the CAT 428 be when checking the hydraulic oil sight gauge?",
            options: [
              "Engine at high idle with backhoe raised",
              "Parked on level ground with front bucket flat and backhoe in transport lock",
              "Tractor raised on stabilizers with bucket in air",
              "Engine running in reverse gear"
            ],
            correctIndex: 1,
            explanation: "Accurate hydraulic fluid reading requires cylinders to be in their baseline position on flat ground with the bucket lowered."
          }
        ]
      },
      {
        id: "module-04",
        number: "04",
        title: "Controls",
        description: "Cabin levers, foot pedals, instrument cluster, and hydraulic implement controls.",
        estimatedMinutes: 25,
        keyTopics: [
          "Steering column shuttle lever (Forward - Neutral - Reverse)",
          "Foot throttle vs. Hand throttle dial",
          "Split brake pedals and interlock pin",
          "Differential lock pedal",
          "Front loader single-lever joystick (Lift, Lower, Float, Tilt, Dump)",
          "Rear backhoe dual control levers (ISO vs SAE configuration)",
          "Stabilizer control levers"
        ],
        lessonContent: `[DEMO CONTENT - DMR CONTROL CABIN LAYOUT]
Understanding CAT 428 controls ensures smooth, low-wear machine operation:
1. Transmission Shuttle: Left-hand lever on the steering column selects Forward (F), Neutral (N), and Reverse (R) without clutching.
2. Brakes: Dual split pedals allow independent braking of left or right rear wheels for tight jobsite turning. Pedals MUST be pinned together when traveling on roads.
3. Front Loader Lever:
   - Pull back: Raise loader arms
   - Push forward: Lower loader arms (further push engages FLOAT mode)
   - Move left: Roll bucket back (curl)
   - Move right: Dump bucket
4. Rear Backhoe Levers (ISO Standard):
   - Left Lever: Controls Boom down/up and Swing left/right
   - Right Lever: Controls Stick crowd/extend and Bucket curl/dump
5. Stabilizer Levers: Two vertical levers behind the seat independently lower and raise the left and right stabilizer legs.`,
        quiz: [
          {
            question: "When should the dual brake pedals on the CAT 428 be pinned together?",
            options: [
              "During road travel and high-speed transit",
              "Only when digging deep trenches",
              "Never, they should always operate independently",
              "Only when the machine is turned off"
            ],
            correctIndex: 0,
            explanation: "Locking the brake pedals together prevents uneven braking at speed, which could cause a dangerous rollover."
          }
        ]
      },
      {
        id: "module-05",
        number: "05",
        title: "Operating Procedures",
        description: "Engine startup, warmup cycle, machine positioning, and stabilization sequence.",
        estimatedMinutes: 30,
        keyTopics: [
          "Pre-crank safety checks (Neutral shuttle, parking brake engaged)",
          "Glow plug cycle and starter duty limits (max 30 seconds cranking)",
          "Engine warm-up at low idle (3 to 5 minutes)",
          "Hydraulic exercise and air purge",
          "Stabilizer setup sequence for a stable digging platform"
        ],
        lessonContent: `[DEMO CONTENT - DMR OPERATING PROCEDURES]
Standard operating procedure for the CAT 428:
1. Startup: Verify transmission in Neutral and park brake ON. Turn key to ON, observe self-test warning lamps, wait for glow indicator to extinguish, then turn to START. Crank no longer than 30 seconds.
2. Warm-Up: Run at low idle (800-1000 RPM) for 3-5 minutes. Check oil pressure light extinguishes within 5 seconds.
3. Stabilizer Deployment:
   - Align machine on firm ground.
   - Lower front loader bucket to contact ground, taking tire weight off without lifting the wheels high.
   - Lower left and right stabilizers until rear wheels are lifted approximately 50-75mm off the ground.
   - Verify chassis level using the spirit bubble in the cab.`,
        quiz: [
          {
            question: "How should the stabilizers be set before starting backhoe digging?",
            options: [
              "Left completely retracted",
              "Lowered until rear tires are raised slightly (50-75mm) and machine is level",
              "Pushed down to maximum height lifting the machine 1 meter in the air",
              "Only the left stabilizer lowered"
            ],
            correctIndex: 1,
            explanation: "Raising rear tires slightly off the ground transfers digging shock loads to the stabilizers and frame rather than the axle and tires."
          }
        ]
      },
      {
        id: "module-06",
        number: "06",
        title: "Basic Digging",
        description: "Trenching fundamentals, tooth entry angle, crowding technique, and spoil pile placement.",
        estimatedMinutes: 35,
        keyTopics: [
          "Proper digging posture and engine RPM (1400-1600 RPM economy band)",
          "Teeth penetration angle (approximately 45 to 60 degrees)",
          "Smooth coordination of boom, stick, and bucket curl",
          "Spoil pile distance (minimum 1 meter from trench lip)",
          "Straight trench benchmarking and benching safety"
        ],
        lessonContent: `[DEMO CONTENT - DMR TRENCHING TECHNIQUE]
Efficient backhoe trenching requires simultaneous coordination:
1. Positioning: Extend the boom and stick outwards. Position bucket teeth so they engage soil at an angle of roughly 45 to 60 degrees.
2. The Digging Stroke:
   - Crowd the stick toward the machine while slightly feathering the boom up to maintain cut depth.
   - Simultaneously curl the bucket as it fills with earth.
   - Avoid dragging the machine with excessive stick force.
3. Lifting & Swung Spoil:
   - Lift boom smoothly clear of the trench edges.
   - Swing toward the designated spoil area.
   - Place spoil at least 1 meter away from the excavation edge to prevent bank collapse and rock fallback.`,
        quiz: [
          {
            question: "Why must the excavated spoil pile be placed at least 1 meter away from the trench edge?",
            options: [
              "To keep the dirt dry",
              "To prevent spoil weight from causing trench wall collapse and soil fallback",
              "To save hydraulic fluid",
              "To make the trench look neat for photos"
            ],
            correctIndex: 1,
            explanation: "Placing soil too close to the trench lip imposes surcharge weight that causes cave-ins, a leading cause of trench fatalities."
          }
        ]
      },
      {
        id: "module-07",
        number: "07",
        title: "Loading",
        description: "Front loader truck loading cycles, V-shape pattern, approach speed, and bucket dumping.",
        estimatedMinutes: 30,
        keyTopics: [
          "V-Shape loading pattern to minimize tire wear and travel time",
          "Penetrating stockpiles in 1st or 2nd gear at steady throttle",
          "Curling the bucket and lifting without spinning tires",
          "Carrying bucket low (approx 300-400mm off ground) during transit",
          "Centering the dump load over tipper truck body"
        ],
        lessonContent: `[DEMO CONTENT - DMR LOADER PRODUCTION]
The V-Pattern truck loading cycle is the DMR benchmark:
1. Stockpile Approach: Lower bucket level to ground 2 meters before pile. Approach in 1st or 2nd gear.
2. Loading: Drive into the pile, raise lift arms slightly, and curl bucket back to fill heap. NEVER spin wheels—spinning destroys expensive tires.
3. Reversing: Shift shuttle to Reverse, check backup zone, reverse out at a 45-degree angle.
4. Transport Height: Lower the loaded bucket to travel height (300-400mm above ground) to maintain a low center of gravity.
5. Approaching Truck: Advance in forward toward the tipper body. Raise bucket as you near the truck wall. Dump centered in the truck bin.`,
        quiz: [
          {
            question: "At what height should a loaded front bucket be carried while traveling?",
            options: [
              "Maximum height for operator visibility",
              "Low to the ground (approximately 300-400mm) for machine stability",
              "Dragging along the road surface",
              "At roof level"
            ],
            correctIndex: 1,
            explanation: "Carrying loads low keeps the center of gravity down, preventing rollovers when turning or driving over uneven ground."
          }
        ]
      },
      {
        id: "module-08",
        number: "08",
        title: "Parking & Shutdown",
        description: "Safe machine shutdown sequence, implement resting, turbo idle cooldown, and key isolation.",
        estimatedMinutes: 20,
        keyTopics: [
          "Selecting level, firm ground clear of traffic and steep slopes",
          "Lowering front bucket flat and resting backhoe bucket on the ground",
          "Engaging transmission neutral and locking parking brake",
          "Turbocharger cooldown idle period (3 minutes minimum)",
          "Switching off ignition, bleeding residual hydraulic pressure, isolating battery"
        ],
        safetyWarnings: [
          "NEVER shut off a turbocharged engine immediately after heavy work without a 3-minute idle cooldown.",
          "NEVER leave the machine with implements suspended in the air."
        ],
        lessonContent: `[DEMO CONTENT - DMR PARKING PROTOCOL]
Proper shutdown protects the machine and prevents unmonitored implement drops:
1. Parking Location: Choose flat, stable ground. If parking on a grade is unavoidable, chock tires securely.
2. Implements Down: Lower front loader bucket flat to ground. Lower rear backhoe bucket flat to ground. Relieve hydraulic pressure by cycling control levers with engine off.
3. Turbo Cooldown: Allow the turbocharged engine to idle at low RPM for 3 full minutes. This permits oil to circulate and dissipate extreme heat from turbo bearings.
4. Key & Lockout: Turn ignition key to OFF and remove it. Engage the master battery isolation switch if leaving the machine for the shift.`,
        quiz: [
          {
            question: "Why must the CAT 428 idle for 3 minutes before engine shutdown after heavy work?",
            options: [
              "To charge the radio battery",
              "To allow turbocharger bearings to cool down with circulating engine oil",
              "To empty the fuel tank",
              "To let the hydraulic oil boil away"
            ],
            correctIndex: 1,
            explanation: "Shutting down hot burns residual oil in the turbocharger bearings (coking), leading to premature turbo failure."
          }
        ]
      },
      {
        id: "module-09",
        number: "09",
        title: "Maintenance Basics",
        description: "Daily greasing points, water trap draining, air filter care, and scheduled service intervals.",
        estimatedMinutes: 25,
        keyTopics: [
          "Daily grease points (loader pivot pins, backhoe kingpost, swing cylinders)",
          "Fuel water separator daily draining",
          "Air filter dust ejector valve check",
          "Battery terminal inspection and electrolyte level",
          "50-hour, 250-hour, and 500-hour preventive maintenance schedule"
        ],
        lessonContent: `[DEMO CONTENT - DMR PREVENTIVE MAINTENANCE]
Operator maintenance duties on the CAT 428:
1. Daily Greasing (Every 10 Hours):
   - Backhoe swing cylinder pins and kingpost pivots (critical wear areas)
   - Boom and stick pivot pins
   - Bucket linkage and cylinder pins
   - Front loader arm pivots and steering knuckle joints
   Use Lithium EP2 grease. Pump grease until clean grease emerges from the bush.
2. Fuel System: Inspect the primary fuel water separator bowl. Turn drain tap counter-clockwise to drain accumulated water and sediment into a container until clean diesel flows.
3. Air Pre-Cleaner: Squeeze rubber dust ejector valve on air cleaner body to discharge trapped debris.
4. Defect Reporting: Record any oil seepage, hose cracks, or abnormal engine noise in the DMR Machine Logbook immediately.`,
        quiz: [
          {
            question: "How often should backhoe kingpost and swing cylinder pins be greased during active training?",
            options: [
              "Once every year",
              "Daily / every 10 operating hours",
              "Only when squeaking loudly",
              "Never, they are permanently sealed"
            ],
            correctIndex: 1,
            explanation: "Backhoe kingposts handle enormous rotational torque and must be greased daily to prevent bush ovalization and pin wear."
          }
        ]
      }
    ],
    knowledgeExcerpts: [
      {
        topic: "Machine Specifications & Identity",
        moduleId: "module-01",
        sourceDocument: "DMR Training Manual - CAT 428 Section 1",
        text: "The CAT 428 Backhoe Loader (Asset DMR-ZW-428-01) is a center-pivot/sideshift backhoe with a 4-cylinder turbocharged diesel engine producing approximately 68.5 kW (93 hp). Operating weight is nominally 8,500 kg. Features 4WD, power-shuttle 4-speed synchromesh transmission, and load-sensing closed-center variable-displacement piston pump hydraulics."
      },
      {
        topic: "Hydraulic System Operation",
        moduleId: "module-04",
        sourceDocument: "DMR Training Manual - CAT 428 Section 4",
        text: "The hydraulic system operates with an axial piston pump delivering up to 160 L/min at main relief pressure of 250 bar (3625 psi). Proportional control valves provide fine feathering capability for trench excavation and delicate pipe laying operations."
      },
      {
        topic: "Pre-Start Checklist",
        moduleId: "module-03",
        sourceDocument: "DMR Pre-Start SOP - 428 Checklist",
        text: "Pre-start inspection mandates clockwise walkaround: engine oil dipstick, coolant tank level, hydraulic sight gauge (bucket flat, backhoe stowed), tire inflation (front 3.5 bar, rear 2.2 bar), wheel nut integrity, and hydraulic hose visual check."
      },
      {
        topic: "Safety & Exclusion Zone",
        moduleId: "module-02",
        sourceDocument: "DMR Earthmoving Safety Manual Zimbabwe",
        text: "Exclusion zone: 5-meter radial clearance around backhoe swing circle. Three points of contact mandatory for ingress/egress. In event of machine tipping: hold steering wheel firmly, brace feet against floor, DO NOT jump."
      },
      {
        topic: "Parking & Shutdown",
        moduleId: "module-08",
        sourceDocument: "DMR Operating Procedures - Shutdown",
        text: "Lower loader bucket flat. Lower backhoe bucket flat to ground. Transmission in Neutral, apply parking brake. 3-minute idle period to protect turbocharger. Turn off key, bleed residual hydraulic pressure by moving levers, isolate master switch."
      }
    ]
  },

  excavator: {
    id: "excavator",
    name: "CAT 320 Hydraulic Excavator",
    shortName: "CAT 320",
    type: "Hydraulic Excavator",
    assetNumber: "DMR-ZW-320-02",
    qrUrl: "https://dmrearthmovers.co.zw/learn/excavator",
    description: "DMR training environment for the 22-ton CAT 320 Hydraulic Excavator. 360-degree swing, tracked undercarriage, deep bench excavation, and quarry loading.",
    serialRange: "CAT 320 Next Gen Fleet (Zimbabwe)",
    trainingLevel: "Operator Certification Level 2 & 3",
    knowledgeBaseId: "dmr-kb-excavator-320-v1",
    modules: [
      {
        id: "module-01",
        number: "01",
        title: "Excavator Machine Orientation",
        description: "Upperstructure house, revolving turntable, crawler tracks, boom, stick, and heavy duty rock bucket.",
        estimatedMinutes: 20,
        keyTopics: ["Track frame & sprockets", "Slew bearing & turntable", "Cab layout", "Counterweight"],
        lessonContent: "[DEMO CONTENT - CAT 320] Overview of 360-degree continuous swing tracked hydraulic excavator.",
        quiz: [
          {
            question: "What enables the CAT 320 upperstructure to rotate continuously in 360 degrees?",
            options: ["Rubber tires", "Internal slew ring bearing and hydraulic swing motor", "Steering wheel", "Front axle"],
            correctIndex: 1,
            explanation: "The heavy-duty slew bearing and hydraulic swing motor permit endless 360-degree rotation."
          }
        ]
      },
      {
        id: "module-02",
        number: "02",
        title: "Excavator Safety & Blind Spots",
        description: "Counterweight swing blind spots, trench collapse prevention, and overhead powerline clearances.",
        estimatedMinutes: 25,
        keyTopics: ["Swing radius barrier", "Track positioning relative to trench", "E-Stop and travel alarms"],
        lessonContent: "[DEMO CONTENT - CAT 320 SAFETY] Exclusion zones and blind spots behind the heavy counterweight.",
        quiz: [
          {
            question: "Where is the largest visual blind spot for the operator of a CAT 320 excavator?",
            options: ["Directly ahead of the bucket", "Directly behind the counterweight on the right rear side", "At the left window", "Directly beneath the foot pedals"],
            correctIndex: 1,
            explanation: "The right rear quadrant behind the counterweight has the greatest obstruction from the engine hood."
          }
        ]
      }
    ],
    knowledgeExcerpts: [
      {
        topic: "Machine Architecture",
        moduleId: "module-01",
        sourceDocument: "DMR Excavator Manual - CAT 320",
        text: "The CAT 320 (Asset DMR-ZW-320-02) is a 22.5 tonne tracked excavator powered by a Cat C4.4 ACERT diesel engine producing 122 kW. Undercarriage uses heavy-duty track rollers with triple grouser track pads."
      }
    ]
  },

  "wheel-loader": {
    id: "wheel-loader",
    name: "CAT 950 Wheel Loader",
    shortName: "CAT 950",
    type: "Wheel Loader",
    assetNumber: "DMR-ZW-950-03",
    qrUrl: "https://dmrearthmovers.co.zw/learn/wheel-loader",
    description: "DMR training environment for the CAT 950 Wheel Loader. Articulated steering, high-volume aggregate bucket, stockpiling, and articulated truck loading.",
    serialRange: "CAT 950M Training Fleet",
    trainingLevel: "Operator Certification Level 2",
    knowledgeBaseId: "dmr-kb-wheelloader-950-v1",
    modules: [
      {
        id: "module-01",
        number: "01",
        title: "Articulated Loader Orientation",
        description: "Articulated hitch joint, steering cylinders, high-lift Z-bar linkage, and counterweight.",
        estimatedMinutes: 20,
        keyTopics: ["Center articulation joint", "Z-Bar lift linkage", "Powershift transmission"],
        lessonContent: "[DEMO CONTENT - CAT 950] Articulated chassis design and hydraulic steering fundamentals.",
        quiz: [
          {
            question: "What must be installed across the articulation joint during transport or servicing of the CAT 950?",
            options: ["Grease gun", "Steering frame articulation locking bar", "Fuel siphon hose", "Wheel chock"],
            correctIndex: 1,
            explanation: "The steering frame lock bar physically locks the front and rear frames to prevent crushing hazards."
          }
        ]
      }
    ],
    knowledgeExcerpts: [
      {
        topic: "Loader Specs",
        moduleId: "module-01",
        sourceDocument: "DMR Wheel Loader Manual - CAT 950",
        text: "The CAT 950 (Asset DMR-ZW-950-03) has an operating weight of 19,200 kg, bucket capacity of 3.3 m³, and Cat C7.1 ACERT engine rated at 186 kW."
      }
    ]
  },

  forklift: {
    id: "forklift",
    name: "Hyster 3.0T Industrial Forklift",
    shortName: "Hyster 3.0T",
    type: "Industrial Forklift",
    assetNumber: "DMR-ZW-FL-04",
    qrUrl: "https://dmrearthmovers.co.zw/learn/forklift",
    description: "DMR training environment for the Hyster 3.0T counterbalance forklift. Mast operation, load centers, tilt hydraulics, and warehouse pallet maneuvering.",
    serialRange: "Hyster Fortens Series",
    trainingLevel: "Operator Certification Level 1",
    knowledgeBaseId: "dmr-kb-forklift-30-v1",
    modules: [
      {
        id: "module-01",
        number: "01",
        title: "Forklift Stability Triangle & Mast",
        description: "Understanding load center (500mm), stability triangle, mast tilt, and fork spacing.",
        estimatedMinutes: 20,
        keyTopics: ["Stability triangle", "Capacity plate", "Rear-wheel steering dynamic"],
        lessonContent: "[DEMO CONTENT - HYSTER 3.0T] Counterbalance stability triangle and load centers.",
        quiz: [
          {
            question: "What happens to the forklift's center of gravity when a rated load is elevated high on the mast?",
            options: ["It moves lower", "It shifts upward, drastically reducing stability", "It disappears", "It stays fixed at the rear axle"],
            correctIndex: 1,
            explanation: "Lifting loads shifts the combined center of gravity higher, making lateral tip-over far more likely."
          }
        ]
      }
    ],
    knowledgeExcerpts: [
      {
        topic: "Forklift Capacity",
        moduleId: "module-01",
        sourceDocument: "DMR Forklift Manual - Hyster 3.0T",
        text: "Rated capacity: 3,000 kg at 500mm load center. Duplex/Triplex mast with hydraulic sideshift. Rear wheel steering requires awareness of tail-swing."
      }
    ]
  },

  tractor: {
    id: "tractor",
    name: "Massey Ferguson 375 Tractor",
    shortName: "MF 375",
    type: "Agricultural & Industrial Tractor",
    assetNumber: "DMR-ZW-TR-05",
    qrUrl: "https://dmrearthmovers.co.zw/learn/tractor",
    description: "DMR multi-utility tractor training. 3-point hitch, PTO drive shaft safety, draft control, and trailing earthmoving scrapers.",
    serialRange: "MF 375 4WD Fleet",
    trainingLevel: "Operator Certification Level 1",
    knowledgeBaseId: "dmr-kb-tractor-375-v1",
    modules: [
      {
        id: "module-01",
        number: "01",
        title: "Tractor Hitch & PTO Drive",
        description: "Three-point linkage, Category 2 hitch, PTO safety shields, and ballast weighting.",
        estimatedMinutes: 20,
        keyTopics: ["PTO rotating shaft shield", "Three-point hitch leveling", "Differential lock"],
        lessonContent: "[DEMO CONTENT - MF 375] PTO shaft rotational entanglement hazards and 3-point linkage operations.",
        quiz: [
          {
            question: "Why must the tractor PTO master shield and implement guard always remain in place?",
            options: ["To prevent rain on the shaft", "To prevent catastrophic clothing or limb entanglement in the rotating shaft", "To reduce fuel consumption", "To keep tractor clean"],
            correctIndex: 1,
            explanation: "PTO shafts rotate at 540 or 1000 RPM with massive torque; exposed shafts cause fatal entanglement accidents."
          }
        ]
      }
    ],
    knowledgeExcerpts: [
      {
        topic: "Tractor Specs",
        moduleId: "module-01",
        sourceDocument: "DMR Tractor Manual - MF 375",
        text: "Massey Ferguson 375 4WD features Perkins 4.236 4-cylinder 75 hp diesel, 8-speed manual synchro transmission, and 540 RPM PTO."
      }
    ]
  },

  crane: {
    id: "crane",
    name: "Tadano 25T Mobile Rough Terrain Crane",
    shortName: "Tadano 25T",
    type: "Mobile Crane",
    assetNumber: "DMR-ZW-CR-06",
    qrUrl: "https://dmrearthmovers.co.zw/learn/crane",
    description: "DMR lifting operations training. Load charts, outrigger matting, load moment indicator (LMI), rigging, and sling angles.",
    serialRange: "Tadano GR-250N Series",
    trainingLevel: "Operator Certification Level 3",
    knowledgeBaseId: "dmr-kb-crane-25t-v1",
    modules: [
      {
        id: "module-01",
        number: "01",
        title: "Load Chart & Outrigger Setup",
        description: "Calculating working radius, boom length, outrigger beam extension, and ground bearing pressure.",
        estimatedMinutes: 25,
        keyTopics: ["LMI computer calibration", "Outrigger hardwood mats", "Working radius vs boom angle"],
        lessonContent: "[DEMO CONTENT - TADANO 25T] Load chart reading, rated capacity limiters, and outrigger ground bearing mats.",
        quiz: [
          {
            question: "What happens to crane lifting capacity as the working radius increases?",
            options: ["Capacity increases", "Capacity decreases substantially due to leverage tipping moment", "Capacity remains unchanged", "Radius does not affect capacity"],
            correctIndex: 1,
            explanation: "As radius increases (boom lower or extended further), the tipping leverage increases and crane safe working load decreases."
          }
        ]
      }
    ],
    knowledgeExcerpts: [
      {
        topic: "Crane Rating",
        moduleId: "module-01",
        sourceDocument: "DMR Crane Operations Manual - Tadano 25T",
        text: "Tadano GR-250N 25 tonne rated capacity at 3.0m radius with outriggers fully extended. 4-section hexagonal telescopic boom up to 31.0m."
      }
    ]
  },

  bulldozer: {
    id: "bulldozer",
    name: "CAT D6 Track Bulldozer",
    shortName: "CAT D6",
    type: "Track Bulldozer",
    assetNumber: "DMR-ZW-DOZ-07",
    qrUrl: "https://dmrearthmovers.co.zw/learn/bulldozer",
    description: "DMR heavy earthmoving dozer training. Semi-U blade angling, differential steering, multi-shank ripper, and slope cut management.",
    serialRange: "CAT D6T Series",
    trainingLevel: "Operator Certification Level 2 & 3",
    knowledgeBaseId: "dmr-kb-dozer-d6-v1",
    modules: [
      {
        id: "module-01",
        number: "01",
        title: "Dozer Blade & Track Management",
        description: "SU-Blade pitch and tilt, slot dozing techniques, track tension monitoring, and ripper depth control.",
        estimatedMinutes: 25,
        keyTopics: ["Slot dozing method", "Track chain sag measurement", "Ripper penetration"],
        lessonContent: "[DEMO CONTENT - CAT D6] Blade pitch adjustment and high-productivity slot dozing technique.",
        quiz: [
          {
            question: "What is the primary advantage of 'slot dozing' with a CAT D6?",
            options: ["It keeps the blade shiny", "It traps earth inside the side spillage trench, increasing blade load volume up to 20-30%", "It reduces engine RPM", "It eliminates the need for tracks"],
            correctIndex: 1,
            explanation: "Slot dozing cuts parallel channels so sidewalls prevent material escaping from blade edges, maximizing yardage."
          }
        ]
      }
    ],
    knowledgeExcerpts: [
      {
        topic: "Dozer Power",
        moduleId: "module-01",
        sourceDocument: "DMR Dozer Manual - CAT D6",
        text: "CAT D6T operating weight 21,300 kg with Cat C9.3 ACERT engine delivering 154 kW (207 hp). Elevated sprocket design protects final drives from shock loads."
      }
    ]
  },

  "dump-truck": {
    id: "dump-truck",
    name: "Bell B30D Articulated Dump Truck",
    shortName: "Bell B30D ADT",
    type: "Articulated Dump Truck",
    assetNumber: "DMR-ZW-ADT-08",
    qrUrl: "https://dmrearthmovers.co.zw/learn/dump-truck",
    description: "DMR haulage operations training. 6x6 inter-axle differential locks, retarder downhill speed management, and tip-head dumping safety.",
    serialRange: "Bell B30D 6x6 Hauler",
    trainingLevel: "Operator Certification Level 1 & 2",
    knowledgeBaseId: "dmr-kb-hauler-b30d-v1",
    modules: [
      {
        id: "module-01",
        number: "01",
        title: "Haul Road Navigation & Dumping",
        description: "Exhaust retarder braking on mine slopes, bin raise interlocks, and soft tip-edge berm standoff.",
        estimatedMinutes: 25,
        keyTopics: ["Automatic exhaust retarder", "Dump body raise interlock", "Reversing to safety berms"],
        lessonContent: "[DEMO CONTENT - BELL B30D] Safe haul road driving and dumping protocols at waste dumps and crushers.",
        quiz: [
          {
            question: "What must the Bell B30D operator verify before raising the dump body to discharge a 30-tonne load?",
            options: ["That the truck is parked on level ground and not leaning sideways", "That the radio volume is high", "That all windows are open", "That headlights are turned off"],
            correctIndex: 0,
            explanation: "Tipping on an incline or lateral slope causes severe center-of-gravity shifts that can overturn the rear chassis."
          }
        ]
      }
    ],
    knowledgeExcerpts: [
      {
        topic: "ADT Specifications",
        moduleId: "module-01",
        sourceDocument: "DMR Haulage Manual - Bell B30D",
        text: "Bell B30D 6x6 articulated hauler: 28,000 kg rated payload, Mercedes-Benz OM906LA turbo diesel engine (205 kW), Allison automatic transmission with hydraulic retarder."
      }
    ]
  }
};

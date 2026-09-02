/**
 * DMR Earthmoving Training Specialists (Zimbabwe)
 * DMR Excavator Academy - Phase 2 Interactive Learning Engine
 * 
 * Strict Specification: HTML, CSS, Vanilla JavaScript ONLY.
 * No React. No Vue. No frameworks. No animation libraries. No build tools.
 * Data Persistence: localStorage
 */

// ===================================================
// 1. DATA: EXCAVATOR ANATOMY (EXPLORE THE EXCAVATOR)
// ===================================================
const EXCAVATOR_PARTS = {
  boom: {
    num: "01",
    name: "THE BOOM",
    role: "Primary Vertical Structural Beam & Hydraulic Lift",
    tag: "WORK EQUIPMENT",
    whatIsIt: "The boom is the large curved steel arm pinned directly to the revolving body of the excavator.",
    whatDoesItDo: "Powered by dual hydraulic lift cylinders, the boom raises and lowers the arm and bucket. It reaches into deep trenches and lifts high over truck beds.",
    whyItMatters: "The boom is the foundation of all digging geometry. Misusing the boom to violently pry boulders or lift the machine tracks off the ground can bend cylinder rods or crack main turntable pivot welds.",
    ruleFormula: "REMEMBER: BOOM → ARM (STICK) → BUCKET",
    ruleText: "Think outward from the machine center. The Boom sets the height, the Arm provides pulling force, and the Bucket cuts into the ground."
  },
  arm: {
    num: "02",
    name: "THE ARM (STICK / DIPPER)",
    role: "Horizontal Crowd Action & Digging Leverage",
    tag: "WORK EQUIPMENT",
    whatIsIt: "The arm (often called the stick or dipper) is the pivoting steel beam pinned between the boom tip and the bucket.",
    whatDoesItDo: "It pulls material toward the excavator in the 'crowd' stroke. It controls trench depth and pulls the bucket through the soil.",
    whyItMatters: "Maximum digging power is achieved when the arm and boom form an approximate 90-degree angle. Stalling the arm at full extension wastes diesel and overheats hydraulic oil without gaining cutting power.",
    ruleFormula: "REMEMBER: 90 DEGREES IS PEAK POWER",
    ruleText: "Crowd smoothly with the arm while curling the bucket teeth inward for a smooth, full bucket every pass."
  },
  bucket: {
    num: "03",
    name: "THE BUCKET",
    role: "Earth Penetration, Material Retention & Cutting",
    tag: "GROUND ENGAGING TOOL",
    whatIsIt: "The bucket is the heavy-duty steel scoop equipped with wear plates, side cutters, and replaceable hardened ground teeth.",
    whatDoesItDo: "The bucket penetrates compacted ground, gathers soil or gravel, and curls inward to hold the load securely during swing and truck loading.",
    whyItMatters: "Dull or missing teeth increase bucket penetration resistance by over 40%, forcing the engine to burn more diesel. Inspect tooth retention pins during every pre-start walkaround.",
    ruleFormula: "REMEMBER: BOOM → ARM → BUCKET",
    ruleText: "Maintain a flat bucket bottom relative to your trench floor during grading passes, and curl teeth inward in hard ground to maximize breakout force."
  },
  cab: {
    num: "04",
    name: "THE OPERATOR'S CAB",
    role: "Certified Protective Command Cockpit",
    tag: "OPERATOR ENVIRONMENT",
    whatIsIt: "The reinforced operator station built with Roll-Over (ROPS) and Falling Object (FOPS) protection. It houses joysticks, travel pedals, display monitor, and safety lockouts.",
    whatDoesItDo: "It gives the operator 360-degree site visibility, precise hydraulic joystick control, and live machine warning alerts (temperature, hydraulic pressure, fuel level).",
    whyItMatters: "Your survival depends on cab discipline. Fasten your 3-point seatbelt, adjust your suspension seat, and always raise the hydraulic safety lock lever before entering or leaving.",
    ruleFormula: "REMEMBER: HYDRAULIC LOCK DOWN BEFORE LEAVING SEAT",
    ruleText: "Never step out or reach across the cab while the hydraulic lock is open. An accidental nudge on a joystick can swing the boom into a co-worker."
  },
  tracks: {
    num: "05",
    name: "TRACK SYSTEM (UNDERCARRIAGE)",
    role: "Low Ground Pressure Flotation & Traction",
    tag: "MOBILITY & TRACTION",
    whatIsIt: "A heavy-duty steel track chain with bolted steel track shoes, riding on top carrier rollers and bottom track rollers between a front idler and a rear drive sprocket.",
    whatDoesItDo: "It spreads the 21-ton excavator weight evenly across the ground, allowing travel over deep mud, loose gravel, and 30-degree slopes without sinking.",
    whyItMatters: "Correct track tension is essential. Tracks that are too tight cause rapid bushing wear; tracks that are too loose can derail (throw a track) in the middle of a cut.",
    ruleFormula: "REMEMBER: SPROCKETS AT THE REAR FOR TRAVEL",
    ruleText: "When driving forward across the site, always position drive sprockets at the rear. This keeps track chains under tension along the top and protects final drive motors."
  },
  counterweight: {
    num: "06",
    name: "THE COUNTERWEIGHT",
    role: "Dynamic Equilibrium & Balance Ballast",
    tag: "MACHINE STABILITY",
    whatIsIt: "A solid cast-iron ballast block weighing several tons, bolted firmly to the rear of the revolving upperstructure.",
    whatDoesItDo: "It balances the heavy front boom, arm, and loaded bucket when reaching outward, keeping the center of gravity stable over the tracks.",
    whyItMatters: "The counterweight swings through a lethal blind-spot arc when slewing. Ground personnel standing behind the machine can be crushed against walls or vehicles.",
    ruleFormula: "REMEMBER: RESPECT THE TAIL-SWING RADIUS",
    ruleText: "Always check your rear mirrors and backup camera before slewing. Enforce a minimum 1.5-meter buffer zone around the rear counterweight arc."
  },
  undercarriage: {
    num: "07",
    name: "UNDERCARRIAGE X-FRAME",
    role: "Structural Backbone & Slew Bearing Base",
    tag: "STRUCTURAL CHASSIS",
    whatIsIt: "The heavy welded X-shaped central steel chassis connecting the two track side frames and mounting the central 360-degree slew ring turntable.",
    whatDoesItDo: "It absorbs intense digging shock loads, anchors the excavator firmly to the ground, and houses travel motors and hydraulic swivel joints.",
    whyItMatters: "Mud and rocks packed inside track frames dry into concrete-hard blocks, jamming rollers and doubling wear. Clean your undercarriage at the end of every shift.",
    ruleFormula: "REMEMBER: CLEAN TRACK FRAMES DAILY",
    ruleText: "Use a spade or bucket tooth to clean dried mud from track frames before leaving the machine parked for the night."
  }
};

const PART_KEYS = ["boom", "arm", "bucket", "cab", "tracks", "counterweight", "undercarriage"];

// ===================================================
// 2. DATA: 12 REUSABLE DMR EXCAVATOR LESSONS
// ===================================================
const EXCAVATOR_LESSONS = [
  {
    id: "lesson01",
    num: 1,
    code: "01",
    title: "MEET THE EXCAVATOR",
    estTime: "3 MINS",
    description: "Understand what makes the 360-degree hydraulic crawler excavator the undisputed king of earthmoving.",
    intro: "The hydraulic excavator is the primary earthmoving production machine on modern construction and mining sites. Unlike backhoes or wheel loaders, the excavator's upperstructure rotates a full 360 degrees continuously on a heavy slewing ring, allowing you to dig in front and dump to the side without ever moving the tracks.",
    visualSvg: `<svg viewBox="0 0 400 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="160" fill="#F8FAFC" rx="8"/>
      <circle cx="200" cy="80" r="55" fill="none" stroke="#F59E0B" stroke-width="3" stroke-dasharray="6 6"/>
      <polygon points="255,80 265,70 265,90" fill="#F59E0B"/>
      <circle cx="200" cy="80" r="14" fill="#0F172A"/>
      <text x="200" y="84" text-anchor="middle" font-size="9" font-weight="900" fill="#F59E0B">SLEW</text>
      <rect x="175" y="70" width="50" height="20" rx="3" fill="#334155"/>
      <line x1="200" y1="70" x2="200" y2="25" stroke="#F59E0B" stroke-width="6" stroke-linecap="round"/>
      <line x1="200" y1="25" x2="245" y2="40" stroke="#B45309" stroke-width="5" stroke-linecap="round"/>
      <text x="200" y="148" text-anchor="middle" font-size="11" font-weight="800" fill="#0F172A">360° CONTINUOUS ROTATION CAPABILITY</text>
    </svg>`,
    visualCaption: "Continuous 360-degree slew ring enables digging and dumping without repositioning tracks.",
    sections: [
      {
        title: "The King of Earthmoving",
        content: "On every job site from Harare to Victoria Falls, the hydraulic excavator does the heavy lifting. Its steel crawler tracks grip uneven ground, while the upper body turns freely in a complete circle.",
        terms: [
          {
            term: "SLEW RING (TURNTABLE)",
            simple: "The heavy circular geared bearing connecting the upper body to the tracks.",
            whyItMatters: "Understanding that the cab swings while tracks stay fixed prevents you from accidentally striking objects behind you."
          }
        ]
      },
      {
        title: "The Three Essential Digging Parts",
        content: "All excavator digging relies on three interconnected parts working in harmony: Boom, Arm, and Bucket. When you coordinate these three with smooth hydraulic joystick moves, the excavator acts like a giant, powerful human arm.",
        terms: [
          {
            term: "WORK EQUIPMENT",
            simple: "The boom, arm, and bucket attached to the front of the machine.",
            whyItMatters: "Knowing where your power comes from allows you to dig efficiently without stressing the machine."
          }
        ]
      }
    ],
    keyPoints: [
      "The excavator upperstructure rotates 360 degrees continuously on a heavy slew ring.",
      "Work equipment sequence: Boom (height) → Arm (reach & crowd) → Bucket (cutting force).",
      "Crawler tracks provide low ground pressure, allowing travel over soft mud and steep slopes.",
      "Always know which way your tracks are pointed before touching travel pedals."
    ],
    quickChecks: [
      {
        question: "What major capability sets a hydraulic excavator apart from other machines?",
        options: [
          "It travels faster than a haul truck on public roads",
          "Its upper body can rotate 360 degrees continuously on its tracks",
          "It uses rubber tires to jump over trenches",
          "It operates without any hydraulic fluid"
        ],
        correctIndex: 1,
        explanation: "The 360-degree continuous slew ring lets the excavator dig in front and swing to dump without driving back and forth."
      }
    ],
    rememberThis: "BOOM → ARM → BUCKET. Always think from the center outward.",
    safetyFirst: "Before swinging, always verify your counterweight swing area is clear of all ground workers.",
    didYouKnow: "Modern 20-ton excavators exert less ground pressure per square centimeter than an adult human boot.",
    tryThis: "Look at the excavator image above and trace the connection from the boom to the arm and bucket.",
    scenarios: [
      {
        prompt: "You sit in the cab for the first time. Before touching any digging controls, what is your first responsibility?",
        choices: [
          "Rev the engine to maximum RPM immediately",
          "Adjust your seat, fasten seatbelt, check mirrors, and verify ground workers are outside the swing radius",
          "Sound the horn continuously and drive toward the pit",
          "Disengage the hydraulic lock and swing at full speed"
        ],
        correctIndex: 1,
        feedback: "Safety always starts in the cab. Proper seating, seatbelt, mirror checks, and area clearance must always come first."
      }
    ]
  },
  {
    id: "lesson02",
    num: 2,
    code: "02",
    title: "SAFETY FIRST: THE DMR GOLDEN RULES",
    estTime: "4 MINS",
    description: "Master the life-saving rules: 3-point contact, swing radius exclusion zones, and site horn signals.",
    intro: "Heavy machinery does not forgive mistakes. At DMR Earthmoving Training Specialists, our motto is: 'Every operator returns home safe every single shift.' Before learning how to dig, you must master the fundamental safety habits that protect your life and the lives of ground personnel around your machine.",
    visualSvg: `<svg viewBox="0 0 400 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="160" fill="#F8FAFC" rx="8"/>
      <circle cx="200" cy="80" r="50" fill="#FEF3C7" stroke="#F59E0B" stroke-width="3"/>
      <text x="200" y="75" text-anchor="middle" font-size="28">⚠️</text>
      <text x="200" y="105" text-anchor="middle" font-size="11" font-weight="900" fill="#0F172A">DMR ZERO HARM POLICY</text>
      <text x="200" y="145" text-anchor="middle" font-size="9" font-weight="700" fill="#64748B">3-POINT CONTACT • SEATBELT • EXCLUSION ZONES</text>
    </svg>`,
    visualCaption: "DMR Golden Rules: Always maintain 3-point contact and keep people outside the swing radius.",
    sections: [
      {
        title: "The 3-Point Contact Rule",
        content: "When mounting or dismounting the cab, always keep three points of contact: two hands and one foot, or two feet and one hand. Face the machine directly. Never jump from the tracks or cab step.",
        terms: [
          {
            term: "3-POINT CONTACT",
            simple: "Keeping two hands and one foot (or two feet and one hand) on the machine ladders and handrails.",
            whyItMatters: "Slips and falls during mounting/dismounting account for over 35% of all heavy machinery injuries."
          }
        ]
      },
      {
        title: "Standard Site Horn Signals",
        content: "Operators communicate intent with the horn: 1 blast = Starting engine; 2 blasts = Moving forward; 3 blasts = Reversing; 1 long continuous blast = Emergency stop.",
        terms: [
          {
            term: "HORN PROTOCOL",
            simple: "Pre-alerting everyone on site before machine movement.",
            whyItMatters: "Ground workers who hear your horn know the machine is about to move and step clear."
          }
        ]
      }
    ],
    keyPoints: [
      "Always face the machine and use 3-point contact when climbing in or out.",
      "Fasten your seatbelt every time the engine is running.",
      "The working area within maximum reach plus counterweight swing is a strict exclusion zone.",
      "Sound 1 horn blast before starting, 2 before driving forward, 3 before reversing."
    ],
    quickChecks: [
      {
        question: "How should an operator mount and dismount an excavator safely?",
        options: [
          "Jump down from the track shoe directly to the ground",
          "Face the machine and maintain 3 points of contact on handrails and steps",
          "Climb down facing away with both hands full of tools",
          "Slide down the boom cylinder"
        ],
        correctIndex: 1,
        explanation: "Always face the machine with two hands and one foot (or two feet and one hand) firmly placed on sturdy steps and handrails."
      }
    ],
    rememberThis: "Never jump off a machine. Gravity never takes a day off.",
    safetyFirst: "Do not move the excavator if you lose sight of any ground worker who was nearby.",
    didYouKnow: "Over a third of heavy equipment operator injuries occur while entering or exiting the cab.",
    tryThis: "Next time you approach the machine, spot the handrails and steps before putting your boots on the track.",
    scenarios: [
      {
        prompt: "A ground surveyor walks into the edge of your counterweight swing area while you are digging. What should you do?",
        choices: [
          "Continue swinging faster so you finish the cut before they get closer",
          "Immediately stop all machine movement, drop engine RPM, and make direct eye contact until they move clear",
          "Honk angrily and swing past them",
          "Ignore them because they should be watching out for you"
        ],
        correctIndex: 1,
        feedback: "Correct! If anyone enters your exclusion zone, stop all machine movement immediately. Eye contact confirms safety."
      }
    ]
  },
  {
    id: "lesson03",
    num: 3,
    code: "03",
    title: "PRE-START WALKAROUND INSPECTION",
    estTime: "4 MINS",
    description: "Follow the clockwise walkaround routine: check fluids, pins, hoses, and undercarriage before key-on.",
    intro: "A professional operator never starts a machine without doing a thorough walkaround inspection. This 5-minute routine detects minor leaks or loose pins before they turn into multi-thousand-dollar breakdowns or catastrophic job-site failures.",
    visualSvg: `<svg viewBox="0 0 400 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="160" fill="#F8FAFC" rx="8"/>
      <rect x="140" y="45" width="120" height="70" rx="6" fill="#1E293B"/>
      <circle cx="100" cy="80" r="18" fill="#F59E0B"/>
      <text x="100" y="85" text-anchor="middle" font-size="10" font-weight="900" fill="#0F172A">START</text>
      <path d="M 100,55 A 75 75 0 1 1 95,105" fill="none" stroke="#F59E0B" stroke-width="3" stroke-dasharray="6 6"/>
      <text x="200" y="150" text-anchor="middle" font-size="10" font-weight="800" fill="#0F172A">CLOCKWISE WALKAROUND INSPECTION ROUTINE</text>
    </svg>`,
    visualCaption: "Walk clockwise around the machine to inspect tracks, cylinders, fluids, and bucket linkages.",
    sections: [
      {
        title: "The Clockwise Walkaround Routine",
        content: "Start at the cab door, walk clockwise around the machine: inspect the left track, boom cylinders, boom and stick structure, bucket teeth and pins, right track, engine compartment, and counterweight.",
        terms: [
          {
            term: "PRE-START INSPECTION",
            simple: "A structured physical check performed before starting the engine every day.",
            whyItMatters: "Catches oil leaks, damaged hoses, or loose track shoes before the machine is operated."
          }
        ]
      },
      {
        title: "Fluid Levels and Hydraulic Safety",
        content: "Check engine oil dipstick, coolant level, fuel water separator, and hydraulic oil sight glass. Never check hydraulic hoses with bare hands; pressurized pinhole leaks can penetrate skin.",
        terms: [
          {
            term: "HYDRAULIC SIGHT GLASS",
            simple: "The clear viewing tube on the hydraulic tank showing fluid level.",
            whyItMatters: "Running an excavator with low hydraulic oil ruins expensive main hydraulic pumps in minutes."
          }
        ]
      }
    ],
    keyPoints: [
      "Always inspect the machine in a consistent clockwise circle so nothing is missed.",
      "Check engine oil, coolant, hydraulic fluid sight glass, and track tension daily.",
      "Inspect bucket teeth and linkage pins for wear, cracks, or missing retainers.",
      "Never use bare hands to search for hydraulic leaks under pressure; use cardboard or wood."
    ],
    quickChecks: [
      {
        question: "Why should an operator NEVER use bare hands to search for suspected hydraulic leaks?",
        options: [
          "Hydraulic oil makes your fingerprints permanent",
          "High-pressure hydraulic fluid can penetrate human skin causing severe injury",
          "Hydraulic fluid is radioactive",
          "Hands get too cold touching steel pipes"
        ],
        correctIndex: 1,
        explanation: "High-pressure oil from a pinhole leak can pierce skin like a hypodermic needle. Always use cardboard or wood to check leaks."
      }
    ],
    rememberThis: "Inspect clockwise, every time, without skipping a step.",
    safetyFirst: "Tag out the machine and report any major fluid leak or cracked weld before starting the engine.",
    didYouKnow: "Hydraulic systems operate at over 300 bar (4,300 PSI)—over 100 times car tire pressure!",
    tryThis: "Locate the hydraulic oil sight gauge on the machine and confirm the oil level is between the marks.",
    scenarios: [
      {
        prompt: "During your morning walkaround, you find a bucket pin retainer bolt is completely missing. What do you do?",
        choices: [
          "Operate anyway and hope the pin doesn't slide out",
          "Do not start work; notify the workshop fitter to install a new retainer bolt immediately",
          "Stick a twig in the hole and start digging",
          "Hammer the pin with a rock"
        ],
        correctIndex: 1,
        feedback: "Correct! Operating without a pin retainer bolt will cause the bucket pin to back out, dropping the bucket and causing major damage."
      }
    ]
  },
  {
    id: "lesson04",
    num: 4,
    code: "04",
    title: "CAB FAMILIARIZATION & CONTROLS",
    estTime: "4 MINS",
    description: "Step into the command center: seat adjustment, display monitors, and the hydraulic safety lock lever.",
    intro: "The operator's cab is designed for safety, comfort, and precise machine control. Taking 2 minutes to set up your seat, mirrors, and climate controls before touching a joystick ensures you stay alert and pain-free through a 9-hour earthmoving shift.",
    visualSvg: `<svg viewBox="0 0 400 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="160" fill="#F8FAFC" rx="8"/>
      <rect x="70" y="40" width="60" height="80" rx="8" fill="#1E293B"/>
      <circle cx="100" cy="55" r="12" fill="#F59E0B"/>
      <rect x="230" y="50" width="20" height="70" rx="4" fill="#DC2626"/>
      <text x="240" y="40" text-anchor="middle" font-size="9" font-weight="900" fill="#DC2626">HYDRAULIC LOCK</text>
      <text x="200" y="150" text-anchor="middle" font-size="10" font-weight="800" fill="#0F172A">CAB ENVIRONMENT & HYDRAULIC PILOT LOCKOUT</text>
    </svg>`,
    visualCaption: "The hydraulic lock lever on your left must be locked UP whenever entering or exiting the cab.",
    sections: [
      {
        title: "The Hydraulic Pilot Lockout Lever",
        content: "Located on the left console next to the door. When pushed DOWN (forward), hydraulics are LIVE and joysticks respond. When pulled UP (back), all pilot hydraulics are locked dead. Always pull it UP before getting out of your seat.",
        terms: [
          {
            term: "PILOT LOCKOUT LEVER",
            simple: "The red or orange lever on your left that disables all joystick and travel controls.",
            whyItMatters: "Prevents accidental joystick contact from swinging the machine when your body moves in the cab."
          }
        ]
      },
      {
        title: "Setting Up Your Cockpit",
        content: "Adjust your suspension seat for your body weight. Adjust wrist rests so your forearms rest comfortably while fingers wrap gently around the joysticks. Check that all mirrors show both sides and the rear counterweight edge.",
        terms: [
          {
            term: "ERGONOMICS",
            simple: "Adjusting controls and seating to prevent muscle fatigue and strain.",
            whyItMatters: "A comfortable operator makes faster, cleaner, and safer moves all day."
          }
        ]
      }
    ],
    keyPoints: [
      "The hydraulic lockout lever is your primary safety barrier against unintended machine movement.",
      "Adjust the suspension seat to your weight to protect your spine from harsh shock loads.",
      "Adjust wrist rests so your forearms rest level without reaching or hunching.",
      "Monitor the instrument cluster for engine coolant temperature, hydraulic temperature, and fuel levels."
    ],
    quickChecks: [
      {
        question: "What does raising (pulling UP) the hydraulic lock lever do?",
        options: [
          "It shifts the excavator into high-speed road travel mode",
          "It disconnects pilot hydraulic pressure, locking all joysticks and travel controls safe",
          "It opens the cab sunroof",
          "It turns off the air conditioning"
        ],
        correctIndex: 1,
        explanation: "Pulling UP the hydraulic lock lever isolates the pilot circuit so touching a joystick cannot move any boom, bucket, or track."
      }
    ],
    rememberThis: "Seatbelt clicked. Lock lever up until ready to work.",
    safetyFirst: "Never leave the cab with the engine running and the hydraulic lock lever engaged.",
    didYouKnow: "Modern excavator cabs are pressurized slightly above atmospheric pressure to keep dust outside.",
    tryThis: "Sit in the seat, adjust your suspension dial to your weight, and check that your wrists rest comfortably.",
    scenarios: [
      {
        prompt: "You need to reach down to pick up a fallen clipboard from the cab floor while the engine is running. What should you do first?",
        choices: [
          "Reach down quickly while keeping your hands on the joysticks",
          "Pull the hydraulic safety lock lever UP to locked position before bending down",
          "Turn the machine off and abandon it",
          "Step on both travel pedals"
        ],
        correctIndex: 1,
        feedback: "Correct! Raising the hydraulic lock lever ensures that as your body bends down, bumping a joystick cannot cause a dangerous machine movement."
      }
    ]
  },
  {
    id: "lesson05",
    num: 5,
    code: "05",
    title: "ISO JOYSTICK PATTERN MASTERY",
    estTime: "5 MINS",
    description: "Learn the international standard joystick pattern: Left hand controls Swing & Arm; Right hand controls Boom & Bucket.",
    intro: "Excavator joysticks use the ISO (International Organization for Standardization) control pattern. Master this layout until it becomes muscle memory: your Left Hand controls the machine's body (Swing) and outreach (Arm/Stick), while your Right Hand controls vertical elevation (Boom) and cutting (Bucket).",
    visualSvg: `<svg viewBox="0 0 400 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="160" fill="#F8FAFC" rx="8"/>
      <!-- Left Joystick -->
      <circle cx="110" cy="75" r="42" fill="#FEF3C7" stroke="#F59E0B" stroke-width="2"/>
      <text x="110" y="48" text-anchor="middle" font-size="8" font-weight="900" fill="#92400E">ARM OUT</text>
      <text x="110" y="110" text-anchor="middle" font-size="8" font-weight="900" fill="#92400E">ARM IN (CROWD)</text>
      <text x="78" y="78" text-anchor="middle" font-size="7" font-weight="900" fill="#92400E">SLEW L</text>
      <text x="142" y="78" text-anchor="middle" font-size="7" font-weight="900" fill="#92400E">SLEW R</text>
      <text x="110" y="132" text-anchor="middle" font-size="9" font-weight="900" fill="#0F172A">LEFT JOYSTICK</text>
      <!-- Right Joystick -->
      <circle cx="290" cy="75" r="42" fill="#E0F2FE" stroke="#0284C7" stroke-width="2"/>
      <text x="290" y="48" text-anchor="middle" font-size="8" font-weight="900" fill="#0369A1">BOOM DOWN</text>
      <text x="290" y="110" text-anchor="middle" font-size="8" font-weight="900" fill="#0369A1">BOOM UP</text>
      <text x="258" y="78" text-anchor="middle" font-size="7" font-weight="900" fill="#0369A1">CURL IN</text>
      <text x="322" y="78" text-anchor="middle" font-size="7" font-weight="900" fill="#0369A1">DUMP OUT</text>
      <text x="290" y="132" text-anchor="middle" font-size="9" font-weight="900" fill="#0F172A">RIGHT JOYSTICK</text>
    </svg>`,
    visualCaption: "ISO Pattern: Left = Slew & Arm (Stick) | Right = Boom & Bucket.",
    sections: [
      {
        title: "Left Joystick: Swing and Arm (Stick)",
        content: "Push forward = Arm Out (reaches away); Pull back = Arm In (crowds toward cab); Push left = Slew Left; Push right = Slew Right.",
        terms: [
          {
            term: "CROWD (ARM IN)",
            simple: "Pulling the arm toward the excavator to draw the bucket through the soil.",
            whyItMatters: "The crowd stroke is where 70% of your digging energy is applied."
          }
        ]
      },
      {
        title: "Right Joystick: Boom and Bucket",
        content: "Push forward = Boom Down (lowers into trench); Pull back = Boom Up (lifts toward sky); Push left = Bucket Curl (closes teeth); Push right = Bucket Dump (opens teeth to dump payload).",
        terms: [
          {
            term: "BUCKET CURL",
            simple: "Pivoting the bucket teeth inward toward the cab.",
            whyItMatters: "Curling generates the sharp cutting force that slices through hard soil."
          }
        ]
      }
    ],
    keyPoints: [
      "LEFT JOYSTICK: Forward = Arm Out | Back = Arm In | Left = Slew Left | Right = Slew Right.",
      "RIGHT JOYSTICK: Forward = Boom Down | Back = Boom Up | Left = Bucket Curl | Right = Bucket Dump.",
      "Always feather joysticks smoothly like musical instruments; never slam them against the stops.",
      "Combining diagonal joystick movements allows simultaneous boom lift, swing, and bucket curl."
    ],
    quickChecks: [
      {
        question: "In the standard ISO control pattern, what happens when you pull the RIGHT joystick straight back toward you?",
        options: [
          "The bucket dumps open",
          "The boom lifts upward",
          "The excavator swings to the left",
          "The tracks drive in reverse"
        ],
        correctIndex: 1,
        explanation: "Right joystick backward lifts the boom UP. Right joystick forward pushes the boom DOWN."
      }
    ],
    rememberThis: "Left: Slew & Stick. Right: Boom & Bucket.",
    safetyFirst: "Before touching joysticks, always check that everyone is clear of the swing path.",
    didYouKnow: "Caterpillar, Komatsu, Volvo, Hitachi, and Hyundai all default to the ISO joystick standard worldwide.",
    tryThis: "Rest your hands on your knees and practice the motion: Right hand back = lift boom; Left hand back = crowd arm; Right hand left = curl bucket.",
    scenarios: [
      {
        prompt: "You want to lift the boom high while swinging right to dump into a truck. Which diagonal movements do you combine?",
        choices: [
          "Left joystick forward-left and Right joystick forward-right",
          "Right joystick pulled backward (Boom Up) and Left joystick pushed right (Slew Right)",
          "Push both joysticks all the way forward",
          "Step on the left travel pedal only"
        ],
        correctIndex: 1,
        feedback: "Correct! Pulling the right joystick back lifts the boom, while pushing the left joystick right slews the cab toward the truck."
      }
    ]
  },
  {
    id: "lesson06",
    num: 6,
    code: "06",
    title: "TRACKING & TRAVEL DISCIPLINE",
    estTime: "4 MINS",
    description: "Position drive sprockets at the rear, navigate slopes safely, and steer with foot pedals and hand levers.",
    intro: "Driving a 21-ton crawler excavator requires discipline. Steering controls are linked directly to the undercarriage. If your cab is turned around 180 degrees, pushing the pedals forward will make the machine move backward relative to your face! Always check sprocket orientation before tracking.",
    visualSvg: `<svg viewBox="0 0 400 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="160" fill="#F8FAFC" rx="8"/>
      <!-- Travel Direction Indicator -->
      <rect x="80" y="55" width="240" height="50" rx="6" fill="#1E293B"/>
      <!-- Front Idlers (Round) -->
      <circle cx="95" cy="80" r="18" fill="#64748B"/>
      <text x="95" y="84" text-anchor="middle" font-size="8" font-weight="900" fill="#FFFFFF">IDLER</text>
      <!-- Rear Drive Sprockets (Toothed) -->
      <circle cx="305" cy="80" r="18" fill="#F59E0B"/>
      <text x="305" y="84" text-anchor="middle" font-size="8" font-weight="900" fill="#0F172A">SPROCKET</text>
      <text x="200" y="42" text-anchor="middle" font-size="9" font-weight="800" fill="#16A34A">FORWARD TRAVEL DIRECTION →</text>
      <text x="200" y="145" text-anchor="middle" font-size="10" font-weight="800" fill="#0F172A">DRIVE SPROCKETS AT THE REAR FOR FORWARD TRACKING</text>
    </svg>`,
    visualCaption: "Position drive sprockets behind you during forward travel to protect final drives.",
    sections: [
      {
        title: "The Golden Tracking Rule: Sprockets at the Rear",
        content: "Always position the drive sprockets at the rear when traveling forward. The round idler wheels should be in front. This pulls the top track chain taut, preventing track derailment and shielding drive gearboxes from frontal impacts.",
        terms: [
          {
            term: "DRIVE SPROCKET",
            simple: "The toothed wheel powered by the hydraulic travel motor that drives the track chain.",
            whyItMatters: "Positioning it at the rear protects the hydraulic motors and provides smoother tracking."
          }
        ]
      },
      {
        title: "Traveling on Slopes",
        content: "When climbing or descending steep slopes, always point the machine straight up or straight down—never travel across a slope sideways. Keep the bucket 20 to 30 cm off the ground so you can drop it instantly as an anchor if you slide.",
        terms: [
          {
            term: "SLOPE TRACKING",
            simple: "Driving straight up or down a bank rather than sideways.",
            whyItMatters: "Prevents the excavator from tipping sideways or rolling down an embankment."
          }
        ]
      }
    ],
    keyPoints: [
      "Drive sprockets must always be at the rear when traveling long distances forward.",
      "Before moving, look at the track direction indicator arrow on the undercarriage frame.",
      "When climbing slopes, travel straight up or down—never turn or travel sideways on a grade.",
      "Keep the bucket low (20–30 cm above ground) while tracking so it can be dropped as an emergency brake."
    ],
    quickChecks: [
      {
        question: "Where should the drive sprockets be positioned when traveling forward across a job site?",
        options: [
          "At the front under the boom",
          "At the rear behind the cab",
          "Removed and stored in the toolbox",
          "It makes no difference whatsoever"
        ],
        correctIndex: 1,
        explanation: "Sprockets at the rear keep track chains under proper tension along the top and protect final drives from rocks and debris."
      }
    ],
    rememberThis: "Sprockets at the rear. Look down at your tracks before tracking.",
    safetyFirst: "Always sound 2 horn blasts before moving forward and 3 before tracking in reverse.",
    didYouKnow: "Excavator final drive gearboxes contain planetary gears that multiply hydraulic motor torque by up to 50 times.",
    tryThis: "Look out the cab floor window and locate the track direction arrow cast into the frame.",
    scenarios: [
      {
        prompt: "You are tracking down a steep, slippery soil slope. The tracks begin to slide forward. What is your immediate action?",
        choices: [
          "Put travel levers in high-speed rabbit mode and close your eyes",
          "Drop the bucket flat into the ground immediately and use down pressure to stop the slide",
          "Jump out of the moving cab",
          "Swing the counterweight violently sideways"
        ],
        correctIndex: 1,
        feedback: "Correct! Lowering the bucket directly into the soil acts as an emergency anchor, bringing the machine to a safe, controlled stop."
      }
    ]
  },
  {
    id: "lesson07",
    num: 7,
    code: "07",
    title: "BASIC EXCAVATION & 90-DEGREE GEOMETRY",
    estTime: "5 MINS",
    description: "Unlock maximum hydraulic breakout force: why the 90° angle between boom and stick is king.",
    intro: "Excavation is not about brute engine force; it is about hydraulic geometry. An operator who understands the 90-degree leverage angle cuts twice as much earth in an hour while burning 30% less diesel than an untrained operator who fights the machine.",
    visualSvg: `<svg viewBox="0 0 400 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="160" fill="#F8FAFC" rx="8"/>
      <!-- Boom and Arm at 90 degrees -->
      <line x1="120" y1="110" x2="200" y2="40" stroke="#F59E0B" stroke-width="8" stroke-linecap="round"/>
      <line x1="200" y1="40" x2="280" y2="100" stroke="#B45309" stroke-width="6" stroke-linecap="round"/>
      <!-- 90 Degree Angle Arc -->
      <path d="M 185,55 L 200,68 L 213,53" fill="none" stroke="#DC2626" stroke-width="3"/>
      <text x="200" y="30" text-anchor="middle" font-size="12" font-weight="900" fill="#DC2626">90° OPTIMAL POWER</text>
      <text x="200" y="145" text-anchor="middle" font-size="10" font-weight="800" fill="#0F172A">MAXIMUM BREAKOUT FORCE OCCURS AT 90° BOOM-TO-STICK ANGLE</text>
    </svg>`,
    visualCaption: "Peak hydraulic cutting power occurs when boom and arm form an approximate 90-degree angle.",
    sections: [
      {
        title: "The 90-Degree Power Rule",
        content: "Maximum breakout force occurs when the arm cylinder is perpendicular to the arm beam—which happens when the arm and boom form an approximate 90-degree angle. Never try to dig hard ground with the stick stretched all the way out.",
        terms: [
          {
            term: "BREAKOUT FORCE",
            simple: "The maximum cutting power the bucket teeth can exert to penetrate compacted soil.",
            whyItMatters: "Working near 90 degrees lets you slice through hard ground without stalling the engine."
          }
        ]
      },
      {
        title: "The Smooth 3-Action Digging Cycle",
        content: "A master digging cycle combines three movements seamlessly: 1. Lower boom so teeth engage ground; 2. Crowd arm inward while feathering bucket curl; 3. Lift boom as bucket fills to clear the trench in one fluid arc.",
        terms: [
          {
            term: "FEATHERING",
            simple: "Moving joysticks smoothly and gradually rather than slamming full stroke.",
            whyItMatters: "Feathering prevents hydraulic shock waves that burst hoses and shake the cab."
          }
        ]
      }
    ],
    keyPoints: [
      "Peak hydraulic leverage occurs when the boom and arm form a 90-degree angle.",
      "Take uniform layers (slices) of soil rather than jamming the bucket deep in one violent bite.",
      "Curl the bucket teeth inward continuously as the arm draws material toward the machine.",
      "Lift the boom smoothly as the bucket fills to avoid dragging a heavy payload through soil."
    ],
    quickChecks: [
      {
        question: "At what angle between the boom and the arm does an excavator achieve its maximum digging force?",
        options: [
          "180 degrees (fully stretched straight out)",
          "Approximately 90 degrees",
          "15 degrees (pinched completely against the cab)",
          "It produces the same power at all angles"
        ],
        correctIndex: 1,
        explanation: "At approximately 90 degrees, the hydraulic cylinders achieve their maximum mechanical leverage and cutting force."
      }
    ],
    rememberThis: "90 degrees is peak power. Take uniform slices, not violent bites.",
    safetyFirst: "Never use the bucket as a sledgehammer to smash rocks or concrete.",
    didYouKnow: "A skilled operator can fill a bucket in 6 to 8 seconds using less than a cup of diesel fuel.",
    tryThis: "Watch an experienced operator and notice how their boom, arm, and bucket all move together in a smooth curve.",
    scenarios: [
      {
        prompt: "You reach out to maximum distance and push the bucket into hard rock. The engine barks and hydraulic relief squeals. What should you do?",
        choices: [
          "Keep holding the joystick until the engine dies",
          "Ease off the control, reposition the bucket closer where the arm is near 90°, and take shallower cuts",
          "Slam the joystick forward and back repeatedly",
          "Rev the engine higher"
        ],
        correctIndex: 1,
        feedback: "Correct! Easing off and repositioning closer to 90 degrees protects the hydraulic relief valves and cuts the rock cleanly."
      }
    ]
  },
  {
    id: "lesson08",
    num: 8,
    code: "08",
    title: "TRENCHING & BENCHING TECHNIQUES",
    estTime: "5 MINS",
    description: "Maintain straight trench alignments, manage cave-in risks, set correct bench heights, and manage spoil piles.",
    intro: "Trenching is the true test of an excavator operator's skill. Whether laying municipal water lines in Harare or drainage culverts on a mining site, a clean, flat-bottom trench with stable benching keeps ground workers alive and prevents trench collapses.",
    visualSvg: `<svg viewBox="0 0 400 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="160" fill="#F8FAFC" rx="8"/>
      <!-- Trench Profile -->
      <polygon points="40,40 140,40 160,110 240,110 260,40 360,40 360,130 40,130" fill="#E2E8F0" stroke="#94A3B8" stroke-width="2"/>
      <text x="200" y="90" text-anchor="middle" font-size="10" font-weight="800" fill="#0F172A">TRENCH FLOOR</text>
      <!-- Spoil Pile on Left with Buffer Zone -->
      <polygon points="50,40 90,15 130,40" fill="#F59E0B"/>
      <text x="90" y="32" text-anchor="middle" font-size="7" font-weight="900" fill="#0F172A">SPOIL PILE</text>
      <text x="200" y="148" text-anchor="middle" font-size="10" font-weight="800" fill="#0F172A">TRENCHING: MINIMUM 1.0M SPOIL BUFFER FROM EXCAVATION EDGE</text>
    </svg>`,
    visualCaption: "Always keep spoil piles at least 1.0 meter away from the trench lip to prevent cave-ins.",
    sections: [
      {
        title: "Trench Collapse Prevention",
        content: "Soil weighs over 1.6 tons per cubic meter. Spoil piles placed too close to the trench lip put immense downward pressure on trench walls, triggering deadly collapses. Always maintain a minimum 1.0-meter buffer zone.",
        terms: [
          {
            term: "SPOIL PILE",
            simple: "The pile of dug earth placed beside the trench.",
            whyItMatters: "Keeping spoil back from the edge prevents dirt from rolling or pressing down into the trench."
          }
        ]
      },
      {
        title: "Benching and Machine Placement",
        content: "Always position the excavator inline with the trench, not sideways. Work backward as you dig so you are always sitting on solid, undisturbed ground rather than over dug soil.",
        terms: [
          {
            term: "BENCHING",
            simple: "Stepping trench walls back like stairs to prevent slope failure.",
            whyItMatters: "Creates a stable excavation that protects pipe layers working at the bottom."
          }
        ]
      }
    ],
    keyPoints: [
      "Align machine tracks parallel with the trench line and step backward away from the cut.",
      "Place excavated spoil at least 1 meter back from the edge of the trench lip.",
      "Step or batter trench walls according to soil type (rock, clay, or loose sand).",
      "Never swing a loaded bucket over pipe layers or ground workers working inside a trench."
    ],
    quickChecks: [
      {
        question: "How far from the trench edge should an operator place excavated spoil piles to prevent cave-ins?",
        options: [
          "Right on the very edge so it's easy to push back in",
          "At least 1.0 meter (or more) back from the trench lip",
          "Inside the trench with the workers",
          "On top of the cab"
        ],
        correctIndex: 1,
        explanation: "Maintaining a minimum 1.0-meter setback prevents heavy spoil weight from causing a catastrophic trench wall collapse."
      }
    ],
    rememberThis: "Spoil 1 meter back. Tracks inline with the trench.",
    safetyFirst: "If you see cracks forming along the trench edge, move the machine back immediately.",
    didYouKnow: "A single cubic meter of dry soil weighs over 1.6 tons—as much as a Toyota Hilux!",
    tryThis: "Sight a straight line across your tracks to an alignment peg before starting your trench cut.",
    scenarios: [
      {
        prompt: "You notice hairline tension cracks opening on the ground beside your right track while trenching deep in wet clay. What should you do?",
        choices: [
          "Keep digging deeper to finish before the wall gives way",
          "Stop immediately, swing the boom away from the edge, lower the bucket, and carefully track back to solid ground",
          "Ask a ground worker to look down into the crack",
          "Speed up the swing cycle"
        ],
        correctIndex: 1,
        feedback: "Correct! Hairline cracks indicate immediate trench bank failure. Retract the work equipment and track back to solid ground safely."
      }
    ]
  },
  {
    id: "lesson09",
    num: 9,
    code: "09",
    title: "TRUCK LOADING & MATERIAL HANDLING",
    estTime: "5 MINS",
    description: "Position haul trucks, minimize swing angles (60–90°), and avoid swinging over truck cabs.",
    intro: "Truck loading is the primary production metric of earthmoving operations. An efficient excavator operator loads a 20-ton tipper in four to five passes with minimal swing angle, never spilling rocks and never swinging the bucket over the truck driver's cab.",
    visualSvg: `<svg viewBox="0 0 400 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="160" fill="#F8FAFC" rx="8"/>
      <!-- Excavator on Bench -->
      <circle cx="120" cy="80" r="28" fill="#F59E0B"/>
      <text x="120" y="84" text-anchor="middle" font-size="9" font-weight="900" fill="#0F172A">EXC</text>
      <!-- Haul Truck Below -->
      <rect x="250" y="55" width="80" height="45" rx="4" fill="#1E293B"/>
      <text x="290" y="80" text-anchor="middle" font-size="9" font-weight="800" fill="#FFFFFF">TRUCK</text>
      <!-- Swing Arc Angle -->
      <path d="M 148,80 A 130 130 0 0 1 240,65" fill="none" stroke="#16A34A" stroke-width="3" stroke-dasharray="4 4"/>
      <text x="190" y="55" text-anchor="middle" font-size="9" font-weight="900" fill="#16A34A">60° - 90° OPTIMAL SWING</text>
      <text x="200" y="145" text-anchor="middle" font-size="10" font-weight="800" fill="#0F172A">POSITION BENCH AND TRUCK FOR 60° - 90° SWING ANGLE</text>
    </svg>`,
    visualCaption: "Keep swing angles between 60° and 90° for maximum tons per hour and lowest fuel burn.",
    sections: [
      {
        title: "Optimal 60° to 90° Swing Geometry",
        content: "Position the haul truck so your swing angle from the digging face to the truck bed is between 60 and 90 degrees. Slewing 180 degrees cuts production in half and wastes immense fuel.",
        terms: [
          {
            term: "CYCLE TIME",
            simple: "The time taken to dig, swing, dump, and return to the face.",
            whyItMatters: "Shaving 3 seconds off a 20-second cycle adds 40 extra truckloads per shift."
          }
        ]
      },
      {
        title: "Loading Sequence and Cab Protection",
        content: "Place fine material first to cushion the steel truck floor, then load larger rocks. NEVER swing the bucket over the truck cab, whether the driver is seated inside or standing outside.",
        terms: [
          {
            term: "NEVER OVER CAB",
            simple: "Swinging over the truck body, never over the driver's cab.",
            whyItMatters: "Spilling a boulder onto a truck cab can crush the cab and kill the driver."
          }
        ]
      }
    ],
    keyPoints: [
      "Work from an elevated bench height roughly equal to the haul truck sideboard height.",
      "Limit your swing angle to between 60 and 90 degrees for optimal fuel and cycle time.",
      "NEVER swing the bucket over the haul truck cab under any circumstances.",
      "Center the load evenly in the truck bed; do not overload one side or the tail."
    ],
    quickChecks: [
      {
        question: "What is the critical rule regarding the truck driver's cab during excavator loading?",
        options: [
          "Tap the truck cab roof with the bucket to signal when full",
          "NEVER swing the bucket or payload over the truck cab",
          "Rest the bucket on the hood while resting",
          "Only swing over the cab if the driver waves you on"
        ],
        correctIndex: 1,
        explanation: "Absolute DMR safety rule: NEVER swing a loaded or empty bucket over the truck cab. Always enter from the rear or side."
      }
    ],
    rememberThis: "60 to 90 degrees swing. Never swing over the cab.",
    safetyFirst: "Sound 1 horn blast when the truck is loaded and safe to pull away.",
    didYouKnow: "A 20-ton excavator moving 150 tons an hour burns about 14 liters of diesel fuel per hour.",
    tryThis: "Picture an analog clock face: if you dig at 12 o'clock, place the truck at 2 o'clock or 10 o'clock.",
    scenarios: [
      {
        prompt: "A new tipper driver reverses into your loading area at an awkward 150-degree angle from the face. What should you do?",
        choices: [
          "Accept the bad angle and swing 150 degrees all day",
          "Sound the horn (1 blast) and use hand signals to guide the truck into the proper 60-90 degree spot",
          "Throw rocks at the truck tires",
          "Drive the excavator away"
        ],
        correctIndex: 1,
        feedback: "Correct! The excavator operator directs the loading area. Reposition the truck for safe, efficient loading."
      }
    ]
  },
  {
    id: "lesson10",
    num: 10,
    code: "10",
    title: "WORKING AROUND GROUND WORKERS",
    estTime: "4 MINS",
    description: "Establish eye contact, enforce exclusion zones, recognize spotter signals, and manage blind spots.",
    intro: "On an active site, ground workers, pipe layers, surveyors, and banksmen work near the excavator. As the operator, you have the ultimate legal and moral responsibility to protect every life around your machine.",
    visualSvg: `<svg viewBox="0 0 400 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="160" fill="#F8FAFC" rx="8"/>
      <circle cx="200" cy="80" r="60" fill="#FEE2E2" stroke="#DC2626" stroke-width="2" stroke-dasharray="6 6"/>
      <circle cx="200" cy="80" r="16" fill="#0F172A"/>
      <text x="200" y="84" text-anchor="middle" font-size="8" font-weight="900" fill="#F59E0B">EXC</text>
      <circle cx="310" cy="80" r="10" fill="#16A34A"/>
      <line x1="216" y1="80" x2="300" y2="80" stroke="#16A34A" stroke-width="2" stroke-dasharray="3 3"/>
      <text x="310" y="105" text-anchor="middle" font-size="8" font-weight="900" fill="#16A34A">SPOTTER</text>
      <text x="200" y="150" text-anchor="middle" font-size="9" font-weight="900" fill="#DC2626">EXCLUSION ZONE: MANDATORY DIRECT EYE CONTACT</text>
    </svg>`,
    visualCaption: "Never move if you lose sight of ground personnel. Eye contact is the ultimate lifesaver.",
    sections: [
      {
        title: "The Golden Rule of Eye Contact",
        content: "If a ground worker cannot see your eyes in your mirrors or through the cab windshield, you CANNOT see them. Never assume where someone walked.",
        terms: [
          {
            term: "DIRECT EYE CONTACT",
            simple: "Looking directly at a ground worker before moving controls.",
            whyItMatters: "Confirms both the operator and the worker are aware of each other."
          }
        ]
      },
      {
        title: "Designated Banksman / Spotter",
        content: "Only obey signals from one designated, high-visibility spotter. The only exception: an emergency stop signal (crossed arms or clenched fist) from ANYONE must be obeyed instantly.",
        terms: [
          {
            term: "BANKSMAN (SPOTTER)",
            simple: "The trained person on the ground directing machine movements.",
            whyItMatters: "Eliminates confusion from multiple people shouting competing directions."
          }
        ]
      }
    ],
    keyPoints: [
      "The Golden Rule: 'If you cannot see the operator's eyes, they cannot see you.'",
      "If you lose sight of a ground worker who was nearby, STOP ALL MOVEMENT IMMEDIATELY.",
      "The rear counterweight arc is the #1 blind-spot hazard zone on construction sites.",
      "An emergency stop signal from ANYONE on site must be obeyed instantly."
    ],
    quickChecks: [
      {
        question: "What should an excavator operator do the instant they lose visual contact with a nearby ground worker?",
        options: [
          "Speed up to finish the cut quickly",
          "Immediately STOP all machine movement and swing until the worker is re-located",
          "Close their eyes and honk",
          "Keep digging and look later"
        ],
        correctIndex: 1,
        explanation: "Absolute DMR rule! Never guess where someone went. Stop immediately, place controls in neutral, and locate them."
      }
    ],
    rememberThis: "Lost sight? Stop instantly. Eye contact saves lives.",
    safetyFirst: "Do not allow anyone to stand under the boom or bucket under any circumstance.",
    didYouKnow: "Rearview cameras and travel alarms are great aids, but direct human eye contact remains the most reliable safety link.",
    tryThis: "Sit in the cab and have a classmate walk around the perimeter to map your exact blind spots.",
    scenarios: [
      {
        prompt: "You are slewing toward a spoil pile when you glimpse a surveyor stepping into your rear counterweight radius. What do you do?",
        choices: [
          "Continue slewing at full speed",
          "Stop the slew instantly, drop engine revs, lock hydraulics, and confirm the surveyor moves to safe ground",
          "Push them with the counterweight",
          "Swing faster to clear them"
        ],
        correctIndex: 1,
        feedback: "Correct! Slew stopped instantly. Counterweight crush injuries are fatal; an operator must react in a fraction of a second."
      }
    ]
  },
  {
    id: "lesson11",
    num: 11,
    code: "11",
    title: "BASIC MACHINE CARE & SHUTDOWN",
    estTime: "4 MINS",
    description: "Keep your machine alive: daily greasing schedules, turbo cool-down idling, and proper shutdown SOPs.",
    intro: "A machine that is greased daily and cooled down properly runs for 15,000 hours without rebuilds. DMR operators take pride in machinery maintenance: 'Grease is cheaper than steel pins.'",
    visualSvg: `<svg viewBox="0 0 400 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="160" fill="#F8FAFC" rx="8"/>
      <circle cx="120" cy="80" r="45" fill="#FEF3C7" stroke="#F59E0B" stroke-width="3"/>
      <text x="120" y="75" text-anchor="middle" font-size="14" font-weight="900" fill="#92400E">3-5</text>
      <text x="120" y="92" text-anchor="middle" font-size="8" font-weight="800" fill="#92400E">MINUTES IDLE</text>
      <rect x="230" y="60" width="120" height="35" rx="4" fill="#1E293B"/>
      <circle cx="330" cy="77" r="6" fill="#F59E0B"/>
      <text x="290" y="82" text-anchor="middle" font-size="9" font-weight="900" fill="#FFFFFF">DAILY GREASING</text>
      <text x="200" y="145" text-anchor="middle" font-size="9" font-weight="800" fill="#0F172A">TURBO COOL-DOWN & DAILY LUBRICATION PROCEDURES</text>
    </svg>`,
    visualCaption: "Always allow 3 to 5 minutes of low-idle turbo cool-down before key shutdown. Grease bucket pins daily.",
    sections: [
      {
        title: "Daily Greasing Routine",
        content: "Bucket linkage pins and arm pivot pins endure immense dynamic shocks. Grease them every 10 hours until clean grease purges from the pin seal. Wipe grease nipples clean before attaching the gun.",
        terms: [
          {
            term: "GREASE PURGE",
            simple: "Pumping grease until fresh grease emerges around the pin bushing.",
            whyItMatters: "Pushes dirt and grit out of the joint, preventing metal-on-metal grinding."
          }
        ]
      },
      {
        title: "Turbo Cool-Down Idling",
        content: "Turbochargers spin at over 100,000 RPM at extreme exhaust temperatures. Always idle the diesel engine for 3 to 5 minutes before turning off the key so oil continues flowing to cool the turbo bearings.",
        terms: [
          {
            term: "TURBO COOL-DOWN",
            simple: "Running the engine at low idle for 3 to 5 minutes before shutting off.",
            whyItMatters: "Prevents lubricating oil from coking (baking) into carbon on hot turbo bearings."
          }
        ]
      }
    ],
    keyPoints: [
      "Grease bucket linkage pins and arm pivot pins every 10 hours of operation until fresh grease purges.",
      "Allow turbocharged diesel engines to idle for 3 to 5 minutes before shutting off the key.",
      "Clean track frames with a shovel at shift end so dried mud doesn't seize carrier rollers.",
      "Turn off the battery master disconnect switch when leaving the machine parked overnight."
    ],
    quickChecks: [
      {
        question: "Why must a turbocharged diesel engine idle for 3 to 5 minutes before you turn off the key?",
        options: [
          "To burn up remaining diesel in the fuel line",
          "To allow lubricating oil to cool down the red-hot turbocharger bearings",
          "To recharge the phone battery",
          "To warm up the hydraulic oil"
        ],
        correctIndex: 1,
        explanation: "Shutting off immediately bakes lubricating oil on red-hot turbo bearings, destroying the turbocharger."
      }
    ],
    rememberThis: "Grease is cheaper than steel pins. 3 minutes idle before key-off.",
    safetyFirst: "Always ground the bucket flat on solid earth before turning off the engine.",
    didYouKnow: "Excavator bucket pins withstand over 2,000 tons of dynamic force every working shift.",
    tryThis: "Locate the battery master switch on your excavator and practice the full end-of-shift shutdown.",
    scenarios: [
      {
        prompt: "You finish a 9-hour earthmoving shift. What is the correct sequence to shut down the excavator?",
        choices: [
          "Kill the key while moving at full speed",
          "Park on flat ground, ground bucket flat, idle 3-5 mins, turn off key, raise hydraulic lock lever, isolate battery master switch",
          "Leave the engine running all night",
          "Park on a 40-degree slope with bucket hanging in the air"
        ],
        correctIndex: 1,
        feedback: "Correct! Flat ground, grounded attachments, turbo cool-down idle, ignition off, hydraulic safety lockout, battery isolated."
      }
    ]
  },
  {
    id: "lesson12",
    num: 12,
    code: "12",
    title: "OPERATOR KNOWLEDGE CHECK (FINAL ASSESSMENT)",
    estTime: "6 MINS",
    description: "Comprehensive 12-question evaluation testing controls, safety rules, inspection SOPs, and machine geometry.",
    intro: "Welcome to your final DMR Excavator Academy knowledge check! Passing this assessment confirms your theoretical preparation for in-person practical yard training at DMR Earthmoving Training Specialists in Harare.",
    visualSvg: `<svg viewBox="0 0 400 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="160" fill="#F8FAFC" rx="8"/>
      <circle cx="200" cy="75" r="48" fill="#FEF3C7" stroke="#F59E0B" stroke-width="4"/>
      <polygon points="200,40 212,65 240,65 218,82 226,108 200,92 174,108 182,82 160,65 188,65" fill="#F59E0B"/>
      <text x="200" y="145" text-anchor="middle" font-size="10" font-weight="900" fill="#0F172A">DMR EXCAVATOR OPERATOR SKILLS PASSPORT</text>
    </svg>`,
    visualCaption: "Complete all questions with 100% mastery to validate your digital learning certificate readiness.",
    sections: [
      {
        title: "Digital Skills Validation",
        content: "This 12-question evaluation tests every key topic: Machine Anatomy, Safety Protocols, Pre-Start Inspection, Cab Controls, ISO Joystick Patterns, Tracking, Digging Geometry, Trenching, Truck Loading, Ground Workers, and Machine Care.",
        terms: [
          {
            term: "DMR SKILLS PASSPORT",
            simple: "Your digital learning record showing completed theoretical modules.",
            whyItMatters: "Proves to instructors and employers that you understand machine safety principles."
          }
        ]
      }
    ],
    keyPoints: [
      "Verify comprehensive mastery across all 11 prior modules.",
      "Review safety protocols, 360-degree swing mechanics, and ISO control patterns.",
      "Validate readiness for hands-on seat time at the DMR Harare training grounds.",
      "Results are permanently recorded in your phone's browser for review with DMR instructors."
    ],
    quickChecks: [
      {
        question: "Which joystick pattern is the international standard for hydraulic excavators?",
        options: [
          "ISO Pattern (Left: Swing/Stick, Right: Boom/Bucket)",
          "Automobile steering wheel pattern",
          "Forklift hydraulic lever pattern",
          "Bicycle handlebar pattern"
        ],
        correctIndex: 0,
        explanation: "Spot on! The ISO standard pattern is used by Caterpillar, Komatsu, Volvo, Hitachi, and Hyundai worldwide."
      }
    ],
    rememberThis: "Theoretical mastery builds safe physical habits. The machine is in front of you; the knowledge is in your hands.",
    safetyFirst: "Zero accidents is the only acceptable benchmark on a DMR job site.",
    didYouKnow: "Operators with DMR certification are sought after by mining houses, civil contractors, and infrastructure projects across Zimbabwe and Southern Africa!",
    tryThis: "Tap 'Launch Final Knowledge Check' below to start your full 12-question evaluation.",
    scenarios: [
      {
        prompt: "Final Question: You have completed all 12 modules of the DMR Excavator Academy. What is your next step to become a certified plant operator?",
        choices: [
          "Assume you know everything and never ask questions",
          "Connect with DMR specialists (+263 779 068 932) to schedule practical machine yard seat time and operator certification",
          "Forget what you learned",
          "Switch to driving a bicycle"
        ],
        correctIndex: 1,
        feedback: "Outstanding! Digital learning gives you the knowledge foundation; practical seat time at DMR Harare cements your certified operator career."
      }
    ]
  }
];

// ===================================================
// 3. DATA: PREDEFINED 12-QUESTION KNOWLEDGE CHECK
// ===================================================
const FINAL_ASSESSMENT_QUESTIONS = [
  {
    topic: "MACHINE ANATOMY",
    question: "Which component of the excavator connects directly between the boom tip and the bucket?",
    choices: [
      "The track roller",
      "The arm (stick / dipper)",
      "The counterweight",
      "The engine air filter"
    ],
    correctIndex: 1,
    explanation: "The arm (stick) is pinned to the outer tip of the boom and holds the bucket at its far end."
  },
  {
    topic: "SAFETY PROTOCOLS",
    question: "What is the correct procedure for entering or exiting an excavator cab?",
    choices: [
      "Jump down to the ground to save time",
      "Face the machine and maintain 3 points of contact on steps and handrails",
      "Slide down the track frame backwards",
      "Carry all tools in both hands while climbing down"
    ],
    correctIndex: 1,
    explanation: "3-point contact (two hands and one foot, or two feet and one hand) prevents slips and serious falls."
  },
  {
    topic: "PRE-START INSPECTION",
    question: "Why must you NEVER check for hydraulic leaks using bare hands?",
    choices: [
      "Hydraulic fluid will stain your skin blue",
      "Pressurized fluid can penetrate human skin causing severe tissue injury",
      "The steel gets too cold to touch",
      "Hydraulic fluid causes electrical shocks"
    ],
    correctIndex: 1,
    explanation: "High-pressure oil from a pinhole leak can pierce skin like a needle. Always use cardboard or wood."
  },
  {
    topic: "CAB & CONTROLS",
    question: "What must an operator do with the hydraulic lock lever before exiting the cab seat?",
    choices: [
      "Leave it pushed down so the controls stay ready",
      "Raise it UP to the locked position to isolate pilot hydraulics",
      "Tie it down with wire",
      "Disconnect the battery"
    ],
    correctIndex: 1,
    explanation: "Raising the hydraulic lock lever locks the pilot hydraulic system safe so bumped joysticks cannot move the machine."
  },
  {
    topic: "ISO JOYSTICK CONTROLS",
    question: "In the ISO pattern, what happens when you push the LEFT joystick to the LEFT?",
    choices: [
      "The boom lifts up",
      "The excavator swings (slews) to the left",
      "The bucket curls inward",
      "The left track drives backward"
    ],
    correctIndex: 1,
    explanation: "Left joystick left/right controls continuous 360-degree slew (swing) rotation."
  },
  {
    topic: "TRACKING & TRAVEL",
    question: "Where should the drive sprockets be positioned during normal forward travel across a site?",
    choices: [
      "At the rear of the machine",
      "Directly beneath the cab door",
      "At the front under the boom",
      "It makes no mechanical difference"
    ],
    correctIndex: 0,
    explanation: "Sprockets at the rear keep track chains under proper tension along the top and shield final drives."
  },
  {
    topic: "DIGGING GEOMETRY",
    question: "At what angle between boom and arm is maximum hydraulic digging breakout force achieved?",
    choices: [
      "180 degrees (straight line outreach)",
      "Approximately 90 degrees",
      "20 degrees (pinched tightly against the cab)",
      "45 degrees only"
    ],
    correctIndex: 1,
    explanation: "At approximately 90 degrees, the arm cylinder achieves maximum mechanical cutting leverage."
  },
  {
    topic: "TRENCHING SAFETY",
    question: "How far back from the trench lip must excavated spoil piles be placed?",
    choices: [
      "Directly on the edge so backfilling is quick",
      "At least 1.0 meter back from the trench lip",
      "Inside the trench with the pipe layers",
      "Behind the counterweight only"
    ],
    correctIndex: 1,
    explanation: "Keeping spoil at least 1 meter away prevents heavy dirt weight from triggering a deadly wall cave-in."
  },
  {
    topic: "TRUCK LOADING",
    question: "What is the critical rule regarding haul trucks during loading passes?",
    choices: [
      "Tap the truck cab roof with the bucket when loaded",
      "NEVER swing the bucket or payload over the truck cab",
      "Always load the truck cab first",
      "Only load when the truck is moving"
    ],
    correctIndex: 1,
    explanation: "NEVER swing a bucket over a truck cab. Dropping a heavy boulder onto a cab is lethal."
  },
  {
    topic: "GROUND WORKERS",
    question: "What must you do if you lose visual sight of a ground worker near your machine?",
    choices: [
      "Keep digging and look for them in 5 minutes",
      "STOP all machine movement immediately until their position is confirmed safe",
      "Speed up the swing cycle",
      "Sound the horn continuously while moving"
    ],
    correctIndex: 1,
    explanation: "If you lose sight of ground personnel, stop immediately. Eye contact is the ultimate lifesaver."
  },
  {
    topic: "MACHINE CARE",
    question: "Why must a turbocharged diesel engine idle for 3 to 5 minutes before key shut-off?",
    choices: [
      "To burn off surplus diesel fuel",
      "To allow lubricating oil to cool down red-hot turbocharger shaft bearings",
      "To recharge the operator's phone",
      "To warm up the hydraulic oil"
    ],
    correctIndex: 1,
    explanation: "Idling for 3 to 5 minutes cools the turbocharger bearings, preventing oil from baking and seizing the turbo."
  },
  {
    topic: "STABILITY & SHUTDOWN",
    question: "What is the correct position for work equipment when parking the excavator at shift end?",
    choices: [
      "Boom raised high in the air with bucket dangling",
      "Bucket grounded flat on solid ground with cylinder rods retracted and pilot lever locked",
      "Balanced on one track on a slope",
      "Bucket hovering 1 meter off the ground"
    ],
    correctIndex: 1,
    explanation: "Always lower the bucket completely flat onto solid earth to relieve hydraulic pressure and prevent unintended movement."
  }
];

// ===================================================
// 4. STORAGE & STATE MANAGEMENT (DATA ARCHITECTURE)
// ===================================================
const STORAGE_KEY = 'dmr_excavator_academy_state_v2';
const LEGACY_STORAGE_KEY = 'dmr_excavator_progress_v1';

const appState = {
  currentPart: 'boom',
  currentLessonId: 'lesson01',
  completedLessons: new Set(),
  answeredChecks: {},
  answeredScenarios: {},
  assessmentState: {
    currentIndex: 0,
    answers: [],
    completed: false,
    score: 0,
    pct: 0
  }
};

/**
 * Load Progress from localStorage
 */
function loadProgress() {
  try {
    let saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) {
      // Fallback check for v1 storage
      saved = localStorage.getItem(LEGACY_STORAGE_KEY);
    }
    if (saved) {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed.completed)) {
        // Convert any numeric IDs to "lesson0X" strings
        const converted = parsed.completed.map(id => {
          if (typeof id === 'number') {
            return `lesson${String(id).padStart(2, '0')}`;
          }
          return id;
        });
        appState.completedLessons = new Set(converted);
      }
      if (parsed.checks) appState.answeredChecks = parsed.checks;
      if (parsed.scenarios) appState.answeredScenarios = parsed.scenarios;
      if (parsed.currentLessonId) appState.currentLessonId = parsed.currentLessonId;
      if (parsed.assessment) appState.assessmentState = parsed.assessment;
    }
  } catch (e) {
    console.warn('LocalStorage load error:', e);
  }
}

/**
 * Save Progress to localStorage
 */
function saveProgress() {
  try {
    const data = {
      completed: Array.from(appState.completedLessons),
      checks: appState.answeredChecks,
      scenarios: appState.answeredScenarios,
      currentLessonId: appState.currentLessonId,
      assessment: appState.assessmentState,
      updatedAt: new Date().toISOString()
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (e) {
    console.warn('LocalStorage save error:', e);
  }
}

/**
 * Get Progress Statistics
 */
function getProgress() {
  const total = EXCAVATOR_LESSONS.length;
  const count = appState.completedLessons.size;
  const pct = Math.round((count / total) * 100);
  return { total, count, pct };
}

/**
 * Mark a lesson as complete
 */
function completeLesson(lessonId) {
  const normalizedId = typeof lessonId === 'number' 
    ? `lesson${String(lessonId).padStart(2, '0')}` 
    : lessonId;

  appState.completedLessons.add(normalizedId);
  saveProgress();
  updateProgressDisplays();
  renderCurriculumGrid();
  renderReviewModeHub();
}

/**
 * Reset Progress with confirmation
 */
function resetProgress() {
  const confirmReset = window.confirm('Are you sure you want to reset your Excavator Academy progress?');
  if (confirmReset) {
    appState.completedLessons.clear();
    appState.answeredChecks = {};
    appState.answeredScenarios = {};
    appState.currentLessonId = 'lesson01';
    appState.assessmentState = {
      currentIndex: 0,
      answers: [],
      completed: false,
      score: 0,
      pct: 0
    };
    saveProgress();
    updateProgressDisplays();
    renderCurriculumGrid();
    renderReviewModeHub();
  }
}

// ===================================================
// 5. APPLICATION INITIALIZATION & PROGRESS UPDATES
// ===================================================

document.addEventListener('DOMContentLoaded', () => {
  loadProgress();
  renderCurriculumGrid();
  updateProgressDisplays();
  renderReviewModeHub();
  setupHotspotListeners();
  setupNavListeners();
  setupModalListeners();
  setupTutorListeners();
  setupAssessmentListeners();
  setActiveComponent('boom');
});

/**
 * Update all progress pills, bars, and CTA buttons
 */
function updateProgressDisplays() {
  const { total, count, pct } = getProgress();

  // 1. Hero Pill
  const heroPct = document.getElementById('hero-progress-pct');
  const heroCount = document.getElementById('hero-progress-count');
  if (heroPct) heroPct.textContent = `${pct}%`;
  if (heroCount) heroCount.textContent = `${total} LESSONS`;

  // 2. Hero Start Button CTA Text
  const heroStartText = document.getElementById('btn-hero-start-text');
  if (heroStartText) {
    if (count === 0) {
      heroStartText.textContent = 'START LESSON 01';
    } else if (count === total) {
      heroStartText.textContent = 'REVIEW ACADEMY (100%)';
    } else {
      const nextLesson = EXCAVATOR_LESSONS.find(l => !appState.completedLessons.has(l.id));
      heroStartText.textContent = nextLesson ? `CONTINUE LESSON ${nextLesson.code}` : 'CONTINUE LEARNING';
    }
  }

  // 3. Journey Banner Section
  const statPct = document.getElementById('journey-stat-pct');
  const statCount = document.getElementById('journey-stat-count');
  const progressFill = document.getElementById('journey-progress-fill');
  if (statPct) statPct.textContent = `${pct}%`;
  if (statCount) statCount.textContent = `${count} of ${total} Lessons Complete`;
  if (progressFill) progressFill.style.width = `${pct}%`;

  // 4. Milestone Badges
  const mIntro = document.getElementById('milestone-intro');
  const mControls = document.getElementById('milestone-controls');
  const mOps = document.getElementById('milestone-operations');
  const mEval = document.getElementById('milestone-eval');

  const introDone = ['lesson01', 'lesson02', 'lesson03', 'lesson04'].every(id => appState.completedLessons.has(id));
  const controlsDone = ['lesson05', 'lesson06', 'lesson07'].every(id => appState.completedLessons.has(id));
  const opsDone = ['lesson08', 'lesson09', 'lesson10', 'lesson11'].every(id => appState.completedLessons.has(id));
  const evalDone = appState.completedLessons.has('lesson12');

  if (mIntro) mIntro.classList.toggle('completed', introDone);
  if (mControls) mControls.classList.toggle('completed', controlsDone);
  if (mOps) mOps.classList.toggle('completed', opsDone);
  if (mEval) mEval.classList.toggle('completed', evalDone);
}

// ===================================================
// 6. CURRICULUM GRID & LEARNING STATES
// ===================================================

/**
 * Determine a lesson's learning state:
 * - COMPLETED: Already completed
 * - IN PROGRESS: Currently active in reader
 * - AVAILABLE: Next uncompleted lesson (or lesson 1)
 * - LOCKED: Future lessons not yet unlocked
 */
function getLessonLearningState(lesson, index) {
  if (appState.completedLessons.has(lesson.id)) {
    return 'COMPLETED';
  }
  
  // Is it the very first lesson?
  if (index === 0) {
    return appState.currentLessonId === lesson.id ? 'IN PROGRESS' : 'AVAILABLE';
  }

  // Check if previous lesson is completed
  const prevLesson = EXCAVATOR_LESSONS[index - 1];
  const isPrevDone = appState.completedLessons.has(prevLesson.id);

  if (isPrevDone) {
    return appState.currentLessonId === lesson.id ? 'IN PROGRESS' : 'AVAILABLE';
  }

  return 'LOCKED';
}

function renderCurriculumGrid() {
  const container = document.getElementById('lessons-grid');
  if (!container) return;

  container.innerHTML = '';

  EXCAVATOR_LESSONS.forEach((lesson, idx) => {
    const state = getLessonLearningState(lesson, idx);
    const isCompleted = state === 'COMPLETED';
    const isLocked = state === 'LOCKED';
    const isInProgress = state === 'IN PROGRESS';

    const card = document.createElement('div');
    card.className = `lesson-card ${isCompleted ? 'completed' : ''} ${isLocked ? 'locked' : ''} ${isInProgress ? 'in-progress' : ''}`;
    card.id = `lesson-card-${lesson.id}`;
    card.setAttribute('tabindex', isLocked ? '-1' : '0');
    card.setAttribute('role', 'button');
    card.setAttribute('aria-label', `Lesson ${lesson.code}: ${lesson.title} - ${state}`);

    let statusTagClass = 'status-available';
    let statusText = 'AVAILABLE';
    let ctaText = 'Read Lesson →';

    if (isCompleted) {
      statusTagClass = 'status-completed';
      statusText = '✓ COMPLETED';
      ctaText = 'Review Lesson →';
    } else if (isInProgress) {
      statusTagClass = 'status-in-progress';
      statusText = '⚡ IN PROGRESS';
      ctaText = 'Continue Lesson →';
    } else if (isLocked) {
      statusTagClass = 'status-locked';
      statusText = '🔒 LOCKED';
      ctaText = 'Complete Prior Modules';
    }

    card.innerHTML = `
      <div>
        <div class="lesson-card-header">
          <span class="lesson-num-tag">LESSON ${lesson.code}</span>
          <span class="lesson-status-tag ${statusTagClass}" id="lesson-status-${lesson.id}">
            ${statusText}
          </span>
        </div>
        <h4 class="lesson-card-title">${lesson.title}</h4>
        <p class="lesson-card-summary">${lesson.description}</p>
      </div>

      <div class="lesson-card-footer">
        <span>⏱️ ${lesson.estTime}</span>
        <span class="card-cta-link">
          <span>${ctaText}</span>
        </span>
      </div>
    `;

    card.addEventListener('click', () => {
      if (isLocked) {
        alert(`Lesson ${lesson.code} is currently locked. Complete Lesson ${EXCAVATOR_LESSONS[idx - 1].code} first to unlock this module.`);
      } else {
        startLesson(lesson.id);
      }
    });

    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        if (isLocked) {
          alert(`Lesson ${lesson.code} is currently locked. Complete Lesson ${EXCAVATOR_LESSONS[idx - 1].code} first to unlock this module.`);
        } else {
          startLesson(lesson.id);
        }
      }
    });

    container.appendChild(card);
  });
}

// ===================================================
// 7. REVIEW WHAT YOU LEARNED (REVIEW MODE)
// ===================================================

function renderReviewModeHub() {
  const card = document.getElementById('review-mode-card');
  const chipsContainer = document.getElementById('review-chips-container');
  if (!card || !chipsContainer) return;

  const completedList = EXCAVATOR_LESSONS.filter(l => appState.completedLessons.has(l.id));

  if (completedList.length === 0) {
    card.style.display = 'none';
    return;
  }

  card.style.display = 'block';
  chipsContainer.innerHTML = '';

  completedList.forEach(lesson => {
    const chip = document.createElement('button');
    chip.type = 'button';
    chip.className = 'review-lesson-chip';
    chip.innerHTML = `
      <span class="review-chip-check">✓</span>
      <span>Lesson ${lesson.code}: ${lesson.title}</span>
    `;
    chip.addEventListener('click', () => {
      startLesson(lesson.id);
    });
    chipsContainer.appendChild(chip);
  });
}

// ===================================================
// 8. LESSON VIEWER MODAL / READER ENGINE
// ===================================================

/**
 * Start or view a lesson
 */
function startLesson(lessonId) {
  const normalizedId = typeof lessonId === 'number' 
    ? `lesson${String(lessonId).padStart(2, '0')}` 
    : lessonId;

  const lesson = EXCAVATOR_LESSONS.find(l => l.id === normalizedId);
  if (!lesson) return;

  appState.currentLessonId = normalizedId;
  saveProgress();

  const modal = document.getElementById('lesson-modal-overlay');
  const scrollArea = document.getElementById('modal-body-scroll');
  if (scrollArea) scrollArea.scrollTop = 0;

  // Header & Meta
  document.getElementById('modal-lesson-code').textContent = `LESSON ${lesson.code}`;
  document.getElementById('modal-lesson-title').textContent = lesson.title;
  document.getElementById('modal-est-time').textContent = `⏱️ ${lesson.estTime} READ`;

  const isCompleted = appState.completedLessons.has(normalizedId);
  const statusPill = document.getElementById('modal-status-pill');
  if (statusPill) {
    statusPill.textContent = isCompleted ? 'COMPLETED ✓' : 'IN PROGRESS';
    statusPill.style.backgroundColor = isCompleted ? 'var(--dmr-success-light)' : 'var(--dmr-yellow-light)';
    statusPill.style.color = isCompleted ? 'var(--dmr-success)' : '#92400E';
  }

  // Review Mode Banner in Reader
  const reviewBanner = document.getElementById('lesson-review-banner');
  if (reviewBanner) {
    reviewBanner.style.display = isCompleted ? 'flex' : 'none';
  }

  // Introduction
  document.getElementById('modal-intro-text').textContent = lesson.intro;

  // Structured Sections with Terminology Anchors
  const sectionsContainer = document.getElementById('modal-sections-container');
  if (sectionsContainer) {
    sectionsContainer.innerHTML = '';
    if (lesson.sections && lesson.sections.length > 0) {
      lesson.sections.forEach(sec => {
        const secBlock = document.createElement('div');
        secBlock.className = 'lesson-section-block';

        let termsHtml = '';
        if (sec.terms && sec.terms.length > 0) {
          termsHtml = sec.terms.map(t => `
            <div class="term-anchor-box">
              <div class="term-row">
                <span class="term-badge">TERM</span>
                <span class="term-name">${t.term}</span>
              </div>
              <p class="term-desc">${t.simple}</p>
              <div class="term-why-row">
                <span class="term-why-label">WHY IT MATTERS:</span>
                <span>${t.whyItMatters}</span>
              </div>
            </div>
          `).join('');
        }

        secBlock.innerHTML = `
          <h4 class="section-block-title">${sec.title}</h4>
          <p class="section-block-text">${sec.content}</p>
          ${termsHtml}
        `;
        sectionsContainer.appendChild(secBlock);
      });
    }
  }

  // Visual Graphic & Caption
  const visualContent = document.getElementById('modal-visual-graphic');
  if (visualContent) visualContent.innerHTML = lesson.visualSvg;
  document.getElementById('modal-visual-caption').textContent = lesson.visualCaption;

  // Key Points
  const keyPointsList = document.getElementById('modal-keypoints-list');
  if (keyPointsList) {
    keyPointsList.innerHTML = '';
    lesson.keyPoints.forEach(point => {
      const li = document.createElement('li');
      li.textContent = point;
      keyPointsList.appendChild(li);
    });
  }

  // Quick Check Setup
  renderLessonQuickCheck(lesson);

  // Micro-Learning Cards
  document.getElementById('micro-remember-text').textContent = lesson.rememberThis;
  document.getElementById('micro-safety-text').textContent = lesson.safetyFirst;
  document.getElementById('micro-didyouknow-text').textContent = lesson.didYouKnow;
  document.getElementById('micro-trythis-text').textContent = lesson.tryThis;

  // Scenario Setup
  renderLessonScenario(lesson);

  // Complete / Continue Button State
  const completeText = document.getElementById('btn-complete-text');
  if (completeText) {
    completeText.textContent = isCompleted ? 'COMPLETED (TAP TO ADVANCE)' : 'MARK COMPLETED & CONTINUE';
  }

  // Prev / Next button states
  const prevBtn = document.getElementById('btn-lesson-prev');
  const nextBtn = document.getElementById('btn-lesson-next');
  if (prevBtn) prevBtn.disabled = lesson.num === 1;
  if (nextBtn) nextBtn.disabled = lesson.num === EXCAVATOR_LESSONS.length;

  // Show Modal
  if (modal) {
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  renderCurriculumGrid();
}

/**
 * Render Quick Check with immediate, non-punitive feedback
 */
function renderLessonQuickCheck(lesson) {
  const qc = lesson.quickChecks && lesson.quickChecks[0];
  if (!qc) return;

  document.getElementById('micro-qc-question').textContent = qc.question;
  const qcContainer = document.getElementById('micro-qc-options');
  const qcFeedback = document.getElementById('micro-qc-feedback');

  if (qcContainer && qcFeedback) {
    qcContainer.innerHTML = '';
    qcFeedback.style.display = 'none';

    qc.options.forEach((opt, idx) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'qc-btn-option';
      btn.textContent = opt;

      btn.addEventListener('click', () => {
        const isCorrect = idx === qc.correctIndex;
        
        qcContainer.querySelectorAll('.qc-btn-option').forEach((b, bIdx) => {
          b.disabled = true;
          if (bIdx === qc.correctIndex) {
            b.classList.add('correct');
          } else if (bIdx === idx && !isCorrect) {
            b.classList.add('wrong');
          }
        });

        qcFeedback.style.display = 'block';
        qcFeedback.className = `micro-qc-feedback ${isCorrect ? 'scenario-feedback-card correct' : 'scenario-feedback-card wrong'}`;
        qcFeedback.textContent = isCorrect 
          ? `✓ CORRECT! ${qc.explanation}`
          : `NOT QUITE. ${qc.explanation}`;

        appState.answeredChecks[lesson.id] = isCorrect;
        saveProgress();
      });

      qcContainer.appendChild(btn);
    });
  }
}

/**
 * Render Scenario Challenge with decision feedback and continue button
 */
function renderLessonScenario(lesson) {
  const sc = lesson.scenarios && lesson.scenarios[0];
  if (!sc) return;

  document.getElementById('modal-scenario-prompt').textContent = sc.prompt;
  const scContainer = document.getElementById('modal-scenario-options');
  const scFeedback = document.getElementById('modal-scenario-feedback');
  const continueRow = document.getElementById('scenario-continue-row');

  if (scContainer && scFeedback) {
    scContainer.innerHTML = '';
    scFeedback.style.display = 'none';
    if (continueRow) continueRow.style.display = 'none';

    sc.choices.forEach((choice, cIdx) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'scenario-btn-choice';
      btn.textContent = `${String.fromCharCode(65 + cIdx)}) ${choice}`;

      btn.addEventListener('click', () => {
        const isCorrect = cIdx === sc.correctIndex;
        scContainer.querySelectorAll('.scenario-btn-choice').forEach((b, bIdx) => {
          b.disabled = true;
          if (bIdx === sc.correctIndex) {
            b.classList.add('correct');
          } else if (bIdx === cIdx && !isCorrect) {
            b.classList.add('wrong');
          }
        });

        scFeedback.style.display = 'block';
        scFeedback.className = `scenario-feedback-card ${isCorrect ? 'correct' : 'wrong'}`;
        scFeedback.textContent = isCorrect 
          ? `✓ CORRECT! ${sc.feedback}`
          : `NOT QUITE. ${sc.feedback}`;

        if (continueRow) continueRow.style.display = 'flex';

        appState.answeredScenarios[lesson.id] = isCorrect;
        saveProgress();
      });

      scContainer.appendChild(btn);
    });
  }
}

function closeLessonModal() {
  const modal = document.getElementById('lesson-modal-overlay');
  if (modal) {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }
}

function setupModalListeners() {
  const closeBtn = document.getElementById('btn-close-lesson-modal');
  const modalOverlay = document.getElementById('lesson-modal-overlay');

  if (closeBtn) closeBtn.addEventListener('click', closeLessonModal);

  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) closeLessonModal();
    });
  }

  // Keyboard escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeLessonModal();
      closeTutorModal();
      closeAssessmentModal();
    }
  });

  // Modal Prev / Next / Complete
  const prevBtn = document.getElementById('btn-lesson-prev');
  const nextBtn = document.getElementById('btn-lesson-next');
  const completeBtn = document.getElementById('btn-lesson-complete');
  const scenarioContinueBtn = document.getElementById('btn-scenario-continue');
  const retakeChecksBtn = document.getElementById('btn-retake-lesson-checks');

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      const current = EXCAVATOR_LESSONS.find(l => l.id === appState.currentLessonId);
      if (current && current.num > 1) {
        startLesson(`lesson${String(current.num - 1).padStart(2, '0')}`);
      }
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      const current = EXCAVATOR_LESSONS.find(l => l.id === appState.currentLessonId);
      if (current && current.num < EXCAVATOR_LESSONS.length) {
        startLesson(`lesson${String(current.num + 1).padStart(2, '0')}`);
      }
    });
  }

  if (completeBtn) {
    completeBtn.addEventListener('click', () => {
      completeCurrentLessonAndAdvance();
    });
  }

  if (scenarioContinueBtn) {
    scenarioContinueBtn.addEventListener('click', () => {
      completeCurrentLessonAndAdvance();
    });
  }

  // Retake Quick Checks in Review Mode
  if (retakeChecksBtn) {
    retakeChecksBtn.addEventListener('click', () => {
      const current = EXCAVATOR_LESSONS.find(l => l.id === appState.currentLessonId);
      if (current) {
        delete appState.answeredChecks[current.id];
        delete appState.answeredScenarios[current.id];
        saveProgress();
        renderLessonQuickCheck(current);
        renderLessonScenario(current);
        const feedbackCards = document.querySelectorAll('#micro-qc-feedback, #modal-scenario-feedback');
        feedbackCards.forEach(fc => fc.style.display = 'none');
      }
    });
  }
}

function completeCurrentLessonAndAdvance() {
  if (appState.currentLessonId) {
    completeLesson(appState.currentLessonId);

    const current = EXCAVATOR_LESSONS.find(l => l.id === appState.currentLessonId);
    if (current && current.num < EXCAVATOR_LESSONS.length) {
      const nextId = `lesson${String(current.num + 1).padStart(2, '0')}`;
      startLesson(nextId);
    } else {
      closeLessonModal();
      // If completed lesson 12, offer to view the Final Assessment
      openAssessmentModal();
    }
  }
}

// ===================================================
// 9. EXPLORE THE EXCAVATOR: HOTSPOTS & ANATOMY
// ===================================================

function setActiveComponent(partKey) {
  if (!EXCAVATOR_PARTS[partKey]) return;
  appState.currentPart = partKey;
  const part = EXCAVATOR_PARTS[partKey];

  // Update Detail Card
  const numBadge = document.getElementById('card-part-num');
  const title = document.getElementById('card-part-name');
  const role = document.getElementById('card-part-role');
  const tag = document.getElementById('card-part-tag');
  const whatIsIt = document.getElementById('card-what-is-it');
  const whatDoesItDo = document.getElementById('card-what-does-it-do');
  const whyItMatters = document.getElementById('card-why-it-matters');
  const formula = document.getElementById('card-rule-formula');
  const ruleText = document.getElementById('card-rule-text');

  if (numBadge) numBadge.textContent = part.num;
  if (title) title.textContent = part.name;
  if (role) role.textContent = part.role;
  if (tag) tag.textContent = part.tag;
  if (whatIsIt) whatIsIt.textContent = part.whatIsIt;
  if (whatDoesItDo) whatDoesItDo.textContent = part.whatDoesItDo;
  if (whyItMatters) whyItMatters.textContent = part.whyItMatters;
  if (formula) formula.textContent = part.ruleFormula;
  if (ruleText) ruleText.textContent = part.ruleText;

  // Update Quick Chips
  document.querySelectorAll('.part-chip').forEach(chip => {
    chip.classList.toggle('active', chip.getAttribute('data-part') === partKey);
  });

  // Highlight in SVG
  document.querySelectorAll('.machine-part-group').forEach(grp => {
    grp.classList.toggle('active-highlight', grp.getAttribute('data-part') === partKey);
  });

  // Update Indicator Dots
  renderPartDots();
}

function renderPartDots() {
  const dotsContainer = document.getElementById('part-dots');
  if (!dotsContainer) return;
  dotsContainer.innerHTML = '';
  PART_KEYS.forEach(key => {
    const dot = document.createElement('div');
    dot.className = `part-dot ${key === appState.currentPart ? 'active' : ''}`;
    dot.title = EXCAVATOR_PARTS[key].name;
    dot.addEventListener('click', () => setActiveComponent(key));
    dotsContainer.appendChild(dot);
  });
}

function setupHotspotListeners() {
  // SVG Hotspot Pins
  document.querySelectorAll('.svg-hotspot-pin').forEach(pin => {
    pin.addEventListener('click', () => {
      const part = pin.getAttribute('data-part');
      if (part) {
        setActiveComponent(part);
        scrollToExploreSection();
      }
    });

    pin.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        const part = pin.getAttribute('data-part');
        if (part) {
          setActiveComponent(part);
          scrollToExploreSection();
        }
      }
    });
  });

  // SVG Groups click
  document.querySelectorAll('.machine-part-group').forEach(group => {
    group.addEventListener('click', () => {
      const part = group.getAttribute('data-part');
      if (part) {
        setActiveComponent(part);
        scrollToExploreSection();
      }
    });
  });

  // Quick Chips
  document.querySelectorAll('.part-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      const part = chip.getAttribute('data-part');
      if (part) {
        setActiveComponent(part);
        scrollToExploreSection();
      }
    });
  });

  // Prev / Next in Anatomy Card
  const btnPrev = document.getElementById('btn-prev-part');
  const btnNext = document.getElementById('btn-next-part');

  if (btnPrev) {
    btnPrev.addEventListener('click', () => {
      const idx = PART_KEYS.indexOf(appState.currentPart);
      const prevIdx = (idx - 1 + PART_KEYS.length) % PART_KEYS.length;
      setActiveComponent(PART_KEYS[prevIdx]);
    });
  }

  if (btnNext) {
    btnNext.addEventListener('click', () => {
      const idx = PART_KEYS.indexOf(appState.currentPart);
      const nextIdx = (idx + 1) % PART_KEYS.length;
      setActiveComponent(PART_KEYS[nextIdx]);
    });
  }
}

function scrollToExploreSection() {
  const target = document.getElementById('explore-section');
  if (target) {
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

// ===================================================
// 10. DMR EXCAVATOR TUTOR MODAL (PHASE 3 HOOK)
// ===================================================

function openTutorModal() {
  const modal = document.getElementById('tutor-modal-overlay');
  if (modal) {
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }
}

function closeTutorModal() {
  const modal = document.getElementById('tutor-modal-overlay');
  if (modal) {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }
}

function setupTutorListeners() {
  const btnHeader = document.getElementById('btn-header-tutor');
  const btnHero = document.getElementById('btn-hero-tutor');
  const btnClose = document.getElementById('btn-close-tutor-modal');
  const btnCloseAction = document.getElementById('btn-tutor-close-action');
  const overlay = document.getElementById('tutor-modal-overlay');

  if (btnHeader) btnHeader.addEventListener('click', openTutorModal);
  if (btnHero) btnHero.addEventListener('click', openTutorModal);
  if (btnClose) btnClose.addEventListener('click', closeTutorModal);
  if (btnCloseAction) btnCloseAction.addEventListener('click', closeTutorModal);

  if (overlay) {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) closeTutorModal();
    });
  }
}

// ===================================================
// 11. PREDEFINED FINAL EXCAVATOR ASSESSMENT RUNNER
// ===================================================

function openAssessmentModal() {
  const modal = document.getElementById('assessment-modal-overlay');
  if (modal) {
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    
    // Start or resume assessment
    if (!appState.assessmentState.completed) {
      renderAssessmentQuestion(appState.assessmentState.currentIndex);
    } else {
      renderAssessmentResults();
    }
  }
}

function closeAssessmentModal() {
  const modal = document.getElementById('assessment-modal-overlay');
  if (modal) {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }
}

function renderAssessmentQuestion(index) {
  const total = FINAL_ASSESSMENT_QUESTIONS.length;
  if (index >= total) {
    // Finish assessment
    finishAssessment();
    return;
  }

  appState.assessmentState.currentIndex = index;

  const qCard = document.getElementById('aq-card');
  const rCard = document.getElementById('aq-results-card');
  if (qCard) qCard.style.display = 'block';
  if (rCard) rCard.style.display = 'none';

  // Stepper & Progress Fill
  const stepperText = document.getElementById('assessment-stepper-text');
  const progressFill = document.getElementById('assessment-progress-fill');
  if (stepperText) stepperText.textContent = `Question ${index + 1} of ${total}`;
  if (progressFill) progressFill.style.width = `${Math.round(((index + 1) / total) * 100)}%`;

  const item = FINAL_ASSESSMENT_QUESTIONS[index];
  document.getElementById('aq-category-badge').textContent = `TOPIC: ${item.topic}`;
  document.getElementById('aq-question-title').textContent = item.question;

  const choicesContainer = document.getElementById('aq-choices-grid');
  const feedbackBox = document.getElementById('aq-feedback-card');
  const nextBtn = document.getElementById('btn-aq-next');

  if (choicesContainer && feedbackBox && nextBtn) {
    choicesContainer.innerHTML = '';
    feedbackBox.style.display = 'none';
    nextBtn.style.display = 'none';

    item.choices.forEach((choice, cIdx) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'aq-choice-btn';
      btn.textContent = `${String.fromCharCode(65 + cIdx)}) ${choice}`;

      btn.addEventListener('click', () => {
        const isCorrect = cIdx === item.correctIndex;
        appState.assessmentState.answers[index] = isCorrect;

        choicesContainer.querySelectorAll('.aq-choice-btn').forEach((b, bIdx) => {
          b.disabled = true;
          if (bIdx === item.correctIndex) {
            b.classList.add('correct');
          } else if (bIdx === cIdx && !isCorrect) {
            b.classList.add('wrong');
          }
        });

        feedbackBox.style.display = 'block';
        feedbackBox.className = `aq-feedback-card ${isCorrect ? 'correct' : 'wrong'}`;
        feedbackBox.textContent = isCorrect
          ? `✓ CORRECT! ${item.explanation}`
          : `NOT QUITE. Correct answer is (${String.fromCharCode(65 + item.correctIndex)}): ${item.explanation}`;

        nextBtn.style.display = 'inline-block';
        nextBtn.textContent = index === total - 1 ? 'View Final Results →' : 'Next Question →';
      });

      choicesContainer.appendChild(btn);
    });
  }
}

function finishAssessment() {
  const total = FINAL_ASSESSMENT_QUESTIONS.length;
  const correctCount = appState.assessmentState.answers.filter(Boolean).length;
  const pct = Math.round((correctCount / total) * 100);

  appState.assessmentState.completed = true;
  appState.assessmentState.score = correctCount;
  appState.assessmentState.pct = pct;

  // Automatically complete lesson 12 if passed (or completed)
  completeLesson('lesson12');
  saveProgress();
  renderAssessmentResults();
}

function renderAssessmentResults() {
  const qCard = document.getElementById('aq-card');
  const rCard = document.getElementById('aq-results-card');
  if (qCard) qCard.style.display = 'none';
  if (rCard) rCard.style.display = 'block';

  const total = FINAL_ASSESSMENT_QUESTIONS.length;
  const correct = appState.assessmentState.score || appState.assessmentState.answers.filter(Boolean).length;
  const wrong = total - correct;
  const pct = appState.assessmentState.pct || Math.round((correct / total) * 100);

  document.getElementById('results-pct').textContent = `${pct}%`;
  document.getElementById('results-correct-count').textContent = correct;
  document.getElementById('results-wrong-count').textContent = wrong;
  document.getElementById('results-total-count').textContent = total;

  const headline = document.getElementById('results-headline');
  const message = document.getElementById('results-message');

  if (pct >= 80) {
    if (headline) headline.textContent = 'OUTSTANDING! PASSED WITH MASTERY';
    if (message) message.textContent = `You scored ${pct}% (${correct}/${total} correct). You have successfully proven theoretical excavator operator mastery and are fully prepared for certified hands-on seat time at the DMR Training Grounds in Harare.`;
  } else {
    if (headline) headline.textContent = 'EVALUATION COMPLETE: REVIEW RECOMMENDED';
    if (message) message.textContent = `You scored ${pct}% (${correct}/${total} correct). Review the earlier modules in Review Mode and retake this evaluation to achieve 100% certified theoretical mastery.`;
  }
}

function restartAssessment() {
  appState.assessmentState = {
    currentIndex: 0,
    answers: [],
    completed: false,
    score: 0,
    pct: 0
  };
  saveProgress();
  renderAssessmentQuestion(0);
}

function setupAssessmentListeners() {
  const closeBtn = document.getElementById('btn-close-assessment-modal');
  const overlay = document.getElementById('assessment-modal-overlay');
  const nextBtn = document.getElementById('btn-aq-next');
  const retakeBtn = document.getElementById('btn-retake-assessment-btn');
  const finishBtn = document.getElementById('btn-finish-assessment-btn');
  const launchReviewBtn = document.getElementById('btn-launch-assessment-card');

  if (closeBtn) closeBtn.addEventListener('click', closeAssessmentModal);

  if (overlay) {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) closeAssessmentModal();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      renderAssessmentQuestion(appState.assessmentState.currentIndex + 1);
    });
  }

  if (retakeBtn) retakeBtn.addEventListener('click', restartAssessment);
  if (finishBtn) finishBtn.addEventListener('click', closeAssessmentModal);
  if (launchReviewBtn) launchReviewBtn.addEventListener('click', openAssessmentModal);
}

// ===================================================
// 12. GENERAL NAVIGATION & TOP-LEVEL CTAS
// ===================================================

function setupNavListeners() {
  // Hero "START LEARNING" / "CONTINUE" CTA
  const heroStartBtn = document.getElementById('btn-hero-start');
  if (heroStartBtn) {
    heroStartBtn.addEventListener('click', () => {
      const targetLesson = EXCAVATOR_LESSONS.find(l => !appState.completedLessons.has(l.id)) || EXCAVATOR_LESSONS[0];
      startLesson(targetLesson.id);
    });
  }

  // Hero "EXPLORE THE EXCAVATOR" CTA
  const heroExploreBtn = document.getElementById('btn-hero-explore');
  if (heroExploreBtn) {
    heroExploreBtn.addEventListener('click', scrollToExploreSection);
  }

  // Final CTA "START LESSON 01 NOW"
  const finalStartBtn = document.getElementById('btn-final-start-journey');
  if (finalStartBtn) {
    finalStartBtn.addEventListener('click', () => {
      startLesson('lesson01');
    });
  }

  // Reset Progress Button
  const resetBtn = document.getElementById('btn-reset-progress');
  if (resetBtn) {
    resetBtn.addEventListener('click', resetProgress);
  }
}

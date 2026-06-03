export interface Branch {
  id: string;
  name: string;
  code: string;
  description: string;
  semestersCount: number;
  subjectsCount: number;
  resourcesCount: number;
}

export interface Subject {
  id: string;
  name: string;
  code: string;
  branchId: string;
  semester: number;
  description: string;
  resourceCount: number;
  overview: {
    syllabus: string[];
    weightageSummary: string;
  };
  weightage: {
    unit: string;
    expectedMarks: number;
    topics: { name: string; frequency: number }[];
  }[];
  repeatedQuestions: {
    id: string;
    question: string;
    years: number[];
    frequency: number;
    importance: 'Very High Probability' | 'High Probability' | 'Medium Probability';
  }[];
  oneNightRevision: {
    topQuestions: string[];
    definitions: { term: string; definition: string }[];
    diagrams: { title: string; description: string; url?: string }[];
    formulas: { name: string; formula: string; explanation: string }[];
    lastMinuteNotes: string[];
  };
  videos: {
    id: string;
    title: string;
    unit: number;
    duration: string;
    youtubeId: string;
  }[];
}

export interface Note {
  id: string;
  subjectId: string;
  title: string;
  unit: string;
  category: 'Faculty Notes' | 'Student Notes' | 'Short Notes' | 'Handwritten Notes';
  author: string;
  uploadDate: string;
  fileSize: string;
  downloads: number;
  isCommunity?: boolean;
  approved?: boolean;
}

export interface PYQ {
  id: string;
  subjectId: string;
  year: number;
  examType: 'Regular' | 'Ex';
  fileSize: string;
  downloads: number;
  isCommunity?: boolean;
  approved?: boolean;
  author?: string;
}

export interface ImportantQuestion {
  id: string;
  subjectId: string;
  unit: number;
  type: '2 Marks' | '5 Marks' | '10 Marks' | 'Long Answer' | 'Very Important';
  question: string;
}

export const BRANCHES: Branch[] = [
  {
    id: 'cs',
    name: 'Computer Science & Engineering',
    code: 'CSE',
    description: 'Focuses on computation, algorithms, software engineering, databases, and computer systems.',
    semestersCount: 8,
    subjectsCount: 42,
    resourcesCount: 248,
  },
  {
    id: 'aiml',
    name: 'AI & Machine Learning',
    code: 'AIML',
    description: 'Specialized branch focusing on intelligence systems, data modeling, neural networks, and deep learning.',
    semestersCount: 8,
    subjectsCount: 38,
    resourcesCount: 184,
  },
  {
    id: 'it',
    name: 'Information Technology',
    code: 'IT',
    description: 'Focuses on application dev, networking, security, information systems management.',
    semestersCount: 8,
    subjectsCount: 40,
    resourcesCount: 195,
  },
  {
    id: 'ec',
    name: 'Electronics & Communication',
    code: 'ECE',
    description: 'Embedded systems, signal processing, VLSI design, communication infrastructures.',
    semestersCount: 8,
    subjectsCount: 38,
    resourcesCount: 120,
  },
  {
    id: 'ee',
    name: 'Electrical Engineering',
    code: 'EE',
    description: 'Power systems, machines, electrical drives, circuits and network controls.',
    semestersCount: 8,
    subjectsCount: 39,
    resourcesCount: 98,
  },
  {
    id: 'me',
    name: 'Mechanical Engineering',
    code: 'ME',
    description: 'Thermodynamics, machine design, fluid mechanics, manufacturing technology.',
    semestersCount: 8,
    subjectsCount: 42,
    resourcesCount: 85,
  },
  {
    id: 'ce',
    name: 'Civil Engineering',
    code: 'CE',
    description: 'Structural analysis, concrete design, surveying, environmental and fluid mechanics.',
    semestersCount: 8,
    subjectsCount: 40,
    resourcesCount: 72,
  },
];

// --- UPPER SEMESTER SUBJECTS (CS BRANCH) ---
const UPPER_SEM_SUBJECTS: Subject[] = [
  {
    "id": "ds",
    "name": "Discrete Structure",
    "code": "CS-302",
    "branchId": "cs",
    "semester": 3,
    "description": "Mathematical logic, sets, relations, functions, algebraic structures, groups, ring theory, graph theory, trees, and cut-sets.",
    "resourceCount": 25,
    "overview": {
      "syllabus": [
        "Unit I: Set Theory, Relation, Function, Theorem Proving Techniques (Mathematical Induction, Proof by Contradiction), Pigeonhole Principle.",
        "Unit II: Algebraic Structures: Semi Groups, Monoids, Groups, Abelian Groups, Subgroups, Cyclic Groups, Cosets, Normal Subgroups, Homomorphism and Isomorphism, Rings and Fields.",
        "Unit III: Propositional Logic: Basic Logical Operations, Truth Tables, Tautologies, Contradictions, Algebra of Proposition, Normal Forms, Predicates, Universal and Existential Quantifiers. Finite State Machines as models and language recognizers.",
        "Unit IV: Graph Theory: Planar Graphs, Multigraphs, Weighted Graphs, Isomorphic Graphs, Paths, Cycles, Connectivity, Shortest Path (Dijkstra\'s), Eulerian and Hamiltonian Paths/Circuits, Graph Coloring.",
        "Unit V: Trees and Cut-sets: Trees, Rooted Trees, Path Lengths in Rooted Trees, Binary Search Trees, Spanning Trees, Minimum Spanning Tree Algorithms (Kruskal’s, Prim’s)."
      ],
      "weightageSummary": "Propositional Logic (Unit III) and Graph Theory (Unit IV) typically account for 45% of total exam weightage."
    },
    "weightage": [
      {
        "unit": "Unit I: Set Theory & Relations",
        "expectedMarks": 12,
        "topics": [
          {
            "name": "Pigeonhole Principle proofs",
            "frequency": 5
          },
          {
            "name": "Equivalence Relations",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit II: Algebraic Structures",
        "expectedMarks": 12,
        "topics": [
          {
            "name": "Group and Subgroup proofs",
            "frequency": 6
          },
          {
            "name": "Normal subgroups and Cosets",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit III: Propositional Logic & FSM",
        "expectedMarks": 16,
        "topics": [
          {
            "name": "CNF & DNF Normal Forms",
            "frequency": 5
          },
          {
            "name": "FSM language recognizers",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit IV: Graph Theory",
        "expectedMarks": 16,
        "topics": [
          {
            "name": "Dijkstra\'s Shortest Path algorithm",
            "frequency": 6
          },
          {
            "name": "Eulerian vs Hamiltonian circuits",
            "frequency": 5
          }
        ]
      },
      {
        "unit": "Unit V: Trees & Cut-sets",
        "expectedMarks": 14,
        "topics": [
          {
            "name": "Prim\'s and Kruskal\'s MST",
            "frequency": 7
          },
          {
            "name": "BST traversals and search",
            "frequency": 4
          }
        ]
      }
    ],
    "repeatedQuestions": [
      {
        "id": "rq-ds-1",
        "question": "State and prove Pigeonhole Principle. Show that if n items are put into m containers, with n > m, at least one container has > 1 item.",
        "years": [
          2022,
          2024
        ],
        "frequency": 2,
        "importance": "High Probability"
      },
      {
        "id": "rq-ds-2",
        "question": "Define a cyclic group. Show that every cyclic group is an abelian group.",
        "years": [
          2021,
          2023,
          2025
        ],
        "frequency": 3,
        "importance": "Very High Probability"
      },
      {
        "id": "rq-ds-3",
        "question": "Find the shortest path in a given weighted graph using Dijkstra\'s algorithm.",
        "years": [
          2022,
          2024,
          2025
        ],
        "frequency": 3,
        "importance": "Very High Probability"
      }
    ],
    "oneNightRevision": {
      "topQuestions": [
        "Define normal subgroup. Prove that a subgroup H of G is normal iff gH = Hg.",
        "Apply Prim\'s and Kruskal\'s algorithms to find the MST of a given graph.",
        "Prove the Handshaking Lemma: sum of degrees of vertices is twice the number of edges."
      ],
      "definitions": [
        {
          "term": "Pigeonhole Principle",
          "definition": "If n items are put into m containers with n > m, then at least one container must contain more than one item."
        },
        {
          "term": "Abelian Group",
          "definition": "A group G in which the binary operation is commutative (i.e. a * b = b * a for all a, b in G)."
        }
      ],
      "diagrams": [
        {
          "title": "Eulerian vs Hamiltonian",
          "description": "Eulerian path visits every edge exactly once; Hamiltonian path visits every vertex exactly once."
        }
      ],
      "formulas": [
        {
          "name": "Handshaking Lemma",
          "formula": "∑ deg(v) = 2 * |E|",
          "explanation": "Total degree of a graph is twice the number of edges."
        }
      ],
      "lastMinuteNotes": [
        "💡 A tree with n vertices always has exactly n - 1 edges.",
        "💡 In a group, the identity element is always unique."
      ]
    },
    "videos": []
  },
  {
    "id": "dst",
    "name": "Data Structures",
    "code": "CS-303",
    "branchId": "cs",
    "semester": 3,
    "description": "Arrays, Stacks, Queues, Linked Lists, Trees (BST, AVL, Heap, B-Trees), Graphs, Sorting and Searching techniques.",
    "resourceCount": 30,
    "overview": {
      "syllabus": [
        "Unit I: Introduction: Concepts of Data Structures, Abstract Data Types, Memory Representation, Asymptotic Notations. Arrays: Single and Multidimensional Arrays, Address Calculation.",
        "Unit II: Stacks and Queues: Representation, Operations, Applications (Infix to Postfix, Evaluation of Expressions). Queues: Linear, Circular, Dequeue, Priority Queue.",
        "Unit III: Linked Lists: Singly, Doubly, and Circular Linked Lists. Applications like Polynomial Manipulation.",
        "Unit IV: Trees: Binary Trees, Tree Traversals (Inorder, Preorder, Postorder), Binary Search Trees, AVL Trees, Heap, Introduction to B-Trees, B+ Trees, and Red-Black Trees.",
        "Unit V: Graphs: Representation (Adjacency Matrix/List), Traversals (DFS, BFS), MST, Shortest Paths. Sorting & Searching: Bubble, Insertion, Selection, Quick, Merge, Heap Sort; Linear and Binary Search."
      ],
      "weightageSummary": "Trees (Unit IV) and Sorting/Searching (Unit V) make up 50% of the exam paper. Stack applications (Infix/Postfix) are highly recurrent."
    },
    "weightage": [
      {
        "unit": "Unit I: Intro & Arrays",
        "expectedMarks": 10,
        "topics": [
          {
            "name": "Asymptotic Notations (O, Omega, Theta)",
            "frequency": 4
          },
          {
            "name": "2D Array Address calculation (Row/Col Major)",
            "frequency": 5
          }
        ]
      },
      {
        "unit": "Unit II: Stacks & Queues",
        "expectedMarks": 15,
        "topics": [
          {
            "name": "Infix to Postfix conversion using Stack",
            "frequency": 7
          },
          {
            "name": "Circular Queue array operations",
            "frequency": 5
          }
        ]
      },
      {
        "unit": "Unit III: Linked Lists",
        "expectedMarks": 15,
        "topics": [
          {
            "name": "Doubly Linked List node insertion/deletion",
            "frequency": 6
          },
          {
            "name": "Polynomial addition using Linked List",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit IV: Trees",
        "expectedMarks": 18,
        "topics": [
          {
            "name": "AVL Tree rotations and height balancing",
            "frequency": 8
          },
          {
            "name": "Binary Tree traversals (In, Pre, Post)",
            "frequency": 6
          }
        ]
      },
      {
        "unit": "Unit V: Graphs & Sorting",
        "expectedMarks": 17,
        "topics": [
          {
            "name": "Quick Sort and Merge Sort complexities",
            "frequency": 7
          },
          {
            "name": "DFS and BFS graph traversals",
            "frequency": 5
          }
        ]
      }
    ],
    "repeatedQuestions": [
      {
        "id": "rq-dst-1",
        "question": "Explain AVL trees. Insert the keys: 10, 20, 30, 40, 50, 25 into an empty AVL tree and show height balancing rotations.",
        "years": [
          2022,
          2023,
          2024,
          2025
        ],
        "frequency": 4,
        "importance": "Very High Probability"
      },
      {
        "id": "rq-dst-2",
        "question": "Write an algorithm to convert an infix expression to a postfix expression using stack. Show trace for: (A+B)*(C-D)/E.",
        "years": [
          2021,
          2023,
          2024
        ],
        "frequency": 3,
        "importance": "High Probability"
      },
      {
        "id": "rq-dst-3",
        "question": "Write a program/algorithm to implement insert and delete operations in a Circular Queue.",
        "years": [
          2022,
          2024,
          2025
        ],
        "frequency": 3,
        "importance": "High Probability"
      }
    ],
    "oneNightRevision": {
      "topQuestions": [
        "Differentiate between row-major and column-major address calculation with formulas.",
        "Perform Heap Sort on the array: 40, 80, 35, 90, 45, 50.",
        "Explain B-Trees and B+ Trees and list their differences."
      ],
      "definitions": [
        {
          "term": "Abstract Data Type (ADT)",
          "definition": "A mathematical model for data types where the data type is defined by its behavior (operations) from the user\'s point of view, not the implementation."
        },
        {
          "term": "AVL Tree",
          "definition": "A self-balancing binary search tree where the difference between heights of left and right subtrees (balance factor) cannot be more than 1."
        }
      ],
      "diagrams": [
        {
          "title": "AVL Tree Rotations",
          "description": "Visual representation of LL, RR, LR, and RL rotations to rebalance balance factor."
        }
      ],
      "formulas": [
        {
          "name": "Row-Major Address (2D)",
          "formula": "Loc(A[i][j]) = Base + W * [ (i - Lr) * N + (j - Lc) ]",
          "explanation": "Calculates the address of 2D array element A[i][j] in row-major layout."
        }
      ],
      "lastMinuteNotes": [
        "💡 In binary search trees, an inorder traversal always yields keys in sorted, ascending order.",
        "💡 Stack uses LIFO (Last In First Out); Queue uses FIFO (First In First Out)."
      ]
    },
    "videos": []
  },
  {
    "id": "dig",
    "name": "Digital Systems",
    "code": "CS-304",
    "branchId": "cs",
    "semester": 3,
    "description": "Number systems, K-Maps, Combinational logic (adders, muxes, ALUs), Sequential logic (flip-flops, registers, counters), DAC/ADC, and 555 timers.",
    "resourceCount": 22,
    "overview": {
      "syllabus": [
        "Unit I: Review of Number Systems, Boolean Algebra, Logic Gates, Simplification of Boolean Functions using Karnaugh Map (K-Map) and Quine-McCluskey Method.",
        "Unit II: Combinational Logic: Half/Full Adder, Half/Full Subtractor, Carry Look-ahead Adder, BCD Adder, Multiplexer, Demultiplexer, Encoder, Decoder, ALU.",
        "Unit III: Sequential Logic: Flip-Flops (RS, JK, D, T, Master-Slave), Edge Triggering, Realization of one Flip-Flop using another.",
        "Unit IV: Registers and Counters: Shift Registers, Asynchronous and Synchronous Counters, Ring Counter, Johnson Counter, State Diagrams and State Reduction.",
        "Unit V: Memory & D/A, A/D Converters: RAM, ROM, PLA, PAL. DAC and ADC specifications and architectures. Multivibrators (Monostable, Astable, Schmitt Trigger using IC 555)."
      ],
      "weightageSummary": "K-Map simplification (Unit I) and Synchronous Counters (Unit IV) represent 40% of the exam. Multiplexers and Flip-Flop conversions are highly recurrent."
    },
    "weightage": [
      {
        "unit": "Unit I: Logic Simplification",
        "expectedMarks": 14,
        "topics": [
          {
            "name": "K-Map 4-variable simplification",
            "frequency": 6
          },
          {
            "name": "Quine-McCluskey tabulation method",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit II: Combinational Logic",
        "expectedMarks": 16,
        "topics": [
          {
            "name": "Multiplexer implementation of logic functions",
            "frequency": 7
          },
          {
            "name": "Carry Look-ahead Adder working",
            "frequency": 5
          }
        ]
      },
      {
        "unit": "Unit III: Sequential Logic",
        "expectedMarks": 14,
        "topics": [
          {
            "name": "Master-Slave JK flip flop race around fix",
            "frequency": 6
          },
          {
            "name": "Flip-flop conversion steps",
            "frequency": 5
          }
        ]
      },
      {
        "unit": "Unit IV: Registers & Counters",
        "expectedMarks": 16,
        "topics": [
          {
            "name": "Synchronous counter design steps",
            "frequency": 8
          },
          {
            "name": "Johnson and Ring counters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit V: Memory & Timer",
        "expectedMarks": 10,
        "topics": [
          {
            "name": "Astable Multivibrator using IC 555",
            "frequency": 5
          },
          {
            "name": "PLA vs PAL architecture",
            "frequency": 4
          }
        ]
      }
    ],
    "repeatedQuestions": [
      {
        "id": "rq-dig-1",
        "question": "Simplify the Boolean function using K-Map: F(A,B,C,D) = ∑(0, 2, 5, 7, 8, 10, 13, 15). Draw the logic circuit.",
        "years": [
          2022,
          2023,
          2024
        ],
        "frequency": 3,
        "importance": "Very High Probability"
      },
      {
        "id": "rq-dig-2",
        "question": "What is the race-around condition in a JK Flip-Flop? Explain how it is resolved using a Master-Slave JK Flip-Flop.",
        "years": [
          2021,
          2023,
          2025
        ],
        "frequency": 3,
        "importance": "Very High Probability"
      },
      {
        "id": "rq-dig-3",
        "question": "Design a Mod-6 synchronous counter using JK Flip-Flops.",
        "years": [
          2022,
          2024,
          2025
        ],
        "frequency": 3,
        "importance": "High Probability"
      }
    ],
    "oneNightRevision": {
      "topQuestions": [
        "Convert a JK Flip-Flop to D Flip-Flop. Draw logic diagrams.",
        "Explain Carry Look-ahead Adder and show how it reduces propagation delay.",
        "Draw and explain the block diagram of Astable Multivibrator using IC 555."
      ],
      "definitions": [
        {
          "term": "Race-around Condition",
          "definition": "A condition in JK flip-flops occurring when J=K=1, and propagation delay of flip-flop is smaller than pulse width of clock, causing output to toggle multiple times in a single cycle."
        },
        {
          "term": "PAL vs PLA",
          "definition": "PAL (Programmable Array Logic) has programmable AND gates and fixed OR gates; PLA (Programmable Logic Array) has both AND and OR arrays programmable."
        }
      ],
      "diagrams": [
        {
          "title": "Master-Slave JK Flip-Flop",
          "description": "Schematic representing master flip-flop triggered on positive edge and slave flip-flop triggered on negative edge."
        }
      ],
      "formulas": [],
      "lastMinuteNotes": [
        "💡 A multiplexer is also known as a data selector; demultiplexer is a data distributor.",
        "💡 Johnson counter of n stages has 2n states, whereas Ring counter has n states."
      ]
    },
    "videos": []
  },
  {
    "id": "oop",
    "name": "OOP & Methodology",
    "code": "CS-305",
    "branchId": "cs",
    "semester": 3,
    "description": "Object-oriented programming concepts, C++ syntax, classes, objects, constructors, operator overloading, inheritance, virtual functions, templates, and exception handling.",
    "resourceCount": 24,
    "overview": {
      "syllabus": [
        "Unit I: OOP Concepts: Data Abstraction, Encapsulation, Inheritance, Polymorphism. Elements of C++: Tokens, Expressions, Control Structures.",
        "Unit II: Classes and Objects: Specifying a Class, Defining Member Functions, Memory Allocation for Objects, Static Data Members and Functions, Array of Objects, Friend Functions.",
        "Unit III: Constructors and Destructors: Parameterized, Copy, Dynamic Constructors, Destructors. Operator Overloading and Type Conversions.",
        "Unit IV: Inheritance: Single, Multiple, Hierarchical, Hybrid Inheritance, Virtual Base Classes, Abstract Classes. Pointers, Virtual Functions, and Polymorphism.",
        "Unit V: Managing Console I/O, Working with Files: Sequential and Random Access, Templates, Exception Handling."
      ],
      "weightageSummary": "Inheritance and Polymorphism (Unit IV) and Operator Overloading (Unit III) represent 45% of exam marks. Friend functions and file handling are also frequently asked."
    },
    "weightage": [
      {
        "unit": "Unit I: OOP & C++ Basics",
        "expectedMarks": 10,
        "topics": [
          {
            "name": "Core concepts of OOP",
            "frequency": 4
          },
          {
            "name": "Reference variables in C++",
            "frequency": 3
          }
        ]
      },
      {
        "unit": "Unit II: Classes & Friends",
        "expectedMarks": 15,
        "topics": [
          {
            "name": "Friend functions implementation",
            "frequency": 6
          },
          {
            "name": "Static data members and functions",
            "frequency": 5
          }
        ]
      },
      {
        "unit": "Unit III: Constructors & Overloading",
        "expectedMarks": 18,
        "topics": [
          {
            "name": "Copy constructor and deep vs shallow copy",
            "frequency": 7
          },
          {
            "name": "Binary operator overloading rules",
            "frequency": 6
          }
        ]
      },
      {
        "unit": "Unit IV: Inheritance & Polymorphism",
        "expectedMarks": 17,
        "topics": [
          {
            "name": "Virtual Base Class to resolve diamond problem",
            "frequency": 8
          },
          {
            "name": "Virtual functions & runtime polymorphism",
            "frequency": 7
          }
        ]
      },
      {
        "unit": "Unit V: Files, Templates & Exceptions",
        "expectedMarks": 15,
        "topics": [
          {
            "name": "Function and Class Templates",
            "frequency": 6
          },
          {
            "name": "Exception Handling try-catch block",
            "frequency": 5
          }
        ]
      }
    ],
    "repeatedQuestions": [
      {
        "id": "rq-oop-1",
        "question": "What is a Friend Function? List its properties. Write a C++ program to swap private data of two classes using a friend function.",
        "years": [
          2022,
          2023,
          2025
        ],
        "frequency": 3,
        "importance": "Very High Probability"
      },
      {
        "id": "rq-oop-2",
        "question": "Explain the concept of Virtual Base Class with a coding example. Show how it resolves the diamond problem in hybrid inheritance.",
        "years": [
          2021,
          2023,
          2024
        ],
        "frequency": 3,
        "importance": "Very High Probability"
      },
      {
        "id": "rq-oop-3",
        "question": "Discuss runtime polymorphism. Write a C++ program illustrating how virtual functions accomplish dynamic binding.",
        "years": [
          2022,
          2024,
          2025
        ],
        "frequency": 3,
        "importance": "Very High Probability"
      }
    ],
    "oneNightRevision": {
      "topQuestions": [
        "Differentiate between function overloading and function overriding.",
        "Write a program to overload the binary \"+\" operator to add two Complex number objects.",
        "Write a code snippet showing file input/output operations using ifstream and ofstream classes."
      ],
      "definitions": [
        {
          "term": "Encapsulation",
          "definition": "The wrapping up of data (variables) and methods (functions) into a single unit called class, to protect data from direct external access."
        },
        {
          "term": "Virtual Function",
          "definition": "A member function declared in a base class and redefined by a derived class, which is resolved at runtime using vtables to implement dynamic polymorphism."
        }
      ],
      "diagrams": [
        {
          "title": "The Diamond Problem",
          "description": "Inheritance diagram where class D inherits from B and C, which both inherit from A, causing duplication of A\'s members in D."
        }
      ],
      "formulas": [],
      "lastMinuteNotes": [
        "💡 Constructors cannot be declared virtual, but destructors can (and often should) be virtual.",
        "💡 Static member functions can only access static data members and static member functions."
      ]
    },
    "videos": []
  },
  {
    "id": "eee",
    "name": "Energy & Env. Engineering",
    "code": "ES-401",
    "branchId": "cs",
    "semester": 4,
    "description": "Ecosystems, biodiversity, air, noise, water, and soil pollution, renewable energy sources, and environmental management Acts.",
    "resourceCount": 15,
    "overview": {
      "syllabus": [
        "Unit I: Ecosystems & Biodiversity: Concept, Structure, and Function of Ecosystems, Energy Flow, Bio-geochemical Cycles.",
        "Unit II: Air and Noise Pollution: Sources, Effects, and Control Technologies, Case Studies.",
        "Unit III: Water and Soil Pollution: Water Quality Parameters, Wastewater Treatment, Soil Degradation, Solid Waste Management (Urban and Industrial).",
        "Unit IV: Renewable Energy Sources: Solar, Wind, Bio-energy, Tidal, Geothermal Energy, and Fuel Cells.",
        "Unit V: Environmental Management & Legislation: Environmental Impact Assessment (EIA), Environmental Acts, Sustainable Development."
      ],
      "weightageSummary": "Pollution types & controls (Unit II & III) and Renewable Energy sources (Unit IV) cover over 50% of marks."
    },
    "weightage": [
      {
        "unit": "Unit I: Ecosystems",
        "expectedMarks": 12,
        "topics": [
          {
            "name": "Food Chains & Energy Flow pyramids",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit II: Air & Noise Pollution",
        "expectedMarks": 15,
        "topics": [
          {
            "name": "Air pollution control filters (ESP, cyclones)",
            "frequency": 5
          }
        ]
      },
      {
        "unit": "Unit III: Water & Soil Pollution",
        "expectedMarks": 15,
        "topics": [
          {
            "name": "Wastewater primary & secondary treatments",
            "frequency": 6
          }
        ]
      },
      {
        "unit": "Unit IV: Renewable Energy",
        "expectedMarks": 16,
        "topics": [
          {
            "name": "Solar PV cells and Wind energy conversion",
            "frequency": 5
          }
        ]
      },
      {
        "unit": "Unit V: Legislation",
        "expectedMarks": 12,
        "topics": [
          {
            "name": "EIA Environmental Impact Assessment steps",
            "frequency": 4
          }
        ]
      }
    ],
    "repeatedQuestions": [
      {
        "id": "rq-eee-1",
        "question": "Explain the working of Electrostatic Precipitator (ESP) with a diagram for controlling particulate emissions.",
        "years": [
          2022,
          2024
        ],
        "frequency": 2,
        "importance": "High Probability"
      },
      {
        "id": "rq-eee-2",
        "question": "Describe the processes involved in municipal wastewater treatment (Activated Sludge Process).",
        "years": [
          2023,
          2025
        ],
        "frequency": 2,
        "importance": "High Probability"
      }
    ],
    "oneNightRevision": {
      "topQuestions": [
        "Discuss Solar energy and explain how solar photovoltaic cells work.",
        "What is EIA? List the steps in executing an Environmental Impact Assessment.",
        "Write notes on Sustainable Development goals."
      ],
      "definitions": [
        {
          "term": "Ecosystem",
          "definition": "A community of living organisms interacting with the non-living components of their environment as a system."
        },
        {
          "term": "BOD (Biochemical Oxygen Demand)",
          "definition": "The amount of dissolved oxygen needed by aerobic biological organisms to break down organic material in a given water sample."
        }
      ],
      "diagrams": [],
      "formulas": [],
      "lastMinuteNotes": [
        "💡 Renewable energy sources like solar and wind produce zero operational greenhouse gas emissions.",
        "💡 Air Act was enacted in 1981, and Environmental Protection Act in 1986."
      ]
    },
    "videos": []
  },
  {
    "id": "m3",
    "name": "Mathematics-III",
    "code": "BT-401",
    "branchId": "cs",
    "semester": 4,
    "description": "Functions of complex variables, complex integration, numerical techniques for algebraic equations, numerical ODE solvers, and linear algebra.",
    "resourceCount": 28,
    "overview": {
      "syllabus": [
        "Unit I: Functions of Complex Variables: Analytic Functions, Cauchy-Riemann Equations, Harmonic Functions, Conformal Mapping.",
        "Unit II: Complex Integration: Cauchy’s Integral Theorem, Cauchy’s Integral Formula, Taylor\'s and Laurent\'s Series, Residues and Contour Integration.",
        "Unit III: Numerical Techniques: Roots of Algebraic and Transcendental Equations (Regula-Falsi, Newton-Raphson). Finite Differences, Interpolation (Newton’s Forward/Backward, Lagrange’s).",
        "Unit IV: Numerical Calculus & Ordinary Differential Equations: Numerical Differentiation and Integration (Trapezoidal, Simpson\'s Rules), Numerical Solutions of ODEs (Euler\'s, Runge-Kutta Methods).",
        "Unit V: Linear Algebra & Vector Spaces: Vector Spaces, Linear Independence, Bases, Linear Transformations, Rank-Nullity Theorem, Eigenvalues and Eigenvectors."
      ],
      "weightageSummary": "Residue theorem integration (Unit II) and Runge-Kutta ODE numericals (Unit IV) represent 40% of marks. Newton-Raphson calculations are highly recursive."
    },
    "weightage": [
      {
        "unit": "Unit I: Complex Variables",
        "expectedMarks": 14,
        "topics": [
          {
            "name": "C-R Equations polar/cartesian form",
            "frequency": 5
          },
          {
            "name": "Harmonic Conjugate function construction",
            "frequency": 5
          }
        ]
      },
      {
        "unit": "Unit II: Complex Integration",
        "expectedMarks": 16,
        "topics": [
          {
            "name": "Cauchy residue theorem calculations",
            "frequency": 7
          },
          {
            "name": "Laurent series expansions",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit III: Numerical Techniques",
        "expectedMarks": 14,
        "topics": [
          {
            "name": "Newton-Raphson root finding",
            "frequency": 6
          },
          {
            "name": "Lagrange interpolation formula",
            "frequency": 5
          }
        ]
      },
      {
        "unit": "Unit IV: Numerical Calculus & ODE",
        "expectedMarks": 16,
        "topics": [
          {
            "name": "Runge-Kutta 4th Order numerical method",
            "frequency": 7
          },
          {
            "name": "Simpsons 1/3 and 3/8 integration rules",
            "frequency": 6
          }
        ]
      },
      {
        "unit": "Unit V: Linear Algebra",
        "expectedMarks": 10,
        "topics": [
          {
            "name": "Rank-Nullity theorem proof & problems",
            "frequency": 5
          },
          {
            "name": "Checking Vector space bases",
            "frequency": 4
          }
        ]
      }
    ],
    "repeatedQuestions": [
      {
        "id": "rq-m3-1",
        "question": "Verify Cauchy-Riemann equations for f(z) = u + iv and construct the analytic function where u = x^3 - 3xy^2.",
        "years": [
          2022,
          2023,
          2024
        ],
        "frequency": 3,
        "importance": "Very High Probability"
      },
      {
        "id": "rq-m3-2",
        "question": "Evaluate ∫[c] e^z / (z - 1)(z - 2) dz where C is the circle |z| = 3 using Cauchy\'s Residue Theorem.",
        "years": [
          2021,
          2023,
          2025
        ],
        "frequency": 3,
        "importance": "Very High Probability"
      },
      {
        "id": "rq-m3-3",
        "question": "Apply Runge-Kutta 4th order method to solve dy/dx = x + y with y(0) = 1 to find y(0.2) in steps of h = 0.1.",
        "years": [
          2022,
          2024,
          2025
        ],
        "frequency": 3,
        "importance": "Very High Probability"
      }
    ],
    "oneNightRevision": {
      "topQuestions": [
        "Find the real root of equation x log10(x) - 1.2 = 0 using Newton-Raphson method.",
        "State and verify the Rank-Nullity Theorem for linear transformations.",
        "Use Simpson\'s 1/3rd rule to integrate ∫[0 to 6] 1 / (1 + x^2) dx with n = 6."
      ],
      "definitions": [
        {
          "term": "Analytic Function",
          "definition": "A complex function is analytic in a domain if it is single-valued and differentiable at every point of the domain."
        },
        {
          "term": "Linear Independence",
          "definition": "A set of vectors is linearly independent if the only linear combination that equals the zero vector is the trivial one (all coefficients are zero)."
        }
      ],
      "diagrams": [],
      "formulas": [
        {
          "name": "Newton-Raphson Formula",
          "formula": "x_(n+1) = x_n - f(x_n)/f'(x_n)",
          "explanation": "Finds successive approximations to the roots of a real-valued function."
        },
        {
          "name": "Runge-Kutta 4th Order",
          "formula": "y_(n+1) = y_n + 1/6 * (k1 + 2*k2 + 2*k3 + k4)",
          "explanation": "Where k1=h*f(x,y), k2=h*f(x+h/2, y+k1/2), k3=h*f(x+h/2, y+k2/2), k4=h*f(x+h, y+k3)."
        }
      ],
      "lastMinuteNotes": [
        "💡 A function is harmonic if it satisfies Laplace\'s equation: ∂²u/∂x² + ∂²u/∂y² = 0.",
        "💡 In interpolation, Lagrange\'s formula can be used for both equally and unequally spaced intervals."
      ]
    },
    "videos": []
  },
  {
    "id": "ada",
    "name": "Analysis & Design of Algorithms",
    "code": "CS-402",
    "branchId": "cs",
    "semester": 4,
    "description": "Algorithm complexities, Divide & Conquer, Greedy method, Dynamic programming, Backtracking, Branch & Bound, and NP-hard / NP-complete problems.",
    "resourceCount": 30,
    "overview": {
      "syllabus": [
        "Unit I: Introduction: Algorithm Analysis, Time and Space Complexities, Asymptotic Notations (O, Omega, Theta). Recurrence Relations, Divide and Conquer (Merge Sort, Quick Sort, Binary Search).",
        "Unit II: Greedy Method: Fractional Knapsack Problem, Job Sequencing with Deadlines, Minimum Cost Spanning Trees (Prim\'s, Kruskal\'s), Optimal Merge Patterns.",
        "Unit III: Dynamic Programming: 0/1 Knapsack, Multistage Graphs, All-Pairs Shortest Paths (Floyd-Warshall), Travelling Salesperson Problem, Longest Common Subsequence.",
        "Unit IV: Backtracking and Branch & Bound: N-Queens Problem, Graph Coloring, Hamiltonian Cycles. Branch and Bound: Assignment Problem, 15-Puzzle Problem.",
        "Unit V: NP-Hard and NP-Complete Problems: Basic Concepts, Non-Deterministic Algorithms, P, NP, NP-Hard, and NP-Complete Classes, Cook’s Theorem, Reduction."
      ],
      "weightageSummary": "Dynamic Programming (Unit III) and Greedy Method (Unit II) represent 45% of total exam weightage. Recurrences and asymptotic complexity are fundamental."
    },
    "weightage": [
      {
        "unit": "Unit I: Complexity & Divide/Conquer",
        "expectedMarks": 15,
        "topics": [
          {
            "name": "Master Theorem for recurrences",
            "frequency": 5
          },
          {
            "name": "Quick Sort partition complexity",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit II: Greedy Method",
        "expectedMarks": 15,
        "topics": [
          {
            "name": "Kruskal and Prim MST algorithms",
            "frequency": 7
          },
          {
            "name": "Fractional Knapsack problem numerical",
            "frequency": 5
          }
        ]
      },
      {
        "unit": "Unit III: Dynamic Programming",
        "expectedMarks": 20,
        "topics": [
          {
            "name": "0/1 Knapsack dynamic matrix",
            "frequency": 8
          },
          {
            "name": "Floyd-Warshall all-pairs shortest paths",
            "frequency": 6
          }
        ]
      },
      {
        "unit": "Unit IV: Backtracking & Branch/Bound",
        "expectedMarks": 15,
        "topics": [
          {
            "name": "N-Queens state space tree",
            "frequency": 6
          },
          {
            "name": "15-Puzzle problem branch & bound",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit V: NP-Completeness",
        "expectedMarks": 10,
        "topics": [
          {
            "name": "P vs NP vs NP-Complete definition",
            "frequency": 6
          },
          {
            "name": "Cooks theorem explanation",
            "frequency": 4
          }
        ]
      }
    ],
    "repeatedQuestions": [
      {
        "id": "rq-ada-1",
        "question": "Solve the 0/1 Knapsack problem using Dynamic Programming for weights: [2, 3, 4, 5] and values: [3, 4, 5, 6] with capacity W=5.",
        "years": [
          2022,
          2023,
          2024,
          2025
        ],
        "frequency": 4,
        "importance": "Very High Probability"
      },
      {
        "id": "rq-ada-2",
        "question": "Find the Minimum Cost Spanning Tree for a given weighted graph using Kruskal\'s algorithm. Show the steps.",
        "years": [
          2021,
          2023,
          2024
        ],
        "frequency": 3,
        "importance": "Very High Probability"
      },
      {
        "id": "rq-ada-3",
        "question": "Explain Master Theorem for solving recurrences. Solve: T(n) = 2T(n/2) + n.",
        "years": [
          2022,
          2024,
          2025
        ],
        "frequency": 3,
        "importance": "High Probability"
      }
    ],
    "oneNightRevision": {
      "topQuestions": [
        "Differentiate between Greedy Method and Dynamic Programming.",
        "Draw the state space tree for solving the 4-Queens problem using backtracking.",
        "Explain Cook\'s Theorem. Discuss polynomial time reducibility."
      ],
      "definitions": [
        {
          "term": "Dynamic Programming",
          "definition": "An algorithmic paradigm that solves complex problems by breaking them down into simpler subproblems, solving each subproblem once, and storing their solutions (memoization)."
        },
        {
          "term": "NP-Complete",
          "definition": "A class of decision problems in NP to which any other problem in NP can be reduced in polynomial time. They represent the hardest problems in NP."
        }
      ],
      "diagrams": [
        {
          "title": "P vs NP vs NP-Complete",
          "description": "Euler diagram showing relationship between P, NP, NP-Hard, and NP-Complete classes assuming P ≠ NP."
        }
      ],
      "formulas": [
        {
          "name": "Master Theorem",
          "formula": "T(n) = a*T(n/b) + f(n)",
          "explanation": "Used to determine asymptotic complexity of divide-and-conquer recurrences."
        }
      ],
      "lastMinuteNotes": [
        "💡 Fractional Knapsack can be solved using Greedy approach (sorting by value/weight ratio), but 0/1 Knapsack requires Dynamic Programming.",
        "💡 Quick Sort has a worst-case time complexity of O(n²), but average-case is O(n log n)."
      ]
    },
    "videos": []
  },
  {
    "id": "se",
    "name": "Software Engineering",
    "code": "CS-403",
    "branchId": "cs",
    "semester": 4,
    "description": "SDLC models, requirements engineering, SRS standards, modular design, cohesion & coupling, UML modeling, white-box and black-box testing, COCOMO estimation, and SCM.",
    "resourceCount": 22,
    "overview": {
      "syllabus": [
        "Unit I: Software Process Models: SDLC, Waterfall, Spiral, Prototype, Win-Win Spiral, Evolutionary, and Agile Methodologies.",
        "Unit II: Software Requirements Engineering: Requirement Elicitation, Analysis, Documentation, SRS Standards, Feasibility Study.",
        "Unit III: Software Design: Design Concepts, Modular Design, Cohesion and Coupling, Object-Oriented Design, UML Diagrams (Class, Use Case, Sequence Diagrams).",
        "Unit IV: Software Testing: White-Box Testing (Basis Path, Control Structure), Black-Box Testing (Equivalence Partitioning, Boundary Value Analysis), Unit, Integration, System, and Acceptance Testing.",
        "Unit V: Software Maintenance & Project Management: Reliability, COCOMO Model, Risk Management, Software Configuration Management (SCM)."
      ],
      "weightageSummary": "Agile (Unit I), COCOMO calculations (Unit V), and software design (Unit III) represent 60% of exam content."
    },
    "weightage": [
      {
        "unit": "Unit I: Process Models",
        "expectedMarks": 15,
        "topics": [
          {
            "name": "Waterfall vs Agile Scrum comparison",
            "frequency": 5
          },
          {
            "name": "Spiral model quadrants",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit II: Requirements",
        "expectedMarks": 12,
        "topics": [
          {
            "name": "SRS document structure & IEEE standards",
            "frequency": 5
          },
          {
            "name": "Functional vs Non-functional reqs",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit III: Design Concepts",
        "expectedMarks": 15,
        "topics": [
          {
            "name": "Cohesion and Coupling types",
            "frequency": 6
          },
          {
            "name": "UML class and sequence diagrams",
            "frequency": 5
          }
        ]
      },
      {
        "unit": "Unit IV: Testing Methods",
        "expectedMarks": 15,
        "topics": [
          {
            "name": "Boundary value analysis & Partitioning",
            "frequency": 6
          },
          {
            "name": "Cyclomatic complexity calculations",
            "frequency": 5
          }
        ]
      },
      {
        "unit": "Unit V: Management & COCOMO",
        "expectedMarks": 18,
        "topics": [
          {
            "name": "COCOMO organic/semi/embedded formulas",
            "frequency": 7
          },
          {
            "name": "SCM and Risk Management steps",
            "frequency": 4
          }
        ]
      }
    ],
    "repeatedQuestions": [
      {
        "id": "rq-se-1",
        "question": "Explain the Spiral Model in detail with its quadrants. Discuss its advantages and disadvantages.",
        "years": [
          2021,
          2022,
          2023,
          2025
        ],
        "frequency": 4,
        "importance": "Very High Probability"
      },
      {
        "id": "rq-se-2",
        "question": "Calculate Effort, Development Time, and Average Staff size using Basic COCOMO organic mode for a project of 40 KLOC.",
        "years": [
          2022,
          2023,
          2024
        ],
        "frequency": 3,
        "importance": "High Probability"
      },
      {
        "id": "rq-se-3",
        "question": "Differentiate between Black Box and White Box Testing. Explain Equivalence Partitioning with an example.",
        "years": [
          2022,
          2024,
          2025
        ],
        "frequency": 3,
        "importance": "High Probability"
      }
    ],
    "oneNightRevision": {
      "topQuestions": [
        "Differentiate between coupling and cohesion. Explain different types of coupling.",
        "Draw a UML Use Case diagram for an Online Library Management System.",
        "Explain the phases of the Software Configuration Management (SCM) process."
      ],
      "definitions": [
        {
          "term": "Cohesion",
          "definition": "A measure of how focused the responsibilities of a single software module are. High cohesion is desired."
        },
        {
          "term": "Coupling",
          "definition": "The degree of interdependence between software modules. Low coupling is desired."
        }
      ],
      "diagrams": [
        {
          "title": "Spiral Model quadrants",
          "description": "Objective determination, Risk assessment, Engineering product, and Next phase planning."
        }
      ],
      "formulas": [
        {
          "name": "Effort (Basic COCOMO)",
          "formula": "E = a * (KLOC)^b  [Person-Months]",
          "explanation": "Estimates human work needed. Organic: a=2.4, b=1.05."
        }
      ],
      "lastMinuteNotes": [
        "💡 Traditional models assume static requirements; Agile assumes changing requirements and iterative deliveries.",
        "💡 In basic COCOMO, the development time formula is Tdev = c * E^d."
      ]
    },
    "videos": []
  },
  {
    "id": "coa",
    "name": "Computer Org. & Architecture",
    "code": "CS-404",
    "branchId": "cs",
    "semester": 4,
    "description": "Basic CPU structure, RTL, micro-operations, General Register Organization, RISC vs CISC, computer arithmetic (Booths), memory mapping, cache, and DMA modes.",
    "resourceCount": 22,
    "overview": {
      "syllabus": [
        "Unit I: Basic Structure of Computers: Functional Units, Bus Structure, Register Transfer Language (RTL), Arithmetic Micro-operations, Logic Micro-operations.",
        "Unit II: Central Processing Unit: General Register Organization, Stack Organization, Instruction Formats, Addressing Modes, Data Transfer and Manipulation, RISC vs CISC Architecture.",
        "Unit III: Computer Arithmetic: Addition and Subtraction with Signed Magnitude, Multiplication Algorithms (Booth’s Algorithm), Division Algorithms, Floating-Point Arithmetic Operations.",
        "Unit IV: Memory Organization: Memory Hierarchy, Main Memory (RAM, ROM), Auxiliary Memory, Associative Memory, Cache Memory (Mapping Techniques, Replacement Algorithms), Virtual Memory.",
        "Unit V: Input-Output Organization: Peripheral Devices, Input-Output Interface, Asynchronous Data Transfer (Strobe, Handshaking), Modes of Transfer (Programmed I/O, Interrupt-Initiated I/O, DMA)."
      ],
      "weightageSummary": "Memory Organization cache mappings (Unit IV) and Booth\'s multiplication algorithm (Unit III) represent 40% of exam marks."
    },
    "weightage": [
      {
        "unit": "Unit I: Basic Structure & RTL",
        "expectedMarks": 12,
        "topics": [
          {
            "name": "Bus design using multiplexers",
            "frequency": 5
          },
          {
            "name": "Register Transfer micro-operations",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit II: CPU & Addressing Modes",
        "expectedMarks": 15,
        "topics": [
          {
            "name": "Addressing Modes with examples",
            "frequency": 7
          },
          {
            "name": "RISC vs CISC architectures",
            "frequency": 5
          }
        ]
      },
      {
        "unit": "Unit III: Computer Arithmetic",
        "expectedMarks": 18,
        "topics": [
          {
            "name": "Booth\'s multiplication numerical",
            "frequency": 8
          },
          {
            "name": "Floating point arithmetic representation",
            "frequency": 5
          }
        ]
      },
      {
        "unit": "Unit IV: Memory Organization",
        "expectedMarks": 15,
        "topics": [
          {
            "name": "Cache mapping (Direct, Associative, Set-Associative)",
            "frequency": 7
          },
          {
            "name": "Virtual memory page tables",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit V: I/O Organization",
        "expectedMarks": 15,
        "topics": [
          {
            "name": "Direct Memory Access (DMA) block transfer",
            "frequency": 7
          },
          {
            "name": "Strobe vs Handshaking transfer",
            "frequency": 5
          }
        ]
      }
    ],
    "repeatedQuestions": [
      {
        "id": "rq-coa-1",
        "question": "Multiply 7 and -5 using Booth\'s multiplication algorithm. Show step-by-step register updates.",
        "years": [
          2022,
          2023,
          2024,
          2025
        ],
        "frequency": 4,
        "importance": "Very High Probability"
      },
      {
        "id": "rq-coa-2",
        "question": "Explain cache mapping techniques: Direct mapping, Associative mapping, and Block Set-Associative mapping with block diagrams.",
        "years": [
          2021,
          2023,
          2024
        ],
        "frequency": 3,
        "importance": "Very High Probability"
      },
      {
        "id": "rq-coa-3",
        "question": "Draw and explain the block diagram of a DMA controller. Discuss its modes of operations.",
        "years": [
          2022,
          2024,
          2025
        ],
        "frequency": 3,
        "importance": "High Probability"
      }
    ],
    "oneNightRevision": {
      "topQuestions": [
        "Differentiate between RISC and CISC architectures.",
        "Discuss various addressing modes in detail: Immediate, Register, Direct, Indirect, Index.",
        "Explain handshaking protocol for asynchronous data transfer."
      ],
      "definitions": [
        {
          "term": "RTL (Register Transfer Language)",
          "definition": "A symbolic language used to describe the micro-operations and transfer of data between registers in a digital system."
        },
        {
          "term": "Cache Memory",
          "definition": "A small, fast memory located close to the CPU that stores copies of frequently accessed data from main memory to reduce access time."
        }
      ],
      "diagrams": [
        {
          "title": "Direct Cache Mapping",
          "description": "Block diagram showing how main memory address index divides into Tag, Block, and Offset fields to map into cache index."
        }
      ],
      "formulas": [],
      "lastMinuteNotes": [
        "💡 Direct mapping suffers from thrashing when competing lines conflict; Set-Associative mapping resolves this.",
        "💡 In Booth\'s algorithm, shift arithmetic right (SAR) preserves the sign bit."
      ]
    },
    "videos": []
  },
  {
    "id": "os",
    "name": "Operating Systems",
    "code": "CS-405",
    "branchId": "cs",
    "semester": 4,
    "description": "Process scheduling, thread management, concurrency, semaphores, deadlock avoidance (Banker\'s), paging, virtual memory, and disk scheduling (SCAN/C-SCAN).",
    "resourceCount": 26,
    "overview": {
      "syllabus": [
        "Unit I: Introduction: Evolution of Operating Systems, Types (Batch, Multiprogramming, Time-sharing, Real-time), System Calls, OS Structure.",
        "Unit II: Process Management: Process Concept, Scheduling Criteria, Scheduling Algorithms (FCFS, SJF, Priority, Round Robin). Threads.",
        "Unit III: Concurrency & Deadlocks: Inter-process Communication, Critical Section Problem, Semaphores, Classical IPC Problems. Deadlock Characterization, Prevention, Avoidance (Banker’s Algorithm), Detection, and Recovery.",
        "Unit IV: Memory Management: Logical vs Physical Address Space, Swapping, Contiguous Allocation, Paging, Segmentation. Virtual Memory: Demand Paging, Page Replacement Algorithms (FIFO, Optimal, LRU), Thrashing.",
        "Unit V: File & Storage Management: File Concept, Access Methods, Directory Structure, Allocation Methods, Disk Scheduling Algorithms (FCFS, SSTF, SCAN, C-SCAN)."
      ],
      "weightageSummary": "Deadlock Banker\'s algorithm (Unit III) and Page Replacement calculations (Unit IV) represent 40% of marks. CPU Scheduling and Disk SCAN are highly recurrent."
    },
    "weightage": [
      {
        "unit": "Unit I: OS Overview",
        "expectedMarks": 10,
        "topics": [
          {
            "name": "System Calls types & execution",
            "frequency": 4
          },
          {
            "name": "Microkernel vs Monolithic OS",
            "frequency": 3
          }
        ]
      },
      {
        "unit": "Unit II: CPU Scheduling",
        "expectedMarks": 16,
        "topics": [
          {
            "name": "Gantt chart and average waiting time (SJF, RR)",
            "frequency": 7
          },
          {
            "name": "Process Control Block (PCB)",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit III: Concurrency & Deadlock",
        "expectedMarks": 18,
        "topics": [
          {
            "name": "Banker\'s Algorithm resource allocation",
            "frequency": 8
          },
          {
            "name": "Producer-Consumer Semaphore solution",
            "frequency": 5
          }
        ]
      },
      {
        "unit": "Unit IV: Memory & Paging",
        "expectedMarks": 20,
        "topics": [
          {
            "name": "Page replacement algorithms (LRU, FIFO)",
            "frequency": 7
          },
          {
            "name": "Internal vs External fragmentation",
            "frequency": 5
          }
        ]
      },
      {
        "unit": "Unit V: Disk Scheduling",
        "expectedMarks": 16,
        "topics": [
          {
            "name": "Disk head movements (SCAN, C-SCAN)",
            "frequency": 6
          },
          {
            "name": "File allocation methods (Linked, Indexed)",
            "frequency": 4
          }
        ]
      }
    ],
    "repeatedQuestions": [
      {
        "id": "rq-os-1",
        "question": "Perform Banker\'s Algorithm for deadlock avoidance: verify if the system is in safe state, and find safe sequence for given allocation, max, and available matrices.",
        "years": [
          2022,
          2023,
          2024
        ],
        "frequency": 3,
        "importance": "Very High Probability"
      },
      {
        "id": "rq-os-2",
        "question": "Given page reference string: 7, 0, 1, 2, 0, 3, 0, 4, 2, 3, 0, 3, 2. Compute page faults for FIFO and LRU page replacement using 3 frames.",
        "years": [
          2021,
          2023,
          2024,
          2025
        ],
        "frequency": 4,
        "importance": "Very High Probability"
      },
      {
        "id": "rq-os-3",
        "question": "Compare FCFS, SSTF, and SCAN disk scheduling algorithms for a request queue and initial head position. Calculate total cylinder tracks.",
        "years": [
          2022,
          2024,
          2025
        ],
        "frequency": 3,
        "importance": "High Probability"
      }
    ],
    "oneNightRevision": {
      "topQuestions": [
        "Explain the difference between Paging and Segmentation.",
        "Define semaphores. Solve the critical section problem using binary semaphores.",
        "Discuss monolithic vs microkernel operating system architectures."
      ],
      "definitions": [
        {
          "term": "Deadlock",
          "definition": "A state in which two or more processes are blocked indefinitely, each waiting for a resource that is held by another process in the set."
        },
        {
          "term": "Thrashing",
          "definition": "A condition in virtual memory where a system spends more time swapping pages in and out of memory than executing actual instructions."
        }
      ],
      "diagrams": [
        {
          "title": "Process State Transitions",
          "description": "State diagram representing New, Ready, Running, Waiting, and Terminated states."
        }
      ],
      "formulas": [],
      "lastMinuteNotes": [
        "💡 The four necessary conditions for deadlock are: Mutual Exclusion, Hold & Wait, No Preemption, and Circular Wait.",
        "💡 Belady\'s Anomaly states that for some page replacement algorithms (like FIFO), the page fault rate may increase as the number of frames increases."
      ]
    },
    "videos": []
  },
  {
    "id": "dbms",
    "name": "Database Management Systems",
    "code": "CS-501",
    "branchId": "cs",
    "semester": 5,
    "description": "Relational data models, ER-diagrams, Relational algebra, SQL query writing, normalization theory (1NF-4NF), transactions, concurrency (2PL), and B-Tree indexing.",
    "resourceCount": 26,
    "overview": {
      "syllabus": [
        "Unit I: Introduction: DBMS Architecture, Data Independence, Data Models (ER Model, Relational Model), Keys, ER-to-Relational Mapping.",
        "Unit II: Relational Query Languages: Relational Algebra, Relational Calculus, SQL (DDL, DML, DCL), Joins, Nested Queries, Triggers, Views.",
        "Unit III: Database Design Theory: Integrity Constraints, Functional Dependencies, Normalization (1NF, 2NF, 3NF, BCNF, 4NF), Multi-valued Dependencies.",
        "Unit IV: Transaction Management & Concurrency: Transaction Concepts, ACID Properties, Schedules (Serializability, Recoverability), Concurrency Control (Locking Protocols, Timestamp-based, Deadlock Handling).",
        "Unit V: Recovery & Indexing: Crash Recovery (Log-based, Checkpoints), File Organizations, Indexing Structures (Primary, Secondary, B-Trees, B+ Trees)."
      ],
      "weightageSummary": "Normalization functional dependencies (Unit III) and Serializability/Concurrency schedules (Unit IV) represent 45% of marks."
    },
    "weightage": [
      {
        "unit": "Unit I: ER & Schemas",
        "expectedMarks": 10,
        "topics": [
          {
            "name": "ER-to-Relational mapping rules",
            "frequency": 5
          }
        ]
      },
      {
        "unit": "Unit II: SQL & Algebra",
        "expectedMarks": 15,
        "topics": [
          {
            "name": "SQL group by & join operations",
            "frequency": 7
          },
          {
            "name": "Relational algebra basic operators",
            "frequency": 6
          }
        ]
      },
      {
        "unit": "Unit III: Normalization Theory",
        "expectedMarks": 20,
        "topics": [
          {
            "name": "Finding Candidate Keys & Decomposition to 3NF/BCNF",
            "frequency": 9
          }
        ]
      },
      {
        "unit": "Unit IV: Transaction Concurrency",
        "expectedMarks": 18,
        "topics": [
          {
            "name": "ACID Properties and Conflict Serializability",
            "frequency": 6
          },
          {
            "name": "Two-Phase Locking (2PL) protocol",
            "frequency": 5
          }
        ]
      },
      {
        "unit": "Unit V: Indexing & Recovery",
        "expectedMarks": 12,
        "topics": [
          {
            "name": "B-Tree and B+ Tree structures",
            "frequency": 6
          },
          {
            "name": "Log-based crash recovery",
            "frequency": 4
          }
        ]
      }
    ],
    "repeatedQuestions": [
      {
        "id": "rq-dbms-1",
        "question": "What is Normalization? Explain 1NF, 2NF, 3NF, and BCNF with suitable examples. Show why BCNF is stronger than 3NF.",
        "years": [
          2022,
          2023,
          2024,
          2025
        ],
        "frequency": 4,
        "importance": "Very High Probability"
      },
      {
        "id": "rq-dbms-2",
        "question": "Check if Schedule S: R1(A), W2(A), W1(A), Commit1, Commit2 is conflict serializable. Draw the precedence graph.",
        "years": [
          2021,
          2023,
          2024
        ],
        "frequency": 3,
        "importance": "High Probability"
      },
      {
        "id": "rq-dbms-3",
        "question": "Given functional dependencies: A->BC, CD->E, B->D, determine candidate keys for relation R(A,B,C,D,E).",
        "years": [
          2022,
          2024,
          2025
        ],
        "frequency": 3,
        "importance": "Very High Probability"
      }
    ],
    "oneNightRevision": {
      "topQuestions": [
        "Differentiate between conflict serializability and view serializability.",
        "Explain B+ Tree indexing structures. Why are B+ Trees preferred over B-Trees for disk indices?",
        "Discuss ACID properties of transactions and their importance."
      ],
      "definitions": [
        {
          "term": "Functional Dependency",
          "definition": "A constraint that describes the relationship between attributes in a relation. Denoted X -> Y, meaning attribute X uniquely determines attribute Y."
        },
        {
          "term": "Two-Phase Locking (2PL)",
          "definition": "A concurrency control protocol that guarantees serializability by requiring that each transaction acquire locks (growing phase) and release locks (shrinking phase) in two distinct, non-overlapping phases."
        }
      ],
      "diagrams": [
        {
          "title": "Three Schema Architecture",
          "description": "Diagram showing External level (user views), Conceptual level (logical schema), and Internal level (physical data storage)."
        }
      ],
      "formulas": [],
      "lastMinuteNotes": [
        "💡 A relation is in 3NF if for every non-trivial FD X -> A, either X is a superkey, or A is a prime attribute.",
        "💡 2PL guarantees serializability, but it does NOT prevent deadlocks."
      ]
    },
    "videos": []
  },
  {
    "id": "flat",
    "name": "Theory of Automata",
    "code": "CS-502",
    "branchId": "cs",
    "semester": 5,
    "description": "DFA, NFA, Mealy & Moore machines, Regular expressions, Pumping lemma for regular & context-free languages, CFG, Pushdown Automata, and Turing Machines.",
    "resourceCount": 28,
    "overview": {
      "syllabus": [
        "Unit I: Finite Automata: DFA, NFA, Equivalence of DFA and NFA, Minimization of Finite Automata, Mealy and Moore Machines.",
        "Unit II: Regular Expressions & Languages: Regular Expressions, Equivalence with Finite Automata, Pumping Lemma for Regular Languages, Closure Properties.",
        "Unit III: Context-Free Grammars (CFG) & Languages: Derivation Trees, Ambiguity, Simplification of CFGs, Normal Forms (CNF, GNF), Pumping Lemma for CFLs.",
        "Unit IV: Pushdown Automata (PDA): Deterministic and Non-Deterministic PDA, Equivalence of PDA and CFG.",
        "Unit V: Turing Machines & Undecidability: Design of Turing Machines, Halting Problem, Church-Turing Thesis, Decidability, Post Correspondence Problem (PCP)."
      ],
      "weightageSummary": "CFG Normal Forms (Unit III) and DFA minimization / design (Unit I) represent 40% of marks. Turing Machine design is a guaranteed long question."
    },
    "weightage": [
      {
        "unit": "Unit I: Finite Automata",
        "expectedMarks": 15,
        "topics": [
          {
            "name": "NFA to DFA conversion steps",
            "frequency": 6
          },
          {
            "name": "Mealy to Moore machine conversions",
            "frequency": 5
          }
        ]
      },
      {
        "unit": "Unit II: Regular Languages",
        "expectedMarks": 12,
        "topics": [
          {
            "name": "Pumping Lemma proofs for non-regularity",
            "frequency": 6
          },
          {
            "name": "FA to Regular Expression conversion",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit III: Grammars & CFLs",
        "expectedMarks": 18,
        "topics": [
          {
            "name": "Chomsky Normal Form (CNF) conversion",
            "frequency": 8
          },
          {
            "name": "Ambiguous Grammar proofs",
            "frequency": 5
          }
        ]
      },
      {
        "unit": "Unit IV: Pushdown Automata",
        "expectedMarks": 15,
        "topics": [
          {
            "name": "Design NPDA for a^n b^n languages",
            "frequency": 7
          },
          {
            "name": "PDA to CFG conversion steps",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit V: Turing Machines",
        "expectedMarks": 15,
        "topics": [
          {
            "name": "Design Turing Machine for a^n b^n c^n",
            "frequency": 8
          },
          {
            "name": "Halting Problem statement",
            "frequency": 5
          }
        ]
      }
    ],
    "repeatedQuestions": [
      {
        "id": "rq-flat-1",
        "question": "Convert the given NFA with epsilon transitions to an equivalent DFA.",
        "years": [
          2022,
          2023,
          2024
        ],
        "frequency": 3,
        "importance": "Very High Probability"
      },
      {
        "id": "rq-flat-2",
        "question": "Convert the following context-free grammar to Chomsky Normal Form (CNF).",
        "years": [
          2021,
          2023,
          2025
        ],
        "frequency": 3,
        "importance": "Very High Probability"
      },
      {
        "id": "rq-flat-3",
        "question": "Design a Turing Machine to accept language L = { a^n b^n | n ≥ 1 } and show its transition table.",
        "years": [
          2022,
          2024,
          2025
        ],
        "frequency": 3,
        "importance": "Very High Probability"
      }
    ],
    "oneNightRevision": {
      "topQuestions": [
        "Prove using Pumping Lemma that L = { a^p | p is prime } is not regular.",
        "Design a Pushdown Automaton (PDA) for language L = { w c w^R | w ∈ (a,b)* }.",
        "Discuss Post Correspondence Problem (PCP) with an example."
      ],
      "definitions": [
        {
          "term": "Deterministic Finite Automaton",
          "definition": "A 5-tuple (Q, ∑, δ, q0, F) where for each state and input symbol, there is exactly one transition to a next state."
        },
        {
          "term": "Pumping Lemma for Regular Languages",
          "definition": "If L is a regular language, there exists a pumping length p such that any string s in L of length ≥ p can be split into s = xyz satisfying |xy| ≤ p, |y| > 0, and x y^i z ∈ L for all i ≥ 0."
        }
      ],
      "diagrams": [],
      "formulas": [],
      "lastMinuteNotes": [
        "💡 regular languages are accepted by FA; context-free by PDA; recursively enumerable by Turing Machines.",
        "💡 In Chomsky Normal Form (CNF), all production rules must be of format A -> BC or A -> a."
      ]
    },
    "videos": []
  },
  {
    "id": "cn",
    "name": "Computer Networks",
    "code": "CS-503",
    "branchId": "cs",
    "semester": 5,
    "description": "ISO-OSI reference model, physical layer, data link sliding windows, error detection (CRC), CSMA/CD, IPv4/IPv6 addressing, subnetting, TCP/UDP, and application layer DNS/HTTP.",
    "resourceCount": 26,
    "overview": {
      "syllabus": [
        "Unit I: Introduction & Physical Layer: Network Topologies, ISO-OSI Reference Model, TCP/IP Suite. Physical Layer concepts, Transmission Media.",
        "Unit II: Data Link Layer: Framing, Error Detection & Correction (Parity, CRC, Hamming Code), Flow Control (Stop & Wait, Sliding Window Protocols), MAC Sublayer (ALOHA, CSMA/CD, CSMA/CA).",
        "Unit III: Network Layer: Routing Algorithms (Distance Vector, Link State), IP Addressing (IPv4, IPv6), Subnetting, CIDR, ARP, RARP, ICMP.",
        "Unit IV: Transport Layer: Connection-oriented and Connectionless Services, UDP, TCP (Header Format, Connection Management, Congestion Control).",
        "Unit V: Application Layer: DNS, Email (SMTP, POP3, IMAP), HTTP, FTP, Network Security Fundamentals."
      ],
      "weightageSummary": "IP Subnetting and Routing algorithms (Unit III) represent 45% of marks. TCP congestion control and sliding windows are highly recurrent."
    },
    "weightage": [
      {
        "unit": "Unit I: OSI & Physical Layer",
        "expectedMarks": 10,
        "topics": [
          {
            "name": "OSI 7 Layer Reference Model functions",
            "frequency": 7
          }
        ]
      },
      {
        "unit": "Unit II: Data Link & MAC",
        "expectedMarks": 16,
        "topics": [
          {
            "name": "CRC Error detection numericals",
            "frequency": 6
          },
          {
            "name": "CSMA/CD protocol collision resolution",
            "frequency": 5
          }
        ]
      },
      {
        "unit": "Unit III: Network & IPs",
        "expectedMarks": 20,
        "topics": [
          {
            "name": "IPv4 Subnetting & CIDR calculations",
            "frequency": 8
          },
          {
            "name": "Dijkstra Link State Routing",
            "frequency": 6
          }
        ]
      },
      {
        "unit": "Unit IV: Transport Layer",
        "expectedMarks": 16,
        "topics": [
          {
            "name": "TCP Header and 3-way handshake",
            "frequency": 6
          },
          {
            "name": "TCP Congestion Control (slow start)",
            "frequency": 5
          }
        ]
      },
      {
        "unit": "Unit V: Application Layer",
        "expectedMarks": 13,
        "topics": [
          {
            "name": "DNS resolution lookup steps",
            "frequency": 5
          },
          {
            "name": "Symmetric vs Asymmetric cryptography",
            "frequency": 4
          }
        ]
      }
    ],
    "repeatedQuestions": [
      {
        "id": "rq-cn-1",
        "question": "Compare OSI Reference Model with TCP/IP Reference Model. List functionalities of each layer.",
        "years": [
          2021,
          2023,
          2024
        ],
        "frequency": 3,
        "importance": "High Probability"
      },
      {
        "id": "rq-cn-2",
        "question": "Given IP address 192.168.1.0/24, divide it into 4 subnets. Find subnet mask, network address, and range of host IPs for each.",
        "years": [
          2022,
          2023,
          2024,
          2025
        ],
        "frequency": 4,
        "importance": "Very High Probability"
      },
      {
        "id": "rq-cn-3",
        "question": "Explain distance vector routing algorithm. What is count-to-infinity problem and how is it resolved?",
        "years": [
          2022,
          2024
        ],
        "frequency": 2,
        "importance": "High Probability"
      }
    ],
    "oneNightRevision": {
      "topQuestions": [
        "A bit stream 1101011011 is transmitted using generator polynomial G(x) = x^4 + x + 1. Find the transmitted CRC codeword.",
        "Explain TCP Congestion Control window mechanisms (Slow Start, Congestion Avoidance).",
        "Write notes on: DNS, SMTP, and HTTP protocols."
      ],
      "definitions": [
        {
          "term": "Subnetting",
          "definition": "The practice of dividing a single large physical network into multiple smaller logical subnetworks (subnets) to improve performance and security."
        },
        {
          "term": "CSMA/CD",
          "definition": "Carrier Sense Multiple Access with Collision Detection, a media access control protocol where devices listen to the cable before sending, and detect collisions if multiple devices send simultaneously."
        }
      ],
      "diagrams": [
        {
          "title": "TCP Three-Way Handshake",
          "description": "Message flow diagram showing SYN, SYN-ACK, and ACK transmissions between client and server."
        }
      ],
      "formulas": [],
      "lastMinuteNotes": [
        "💡 MAC address operates at Data Link layer (48 bits); IP address operates at Network layer (32 bits for IPv4, 128 bits for IPv6).",
        "💡 In Go-Back-N sliding window, window size of sender is 2^k - 1, and receiver is 1."
      ]
    },
    "videos": []
  },
  {
    "id": "cyber",
    "name": "Cyber Security",
    "code": "CS-504",
    "branchId": "cs",
    "semester": 5,
    "description": "Cyber crimes, symmetric (DES, AES) and public key (RSA) cryptography, firewalls, VPNs, wireless security, IT Act 2000, and penetration testing.",
    "resourceCount": 20,
    "overview": {
      "syllabus": [
        "Unit I: Introduction to Cyber Security: Cyber Crimes, Cyber Security Principles, Vulnerabilities, Threats, and Attacks.",
        "Unit II: Cryptography: Symmetric Key Cryptography (DES, AES), Public Key Cryptography (RSA), Hash Functions, Digital Signatures.",
        "Unit III: Network Security: Firewalls, Intrusion Detection Systems (IDS), Virtual Private Networks (VPN), Wireless Security.",
        "Unit IV: Cyber Laws & IT Act: Information Technology Act 2000, Amendments, Intellectual Property Rights (PR), Cyber Forensics Introduction.",
        "Unit V: Secure Software & Risk Management: Secure Coding Practices, Vulnerability Assessment, Penetration Testing, Risk Assessment."
      ],
      "weightageSummary": "RSA cryptography algorithm (Unit II) and Firewalls/VPNs (Unit III) represent 45% of marks. Cyber laws (Unit IV) are highly recursive."
    },
    "weightage": [
      {
        "unit": "Unit I: Cyber Threats",
        "expectedMarks": 10,
        "topics": [
          {
            "name": "SQL Injection and XSS attacks",
            "frequency": 5
          }
        ]
      },
      {
        "unit": "Unit II: Cryptography",
        "expectedMarks": 18,
        "topics": [
          {
            "name": "RSA public key numerical problem",
            "frequency": 7
          },
          {
            "name": "AES vs DES structural differences",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit III: Network Security",
        "expectedMarks": 16,
        "topics": [
          {
            "name": "Firewall architectures (packet filters)",
            "frequency": 6
          },
          {
            "name": "VPN IPSec and SSL tunneling",
            "frequency": 5
          }
        ]
      },
      {
        "unit": "Unit IV: Cyber Laws & IT Act",
        "expectedMarks": 14,
        "topics": [
          {
            "name": "IT Act 2000 sections (Section 66)",
            "frequency": 6
          }
        ]
      },
      {
        "unit": "Unit V: Risk & Pentest",
        "expectedMarks": 12,
        "topics": [
          {
            "name": "Vulnerability assessment steps",
            "frequency": 4
          }
        ]
      }
    ],
    "repeatedQuestions": [
      {
        "id": "rq-cy-1",
        "question": "Perform RSA algorithm encryption/decryption for prime numbers p=3, q=11, encryption key e=7. Encrypt message M=5.",
        "years": [
          2022,
          2023,
          2024,
          2025
        ],
        "frequency": 4,
        "importance": "Very High Probability"
      },
      {
        "id": "rq-cy-2",
        "question": "Differentiate between Symmetric and Asymmetric key cryptography with block diagrams.",
        "years": [
          2021,
          2023,
          2024
        ],
        "frequency": 3,
        "importance": "High Probability"
      },
      {
        "id": "rq-cy-3",
        "question": "Explain the main provisions and sections of the Information Technology (IT) Act 2000 and its subsequent amendments.",
        "years": [
          2022,
          2024,
          2025
        ],
        "frequency": 3,
        "importance": "Very High Probability"
      }
    ],
    "oneNightRevision": {
      "topQuestions": [
        "What is a firewall? Explain packet filtering and application gateway firewalls.",
        "Describe the process of generating digital signatures to ensure non-repudiation.",
        "What is SQL Injection? How can secure coding practices prevent it?"
      ],
      "definitions": [
        {
          "term": "Cryptography",
          "definition": "The art and science of protecting information by transforming it into secure, unreadable formats (ciphertext)."
        },
        {
          "term": "Digital Signature",
          "definition": "A mathematical scheme for verifying the authenticity and integrity of digital messages or documents, equivalent to a handwritten signature."
        }
      ],
      "diagrams": [],
      "formulas": [
        {
          "name": "RSA Key Generation",
          "formula": "n = p * q,  φ(n) = (p-1)*(q-1),  e*d ≡ 1 mod φ(n)",
          "explanation": "Generates public key (e,n) and private key (d,n)."
        }
      ],
      "lastMinuteNotes": [
        "💡 DES uses a 56-bit key; AES can use 128, 192, or 256-bit keys, making AES much more secure.",
        "💡 Intrusion Detection Systems (IDS) detect attacks; Intrusion Prevention Systems (IPS) actively block them."
      ]
    },
    "videos": []
  },
  {
    "id": "cd",
    "name": "Compiler Design",
    "code": "CS-601",
    "branchId": "cs",
    "semester": 6,
    "description": "Phases of compiling, Lexical analysis (LEX), Syntax analysis (LL, LR, SLR, LALR parsers), Syntax-directed translation, DAG, optimization, and code generation.",
    "resourceCount": 24,
    "overview": {
      "syllabus": [
        "Unit I: Introduction to Compiling: Phases of a Compiler, Lexical Analysis, Role of Lexical Analyzer, Specification and Recognition of Tokens, LEX Tool.",
        "Unit II: Syntax Analysis (Parsing): Top-Down Parsing (LL(1), Recursive Descent), Bottom-Up Parsing (Operator Precedence, LR Parsers: SLR, CLR, LALR), YACC Tool.",
        "Unit III: Syntax-Directed Translation & Intermediate Code Generation: Syntax-Directed Definitions, Three-Address Code, Quadruples, Triples, Translation of Expressions and Control Flow.",
        "Unit IV: Runtime Environments & Code Optimization: Source Language Issues, Storage Organization, Allocation Strategies, Principal Sources of Optimization, Optimization of Basic Blocks, Data Flow Analysis.",
        "Unit V: Code Generation: Issues in the Design of a Code Generator, Target Machine Architecture, Simple Code Generator, Register Allocation and Assignment."
      ],
      "weightageSummary": "LR Parsing tables (Unit II) and Three-Address Code (Unit III) represent 45% of exam weightage. Optimization of basic blocks is also frequently asked."
    },
    "weightage": [
      {
        "unit": "Unit I: Lexical Analysis",
        "expectedMarks": 10,
        "topics": [
          {
            "name": "Token recognition using DFA",
            "frequency": 5
          }
        ]
      },
      {
        "unit": "Unit II: Parsing Algorithms",
        "expectedMarks": 20,
        "topics": [
          {
            "name": "SLR(1) parser table construction",
            "frequency": 8
          },
          {
            "name": "LL(1) parsing FIRST & FOLLOW sets",
            "frequency": 7
          }
        ]
      },
      {
        "unit": "Unit III: SDT & Intermediate Code",
        "expectedMarks": 16,
        "topics": [
          {
            "name": "Three-Address Code triples/quadruples",
            "frequency": 7
          },
          {
            "name": "Syntax-Directed Translation actions",
            "frequency": 5
          }
        ]
      },
      {
        "unit": "Unit IV: Optimization",
        "expectedMarks": 14,
        "topics": [
          {
            "name": "Loop optimization (code motion)",
            "frequency": 6
          },
          {
            "name": "DAG representation of basic blocks",
            "frequency": 5
          }
        ]
      },
      {
        "unit": "Unit V: Code Generation",
        "expectedMarks": 10,
        "topics": [
          {
            "name": "Register Allocation algorithms",
            "frequency": 5
          }
        ]
      }
    ],
    "repeatedQuestions": [
      {
        "id": "rq-cd-1",
        "question": "Construct the SLR(1) parsing table for the grammar: E->E+T|T, T->id.",
        "years": [
          2022,
          2023,
          2024
        ],
        "frequency": 3,
        "importance": "Very High Probability"
      },
      {
        "id": "rq-cd-2",
        "question": "Find FIRST and FOLLOW sets for the grammar: E->TE\', E\'->+TE\', T->FT\', T\'->*FT\'|ε, F->(E)|id.",
        "years": [
          2021,
          2023,
          2025
        ],
        "frequency": 3,
        "importance": "Very High Probability"
      },
      {
        "id": "rq-cd-3",
        "question": "Write the three-address code, quadruples, and triples for expression: a = b * -c + b * -c.",
        "years": [
          2022,
          2024,
          2025
        ],
        "frequency": 3,
        "importance": "High Probability"
      }
    ],
    "oneNightRevision": {
      "topQuestions": [
        "Explain the phases of a compiler with a neat block diagram.",
        "Discuss loop optimization techniques: loop motion, induction variables, loop unrolling.",
        "Explain the role of symbol table in compiler design."
      ],
      "definitions": [
        {
          "term": "Token",
          "definition": "A sequence of characters in source code that is categorized as a single logical unit, such as keywords, identifiers, operators, or literals."
        },
        {
          "term": "Left Recursion",
          "definition": "A grammar property where a non-terminal A has a rule A -> Aα, which can cause infinite loops in top-down recursive descent parsing."
        }
      ],
      "diagrams": [
        {
          "title": "Phases of a Compiler",
          "description": "Flow diagram showing Lexical, Syntax, Semantic, Intermediate Code, Code Optimization, and Code Generation phases."
        }
      ],
      "formulas": [],
      "lastMinuteNotes": [
        "💡 LL(1) parses top-down, left-to-right, with 1 lookahead; LR(1) parses bottom-up, left-to-right, with 1 lookahead.",
        "💡 In intermediate code, quadruples contain: operator, argument 1, argument 2, and result."
      ]
    },
    "videos": []
  },
  {
    "id": "cg",
    "name": "Computer Graphics",
    "code": "CS-602",
    "branchId": "cs",
    "semester": 6,
    "description": "Raster-scan systems, line (Bresenham\'s) and circle drawings, 2D/3D transformations, clipping, hidden surface removal, Gouraud/Phong shading, Bezier curves, and color models.",
    "resourceCount": 22,
    "overview": {
      "syllabus": [
        "Unit I: Introduction & Line Generation: Video Display Devices, Raster-Scan and Random-Scan Systems. Line Drawing Algorithms (DHA, Bresenham’s), Circle Generating Algorithms.",
        "Unit II: 2D Transformations & Clipping: Translation, Rotation, Scaling, Matrix Representations, Homogeneous Coordinates, Composite Transformations. Clipping: Cohen-Sutherland Line Clipping, Sutherland-Hodgman Polygon Clipping.",
        "Unit III: 3D Concepts & Transformations: 3D Display Methods, 3D Transformations (Translation, Scaling, Rotation), Projections (Parallel and Perspective).",
        "Unit IV: Visible Surface Detection & Shading: Hidden Lines and Surfaces, Back-Face Detection, Depth-Buffer Method, A-Buffer Method, Scan-Line Method. Illumination Models, Gouraud and Phong Shading.",
        "Unit V: Curves & Color Models: Spline Representations, Bezier Curves, B-Spline Curves. Color Models: RGB, YIQ, CMY, HSV."
      ],
      "weightageSummary": "Bresenham\'s line algorithm (Unit I) and 2D rotation/composite transformation matrices (Unit II) represent 45% of marks."
    },
    "weightage": [
      {
        "unit": "Unit I: Output Primitives",
        "expectedMarks": 15,
        "topics": [
          {
            "name": "Bresenham\'s Line drawing derivation",
            "frequency": 6
          },
          {
            "name": "Midpoint Circle drawing algorithm",
            "frequency": 5
          }
        ]
      },
      {
        "unit": "Unit II: 2D Transforms & Clip",
        "expectedMarks": 18,
        "topics": [
          {
            "name": "Homogeneous coordinate matrices",
            "frequency": 7
          },
          {
            "name": "Cohen-Sutherland Line Clipping",
            "frequency": 6
          }
        ]
      },
      {
        "unit": "Unit III: 3D & Projections",
        "expectedMarks": 12,
        "topics": [
          {
            "name": "Parallel vs Perspective projection",
            "frequency": 5
          },
          {
            "name": "3D Rotation about arbitrary axis",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit IV: Shading & Hidden Surf",
        "expectedMarks": 15,
        "topics": [
          {
            "name": "Depth-Buffer (Z-Buffer) algorithm",
            "frequency": 6
          },
          {
            "name": "Gouraud vs Phong shading models",
            "frequency": 5
          }
        ]
      },
      {
        "unit": "Unit V: Curves & Colors",
        "expectedMarks": 10,
        "topics": [
          {
            "name": "Bezier Curve blending functions",
            "frequency": 6
          },
          {
            "name": "HSV and RGB color models",
            "frequency": 4
          }
        ]
      }
    ],
    "repeatedQuestions": [
      {
        "id": "rq-cg-1",
        "question": "Derive Bresenham\'s line drawing algorithm for a line with positive slope m < 1.",
        "years": [
          2022,
          2023,
          2024,
          2025
        ],
        "frequency": 4,
        "importance": "Very High Probability"
      },
      {
        "id": "rq-cg-2",
        "question": "Perform a 2D rotation of a triangle with vertices A(0,0), B(4,0), C(2,4) by an angle of 45° counterclockwise about origin.",
        "years": [
          2021,
          2023,
          2024
        ],
        "frequency": 3,
        "importance": "Very High Probability"
      },
      {
        "id": "rq-cg-3",
        "question": "Explain Cohen-Sutherland line clipping algorithm. Trace it for a line with coordinates.",
        "years": [
          2022,
          2024,
          2025
        ],
        "frequency": 3,
        "importance": "High Probability"
      }
    ],
    "oneNightRevision": {
      "topQuestions": [
        "Differentiate between Raster Scan and Random Scan display systems.",
        "Explain the Depth-Buffer (Z-Buffer) algorithm for hidden surface removal.",
        "Write down properties of Bezier Curves."
      ],
      "definitions": [
        {
          "term": "Homogeneous Coordinates",
          "definition": "A system of coordinates where a 2D point (x, y) is represented as a 3D point (xh, yh, h) such that x = xh/h and y = yh/h, enabling translation to be represented as matrix multiplication."
        },
        {
          "term": "Phong Shading",
          "definition": "An interpolation technique for surface shading in 3D graphics that interpolates normal vectors across rasterized polygons, yielding realistic specular highlights."
        }
      ],
      "diagrams": [],
      "formulas": [
        {
          "name": "2D Rotation Matrix",
          "formula": "R = [[cosθ, -sinθ, 0], [sinθ, cosθ, 0], [0, 0, 1]]",
          "explanation": "Rotates a homogeneous point about the origin by angle θ."
        }
      ],
      "lastMinuteNotes": [
        "💡 Cohen-Sutherland uses 4-bit outcodes (Top, Bottom, Right, Left) to represent clipping window regions.",
        "💡 Gouraud shading interpolates color intensities; Phong shading interpolates normal vectors."
      ]
    },
    "videos": []
  },
  {
    "id": "stqa",
    "name": "Software Testing & QA",
    "code": "CS-603",
    "branchId": "cs",
    "semester": 6,
    "description": "Testing principles, defect lifecycle, levels of testing (unit, integration, system), test case designs, static reviews, SQA, reliability metrics, CMM levels, and test automation.",
    "resourceCount": 18,
    "overview": {
      "syllabus": [
        "Unit I: Testing Methodology: Principles of Testing, Software Development Life Cycle Models vs Testing, Defect Lifecycle.",
        "Unit II: Levels of Testing: Unit Testing, Integration Testing, System Testing, Acceptance Testing, Alpha/Beta Testing, Regression Testing.",
        "Unit III: Test Case Design: Static Testing (Reviews, Walkthroughs), Dynamic Testing, Functional Testing (Black Box), Structural Testing (White Box).",
        "Unit IV: Software Quality Assurance (SQA): Quality Concepts, SQA Activities, Software Reliability, Quality Metrics, ISO 9000, SEI CMM Models.",
        "Unit V: Test Automation: Automated Testing vs Manual Testing, Testing Tools (Selection, Benefits), Test Metrics and Reporting."
      ],
      "weightageSummary": "White Box / Black Box case designs (Unit III) and SEI CMM Levels (Unit IV) represent 45% of marks."
    },
    "weightage": [
      {
        "unit": "Unit I: Methodology",
        "expectedMarks": 10,
        "topics": [
          {
            "name": "Defect life cycle states",
            "frequency": 5
          }
        ]
      },
      {
        "unit": "Unit II: Levels of Testing",
        "expectedMarks": 16,
        "topics": [
          {
            "name": "Integration testing strategies (Top-down)",
            "frequency": 6
          }
        ]
      },
      {
        "unit": "Unit III: Test Case Design",
        "expectedMarks": 18,
        "topics": [
          {
            "name": "Boundary Value Analysis cases",
            "frequency": 7
          },
          {
            "name": "Basis Path white box testing",
            "frequency": 6
          }
        ]
      },
      {
        "unit": "Unit IV: SQA & CMM",
        "expectedMarks": 16,
        "topics": [
          {
            "name": "SEI CMM Levels 1 to 5",
            "frequency": 7
          },
          {
            "name": "ISO 9000 quality standards",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit V: Automation",
        "expectedMarks": 10,
        "topics": [
          {
            "name": "Manual vs Automated testing tradeoffs",
            "frequency": 5
          }
        ]
      }
    ],
    "repeatedQuestions": [
      {
        "id": "rq-st-1",
        "question": "Draw and explain the Defect Life Cycle showing different states from New to Closed.",
        "years": [
          2022,
          2024
        ],
        "frequency": 2,
        "importance": "High Probability"
      },
      {
        "id": "rq-st-2",
        "question": "Explain the five maturity levels of the SEI Capability Maturity Model (CMM).",
        "years": [
          2021,
          2023,
          2025
        ],
        "frequency": 3,
        "importance": "Very High Probability"
      }
    ],
    "oneNightRevision": {
      "topQuestions": [
        "Differentiate between verification and validation in software testing.",
        "Explain integration testing. Compare top-down and bottom-up integration.",
        "What is equivalence partitioning? Formulate test cases for a range boundary."
      ],
      "definitions": [
        {
          "term": "Regression Testing",
          "definition": "Re-running testing scripts on modified software versions to ensure that existing features are not broken by new code changes."
        },
        {
          "term": "Defect",
          "definition": "Any flaw, error, or bug in a software product that causes it to deviate from its specified requirements."
        }
      ],
      "diagrams": [],
      "formulas": [],
      "lastMinuteNotes": [
        "💡 Level 5 of CMM is \"Optimizing\", focusing on continuous process improvement.",
        "💡 Static testing checks code without executing it; dynamic testing executes code with inputs."
      ]
    },
    "videos": []
  },
  {
    "id": "dsbd",
    "name": "Data Science / Big Data",
    "code": "CS-701",
    "branchId": "cs",
    "semester": 7,
    "description": "Big Data characteristics, Exploratory Data Analysis, probability and statistics foundations, Hadoop ecosystem, MapReduce, and NoSQL databases.",
    "resourceCount": 20,
    "overview": {
      "syllabus": [
        "Unit I: Introduction to Data Science & Big Data: Concepts, Characteristics (Volume, Velocity, Variety, Veracity), Data Science Lifecycle, Roles, Stack.",
        "Unit II: Data Preprocessing & Exploratory Data Analysis (EDA): Data Cleaning, Transformation, Summarization, Data Visualization Techniques.",
        "Unit III: Mathematical Foundations: Linear Algebra, Probability, Statistics for Data Science, Hypothesis Testing, Regression Analysis.",
        "Unit IV: Big Data Architecture & Hadoop: Hadoop Ecosystem, HDFS Architecture, MapReduce Framework and Programming Model.",
        "Unit V: NoSQL & Big Data Tools: Introduction to NoSQL Databases (MongoDB, Cassandra), Apache Spark Basics, Data Science Ethics and Privacy."
      ],
      "weightageSummary": "HDFS/MapReduce working (Unit IV) and Exploratory Data Analysis (Unit II) represent 45% of marks."
    },
    "weightage": [
      {
        "unit": "Unit I: Big Data Overview",
        "expectedMarks": 10,
        "topics": [
          {
            "name": "The 5 Vs of Big Data",
            "frequency": 5
          }
        ]
      },
      {
        "unit": "Unit II: Preprocessing & EDA",
        "expectedMarks": 15,
        "topics": [
          {
            "name": "Data Cleaning and handling missing values",
            "frequency": 6
          }
        ]
      },
      {
        "unit": "Unit III: Math Foundations",
        "expectedMarks": 15,
        "topics": [
          {
            "name": "Hypothesis testing p-value significance",
            "frequency": 6
          },
          {
            "name": "Linear regression fitting",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit IV: Hadoop & MapReduce",
        "expectedMarks": 20,
        "topics": [
          {
            "name": "HDFS Read/Write file operations",
            "frequency": 8
          },
          {
            "name": "MapReduce Mapper-Reducer flow chart",
            "frequency": 7
          }
        ]
      },
      {
        "unit": "Unit V: NoSQL & Spark",
        "expectedMarks": 10,
        "topics": [
          {
            "name": "NoSQL Key-Value vs Document stores",
            "frequency": 5
          }
        ]
      }
    ],
    "repeatedQuestions": [
      {
        "id": "rq-dsbd-1",
        "question": "Explain HDFS architecture. How does it handle file storage, replication, and fault tolerance?",
        "years": [
          2022,
          2023,
          2024,
          2025
        ],
        "frequency": 4,
        "importance": "Very High Probability"
      },
      {
        "id": "rq-dsbd-2",
        "question": "Explain the working of the MapReduce framework with a Word Count example flowchart.",
        "years": [
          2021,
          2023,
          2024
        ],
        "frequency": 3,
        "importance": "Very High Probability"
      },
      {
        "id": "rq-dsbd-3",
        "question": "Discuss the 5 Vs characteristics of Big Data with corporate examples.",
        "years": [
          2022,
          2024,
          2025
        ],
        "frequency": 3,
        "importance": "High Probability"
      }
    ],
    "oneNightRevision": {
      "topQuestions": [
        "Differentiate between SQL databases and NoSQL databases.",
        "Explain data cleaning steps: handling outliers, normalization, and scaling.",
        "Discuss ethical considerations and privacy issues in big data analytics."
      ],
      "definitions": [
        {
          "term": "MapReduce",
          "definition": "A programming model and associated implementation for processing and generating large data sets with a parallel, distributed algorithm on a cluster."
        },
        {
          "term": "HDFS",
          "definition": "Hadoop Distributed File System, a Java-based file system that provides scalable, reliable data storage designed to span clusters of commodity servers."
        }
      ],
      "diagrams": [
        {
          "title": "MapReduce Word Count Flow",
          "description": "Diagram showing input data splitting, mapping, shuffling/sorting, reducing, and final output."
        }
      ],
      "formulas": [],
      "lastMinuteNotes": [
        "💡 In HDFS, the NameNode holds metadata while DataNodes store the actual data blocks.",
        "💡 NoSQL databases are schema-free and support horizontal scalability."
      ]
    },
    "videos": []
  },
  {
    "id": "cc",
    "name": "Cloud Computing",
    "code": "CS-702",
    "branchId": "cs",
    "semester": 7,
    "description": "Cloud service and deployment models, virtualization (hypervisors, Docker), distributed storage, resource allocation, and cloud security risks.",
    "resourceCount": 22,
    "overview": {
      "syllabus": [
        "Unit I: Introduction to Cloud Computing: Shift from Parallel/Distributed Computing to Cloud, Cloud Characteristics, Benefits, Challenges.",
        "Unit II: Cloud Computing Architecture: Service Models (IaaS, PaaS, SaaS), Deployment Models (Public, Private, Hybrid, Community), Cloud Infrastructure Management.",
        "Unit III: Virtualization: Concepts, Types of Virtualization (Hypervisors, Full vs Para-virtualization), OS-level Virtualization (Containers, Docker).",
        "Unit IV: Cloud Storage & Resource Management: Distributed File Systems, Cloud Storage Providers, Resource Allocation, Scheduling, Load Balancing.",
        "Unit V: Cloud Security & Future Trends: Cloud Security Risks, Data Security, Identity and Access Management (IAM), Fog/Edge Computing, Serverless Architecture."
      ],
      "weightageSummary": "Cloud Service Models IaaS/PaaS/SaaS (Unit II) and Virtualization hypervisors (Unit III) represent 45% of marks."
    },
    "weightage": [
      {
        "unit": "Unit I: Cloud Intro",
        "expectedMarks": 10,
        "topics": [
          {
            "name": "Cloud elasticity and scalability",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit II: Service & Deployment",
        "expectedMarks": 18,
        "topics": [
          {
            "name": "SaaS vs PaaS vs IaaS structures",
            "frequency": 7
          },
          {
            "name": "Hybrid cloud deployment challenges",
            "frequency": 5
          }
        ]
      },
      {
        "unit": "Unit III: Virtualization",
        "expectedMarks": 16,
        "topics": [
          {
            "name": "Hypervisors Type 1 vs Type 2",
            "frequency": 6
          },
          {
            "name": "Docker containerization benefits",
            "frequency": 5
          }
        ]
      },
      {
        "unit": "Unit IV: Resource Management",
        "expectedMarks": 14,
        "topics": [
          {
            "name": "Load Balancing algorithms",
            "frequency": 6
          }
        ]
      },
      {
        "unit": "Unit V: Security & Trends",
        "expectedMarks": 12,
        "topics": [
          {
            "name": "Identity & Access Management (IAM)",
            "frequency": 5
          }
        ]
      }
    ],
    "repeatedQuestions": [
      {
        "id": "rq-cc-1",
        "question": "Explain the three service models of cloud computing (IaaS, PaaS, SaaS) with practical examples of each.",
        "years": [
          2022,
          2023,
          2024,
          2025
        ],
        "frequency": 4,
        "importance": "Very High Probability"
      },
      {
        "id": "rq-cc-2",
        "question": "Differentiate between Type-1 (bare-metal) and Type-2 (hosted) hypervisors. List their advantages.",
        "years": [
          2021,
          2023,
          2024
        ],
        "frequency": 3,
        "importance": "High Probability"
      },
      {
        "id": "rq-cc-3",
        "question": "What is containerization? How do Docker containers differ from Virtual Machines?",
        "years": [
          2022,
          2024,
          2025
        ],
        "frequency": 3,
        "importance": "Very High Probability"
      }
    ],
    "oneNightRevision": {
      "topQuestions": [
        "Discuss security concerns in cloud environments and list countermeasures.",
        "Explain Load Balancing. Compare static and dynamic load balancing algorithms.",
        "Write notes on serverless computing and edge computing."
      ],
      "definitions": [
        {
          "term": "Hypervisor",
          "definition": "A piece of computer software, firmware, or hardware that creates and runs virtual machines by isolating operating systems from the hardware."
        },
        {
          "term": "Serverless Computing",
          "definition": "A cloud-computing execution model where the cloud provider runs the server, and dynamically manages the allocation of machine resources (e.g. AWS Lambda)."
        }
      ],
      "diagrams": [],
      "formulas": [],
      "lastMinuteNotes": [
        "💡 VMs isolate hardware using hypervisors; Containers isolate user spaces at OS-level using container engines.",
        "💡 Public cloud is shared multi-tenant infrastructure; private cloud is single-tenant dedicated infrastructure."
      ]
    },
    "videos": []
  },
  {
    "id": "iot",
    "name": "Internet of Things",
    "code": "CS-801",
    "branchId": "cs",
    "semester": 8,
    "description": "IoT design, reference architectures, device layers, networking protocols (MQTT, CoAP), microcontrollers (Arduino, Pi), stream analytics, and security.",
    "resourceCount": 20,
    "overview": {
      "syllabus": [
        "Unit I: Introduction to IoT: Definition, Characteristics, Physical & Logical Design, IoT Enabling Technologies, IoT Levels & Deployment Templates.",
        "Unit II: IoT Architecture & Protocols: IoT Reference Architecture, Device Layer, Network Layer, Application Layer Protocols (MQTT, CoAP, HTTP, AMQP).",
        "Unit III: IoT Hardware & Sensing: Sensors, Actuators, Microcontrollers (Arduino, Raspberry Pi, ESP8266), Interfacing Sensors and Hardware Programming.",
        "Unit IV: IoT Data Analytics & Cloud Integration: Stream Processing, Cloud Storage for IoT, Integrating IoT with Cloud Platforms (AWS IoT, Azure IoT).",
        "Unit V: IoT Security & Case Studies: IoT Security Vulnerabilities, Solutions, Smart Cities, Smart Agriculture, Industrial IoT (IIoT), Home Automation."
      ],
      "weightageSummary": "IoT Application Protocols MQTT/CoAP (Unit II) and Microcontroller programming (Unit III) represent 45% of marks."
    },
    "weightage": [
      {
        "unit": "Unit I: IoT Design",
        "expectedMarks": 10,
        "topics": [
          {
            "name": "IoT Levels and deployment templates",
            "frequency": 5
          }
        ]
      },
      {
        "unit": "Unit II: Protocols & Arch",
        "expectedMarks": 18,
        "topics": [
          {
            "name": "MQTT publish-subscribe model",
            "frequency": 8
          },
          {
            "name": "CoAP vs HTTP design comparison",
            "frequency": 6
          }
        ]
      },
      {
        "unit": "Unit III: Sensors & Hardware",
        "expectedMarks": 16,
        "topics": [
          {
            "name": "Raspberry Pi pin configuration",
            "frequency": 5
          },
          {
            "name": "Analog vs Digital sensors",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit IV: Cloud Integration",
        "expectedMarks": 14,
        "topics": [
          {
            "name": "Integrating ESP8266 with AWS IoT Cloud",
            "frequency": 5
          }
        ]
      },
      {
        "unit": "Unit V: Security & Cases",
        "expectedMarks": 12,
        "topics": [
          {
            "name": "Industrial IoT (IIoT) smart manufacturing",
            "frequency": 4
          }
        ]
      }
    ],
    "repeatedQuestions": [
      {
        "id": "rq-iot-1",
        "question": "Explain MQTT protocol. Discuss its architecture, packet structure, and publish-subscribe mechanism in detail.",
        "years": [
          2022,
          2023,
          2024,
          2025
        ],
        "frequency": 4,
        "importance": "Very High Probability"
      },
      {
        "id": "rq-iot-2",
        "question": "Compare MQTT and CoAP protocols for IoT applications. Discuss their strengths and weaknesses.",
        "years": [
          2021,
          2023,
          2024
        ],
        "frequency": 3,
        "importance": "High Probability"
      },
      {
        "id": "rq-iot-3",
        "question": "Discuss the design of a Smart Irrigation System using Arduino, soil moisture sensor, and water pump.",
        "years": [
          2022,
          2024,
          2025
        ],
        "frequency": 3,
        "importance": "Very High Probability"
      }
    ],
    "oneNightRevision": {
      "topQuestions": [
        "Differentiate between microprocessors (Raspberry Pi) and microcontrollers (Arduino) in IoT.",
        "Explain the role of gateway in IoT network architecture.",
        "What are the primary security vulnerabilities in IoT devices?"
      ],
      "definitions": [
        {
          "term": "MQTT",
          "definition": "Message Queuing Telemetry Transport, a lightweight publish-subscribe network protocol designed for low-bandwidth, high-latency, or unreliable networks."
        },
        {
          "term": "Actuator",
          "definition": "A component of a machine or device that is responsible for moving and controlling a mechanism or system (e.g. motors, relays)."
        }
      ],
      "diagrams": [
        {
          "title": "MQTT Publish-Subscribe",
          "description": "Diagram showing Publisher, Broker, and Subscribers communicating over topics."
        }
      ],
      "formulas": [],
      "lastMinuteNotes": [
        "💡 CoAP runs over UDP, while MQTT runs over TCP, making CoAP more suitable for resource-constrained nodes.",
        "💡 GPIO stands for General Purpose Input Output, pins used to read sensor inputs or trigger actuators."
      ]
    },
    "videos": []
  },
  {
    "id": "bc",
    "name": "Blockchains",
    "code": "CS-802",
    "branchId": "cs",
    "semester": 8,
    "description": "Decentralized systems, consensus algorithms (PoW, PoS, PBFT), Bitcoin and Ethereum smart contracts, Solidity programming, and Hyperledger Fabric enterprise models.",
    "resourceCount": 18,
    "overview": {
      "syllabus": [
        "Unit I: Blockchain Fundamentals: Centralized vs Decentralized Systems, Cryptographic Primitives (Hash Functions, Public Key Cryptography, Digital Signatures).",
        "Unit II: Distributed Consensus: Consensus Problem, Proof of Work (PoW), Proof of Stake (PoS), Practical Byzantine Fault Tolerance (PBFT).",
        "Unit III: Bitcoin & Ethereum: Bitcoin Blockchain, Wallets, Transactions, Smart Contracts Overview, Ethereum Virtual Machine (EVM).",
        "Unit IV: Development Tools & Smart Contracts: Solidity Programming Language, Writing, Compiling, Testing, and Deploying Smart Contracts.",
        "Unit V: Enterprise Blockchains & Use Cases: Hyperledger Fabric Architecture, Private vs Public Blockchains, Applications in Finance, Supply Chain, and Identity Management."
      ],
      "weightageSummary": "Consensus Proof of Work (Unit II) and Solidity Smart Contracts (Unit IV) represent 45% of marks."
    },
    "weightage": [
      {
        "unit": "Unit I: Crypto Primitives",
        "expectedMarks": 10,
        "topics": [
          {
            "name": "SHA-256 hash function properties",
            "frequency": 5
          }
        ]
      },
      {
        "unit": "Unit II: Consensus Algorithms",
        "expectedMarks": 18,
        "topics": [
          {
            "name": "Proof of Work vs Proof of Stake",
            "frequency": 8
          },
          {
            "name": "Byzantine Generals Problem description",
            "frequency": 6
          }
        ]
      },
      {
        "unit": "Unit III: Bitcoin & Ethereum",
        "expectedMarks": 16,
        "topics": [
          {
            "name": "EVM (Ethereum Virtual Machine) gas fees",
            "frequency": 6
          },
          {
            "name": "UTXO transaction model in Bitcoin",
            "frequency": 5
          }
        ]
      },
      {
        "unit": "Unit IV: Solidity Programming",
        "expectedMarks": 14,
        "topics": [
          {
            "name": "Solidity contract structure & variables",
            "frequency": 7
          }
        ]
      },
      {
        "unit": "Unit V: Hyperledger & Cases",
        "expectedMarks": 12,
        "topics": [
          {
            "name": "Hyperledger Fabric transactional flow",
            "frequency": 5
          }
        ]
      }
    ],
    "repeatedQuestions": [
      {
        "id": "rq-bc-1",
        "question": "Explain the working of Proof of Work (PoW) consensus. How does it prevent double-spending in Bitcoin?",
        "years": [
          2022,
          2023,
          2024,
          2025
        ],
        "frequency": 4,
        "importance": "Very High Probability"
      },
      {
        "id": "rq-bc-2",
        "question": "What is a Smart Contract? Write a simple Solidity program to implement a Bank contract with deposit and withdraw functions.",
        "years": [
          2021,
          2023,
          2025
        ],
        "frequency": 3,
        "importance": "Very High Probability"
      },
      {
        "id": "rq-bc-3",
        "question": "Differentiate between Public (Permissionless) and Private (Permissioned) blockchains. Explain Hyperledger Fabric architecture.",
        "years": [
          2022,
          2024
        ],
        "frequency": 2,
        "importance": "High Probability"
      }
    ],
    "oneNightRevision": {
      "topQuestions": [
        "Discuss the Byzantine Generals Problem and explain how PBFT solves it.",
        "What is EVM Gas? Why is it required in Ethereum transactions?",
        "Explain Merkle Trees and show how they are used to verify transactions in blocks."
      ],
      "definitions": [
        {
          "term": "Smart Contract",
          "definition": "A self-executing computer program with the terms of the agreement directly written into lines of code, running on a blockchain."
        },
        {
          "term": "Merkle Tree",
          "definition": "A cryptographic tree structure where every leaf node is labeled with the cryptographic hash of a data block, and every non-leaf node is labeled with the hash of its child labels."
        }
      ],
      "diagrams": [
        {
          "title": "Blockchain Block Structure",
          "description": "Diagram showing Block Header (Previous Hash, Merkle Root, Nonce, Timestamp) linked to next block."
        }
      ],
      "formulas": [],
      "lastMinuteNotes": [
        "💡 In Bitcoin, transactions use the UTXO (Unspent Transaction Output) model; Ethereum uses Account-based model.",
        "💡 Solidity functions can have visibility specifiers: public, private, internal, external."
      ]
    },
    "videos": []
  },
  {
    "id": "ds-aiml",
    "name": "Data Structures",
    "code": "AL-303",
    "branchId": "aiml",
    "semester": 3,
    "description": "Introduction to Data Structures: Concepts of Data and Information, linear data structures, stacks, queues, trees, graphs, sorting and searching techniques.",
    "resourceCount": 26,
    "overview": {
      "syllabus": [
        "Unit I: Introduction to Data Structures: Concepts of Data and Information, Classification, Abstract Data Types (ADT), Memory representation. Linear data structures: Arrays, Linked Lists (Singly, Doubly, Circular), Address calculation, Polynomial manipulation.",
        "Unit II: Stacks and Queues: Stack as ADT, Implementation (Array & Linked List). Applications: Infix to Postfix conversion, Evaluation of postfix expression, Recursion. Queues: Linear, Circular, Dequeue, Priority Queue, Queue simulation.",
        "Unit III: Trees: Definitions (Height, Depth, Order, Degree). Binary Search Tree (BST): Operations, Traversals (Inorder, Preorder, Postorder). AVL Trees, Heaps, Multi-way Trees, Introduction to B-Trees, B+ Trees, and Red-Black Trees.",
        "Unit IV: Graphs: Classification (Directed/Undirected), Representation (Matrix/List), Graph Traversals (DFS, BFS). Minimum Spanning Tree (MST): Kruskal's and Prim's algorithms. Shortest Path: Dijkstra's algorithm.",
        "Unit V: Sorting & Searching: Bubble, Quick, Selection, Heap, Insertion, Shell, Merge, and Radix Sort. Sequential and Binary Search. Hashing & Indexing techniques."
      ],
      "weightageSummary": "Unit III: Trees: Definitions (Height, De typically represents around 40% of overall exam weightage."
    },
    "weightage": [
      {
        "unit": "Unit I: Introduction to Data Structures: Concepts of Data and Information, Classification, Abstract Data Types (ADT), Memory representation. Linear data structures: Arrays, Linked Lists (Singly, Doubly, Circular), Address calculation, Polynomial manipulation.",
        "expectedMarks": 12,
        "topics": [
          {
            "name": "Structures implementation details",
            "frequency": 5
          },
          {
            "name": "Information working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit II: Stacks and Queues: Stack as ADT, Implementation (Array & Linked List). Applications: Infix to Postfix conversion, Evaluation of postfix expression, Recursion. Queues: Linear, Circular, Dequeue, Priority Queue, Queue simulation.",
        "expectedMarks": 14,
        "topics": [
          {
            "name": "Stacks implementation details",
            "frequency": 5
          },
          {
            "name": "Queues working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit III: Trees: Definitions (Height, Depth, Order, Degree). Binary Search Tree (BST): Operations, Traversals (Inorder, Preorder, Postorder). AVL Trees, Heaps, Multi-way Trees, Introduction to B-Trees, B+ Trees, and Red-Black Trees.",
        "expectedMarks": 16,
        "topics": [
          {
            "name": "Definitions implementation details",
            "frequency": 5
          },
          {
            "name": "Height working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit IV: Graphs: Classification (Directed/Undirected), Representation (Matrix/List), Graph Traversals (DFS, BFS). Minimum Spanning Tree (MST): Kruskal's and Prim's algorithms. Shortest Path: Dijkstra's algorithm.",
        "expectedMarks": 15,
        "topics": [
          {
            "name": "Graphs implementation details",
            "frequency": 5
          },
          {
            "name": "Classification working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit V: Sorting & Searching: Bubble, Quick, Selection, Heap, Insertion, Shell, Merge, and Radix Sort. Sequential and Binary Search. Hashing & Indexing techniques.",
        "expectedMarks": 13,
        "topics": [
          {
            "name": "Sorting implementation details",
            "frequency": 5
          },
          {
            "name": "Searching working parameters",
            "frequency": 4
          }
        ]
      }
    ],
    "repeatedQuestions": [
      {
        "id": "rq-ds-aiml-1",
        "question": "Discuss the fundamental concepts of Introduction to Data Structures: Concepts of Data and Information. How is it implemented/used in Data Structures?",
        "years": [
          2022,
          2024
        ],
        "frequency": 2,
        "importance": "Very High Probability"
      },
      {
        "id": "rq-ds-aiml-2",
        "question": "Discuss the fundamental concepts of Stacks and Queues: Stack as ADT. How is it implemented/used in Data Structures?",
        "years": [
          2023,
          2025
        ],
        "frequency": 3,
        "importance": "High Probability"
      },
      {
        "id": "rq-ds-aiml-3",
        "question": "Discuss the fundamental concepts of Trees: Definitions (Height. How is it implemented/used in Data Structures?",
        "years": [
          2024
        ],
        "frequency": 4,
        "importance": "Medium Probability"
      }
    ],
    "oneNightRevision": {
      "topQuestions": [
        "Write short notes on key methodologies and design parameters of Data Structures (Focus on Unit 3).",
        "Write short notes on key methodologies and design parameters of Data Structures (Focus on Unit 4).",
        "Write short notes on key methodologies and design parameters of Data Structures (Focus on Unit 5)."
      ],
      "definitions": [
        {
          "term": "Data Structures",
          "definition": "Introduction to Data Structures: Concepts of Data and Information, linear data structures, stacks, queues, trees, graphs, sorting and searching techniques."
        },
        {
          "term": "Core Principle of AL-303",
          "definition": "The foundational architecture and operational logic that dictates the behavior of Data Structures in engineering applications."
        }
      ],
      "diagrams": [
        {
          "title": "Data Structures System Layout",
          "description": "Block diagram displaying the architectural configuration and interface linkages."
        }
      ],
      "formulas": [
        {
          "name": "AL-303 Efficiency Formula",
          "formula": "η = (Output Power / Input Power) * 100%",
          "explanation": "Calculates the performance ratio indicating total energy conversion efficiency."
        }
      ],
      "lastMinuteNotes": [
        "💡 Focus on the structural building blocks of Data Structures and their practical design constraints.",
        "💡 Review unit-wise previous exam papers and standard notations for numerical stability."
      ]
    },
    "videos": []
  },
  {
    "id": "ai-aiml",
    "name": "Introduction to Artificial Intelligence",
    "code": "AL-304",
    "branchId": "aiml",
    "semester": 3,
    "description": "Meaning, history, scope, and applications of AI. Intelligent agents, problem solving and search techniques, knowledge representation, handling uncertainty, and expert systems.",
    "resourceCount": 26,
    "overview": {
      "syllabus": [
        "Unit I: Introduction to AI: Meaning, History, Scope, and Applications. Intelligent Agents: Structure, Behavior, and Types of Agents. Problem spaces and search criteria.",
        "Unit II: Problem Solving & Search Techniques: Uninformed search strategies (BFS, DFS, Depth-limited, Uniform Cost Search). Heuristic Search: Informed search, Greedy Best-First, A* Search, AO* Search, Adversarial Search (Mini-Max, Alpha-Beta Pruning).",
        "Unit III: Knowledge Representation & Reasoning: Propositional Logic, First-Order Predicate Logic, Inference rules, Resolution, Semantic Networks, Frames, Conceptual Dependency.",
        "Unit IV: Handling Uncertainty: Probabilistic Reasoning, Bayes' Theorem, Belief Networks, Fuzzy Logic foundations, Certainty Factors.",
        "Unit V: Expert Systems & AI Tools: Architecture of Expert Systems, Knowledge Acquisition, Rule-based systems, Introduction to Natural Language Processing (NLP) and AI development platforms."
      ],
      "weightageSummary": "Unit III: Knowledge Representation & Rea typically represents around 40% of overall exam weightage."
    },
    "weightage": [
      {
        "unit": "Unit I: Introduction to AI: Meaning, History, Scope, and Applications. Intelligent Agents: Structure, Behavior, and Types of Agents. Problem spaces and search criteria.",
        "expectedMarks": 12,
        "topics": [
          {
            "name": "Meaning implementation details",
            "frequency": 5
          },
          {
            "name": "History working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit II: Problem Solving & Search Techniques: Uninformed search strategies (BFS, DFS, Depth-limited, Uniform Cost Search). Heuristic Search: Informed search, Greedy Best-First, A* Search, AO* Search, Adversarial Search (Mini-Max, Alpha-Beta Pruning).",
        "expectedMarks": 14,
        "topics": [
          {
            "name": "Problem implementation details",
            "frequency": 5
          },
          {
            "name": "Solving working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit III: Knowledge Representation & Reasoning: Propositional Logic, First-Order Predicate Logic, Inference rules, Resolution, Semantic Networks, Frames, Conceptual Dependency.",
        "expectedMarks": 16,
        "topics": [
          {
            "name": "Knowledge implementation details",
            "frequency": 5
          },
          {
            "name": "Representation working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit IV: Handling Uncertainty: Probabilistic Reasoning, Bayes' Theorem, Belief Networks, Fuzzy Logic foundations, Certainty Factors.",
        "expectedMarks": 15,
        "topics": [
          {
            "name": "Handling implementation details",
            "frequency": 5
          },
          {
            "name": "Uncertainty working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit V: Expert Systems & AI Tools: Architecture of Expert Systems, Knowledge Acquisition, Rule-based systems, Introduction to Natural Language Processing (NLP) and AI development platforms.",
        "expectedMarks": 13,
        "topics": [
          {
            "name": "Expert implementation details",
            "frequency": 5
          },
          {
            "name": "Systems working parameters",
            "frequency": 4
          }
        ]
      }
    ],
    "repeatedQuestions": [
      {
        "id": "rq-ai-aiml-1",
        "question": "Discuss the fundamental concepts of Introduction to AI: Meaning. How is it implemented/used in Introduction to Artificial Intelligence?",
        "years": [
          2022,
          2024
        ],
        "frequency": 2,
        "importance": "Very High Probability"
      },
      {
        "id": "rq-ai-aiml-2",
        "question": "Discuss the fundamental concepts of Problem Solving & Search Techniques: Uninformed search strategies (BFS. How is it implemented/used in Introduction to Artificial Intelligence?",
        "years": [
          2023,
          2025
        ],
        "frequency": 3,
        "importance": "High Probability"
      },
      {
        "id": "rq-ai-aiml-3",
        "question": "Discuss the fundamental concepts of Knowledge Representation & Reasoning: Propositional Logic. How is it implemented/used in Introduction to Artificial Intelligence?",
        "years": [
          2024
        ],
        "frequency": 4,
        "importance": "Medium Probability"
      }
    ],
    "oneNightRevision": {
      "topQuestions": [
        "Write short notes on key methodologies and design parameters of Introduction to Artificial Intelligence (Focus on Unit 3).",
        "Write short notes on key methodologies and design parameters of Introduction to Artificial Intelligence (Focus on Unit 4).",
        "Write short notes on key methodologies and design parameters of Introduction to Artificial Intelligence (Focus on Unit 5)."
      ],
      "definitions": [
        {
          "term": "Introduction to Artificial Intelligence",
          "definition": "Meaning, history, scope, and applications of AI. Intelligent agents, problem solving and search techniques, knowledge representation, handling uncertainty, and expert systems."
        },
        {
          "term": "Core Principle of AL-304",
          "definition": "The foundational architecture and operational logic that dictates the behavior of Introduction to Artificial Intelligence in engineering applications."
        }
      ],
      "diagrams": [
        {
          "title": "Introduction to Artificial Intelligence System Layout",
          "description": "Block diagram displaying the architectural configuration and interface linkages."
        }
      ],
      "formulas": [
        {
          "name": "AL-304 Efficiency Formula",
          "formula": "η = (Output Power / Input Power) * 100%",
          "explanation": "Calculates the performance ratio indicating total energy conversion efficiency."
        }
      ],
      "lastMinuteNotes": [
        "💡 Focus on the structural building blocks of Introduction to Artificial Intelligence and their practical design constraints.",
        "💡 Review unit-wise previous exam papers and standard notations for numerical stability."
      ]
    },
    "videos": []
  },
  {
    "id": "oop-aiml",
    "name": "Object Oriented Programming & Methodology",
    "code": "AL-305",
    "branchId": "aiml",
    "semester": 3,
    "description": "OOP philosophy, classes and objects, constructors and destructors, inheritance, virtual functions, dynamic binding, templates, and exception handling.",
    "resourceCount": 26,
    "overview": {
      "syllabus": [
        "Unit I: OOP Philosophy: Data Abstraction, Encapsulation, Inheritance, Polymorphism. Basics of C++: Tokens, Control Structures, Memory Management Operators.",
        "Unit II: Classes and Objects: Access Specifiers, Defining Member Functions, Static Members, Array of Objects, Friend Functions, Friend Classes.",
        "Unit III: Constructors & Destructors: Types of Constructors (Default, Parameterized, Copy), Dynamic Initialization, Destructors. Operator Overloading and Type Conversions.",
        "Unit IV: Inheritance & Virtual Functions: Single, Multiple, Multilevel, Hierarchical, and Hybrid Inheritance. Virtual Base Classes, Abstract Classes, Pointers to Objects, Compile-time vs Runtime Polymorphism.",
        "Unit V: I/O Streams & Advanced Features: File Handling (Sequential and Random access), Templates (Class & Function), Exception Handling."
      ],
      "weightageSummary": "Unit III: Constructors & Destructors: Ty typically represents around 40% of overall exam weightage."
    },
    "weightage": [
      {
        "unit": "Unit I: OOP Philosophy: Data Abstraction, Encapsulation, Inheritance, Polymorphism. Basics of C++: Tokens, Control Structures, Memory Management Operators.",
        "expectedMarks": 12,
        "topics": [
          {
            "name": "Philosophy implementation details",
            "frequency": 5
          },
          {
            "name": "Abstraction working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit II: Classes and Objects: Access Specifiers, Defining Member Functions, Static Members, Array of Objects, Friend Functions, Friend Classes.",
        "expectedMarks": 14,
        "topics": [
          {
            "name": "Classes implementation details",
            "frequency": 5
          },
          {
            "name": "Objects working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit III: Constructors & Destructors: Types of Constructors (Default, Parameterized, Copy), Dynamic Initialization, Destructors. Operator Overloading and Type Conversions.",
        "expectedMarks": 16,
        "topics": [
          {
            "name": "Constructors implementation details",
            "frequency": 5
          },
          {
            "name": "Destructors working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit IV: Inheritance & Virtual Functions: Single, Multiple, Multilevel, Hierarchical, and Hybrid Inheritance. Virtual Base Classes, Abstract Classes, Pointers to Objects, Compile-time vs Runtime Polymorphism.",
        "expectedMarks": 15,
        "topics": [
          {
            "name": "Inheritance implementation details",
            "frequency": 5
          },
          {
            "name": "Virtual working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit V: I/O Streams & Advanced Features: File Handling (Sequential and Random access), Templates (Class & Function), Exception Handling.",
        "expectedMarks": 13,
        "topics": [
          {
            "name": "Streams implementation details",
            "frequency": 5
          },
          {
            "name": "Advanced working parameters",
            "frequency": 4
          }
        ]
      }
    ],
    "repeatedQuestions": [
      {
        "id": "rq-oop-aiml-1",
        "question": "Discuss the fundamental concepts of OOP Philosophy: Data Abstraction. How is it implemented/used in Object Oriented Programming & Methodology?",
        "years": [
          2022,
          2024
        ],
        "frequency": 2,
        "importance": "Very High Probability"
      },
      {
        "id": "rq-oop-aiml-2",
        "question": "Discuss the fundamental concepts of Classes and Objects: Access Specifiers. How is it implemented/used in Object Oriented Programming & Methodology?",
        "years": [
          2023,
          2025
        ],
        "frequency": 3,
        "importance": "High Probability"
      },
      {
        "id": "rq-oop-aiml-3",
        "question": "Discuss the fundamental concepts of Constructors & Destructors: Types of Constructors (Default. How is it implemented/used in Object Oriented Programming & Methodology?",
        "years": [
          2024
        ],
        "frequency": 4,
        "importance": "Medium Probability"
      }
    ],
    "oneNightRevision": {
      "topQuestions": [
        "Write short notes on key methodologies and design parameters of Object Oriented Programming & Methodology (Focus on Unit 3).",
        "Write short notes on key methodologies and design parameters of Object Oriented Programming & Methodology (Focus on Unit 4).",
        "Write short notes on key methodologies and design parameters of Object Oriented Programming & Methodology (Focus on Unit 5)."
      ],
      "definitions": [
        {
          "term": "Object Oriented Programming & Methodology",
          "definition": "OOP philosophy, classes and objects, constructors and destructors, inheritance, virtual functions, dynamic binding, templates, and exception handling."
        },
        {
          "term": "Core Principle of AL-305",
          "definition": "The foundational architecture and operational logic that dictates the behavior of Object Oriented Programming & Methodology in engineering applications."
        }
      ],
      "diagrams": [
        {
          "title": "Object Oriented Programming & Methodology System Layout",
          "description": "Block diagram displaying the architectural configuration and interface linkages."
        }
      ],
      "formulas": [
        {
          "name": "AL-305 Efficiency Formula",
          "formula": "η = (Output Power / Input Power) * 100%",
          "explanation": "Calculates the performance ratio indicating total energy conversion efficiency."
        }
      ],
      "lastMinuteNotes": [
        "💡 Focus on the structural building blocks of Object Oriented Programming & Methodology and their practical design constraints.",
        "💡 Review unit-wise previous exam papers and standard notations for numerical stability."
      ]
    },
    "videos": []
  },
  {
    "id": "dsla-aiml",
    "name": "Discrete Structure & Linear Algebra",
    "code": "AL-401",
    "branchId": "aiml",
    "semester": 4,
    "description": "Set theory, relations, functions, algebraic structures, recurrence, propositional logic, graph theory, linear algebra, statistical modeling, and testing.",
    "resourceCount": 28,
    "overview": {
      "syllabus": [
        "Unit I: Set Theory, Relations & Functions: Venn Diagrams, Composition of relations, Equivalence relations, Partial ordering relations, POSETs, Hasse diagrams, Lattices.",
        "Unit II: Algebraic Structures & Recurrence: Semi Groups, Monoids, Groups, Abelian Groups, Cyclic Groups, Normal Subgroups, Rings and Fields. Recurrence Relations and Generating Functions.",
        "Unit III: Propositional Logic & Graph Theory: Truth tables, Tautologies, Normal Forms, Quantifiers. Graphs: Terminology, Paths, Cycles, Shortest paths, Graph Coloring.",
        "Unit IV: Linear Algebra & Matrices: Determinant, Trace, Matrix Multiplications, Cholesky Decomposition, Eigen Decomposition, Singular Value Decomposition (SVD), Gradient of a matrix.",
        "Unit V: Statistical Modeling & Testing: Concept and Formulation of Hypotheses, Type-I and Type-II Errors, Time Series Analysis, Analysis of Variance (ANOVA)."
      ],
      "weightageSummary": "Unit III: Propositional Logic & Graph Th typically represents around 40% of overall exam weightage."
    },
    "weightage": [
      {
        "unit": "Unit I: Set Theory, Relations & Functions: Venn Diagrams, Composition of relations, Equivalence relations, Partial ordering relations, POSETs, Hasse diagrams, Lattices.",
        "expectedMarks": 12,
        "topics": [
          {
            "name": "Theory implementation details",
            "frequency": 5
          },
          {
            "name": "Relations working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit II: Algebraic Structures & Recurrence: Semi Groups, Monoids, Groups, Abelian Groups, Cyclic Groups, Normal Subgroups, Rings and Fields. Recurrence Relations and Generating Functions.",
        "expectedMarks": 14,
        "topics": [
          {
            "name": "Algebraic implementation details",
            "frequency": 5
          },
          {
            "name": "Structures working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit III: Propositional Logic & Graph Theory: Truth tables, Tautologies, Normal Forms, Quantifiers. Graphs: Terminology, Paths, Cycles, Shortest paths, Graph Coloring.",
        "expectedMarks": 16,
        "topics": [
          {
            "name": "Propositional implementation details",
            "frequency": 5
          },
          {
            "name": "Theory working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit IV: Linear Algebra & Matrices: Determinant, Trace, Matrix Multiplications, Cholesky Decomposition, Eigen Decomposition, Singular Value Decomposition (SVD), Gradient of a matrix.",
        "expectedMarks": 15,
        "topics": [
          {
            "name": "Linear implementation details",
            "frequency": 5
          },
          {
            "name": "Algebra working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit V: Statistical Modeling & Testing: Concept and Formulation of Hypotheses, Type-I and Type-II Errors, Time Series Analysis, Analysis of Variance (ANOVA).",
        "expectedMarks": 13,
        "topics": [
          {
            "name": "Statistical implementation details",
            "frequency": 5
          },
          {
            "name": "Modeling working parameters",
            "frequency": 4
          }
        ]
      }
    ],
    "repeatedQuestions": [
      {
        "id": "rq-dsla-aiml-1",
        "question": "Discuss the fundamental concepts of Set Theory. How is it implemented/used in Discrete Structure & Linear Algebra?",
        "years": [
          2022,
          2024
        ],
        "frequency": 2,
        "importance": "Very High Probability"
      },
      {
        "id": "rq-dsla-aiml-2",
        "question": "Discuss the fundamental concepts of Algebraic Structures & Recurrence: Semi Groups. How is it implemented/used in Discrete Structure & Linear Algebra?",
        "years": [
          2023,
          2025
        ],
        "frequency": 3,
        "importance": "High Probability"
      },
      {
        "id": "rq-dsla-aiml-3",
        "question": "Discuss the fundamental concepts of Propositional Logic & Graph Theory: Truth tables. How is it implemented/used in Discrete Structure & Linear Algebra?",
        "years": [
          2024
        ],
        "frequency": 4,
        "importance": "Medium Probability"
      }
    ],
    "oneNightRevision": {
      "topQuestions": [
        "Write short notes on key methodologies and design parameters of Discrete Structure & Linear Algebra (Focus on Unit 3).",
        "Write short notes on key methodologies and design parameters of Discrete Structure & Linear Algebra (Focus on Unit 4).",
        "Write short notes on key methodologies and design parameters of Discrete Structure & Linear Algebra (Focus on Unit 5)."
      ],
      "definitions": [
        {
          "term": "Discrete Structure & Linear Algebra",
          "definition": "Set theory, relations, functions, algebraic structures, recurrence, propositional logic, graph theory, linear algebra, statistical modeling, and testing."
        },
        {
          "term": "Core Principle of AL-401",
          "definition": "The foundational architecture and operational logic that dictates the behavior of Discrete Structure & Linear Algebra in engineering applications."
        }
      ],
      "diagrams": [
        {
          "title": "Discrete Structure & Linear Algebra System Layout",
          "description": "Block diagram displaying the architectural configuration and interface linkages."
        }
      ],
      "formulas": [
        {
          "name": "AL-401 Efficiency Formula",
          "formula": "η = (Output Power / Input Power) * 100%",
          "explanation": "Calculates the performance ratio indicating total energy conversion efficiency."
        }
      ],
      "lastMinuteNotes": [
        "💡 Focus on the structural building blocks of Discrete Structure & Linear Algebra and their practical design constraints.",
        "💡 Review unit-wise previous exam papers and standard notations for numerical stability."
      ]
    },
    "videos": []
  },
  {
    "id": "ada-aiml",
    "name": "Analysis & Design of Algorithms",
    "code": "AL-402",
    "branchId": "aiml",
    "semester": 4,
    "description": "Algorithm complexity, divide and conquer, greedy strategy, dynamic programming, backtracking, branch and bound, and NP-completeness.",
    "resourceCount": 28,
    "overview": {
      "syllabus": [
        "Unit I: Algorithm Complexity: Time and Space Complexity, Time-space trade-offs, Asymptotic notations (O, Omega, Theta). Recurrence relations, Divide and Conquer (Binary Search, Merge Sort, Quick Sort, Strassen's Matrix Multiplication).",
        "Unit II: Greedy Strategy: Optimal Merge Patterns, Huffman Coding, Minimum Spanning Trees, Fractional Knapsack, Job Sequencing with Deadlines, Dijkstra's Single-Source Shortest Path.",
        "Unit III: Dynamic Programming: Principles of Optimality, 0/1 Knapsack, Multistage Graphs, Reliability Design, Floyd-Warshall All-Pairs Shortest Path.",
        "Unit IV: Backtracking and Branch & Bound: N-Queens, Graph Coloring, Hamiltonian Cycles. Branch & Bound: Travelling Salesperson Problem, 15-Puzzle.",
        "Unit V: NP-Completeness & Parallel Algorithms: P, NP, NP-Hard, NP-Complete classes, Cook's Theorem. Introduction to the design and complexity of Parallel Algorithms."
      ],
      "weightageSummary": "Unit III: Dynamic Programming: Principle typically represents around 40% of overall exam weightage."
    },
    "weightage": [
      {
        "unit": "Unit I: Algorithm Complexity: Time and Space Complexity, Time-space trade-offs, Asymptotic notations (O, Omega, Theta). Recurrence relations, Divide and Conquer (Binary Search, Merge Sort, Quick Sort, Strassen's Matrix Multiplication).",
        "expectedMarks": 12,
        "topics": [
          {
            "name": "Algorithm implementation details",
            "frequency": 5
          },
          {
            "name": "Complexity working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit II: Greedy Strategy: Optimal Merge Patterns, Huffman Coding, Minimum Spanning Trees, Fractional Knapsack, Job Sequencing with Deadlines, Dijkstra's Single-Source Shortest Path.",
        "expectedMarks": 14,
        "topics": [
          {
            "name": "Greedy implementation details",
            "frequency": 5
          },
          {
            "name": "Strategy working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit III: Dynamic Programming: Principles of Optimality, 0/1 Knapsack, Multistage Graphs, Reliability Design, Floyd-Warshall All-Pairs Shortest Path.",
        "expectedMarks": 16,
        "topics": [
          {
            "name": "Dynamic implementation details",
            "frequency": 5
          },
          {
            "name": "Programming working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit IV: Backtracking and Branch & Bound: N-Queens, Graph Coloring, Hamiltonian Cycles. Branch & Bound: Travelling Salesperson Problem, 15-Puzzle.",
        "expectedMarks": 15,
        "topics": [
          {
            "name": "Backtracking implementation details",
            "frequency": 5
          },
          {
            "name": "Branch working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit V: NP-Completeness & Parallel Algorithms: P, NP, NP-Hard, NP-Complete classes, Cook's Theorem. Introduction to the design and complexity of Parallel Algorithms.",
        "expectedMarks": 13,
        "topics": [
          {
            "name": "NP-Completeness implementation details",
            "frequency": 5
          },
          {
            "name": "Parallel working parameters",
            "frequency": 4
          }
        ]
      }
    ],
    "repeatedQuestions": [
      {
        "id": "rq-ada-aiml-1",
        "question": "Discuss the fundamental concepts of Algorithm Complexity: Time and Space Complexity. How is it implemented/used in Analysis & Design of Algorithms?",
        "years": [
          2022,
          2024
        ],
        "frequency": 2,
        "importance": "Very High Probability"
      },
      {
        "id": "rq-ada-aiml-2",
        "question": "Discuss the fundamental concepts of Greedy Strategy: Optimal Merge Patterns. How is it implemented/used in Analysis & Design of Algorithms?",
        "years": [
          2023,
          2025
        ],
        "frequency": 3,
        "importance": "High Probability"
      },
      {
        "id": "rq-ada-aiml-3",
        "question": "Discuss the fundamental concepts of Dynamic Programming: Principles of Optimality. How is it implemented/used in Analysis & Design of Algorithms?",
        "years": [
          2024
        ],
        "frequency": 4,
        "importance": "Medium Probability"
      }
    ],
    "oneNightRevision": {
      "topQuestions": [
        "Write short notes on key methodologies and design parameters of Analysis & Design of Algorithms (Focus on Unit 3).",
        "Write short notes on key methodologies and design parameters of Analysis & Design of Algorithms (Focus on Unit 4).",
        "Write short notes on key methodologies and design parameters of Analysis & Design of Algorithms (Focus on Unit 5)."
      ],
      "definitions": [
        {
          "term": "Analysis & Design of Algorithms",
          "definition": "Algorithm complexity, divide and conquer, greedy strategy, dynamic programming, backtracking, branch and bound, and NP-completeness."
        },
        {
          "term": "Core Principle of AL-402",
          "definition": "The foundational architecture and operational logic that dictates the behavior of Analysis & Design of Algorithms in engineering applications."
        }
      ],
      "diagrams": [
        {
          "title": "Analysis & Design of Algorithms System Layout",
          "description": "Block diagram displaying the architectural configuration and interface linkages."
        }
      ],
      "formulas": [
        {
          "name": "AL-402 Efficiency Formula",
          "formula": "η = (Output Power / Input Power) * 100%",
          "explanation": "Calculates the performance ratio indicating total energy conversion efficiency."
        }
      ],
      "lastMinuteNotes": [
        "💡 Focus on the structural building blocks of Analysis & Design of Algorithms and their practical design constraints.",
        "💡 Review unit-wise previous exam papers and standard notations for numerical stability."
      ]
    },
    "videos": []
  },
  {
    "id": "coa-aiml",
    "name": "Computer Organization & Architecture",
    "code": "AL-404",
    "branchId": "aiml",
    "semester": 4,
    "description": "CPU organization, computer arithmetic, input-output systems, memory hierarchy, pipeline, and vector processing.",
    "resourceCount": 28,
    "overview": {
      "syllabus": [
        "Unit I: Basic Structure of Computers: CPU organization, Register Transfer Language (RTL), Bus and Memory Transfer, Control Unit (Hardwired and Micro-programmed control, Microprogram sequencer).",
        "Unit II: Computer Arithmetic: Addition, Subtraction (2's complement representation), Signed Multiplication (Booth's Algorithm), Division operation, Floating-point arithmetic operations.",
        "Unit III: I/O Organization: I/O Interface, PCI, SCSI, USB. Data Transfer: Serial, Parallel, Synchronous, Asynchronous (Strobe, Handshaking), DMA, I/O Processors.",
        "Unit IV: Memory Memory Hierarchy: Main Memory (RAM, ROM), Secondary Storage, Cache Memory (Structure, Mapping schemes, Replacement algorithms), Virtual Memory, Memory management hardware.",
        "Unit V: Pipeline and Vector Processing: Parallel processing, Pipelining, Arithmetic and Instruction pipelines, Vector processing, Array processors, Multiprocessor structures."
      ],
      "weightageSummary": "Unit III: I/O Organization: I/O Interfac typically represents around 40% of overall exam weightage."
    },
    "weightage": [
      {
        "unit": "Unit I: Basic Structure of Computers: CPU organization, Register Transfer Language (RTL), Bus and Memory Transfer, Control Unit (Hardwired and Micro-programmed control, Microprogram sequencer).",
        "expectedMarks": 12,
        "topics": [
          {
            "name": "Structure implementation details",
            "frequency": 5
          },
          {
            "name": "Computers working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit II: Computer Arithmetic: Addition, Subtraction (2's complement representation), Signed Multiplication (Booth's Algorithm), Division operation, Floating-point arithmetic operations.",
        "expectedMarks": 14,
        "topics": [
          {
            "name": "Computer implementation details",
            "frequency": 5
          },
          {
            "name": "Arithmetic working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit III: I/O Organization: I/O Interface, PCI, SCSI, USB. Data Transfer: Serial, Parallel, Synchronous, Asynchronous (Strobe, Handshaking), DMA, I/O Processors.",
        "expectedMarks": 16,
        "topics": [
          {
            "name": "Organization implementation details",
            "frequency": 5
          },
          {
            "name": "Interface working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit IV: Memory Memory Hierarchy: Main Memory (RAM, ROM), Secondary Storage, Cache Memory (Structure, Mapping schemes, Replacement algorithms), Virtual Memory, Memory management hardware.",
        "expectedMarks": 15,
        "topics": [
          {
            "name": "Memory implementation details",
            "frequency": 5
          },
          {
            "name": "Hierarchy working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit V: Pipeline and Vector Processing: Parallel processing, Pipelining, Arithmetic and Instruction pipelines, Vector processing, Array processors, Multiprocessor structures.",
        "expectedMarks": 13,
        "topics": [
          {
            "name": "Pipeline implementation details",
            "frequency": 5
          },
          {
            "name": "Vector working parameters",
            "frequency": 4
          }
        ]
      }
    ],
    "repeatedQuestions": [
      {
        "id": "rq-coa-aiml-1",
        "question": "Discuss the fundamental concepts of Basic Structure of Computers: CPU organization. How is it implemented/used in Computer Organization & Architecture?",
        "years": [
          2022,
          2024
        ],
        "frequency": 2,
        "importance": "Very High Probability"
      },
      {
        "id": "rq-coa-aiml-2",
        "question": "Discuss the fundamental concepts of Computer Arithmetic: Addition. How is it implemented/used in Computer Organization & Architecture?",
        "years": [
          2023,
          2025
        ],
        "frequency": 3,
        "importance": "High Probability"
      },
      {
        "id": "rq-coa-aiml-3",
        "question": "Discuss the fundamental concepts of I/O Organization: I/O Interface. How is it implemented/used in Computer Organization & Architecture?",
        "years": [
          2024
        ],
        "frequency": 4,
        "importance": "Medium Probability"
      }
    ],
    "oneNightRevision": {
      "topQuestions": [
        "Write short notes on key methodologies and design parameters of Computer Organization & Architecture (Focus on Unit 3).",
        "Write short notes on key methodologies and design parameters of Computer Organization & Architecture (Focus on Unit 4).",
        "Write short notes on key methodologies and design parameters of Computer Organization & Architecture (Focus on Unit 5)."
      ],
      "definitions": [
        {
          "term": "Computer Organization & Architecture",
          "definition": "CPU organization, computer arithmetic, input-output systems, memory hierarchy, pipeline, and vector processing."
        },
        {
          "term": "Core Principle of AL-404",
          "definition": "The foundational architecture and operational logic that dictates the behavior of Computer Organization & Architecture in engineering applications."
        }
      ],
      "diagrams": [
        {
          "title": "Computer Organization & Architecture System Layout",
          "description": "Block diagram displaying the architectural configuration and interface linkages."
        }
      ],
      "formulas": [
        {
          "name": "AL-404 Efficiency Formula",
          "formula": "η = (Output Power / Input Power) * 100%",
          "explanation": "Calculates the performance ratio indicating total energy conversion efficiency."
        }
      ],
      "lastMinuteNotes": [
        "💡 Focus on the structural building blocks of Computer Organization & Architecture and their practical design constraints.",
        "💡 Review unit-wise previous exam papers and standard notations for numerical stability."
      ]
    },
    "videos": []
  },
  {
    "id": "ml-aiml",
    "name": "Machine Learning",
    "code": "AL-405",
    "branchId": "aiml",
    "semester": 4,
    "description": "Neural networks, supervised learning techniques, unsupervised learning, clustering, and the design and analysis of ML experiments.",
    "resourceCount": 28,
    "overview": {
      "syllabus": [
        "Unit I: Introduction to ML: Scope, Applications, and Limitations. Mathematical Foundations: Optimization basics, Data Visualization, Hypothesis testing, Data preprocessing, Augmentation, Normalization datasets.",
        "Unit II: Neural Networks: Biological to Artificial neurons, Activation functions (Sigmoid, ReLU, Tanh), Weights and Bias, Loss functions, Gradient Descent, Multilayer Perceptrons, Backpropagation, Regularization (L1, L2, Dropout, Batch Normalization).",
        "Unit III: Supervised Learning Techniques: Decision Trees, Naive Bayes Classification, Support Vector Machines (SVM), Random Forests, Linear Regression, Ordinary Least Squares, Logistic Regression.",
        "Unit IV: Unsupervised Learning & Clustering: K-Means clustering, Adaptive Hierarchical clustering, Gaussian Mixture Models (GMM), Expectation-Maximization (EM), Optimization using Evolutionary Techniques.",
        "Unit V: Design and Analysis of ML Experiments: Performance Metrics (Confusion Matrix, Precision, Recall, F1-Score, ROC-AUC), Cross-Validation, Bootstrapping, Bias-Variance Trade-off."
      ],
      "weightageSummary": "Unit III: Supervised Learning Techniques typically represents around 40% of overall exam weightage."
    },
    "weightage": [
      {
        "unit": "Unit I: Introduction to ML: Scope, Applications, and Limitations. Mathematical Foundations: Optimization basics, Data Visualization, Hypothesis testing, Data preprocessing, Augmentation, Normalization datasets.",
        "expectedMarks": 12,
        "topics": [
          {
            "name": "Applications implementation details",
            "frequency": 5
          },
          {
            "name": "Limitations working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit II: Neural Networks: Biological to Artificial neurons, Activation functions (Sigmoid, ReLU, Tanh), Weights and Bias, Loss functions, Gradient Descent, Multilayer Perceptrons, Backpropagation, Regularization (L1, L2, Dropout, Batch Normalization).",
        "expectedMarks": 14,
        "topics": [
          {
            "name": "Neural implementation details",
            "frequency": 5
          },
          {
            "name": "Networks working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit III: Supervised Learning Techniques: Decision Trees, Naive Bayes Classification, Support Vector Machines (SVM), Random Forests, Linear Regression, Ordinary Least Squares, Logistic Regression.",
        "expectedMarks": 16,
        "topics": [
          {
            "name": "Supervised implementation details",
            "frequency": 5
          },
          {
            "name": "Learning working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit IV: Unsupervised Learning & Clustering: K-Means clustering, Adaptive Hierarchical clustering, Gaussian Mixture Models (GMM), Expectation-Maximization (EM), Optimization using Evolutionary Techniques.",
        "expectedMarks": 15,
        "topics": [
          {
            "name": "Unsupervised implementation details",
            "frequency": 5
          },
          {
            "name": "Learning working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit V: Design and Analysis of ML Experiments: Performance Metrics (Confusion Matrix, Precision, Recall, F1-Score, ROC-AUC), Cross-Validation, Bootstrapping, Bias-Variance Trade-off.",
        "expectedMarks": 13,
        "topics": [
          {
            "name": "Design implementation details",
            "frequency": 5
          },
          {
            "name": "Analysis working parameters",
            "frequency": 4
          }
        ]
      }
    ],
    "repeatedQuestions": [
      {
        "id": "rq-ml-aiml-1",
        "question": "Discuss the fundamental concepts of Introduction to ML: Scope. How is it implemented/used in Machine Learning?",
        "years": [
          2022,
          2024
        ],
        "frequency": 2,
        "importance": "Very High Probability"
      },
      {
        "id": "rq-ml-aiml-2",
        "question": "Discuss the fundamental concepts of Neural Networks: Biological to Artificial neurons. How is it implemented/used in Machine Learning?",
        "years": [
          2023,
          2025
        ],
        "frequency": 3,
        "importance": "High Probability"
      },
      {
        "id": "rq-ml-aiml-3",
        "question": "Discuss the fundamental concepts of Supervised Learning Techniques: Decision Trees. How is it implemented/used in Machine Learning?",
        "years": [
          2024
        ],
        "frequency": 4,
        "importance": "Medium Probability"
      }
    ],
    "oneNightRevision": {
      "topQuestions": [
        "Write short notes on key methodologies and design parameters of Machine Learning (Focus on Unit 3).",
        "Write short notes on key methodologies and design parameters of Machine Learning (Focus on Unit 4).",
        "Write short notes on key methodologies and design parameters of Machine Learning (Focus on Unit 5)."
      ],
      "definitions": [
        {
          "term": "Machine Learning",
          "definition": "Neural networks, supervised learning techniques, unsupervised learning, clustering, and the design and analysis of ML experiments."
        },
        {
          "term": "Core Principle of AL-405",
          "definition": "The foundational architecture and operational logic that dictates the behavior of Machine Learning in engineering applications."
        }
      ],
      "diagrams": [
        {
          "title": "Machine Learning System Layout",
          "description": "Block diagram displaying the architectural configuration and interface linkages."
        }
      ],
      "formulas": [
        {
          "name": "AL-405 Efficiency Formula",
          "formula": "η = (Output Power / Input Power) * 100%",
          "explanation": "Calculates the performance ratio indicating total energy conversion efficiency."
        }
      ],
      "lastMinuteNotes": [
        "💡 Focus on the structural building blocks of Machine Learning and their practical design constraints.",
        "💡 Review unit-wise previous exam papers and standard notations for numerical stability."
      ]
    },
    "videos": []
  },
  {
    "id": "dbms-aiml",
    "name": "Database Management Systems",
    "code": "AL-501",
    "branchId": "aiml",
    "semester": 5,
    "description": "DBMS architecture, ER models, relational query languages, normalization, transaction management, concurrency, and database storage.",
    "resourceCount": 30,
    "overview": {
      "syllabus": [
        "Unit I: Foundations: DBMS Architecture, Data Independence, Entity-Relationship (ER) Model, Relational Model Concepts, Mapping ER Diagrams to Relational Tables.",
        "Unit II: Query Languages: Relational Algebra, Relational Calculus, SQL Commands (DDL, DML, DCL), Aggregate Functions, Nested Subqueries, Joins, Views.",
        "Unit III: Normalization: Functional Dependencies, Normal Forms (1NF, 2NF, 3NF, BCNF), Multi-valued Dependencies, 4NF, Lossless Join and Dependency Preservation.",
        "Unit IV: Transactions & Concurrency: ACID Properties, Schedules and Serializability, Concurrency Control Protocols (Two-Phase Locking, Timestamp Ordering), Deadlock prevention and detection.",
        "Unit V: Storage & Recovery: Log-based recovery, Checkpoints, File indexing, B-Trees and B+ Trees structures. Introduction to Distributed Databases."
      ],
      "weightageSummary": "Unit III: Normalization: Functional Depe typically represents around 40% of overall exam weightage."
    },
    "weightage": [
      {
        "unit": "Unit I: Foundations: DBMS Architecture, Data Independence, Entity-Relationship (ER) Model, Relational Model Concepts, Mapping ER Diagrams to Relational Tables.",
        "expectedMarks": 12,
        "topics": [
          {
            "name": "Foundations implementation details",
            "frequency": 5
          },
          {
            "name": "Architecture working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit II: Query Languages: Relational Algebra, Relational Calculus, SQL Commands (DDL, DML, DCL), Aggregate Functions, Nested Subqueries, Joins, Views.",
        "expectedMarks": 14,
        "topics": [
          {
            "name": "Languages implementation details",
            "frequency": 5
          },
          {
            "name": "Relational working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit III: Normalization: Functional Dependencies, Normal Forms (1NF, 2NF, 3NF, BCNF), Multi-valued Dependencies, 4NF, Lossless Join and Dependency Preservation.",
        "expectedMarks": 16,
        "topics": [
          {
            "name": "Normalization implementation details",
            "frequency": 5
          },
          {
            "name": "Functional working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit IV: Transactions & Concurrency: ACID Properties, Schedules and Serializability, Concurrency Control Protocols (Two-Phase Locking, Timestamp Ordering), Deadlock prevention and detection.",
        "expectedMarks": 15,
        "topics": [
          {
            "name": "Transactions implementation details",
            "frequency": 5
          },
          {
            "name": "Concurrency working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit V: Storage & Recovery: Log-based recovery, Checkpoints, File indexing, B-Trees and B+ Trees structures. Introduction to Distributed Databases.",
        "expectedMarks": 13,
        "topics": [
          {
            "name": "Storage implementation details",
            "frequency": 5
          },
          {
            "name": "Recovery working parameters",
            "frequency": 4
          }
        ]
      }
    ],
    "repeatedQuestions": [
      {
        "id": "rq-dbms-aiml-1",
        "question": "Discuss the fundamental concepts of Foundations: DBMS Architecture. How is it implemented/used in Database Management Systems?",
        "years": [
          2022,
          2024
        ],
        "frequency": 2,
        "importance": "Very High Probability"
      },
      {
        "id": "rq-dbms-aiml-2",
        "question": "Discuss the fundamental concepts of Query Languages: Relational Algebra. How is it implemented/used in Database Management Systems?",
        "years": [
          2023,
          2025
        ],
        "frequency": 3,
        "importance": "High Probability"
      },
      {
        "id": "rq-dbms-aiml-3",
        "question": "Discuss the fundamental concepts of Normalization: Functional Dependencies. How is it implemented/used in Database Management Systems?",
        "years": [
          2024
        ],
        "frequency": 4,
        "importance": "Medium Probability"
      }
    ],
    "oneNightRevision": {
      "topQuestions": [
        "Write short notes on key methodologies and design parameters of Database Management Systems (Focus on Unit 3).",
        "Write short notes on key methodologies and design parameters of Database Management Systems (Focus on Unit 4).",
        "Write short notes on key methodologies and design parameters of Database Management Systems (Focus on Unit 5)."
      ],
      "definitions": [
        {
          "term": "Database Management Systems",
          "definition": "DBMS architecture, ER models, relational query languages, normalization, transaction management, concurrency, and database storage."
        },
        {
          "term": "Core Principle of AL-501",
          "definition": "The foundational architecture and operational logic that dictates the behavior of Database Management Systems in engineering applications."
        }
      ],
      "diagrams": [
        {
          "title": "Database Management Systems System Layout",
          "description": "Block diagram displaying the architectural configuration and interface linkages."
        }
      ],
      "formulas": [
        {
          "name": "AL-501 Efficiency Formula",
          "formula": "η = (Output Power / Input Power) * 100%",
          "explanation": "Calculates the performance ratio indicating total energy conversion efficiency."
        }
      ],
      "lastMinuteNotes": [
        "💡 Focus on the structural building blocks of Database Management Systems and their practical design constraints.",
        "💡 Review unit-wise previous exam papers and standard notations for numerical stability."
      ]
    },
    "videos": []
  },
  {
    "id": "dl-aiml",
    "name": "Deep Learning Frameworks",
    "code": "AL-502",
    "branchId": "aiml",
    "semester": 5,
    "description": "Deep network optimization, Convolutional Neural Networks (CNNs), Recurrent Neural Networks (RNNs), LSTMs, Autoencoders, and Generative Adversarial Networks (GANs).",
    "resourceCount": 30,
    "overview": {
      "syllabus": [
        "Unit I: Deep Learning Foundations: Deep Networks basics, Vanishing/Exploding Gradients, Advanced Optimization Algorithms (Momentum, RMSprop, Adam), Hyperparameter Tuning strategies.",
        "Unit II: Convolutional Neural Networks (CNNs): Convolution operational mechanics (Padding, Stride, Channels), Pooling layers, Structural building blocks of architectures (AlexNet, VGG, ResNet, Inception networks).",
        "Unit III: Sequence Models: Recurrent Neural Networks (RNNs) for sequential data, Gated Recurrent Units (GRUs), Long Short-Term Memory (LSTM) networks, Bidirectional RNNs.",
        "Unit IV: Autoencoders & Generative Models: Undercomplete Autoencoders, Regularized Autoencoders, Variational Autoencoders (VAEs), Generative Adversarial Networks (GANs) operational concepts.",
        "Unit V: Implementation and Frameworks: Practical building blocks using TensorFlow and Keras, Data pipelines, Custom layers, Model deployment essentials."
      ],
      "weightageSummary": "Unit III: Sequence Models: Recurrent Neu typically represents around 40% of overall exam weightage."
    },
    "weightage": [
      {
        "unit": "Unit I: Deep Learning Foundations: Deep Networks basics, Vanishing/Exploding Gradients, Advanced Optimization Algorithms (Momentum, RMSprop, Adam), Hyperparameter Tuning strategies.",
        "expectedMarks": 12,
        "topics": [
          {
            "name": "Learning implementation details",
            "frequency": 5
          },
          {
            "name": "Foundations working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit II: Convolutional Neural Networks (CNNs): Convolution operational mechanics (Padding, Stride, Channels), Pooling layers, Structural building blocks of architectures (AlexNet, VGG, ResNet, Inception networks).",
        "expectedMarks": 14,
        "topics": [
          {
            "name": "Convolutional implementation details",
            "frequency": 5
          },
          {
            "name": "Neural working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit III: Sequence Models: Recurrent Neural Networks (RNNs) for sequential data, Gated Recurrent Units (GRUs), Long Short-Term Memory (LSTM) networks, Bidirectional RNNs.",
        "expectedMarks": 16,
        "topics": [
          {
            "name": "Sequence implementation details",
            "frequency": 5
          },
          {
            "name": "Models working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit IV: Autoencoders & Generative Models: Undercomplete Autoencoders, Regularized Autoencoders, Variational Autoencoders (VAEs), Generative Adversarial Networks (GANs) operational concepts.",
        "expectedMarks": 15,
        "topics": [
          {
            "name": "Autoencoders implementation details",
            "frequency": 5
          },
          {
            "name": "Generative working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit V: Implementation and Frameworks: Practical building blocks using TensorFlow and Keras, Data pipelines, Custom layers, Model deployment essentials.",
        "expectedMarks": 13,
        "topics": [
          {
            "name": "Implementation implementation details",
            "frequency": 5
          },
          {
            "name": "Frameworks working parameters",
            "frequency": 4
          }
        ]
      }
    ],
    "repeatedQuestions": [
      {
        "id": "rq-dl-aiml-1",
        "question": "Discuss the fundamental concepts of Deep Learning Foundations: Deep Networks basics. How is it implemented/used in Deep Learning Frameworks?",
        "years": [
          2022,
          2024
        ],
        "frequency": 2,
        "importance": "Very High Probability"
      },
      {
        "id": "rq-dl-aiml-2",
        "question": "Discuss the fundamental concepts of Convolutional Neural Networks (CNNs): Convolution operational mechanics (Padding. How is it implemented/used in Deep Learning Frameworks?",
        "years": [
          2023,
          2025
        ],
        "frequency": 3,
        "importance": "High Probability"
      },
      {
        "id": "rq-dl-aiml-3",
        "question": "Discuss the fundamental concepts of Sequence Models: Recurrent Neural Networks (RNNs) for sequential data. How is it implemented/used in Deep Learning Frameworks?",
        "years": [
          2024
        ],
        "frequency": 4,
        "importance": "Medium Probability"
      }
    ],
    "oneNightRevision": {
      "topQuestions": [
        "Write short notes on key methodologies and design parameters of Deep Learning Frameworks (Focus on Unit 3).",
        "Write short notes on key methodologies and design parameters of Deep Learning Frameworks (Focus on Unit 4).",
        "Write short notes on key methodologies and design parameters of Deep Learning Frameworks (Focus on Unit 5)."
      ],
      "definitions": [
        {
          "term": "Deep Learning Frameworks",
          "definition": "Deep network optimization, Convolutional Neural Networks (CNNs), Recurrent Neural Networks (RNNs), LSTMs, Autoencoders, and Generative Adversarial Networks (GANs)."
        },
        {
          "term": "Core Principle of AL-502",
          "definition": "The foundational architecture and operational logic that dictates the behavior of Deep Learning Frameworks in engineering applications."
        }
      ],
      "diagrams": [
        {
          "title": "Deep Learning Frameworks System Layout",
          "description": "Block diagram displaying the architectural configuration and interface linkages."
        }
      ],
      "formulas": [
        {
          "name": "AL-502 Efficiency Formula",
          "formula": "η = (Output Power / Input Power) * 100%",
          "explanation": "Calculates the performance ratio indicating total energy conversion efficiency."
        }
      ],
      "lastMinuteNotes": [
        "💡 Focus on the structural building blocks of Deep Learning Frameworks and their practical design constraints.",
        "💡 Review unit-wise previous exam papers and standard notations for numerical stability."
      ]
    },
    "videos": []
  },
  {
    "id": "cn-aiml",
    "name": "Computer Networks",
    "code": "AL-503",
    "branchId": "aiml",
    "semester": 5,
    "description": "OSI and TCP/IP models, data link protocols, network routing, IPv4 and IPv6, transport protocols, and application layer standards.",
    "resourceCount": 30,
    "overview": {
      "syllabus": [
        "Unit I: Physical Layer & Architecture: ISO-OSI Model vs TCP/IP Protocol Suite, Network topologies, Transmission media, Line coding, Multiplexing.",
        "Unit II: Data Link Layer: Error detection/correction (CRC, Hamming code), Flow control (Sliding Window), MAC Sublayer protocols (ALOHA, CSMA/CD, CSMA/CA).",
        "Unit III: Network Layer: IPv4 and IPv6 addressing, Subnetting, CIDR, Routing algorithms (Distance Vector, Link State), ARP, ICMP, DHCP.",
        "Unit IV: Transport Layer: Process-to-process delivery, UDP segment structure, TCP connection states, Flow control, Congestion Control mechanics.",
        "Unit V: Application Layer: DNS mapping, Electronic mail architectures (SMTP, POP3, IMAP), HTTP, FTP, Fundamentals of Network Security."
      ],
      "weightageSummary": "Unit III: Network Layer: IPv4 and IPv6 a typically represents around 40% of overall exam weightage."
    },
    "weightage": [
      {
        "unit": "Unit I: Physical Layer & Architecture: ISO-OSI Model vs TCP/IP Protocol Suite, Network topologies, Transmission media, Line coding, Multiplexing.",
        "expectedMarks": 12,
        "topics": [
          {
            "name": "Physical implementation details",
            "frequency": 5
          },
          {
            "name": "Architecture working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit II: Data Link Layer: Error detection/correction (CRC, Hamming code), Flow control (Sliding Window), MAC Sublayer protocols (ALOHA, CSMA/CD, CSMA/CA).",
        "expectedMarks": 14,
        "topics": [
          {
            "name": "detection implementation details",
            "frequency": 5
          },
          {
            "name": "correction working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit III: Network Layer: IPv4 and IPv6 addressing, Subnetting, CIDR, Routing algorithms (Distance Vector, Link State), ARP, ICMP, DHCP.",
        "expectedMarks": 16,
        "topics": [
          {
            "name": "Network implementation details",
            "frequency": 5
          },
          {
            "name": "addressing working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit IV: Transport Layer: Process-to-process delivery, UDP segment structure, TCP connection states, Flow control, Congestion Control mechanics.",
        "expectedMarks": 15,
        "topics": [
          {
            "name": "Transport implementation details",
            "frequency": 5
          },
          {
            "name": "Process-to-process working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit V: Application Layer: DNS mapping, Electronic mail architectures (SMTP, POP3, IMAP), HTTP, FTP, Fundamentals of Network Security.",
        "expectedMarks": 13,
        "topics": [
          {
            "name": "Application implementation details",
            "frequency": 5
          },
          {
            "name": "mapping working parameters",
            "frequency": 4
          }
        ]
      }
    ],
    "repeatedQuestions": [
      {
        "id": "rq-cn-aiml-1",
        "question": "Discuss the fundamental concepts of Physical Layer & Architecture: ISO-OSI Model vs TCP/IP Protocol Suite. How is it implemented/used in Computer Networks?",
        "years": [
          2022,
          2024
        ],
        "frequency": 2,
        "importance": "Very High Probability"
      },
      {
        "id": "rq-cn-aiml-2",
        "question": "Discuss the fundamental concepts of Data Link Layer: Error detection/correction (CRC. How is it implemented/used in Computer Networks?",
        "years": [
          2023,
          2025
        ],
        "frequency": 3,
        "importance": "High Probability"
      },
      {
        "id": "rq-cn-aiml-3",
        "question": "Discuss the fundamental concepts of Network Layer: IPv4 and IPv6 addressing. How is it implemented/used in Computer Networks?",
        "years": [
          2024
        ],
        "frequency": 4,
        "importance": "Medium Probability"
      }
    ],
    "oneNightRevision": {
      "topQuestions": [
        "Write short notes on key methodologies and design parameters of Computer Networks (Focus on Unit 3).",
        "Write short notes on key methodologies and design parameters of Computer Networks (Focus on Unit 4).",
        "Write short notes on key methodologies and design parameters of Computer Networks (Focus on Unit 5)."
      ],
      "definitions": [
        {
          "term": "Computer Networks",
          "definition": "OSI and TCP/IP models, data link protocols, network routing, IPv4 and IPv6, transport protocols, and application layer standards."
        },
        {
          "term": "Core Principle of AL-503",
          "definition": "The foundational architecture and operational logic that dictates the behavior of Computer Networks in engineering applications."
        }
      ],
      "diagrams": [
        {
          "title": "Computer Networks System Layout",
          "description": "Block diagram displaying the architectural configuration and interface linkages."
        }
      ],
      "formulas": [
        {
          "name": "AL-503 Efficiency Formula",
          "formula": "η = (Output Power / Input Power) * 100%",
          "explanation": "Calculates the performance ratio indicating total energy conversion efficiency."
        }
      ],
      "lastMinuteNotes": [
        "💡 Focus on the structural building blocks of Computer Networks and their practical design constraints.",
        "💡 Review unit-wise previous exam papers and standard notations for numerical stability."
      ]
    },
    "videos": []
  },
  {
    "id": "nlp-aiml",
    "name": "Natural Language Processing",
    "code": "AL-601",
    "branchId": "aiml",
    "semester": 6,
    "description": "Text preprocessing, language modeling, POS tagging, CFGs, syntactic analysis, word embeddings (Word2Vec, GloVe), and transformers.",
    "resourceCount": 32,
    "overview": {
      "syllabus": [
        "Unit I: Introduction to NLP: Text preprocessing (Tokenization, Stemming, Lemmatization, Stop-word removal). Regular expressions, Text normalization, Edit Distance.",
        "Unit II: Language Modeling & POS Tagging: N-gram Language Models, Perplexity, Smoothing techniques. Part-of-Speech (POS) Tagging, Hidden Markov Models (HMM), Viterbi algorithm.",
        "Unit III: Syntactic & Semantic Analysis: Context-Free Grammars for English, Parsing algorithms, Dependency Parsing. Lexical Semantics, Word Senses, WordNet.",
        "Unit IV: Word Embeddings & Vector Semantics: Vector Space Models, TF-IDF, Word2Vec (Skip-gram, CBOW), GloVe, Introduction to Contextual Embeddings.",
        "Unit V: Advanced NLP Applications: Sequence-to-Sequence models, Attention Mechanisms, Introduction to Transformers (BERT, GPT baseline architectures), Sentiment Analysis, Machine Translation."
      ],
      "weightageSummary": "Unit III: Syntactic & Semantic Analysis: typically represents around 40% of overall exam weightage."
    },
    "weightage": [
      {
        "unit": "Unit I: Introduction to NLP: Text preprocessing (Tokenization, Stemming, Lemmatization, Stop-word removal). Regular expressions, Text normalization, Edit Distance.",
        "expectedMarks": 12,
        "topics": [
          {
            "name": "preprocessing implementation details",
            "frequency": 5
          },
          {
            "name": "Tokenization working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit II: Language Modeling & POS Tagging: N-gram Language Models, Perplexity, Smoothing techniques. Part-of-Speech (POS) Tagging, Hidden Markov Models (HMM), Viterbi algorithm.",
        "expectedMarks": 14,
        "topics": [
          {
            "name": "Language implementation details",
            "frequency": 5
          },
          {
            "name": "Modeling working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit III: Syntactic & Semantic Analysis: Context-Free Grammars for English, Parsing algorithms, Dependency Parsing. Lexical Semantics, Word Senses, WordNet.",
        "expectedMarks": 16,
        "topics": [
          {
            "name": "Syntactic implementation details",
            "frequency": 5
          },
          {
            "name": "Semantic working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit IV: Word Embeddings & Vector Semantics: Vector Space Models, TF-IDF, Word2Vec (Skip-gram, CBOW), GloVe, Introduction to Contextual Embeddings.",
        "expectedMarks": 15,
        "topics": [
          {
            "name": "Embeddings implementation details",
            "frequency": 5
          },
          {
            "name": "Vector working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit V: Advanced NLP Applications: Sequence-to-Sequence models, Attention Mechanisms, Introduction to Transformers (BERT, GPT baseline architectures), Sentiment Analysis, Machine Translation.",
        "expectedMarks": 13,
        "topics": [
          {
            "name": "Advanced implementation details",
            "frequency": 5
          },
          {
            "name": "Applications working parameters",
            "frequency": 4
          }
        ]
      }
    ],
    "repeatedQuestions": [
      {
        "id": "rq-nlp-aiml-1",
        "question": "Discuss the fundamental concepts of Introduction to NLP: Text preprocessing (Tokenization. How is it implemented/used in Natural Language Processing?",
        "years": [
          2022,
          2024
        ],
        "frequency": 2,
        "importance": "Very High Probability"
      },
      {
        "id": "rq-nlp-aiml-2",
        "question": "Discuss the fundamental concepts of Language Modeling & POS Tagging: N-gram Language Models. How is it implemented/used in Natural Language Processing?",
        "years": [
          2023,
          2025
        ],
        "frequency": 3,
        "importance": "High Probability"
      },
      {
        "id": "rq-nlp-aiml-3",
        "question": "Discuss the fundamental concepts of Syntactic & Semantic Analysis: Context-Free Grammars for English. How is it implemented/used in Natural Language Processing?",
        "years": [
          2024
        ],
        "frequency": 4,
        "importance": "Medium Probability"
      }
    ],
    "oneNightRevision": {
      "topQuestions": [
        "Write short notes on key methodologies and design parameters of Natural Language Processing (Focus on Unit 3).",
        "Write short notes on key methodologies and design parameters of Natural Language Processing (Focus on Unit 4).",
        "Write short notes on key methodologies and design parameters of Natural Language Processing (Focus on Unit 5)."
      ],
      "definitions": [
        {
          "term": "Natural Language Processing",
          "definition": "Text preprocessing, language modeling, POS tagging, CFGs, syntactic analysis, word embeddings (Word2Vec, GloVe), and transformers."
        },
        {
          "term": "Core Principle of AL-601",
          "definition": "The foundational architecture and operational logic that dictates the behavior of Natural Language Processing in engineering applications."
        }
      ],
      "diagrams": [
        {
          "title": "Natural Language Processing System Layout",
          "description": "Block diagram displaying the architectural configuration and interface linkages."
        }
      ],
      "formulas": [
        {
          "name": "AL-601 Efficiency Formula",
          "formula": "η = (Output Power / Input Power) * 100%",
          "explanation": "Calculates the performance ratio indicating total energy conversion efficiency."
        }
      ],
      "lastMinuteNotes": [
        "💡 Focus on the structural building blocks of Natural Language Processing and their practical design constraints.",
        "💡 Review unit-wise previous exam papers and standard notations for numerical stability."
      ]
    },
    "videos": []
  },
  {
    "id": "sepm-aiml",
    "name": "Software Engineering & Project Management",
    "code": "AL-602",
    "branchId": "aiml",
    "semester": 6,
    "description": "SDLC models, Agile Scrum, software project estimation, UML diagrams, white-box and black-box testing, and quality models (ISO, CMM).",
    "resourceCount": 32,
    "overview": {
      "syllabus": [
        "Unit I: Process Models: Software Life Cycle models (Waterfall, Spiral, Evolutionary), Agile Methodology (Scrum framework), Component-based development.",
        "Unit II: Requirements & Estimation: Requirements elicitation, SRS formatting, Software Project Estimation, COCOMO model, Function Point analysis.",
        "Unit III: Software Design: Architectural styles, Object-Oriented design using UML (Class, Use-case, Sequence diagrams), Coupling and Cohesion metrics.",
        "Unit IV: Software Testing Strategies: White-box testing (Path testing, Control structures), Black-box testing (Equivalence partitioning, Boundary value analysis), System and Integration testing.",
        "Unit V: Quality & Maintenance: Software Configuration Management (SCM), Risk management, Quality Assurance models (ISO 9001, SEI-CMM levels)."
      ],
      "weightageSummary": "Unit III: Software Design: Architectural typically represents around 40% of overall exam weightage."
    },
    "weightage": [
      {
        "unit": "Unit I: Process Models: Software Life Cycle models (Waterfall, Spiral, Evolutionary), Agile Methodology (Scrum framework), Component-based development.",
        "expectedMarks": 12,
        "topics": [
          {
            "name": "Process implementation details",
            "frequency": 5
          },
          {
            "name": "Models working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit II: Requirements & Estimation: Requirements elicitation, SRS formatting, Software Project Estimation, COCOMO model, Function Point analysis.",
        "expectedMarks": 14,
        "topics": [
          {
            "name": "Requirements implementation details",
            "frequency": 5
          },
          {
            "name": "Estimation working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit III: Software Design: Architectural styles, Object-Oriented design using UML (Class, Use-case, Sequence diagrams), Coupling and Cohesion metrics.",
        "expectedMarks": 16,
        "topics": [
          {
            "name": "Software implementation details",
            "frequency": 5
          },
          {
            "name": "Design working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit IV: Software Testing Strategies: White-box testing (Path testing, Control structures), Black-box testing (Equivalence partitioning, Boundary value analysis), System and Integration testing.",
        "expectedMarks": 15,
        "topics": [
          {
            "name": "Software implementation details",
            "frequency": 5
          },
          {
            "name": "Testing working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit V: Quality & Maintenance: Software Configuration Management (SCM), Risk management, Quality Assurance models (ISO 9001, SEI-CMM levels).",
        "expectedMarks": 13,
        "topics": [
          {
            "name": "Quality implementation details",
            "frequency": 5
          },
          {
            "name": "Maintenance working parameters",
            "frequency": 4
          }
        ]
      }
    ],
    "repeatedQuestions": [
      {
        "id": "rq-sepm-aiml-1",
        "question": "Discuss the fundamental concepts of Process Models: Software Life Cycle models (Waterfall. How is it implemented/used in Software Engineering & Project Management?",
        "years": [
          2022,
          2024
        ],
        "frequency": 2,
        "importance": "Very High Probability"
      },
      {
        "id": "rq-sepm-aiml-2",
        "question": "Discuss the fundamental concepts of Requirements & Estimation: Requirements elicitation. How is it implemented/used in Software Engineering & Project Management?",
        "years": [
          2023,
          2025
        ],
        "frequency": 3,
        "importance": "High Probability"
      },
      {
        "id": "rq-sepm-aiml-3",
        "question": "Discuss the fundamental concepts of Software Design: Architectural styles. How is it implemented/used in Software Engineering & Project Management?",
        "years": [
          2024
        ],
        "frequency": 4,
        "importance": "Medium Probability"
      }
    ],
    "oneNightRevision": {
      "topQuestions": [
        "Write short notes on key methodologies and design parameters of Software Engineering & Project Management (Focus on Unit 3).",
        "Write short notes on key methodologies and design parameters of Software Engineering & Project Management (Focus on Unit 4).",
        "Write short notes on key methodologies and design parameters of Software Engineering & Project Management (Focus on Unit 5)."
      ],
      "definitions": [
        {
          "term": "Software Engineering & Project Management",
          "definition": "SDLC models, Agile Scrum, software project estimation, UML diagrams, white-box and black-box testing, and quality models (ISO, CMM)."
        },
        {
          "term": "Core Principle of AL-602",
          "definition": "The foundational architecture and operational logic that dictates the behavior of Software Engineering & Project Management in engineering applications."
        }
      ],
      "diagrams": [
        {
          "title": "Software Engineering & Project Management System Layout",
          "description": "Block diagram displaying the architectural configuration and interface linkages."
        }
      ],
      "formulas": [
        {
          "name": "AL-602 Efficiency Formula",
          "formula": "η = (Output Power / Input Power) * 100%",
          "explanation": "Calculates the performance ratio indicating total energy conversion efficiency."
        }
      ],
      "lastMinuteNotes": [
        "💡 Focus on the structural building blocks of Software Engineering & Project Management and their practical design constraints.",
        "💡 Review unit-wise previous exam papers and standard notations for numerical stability."
      ]
    },
    "videos": []
  },
  {
    "id": "ivp-aiml",
    "name": "Image and Video Processing",
    "code": "AL-603 A",
    "branchId": "aiml",
    "semester": 6,
    "description": "Digital image fundamentals, enhancement, segmentation, object motion and tracking, compression (JPEG), and deep learning for computer vision (YOLO).",
    "resourceCount": 32,
    "overview": {
      "syllabus": [
        "Unit I: Image Representation & Analysis: Digital image fundamentals, Sampling, Quantization, Color transforms, Image augmentation, Geometric transforms, Feature recognition and extraction.",
        "Unit II: Image Enhancement & Segmentation: Spatial domain filtering, Histogram equalization, Frequency domain filtering. Image Segmentation: Edge detection, Contour mapping, Background subtraction for video.",
        "Unit III: Object Motion & Tracking: Tracking points over time, Optical Flow, Motion models to define object movement, Kalman Filtering basics.",
        "Unit IV: Image Compression & Feature Description: Redundancies in images, Lossless vs Lossy compression models (JPEG), SIFT, HOG feature descriptors.",
        "Unit V: Deep Learning for Vision: Object Detection frameworks (R-CNN, YOLO), Semantic Segmentation models (U-Net), Practical applications in autonomous systems."
      ],
      "weightageSummary": "Unit III: Object Motion & Tracking: Trac typically represents around 40% of overall exam weightage."
    },
    "weightage": [
      {
        "unit": "Unit I: Image Representation & Analysis: Digital image fundamentals, Sampling, Quantization, Color transforms, Image augmentation, Geometric transforms, Feature recognition and extraction.",
        "expectedMarks": 12,
        "topics": [
          {
            "name": "Representation implementation details",
            "frequency": 5
          },
          {
            "name": "Analysis working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit II: Image Enhancement & Segmentation: Spatial domain filtering, Histogram equalization, Frequency domain filtering. Image Segmentation: Edge detection, Contour mapping, Background subtraction for video.",
        "expectedMarks": 14,
        "topics": [
          {
            "name": "Enhancement implementation details",
            "frequency": 5
          },
          {
            "name": "Segmentation working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit III: Object Motion & Tracking: Tracking points over time, Optical Flow, Motion models to define object movement, Kalman Filtering basics.",
        "expectedMarks": 16,
        "topics": [
          {
            "name": "Object implementation details",
            "frequency": 5
          },
          {
            "name": "Motion working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit IV: Image Compression & Feature Description: Redundancies in images, Lossless vs Lossy compression models (JPEG), SIFT, HOG feature descriptors.",
        "expectedMarks": 15,
        "topics": [
          {
            "name": "Compression implementation details",
            "frequency": 5
          },
          {
            "name": "Feature working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit V: Deep Learning for Vision: Object Detection frameworks (R-CNN, YOLO), Semantic Segmentation models (U-Net), Practical applications in autonomous systems.",
        "expectedMarks": 13,
        "topics": [
          {
            "name": "Learning implementation details",
            "frequency": 5
          },
          {
            "name": "Vision working parameters",
            "frequency": 4
          }
        ]
      }
    ],
    "repeatedQuestions": [
      {
        "id": "rq-ivp-aiml-1",
        "question": "Discuss the fundamental concepts of Image Representation & Analysis: Digital image fundamentals. How is it implemented/used in Image and Video Processing?",
        "years": [
          2022,
          2024
        ],
        "frequency": 2,
        "importance": "Very High Probability"
      },
      {
        "id": "rq-ivp-aiml-2",
        "question": "Discuss the fundamental concepts of Image Enhancement & Segmentation: Spatial domain filtering. How is it implemented/used in Image and Video Processing?",
        "years": [
          2023,
          2025
        ],
        "frequency": 3,
        "importance": "High Probability"
      },
      {
        "id": "rq-ivp-aiml-3",
        "question": "Discuss the fundamental concepts of Object Motion & Tracking: Tracking points over time. How is it implemented/used in Image and Video Processing?",
        "years": [
          2024
        ],
        "frequency": 4,
        "importance": "Medium Probability"
      }
    ],
    "oneNightRevision": {
      "topQuestions": [
        "Write short notes on key methodologies and design parameters of Image and Video Processing (Focus on Unit 3).",
        "Write short notes on key methodologies and design parameters of Image and Video Processing (Focus on Unit 4).",
        "Write short notes on key methodologies and design parameters of Image and Video Processing (Focus on Unit 5)."
      ],
      "definitions": [
        {
          "term": "Image and Video Processing",
          "definition": "Digital image fundamentals, enhancement, segmentation, object motion and tracking, compression (JPEG), and deep learning for computer vision (YOLO)."
        },
        {
          "term": "Core Principle of AL-603 A",
          "definition": "The foundational architecture and operational logic that dictates the behavior of Image and Video Processing in engineering applications."
        }
      ],
      "diagrams": [
        {
          "title": "Image and Video Processing System Layout",
          "description": "Block diagram displaying the architectural configuration and interface linkages."
        }
      ],
      "formulas": [
        {
          "name": "AL-603 A Efficiency Formula",
          "formula": "η = (Output Power / Input Power) * 100%",
          "explanation": "Calculates the performance ratio indicating total energy conversion efficiency."
        }
      ],
      "lastMinuteNotes": [
        "💡 Focus on the structural building blocks of Image and Video Processing and their practical design constraints.",
        "💡 Review unit-wise previous exam papers and standard notations for numerical stability."
      ]
    },
    "videos": []
  },
  {
    "id": "cc-aiml",
    "name": "Cloud Computing",
    "code": "AL-701",
    "branchId": "aiml",
    "semester": 7,
    "description": "Cloud service and deployment models, virtualization, Docker and Kubernetes, cloud storage, security, and cloud AI deployment.",
    "resourceCount": 34,
    "overview": {
      "syllabus": [
        "Unit I: Cloud Concepts: Architecture, Service Models (IaaS, PaaS, SaaS), Deployment Models (Public, Private, Hybrid), Economies of scale.",
        "Unit II: Virtualization Infrastructure: Hypervisors, Type 1 and Type 2 Virtualization, Full vs Para-virtualization, Containerization technologies (Docker, Kubernetes ecosystem).",
        "Unit III: Cloud Storage & Networking: Distributed file systems, Object storage, Virtual Private Clouds (VPC), Load balancing, Cloud database systems.",
        "Unit IV: Security & Governance: Identity and Access Management (IAM), Encryption at rest and in transit, Compliance audits, Data residency.",
        "Unit V: Cloud AI Services: Deploying machine learning models to the cloud, Serverless architectures, MLOps orchestration on AWS/Azure frameworks."
      ],
      "weightageSummary": "Unit III: Cloud Storage & Networking: Di typically represents around 40% of overall exam weightage."
    },
    "weightage": [
      {
        "unit": "Unit I: Cloud Concepts: Architecture, Service Models (IaaS, PaaS, SaaS), Deployment Models (Public, Private, Hybrid), Economies of scale.",
        "expectedMarks": 12,
        "topics": [
          {
            "name": "Architecture implementation details",
            "frequency": 5
          },
          {
            "name": "Service working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit II: Virtualization Infrastructure: Hypervisors, Type 1 and Type 2 Virtualization, Full vs Para-virtualization, Containerization technologies (Docker, Kubernetes ecosystem).",
        "expectedMarks": 14,
        "topics": [
          {
            "name": "Virtualization implementation details",
            "frequency": 5
          },
          {
            "name": "Infrastructure working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit III: Cloud Storage & Networking: Distributed file systems, Object storage, Virtual Private Clouds (VPC), Load balancing, Cloud database systems.",
        "expectedMarks": 16,
        "topics": [
          {
            "name": "Storage implementation details",
            "frequency": 5
          },
          {
            "name": "Networking working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit IV: Security & Governance: Identity and Access Management (IAM), Encryption at rest and in transit, Compliance audits, Data residency.",
        "expectedMarks": 15,
        "topics": [
          {
            "name": "Security implementation details",
            "frequency": 5
          },
          {
            "name": "Governance working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit V: Cloud AI Services: Deploying machine learning models to the cloud, Serverless architectures, MLOps orchestration on AWS/Azure frameworks.",
        "expectedMarks": 13,
        "topics": [
          {
            "name": "Services implementation details",
            "frequency": 5
          },
          {
            "name": "Deploying working parameters",
            "frequency": 4
          }
        ]
      }
    ],
    "repeatedQuestions": [
      {
        "id": "rq-cc-aiml-1",
        "question": "Discuss the fundamental concepts of Cloud Concepts: Architecture. How is it implemented/used in Cloud Computing?",
        "years": [
          2022,
          2024
        ],
        "frequency": 2,
        "importance": "Very High Probability"
      },
      {
        "id": "rq-cc-aiml-2",
        "question": "Discuss the fundamental concepts of Virtualization Infrastructure: Hypervisors. How is it implemented/used in Cloud Computing?",
        "years": [
          2023,
          2025
        ],
        "frequency": 3,
        "importance": "High Probability"
      },
      {
        "id": "rq-cc-aiml-3",
        "question": "Discuss the fundamental concepts of Cloud Storage & Networking: Distributed file systems. How is it implemented/used in Cloud Computing?",
        "years": [
          2024
        ],
        "frequency": 4,
        "importance": "Medium Probability"
      }
    ],
    "oneNightRevision": {
      "topQuestions": [
        "Write short notes on key methodologies and design parameters of Cloud Computing (Focus on Unit 3).",
        "Write short notes on key methodologies and design parameters of Cloud Computing (Focus on Unit 4).",
        "Write short notes on key methodologies and design parameters of Cloud Computing (Focus on Unit 5)."
      ],
      "definitions": [
        {
          "term": "Cloud Computing",
          "definition": "Cloud service and deployment models, virtualization, Docker and Kubernetes, cloud storage, security, and cloud AI deployment."
        },
        {
          "term": "Core Principle of AL-701",
          "definition": "The foundational architecture and operational logic that dictates the behavior of Cloud Computing in engineering applications."
        }
      ],
      "diagrams": [
        {
          "title": "Cloud Computing System Layout",
          "description": "Block diagram displaying the architectural configuration and interface linkages."
        }
      ],
      "formulas": [
        {
          "name": "AL-701 Efficiency Formula",
          "formula": "η = (Output Power / Input Power) * 100%",
          "explanation": "Calculates the performance ratio indicating total energy conversion efficiency."
        }
      ],
      "lastMinuteNotes": [
        "💡 Focus on the structural building blocks of Cloud Computing and their practical design constraints.",
        "💡 Review unit-wise previous exam papers and standard notations for numerical stability."
      ]
    },
    "videos": []
  },
  {
    "id": "bda-aiml",
    "name": "Big Data Analytics",
    "code": "AL-702",
    "branchId": "aiml",
    "semester": 7,
    "description": "Hadoop ecosystem, HDFS, MapReduce, NoSQL databases (MongoDB, Cassandra), Apache Spark, and real-time data pipelines (Kafka).",
    "resourceCount": 34,
    "overview": {
      "syllabus": [
        "Unit I: Big Data Overview: Core traits (5 Vs), Distributed systems challenges, Analytical scalability requirements.",
        "Unit II: Hadoop Ecosystem: HDFS Architecture, MapReduce execution framework, YARN resource allocation tracker.",
        "Unit III: NoSQL Systems: Key-Value store, Document store (MongoDB), Column-Family store (Cassandra), Graph databases, Consistency vs Availability (CAP Theorem).",
        "Unit IV: Apache Spark Framework: Resilient Distributed Datasets (RDDs), Spark SQL, Stream processing engine, Spark MLlib for scalable machine learning pipelines.",
        "Unit V: Data Pipelines & Visual Analytics: ETL (Extract, Transform, Load) pipelines, Real-time ingestion architectures (Kafka), Interactive visualization tools."
      ],
      "weightageSummary": "Unit III: NoSQL Systems: Key-Value store typically represents around 40% of overall exam weightage."
    },
    "weightage": [
      {
        "unit": "Unit I: Big Data Overview: Core traits (5 Vs), Distributed systems challenges, Analytical scalability requirements.",
        "expectedMarks": 12,
        "topics": [
          {
            "name": "Overview implementation details",
            "frequency": 5
          },
          {
            "name": "traits working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit II: Hadoop Ecosystem: HDFS Architecture, MapReduce execution framework, YARN resource allocation tracker.",
        "expectedMarks": 14,
        "topics": [
          {
            "name": "Hadoop implementation details",
            "frequency": 5
          },
          {
            "name": "Ecosystem working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit III: NoSQL Systems: Key-Value store, Document store (MongoDB), Column-Family store (Cassandra), Graph databases, Consistency vs Availability (CAP Theorem).",
        "expectedMarks": 16,
        "topics": [
          {
            "name": "Systems implementation details",
            "frequency": 5
          },
          {
            "name": "Key-Value working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit IV: Apache Spark Framework: Resilient Distributed Datasets (RDDs), Spark SQL, Stream processing engine, Spark MLlib for scalable machine learning pipelines.",
        "expectedMarks": 15,
        "topics": [
          {
            "name": "Apache implementation details",
            "frequency": 5
          },
          {
            "name": "Framework working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit V: Data Pipelines & Visual Analytics: ETL (Extract, Transform, Load) pipelines, Real-time ingestion architectures (Kafka), Interactive visualization tools.",
        "expectedMarks": 13,
        "topics": [
          {
            "name": "Pipelines implementation details",
            "frequency": 5
          },
          {
            "name": "Visual working parameters",
            "frequency": 4
          }
        ]
      }
    ],
    "repeatedQuestions": [
      {
        "id": "rq-bda-aiml-1",
        "question": "Discuss the fundamental concepts of Big Data Overview: Core traits (5 Vs). How is it implemented/used in Big Data Analytics?",
        "years": [
          2022,
          2024
        ],
        "frequency": 2,
        "importance": "Very High Probability"
      },
      {
        "id": "rq-bda-aiml-2",
        "question": "Discuss the fundamental concepts of Hadoop Ecosystem: HDFS Architecture. How is it implemented/used in Big Data Analytics?",
        "years": [
          2023,
          2025
        ],
        "frequency": 3,
        "importance": "High Probability"
      },
      {
        "id": "rq-bda-aiml-3",
        "question": "Discuss the fundamental concepts of NoSQL Systems: Key-Value store. How is it implemented/used in Big Data Analytics?",
        "years": [
          2024
        ],
        "frequency": 4,
        "importance": "Medium Probability"
      }
    ],
    "oneNightRevision": {
      "topQuestions": [
        "Write short notes on key methodologies and design parameters of Big Data Analytics (Focus on Unit 3).",
        "Write short notes on key methodologies and design parameters of Big Data Analytics (Focus on Unit 4).",
        "Write short notes on key methodologies and design parameters of Big Data Analytics (Focus on Unit 5)."
      ],
      "definitions": [
        {
          "term": "Big Data Analytics",
          "definition": "Hadoop ecosystem, HDFS, MapReduce, NoSQL databases (MongoDB, Cassandra), Apache Spark, and real-time data pipelines (Kafka)."
        },
        {
          "term": "Core Principle of AL-702",
          "definition": "The foundational architecture and operational logic that dictates the behavior of Big Data Analytics in engineering applications."
        }
      ],
      "diagrams": [
        {
          "title": "Big Data Analytics System Layout",
          "description": "Block diagram displaying the architectural configuration and interface linkages."
        }
      ],
      "formulas": [
        {
          "name": "AL-702 Efficiency Formula",
          "formula": "η = (Output Power / Input Power) * 100%",
          "explanation": "Calculates the performance ratio indicating total energy conversion efficiency."
        }
      ],
      "lastMinuteNotes": [
        "💡 Focus on the structural building blocks of Big Data Analytics and their practical design constraints.",
        "💡 Review unit-wise previous exam papers and standard notations for numerical stability."
      ]
    },
    "videos": []
  },
  {
    "id": "bi-aiml",
    "name": "Business Intelligence",
    "code": "AL-801",
    "branchId": "aiml",
    "semester": 8,
    "description": "Data lifecycles, OLAP, dimensional modeling, pattern matching, predictive modeling (customer churn, fraud detection), and AutoML.",
    "resourceCount": 36,
    "overview": {
      "syllabus": [
        "Unit I: Frameworks: Data, Information, Knowledge lifecycles, Architectural models for decision support systems, Cost-benefit metrics.",
        "Unit II: Knowledge Delivery: Ad-hoc querying, Interactive dashboards, Online Analytical Processing (OLAP), Dimensional modeling, Enterprise reporting tools.",
        "Unit III: Operational Efficiency Models: Pattern matching, Cluster profiling, Outlier analysis for business abnormalities, Data envelopment analysis frameworks.",
        "Unit IV: Predictive Business Applications: Customer Churn modeling, Market Basket Analysis, Fraud Detection pipelines, Forecasting models for inventory.",
        "Unit V: Emerging Trends in BI: Automated Machine Learning (AutoML) integration, Conversational BI, Privacy-preserving analytics, Enterprise ethical frameworks."
      ],
      "weightageSummary": "Unit III: Operational Efficiency Models: typically represents around 40% of overall exam weightage."
    },
    "weightage": [
      {
        "unit": "Unit I: Frameworks: Data, Information, Knowledge lifecycles, Architectural models for decision support systems, Cost-benefit metrics.",
        "expectedMarks": 12,
        "topics": [
          {
            "name": "Frameworks implementation details",
            "frequency": 5
          },
          {
            "name": "Information working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit II: Knowledge Delivery: Ad-hoc querying, Interactive dashboards, Online Analytical Processing (OLAP), Dimensional modeling, Enterprise reporting tools.",
        "expectedMarks": 14,
        "topics": [
          {
            "name": "Knowledge implementation details",
            "frequency": 5
          },
          {
            "name": "Delivery working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit III: Operational Efficiency Models: Pattern matching, Cluster profiling, Outlier analysis for business abnormalities, Data envelopment analysis frameworks.",
        "expectedMarks": 16,
        "topics": [
          {
            "name": "Operational implementation details",
            "frequency": 5
          },
          {
            "name": "Efficiency working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit IV: Predictive Business Applications: Customer Churn modeling, Market Basket Analysis, Fraud Detection pipelines, Forecasting models for inventory.",
        "expectedMarks": 15,
        "topics": [
          {
            "name": "Predictive implementation details",
            "frequency": 5
          },
          {
            "name": "Business working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit V: Emerging Trends in BI: Automated Machine Learning (AutoML) integration, Conversational BI, Privacy-preserving analytics, Enterprise ethical frameworks.",
        "expectedMarks": 13,
        "topics": [
          {
            "name": "Emerging implementation details",
            "frequency": 5
          },
          {
            "name": "Trends working parameters",
            "frequency": 4
          }
        ]
      }
    ],
    "repeatedQuestions": [
      {
        "id": "rq-bi-aiml-1",
        "question": "Discuss the fundamental concepts of Frameworks: Data. How is it implemented/used in Business Intelligence?",
        "years": [
          2022,
          2024
        ],
        "frequency": 2,
        "importance": "Very High Probability"
      },
      {
        "id": "rq-bi-aiml-2",
        "question": "Discuss the fundamental concepts of Knowledge Delivery: Ad-hoc querying. How is it implemented/used in Business Intelligence?",
        "years": [
          2023,
          2025
        ],
        "frequency": 3,
        "importance": "High Probability"
      },
      {
        "id": "rq-bi-aiml-3",
        "question": "Discuss the fundamental concepts of Operational Efficiency Models: Pattern matching. How is it implemented/used in Business Intelligence?",
        "years": [
          2024
        ],
        "frequency": 4,
        "importance": "Medium Probability"
      }
    ],
    "oneNightRevision": {
      "topQuestions": [
        "Write short notes on key methodologies and design parameters of Business Intelligence (Focus on Unit 3).",
        "Write short notes on key methodologies and design parameters of Business Intelligence (Focus on Unit 4).",
        "Write short notes on key methodologies and design parameters of Business Intelligence (Focus on Unit 5)."
      ],
      "definitions": [
        {
          "term": "Business Intelligence",
          "definition": "Data lifecycles, OLAP, dimensional modeling, pattern matching, predictive modeling (customer churn, fraud detection), and AutoML."
        },
        {
          "term": "Core Principle of AL-801",
          "definition": "The foundational architecture and operational logic that dictates the behavior of Business Intelligence in engineering applications."
        }
      ],
      "diagrams": [
        {
          "title": "Business Intelligence System Layout",
          "description": "Block diagram displaying the architectural configuration and interface linkages."
        }
      ],
      "formulas": [
        {
          "name": "AL-801 Efficiency Formula",
          "formula": "η = (Output Power / Input Power) * 100%",
          "explanation": "Calculates the performance ratio indicating total energy conversion efficiency."
        }
      ],
      "lastMinuteNotes": [
        "💡 Focus on the structural building blocks of Business Intelligence and their practical design constraints.",
        "💡 Review unit-wise previous exam papers and standard notations for numerical stability."
      ]
    },
    "videos": []
  },
  {
    "id": "iot-aiml",
    "name": "Internet of Things",
    "code": "AL-802",
    "branchId": "aiml",
    "semester": 8,
    "description": "IoT system architecture, hardware interface, MQTT and CoAP protocols, microcontrollers (Pi, Arduino), and edge machine learning (TinyML).",
    "resourceCount": 36,
    "overview": {
      "syllabus": [
        "Unit I: IoT System Architecture: Hardware foundations, Edge/Fog/Cloud compute tiers, Sensors and Actuators interaction mechanics.",
        "Unit II: IoT Communication Networks: Low-power wireless networks (LoRaWAN, Zigbee, BLE), Application protocols (MQTT, CoAP, HTTP rest limits).",
        "Unit III: Embedded Computing Systems: Working with microcontrollers (Raspberry Pi, Arduino architectures), Interfacing, Firmware execution logic.",
        "Unit IV: Smart Edge Analytics: Deploying light Machine Learning models on Edge devices (TinyML), Real-time stream filtering.",
        "Unit V: Industry Deployments & Security: Industrial IoT (IIoT), Threat modeling for connected endpoints, Device authentication patterns."
      ],
      "weightageSummary": "Unit III: Embedded Computing Systems: Wo typically represents around 40% of overall exam weightage."
    },
    "weightage": [
      {
        "unit": "Unit I: IoT System Architecture: Hardware foundations, Edge/Fog/Cloud compute tiers, Sensors and Actuators interaction mechanics.",
        "expectedMarks": 12,
        "topics": [
          {
            "name": "System implementation details",
            "frequency": 5
          },
          {
            "name": "Architecture working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit II: IoT Communication Networks: Low-power wireless networks (LoRaWAN, Zigbee, BLE), Application protocols (MQTT, CoAP, HTTP rest limits).",
        "expectedMarks": 14,
        "topics": [
          {
            "name": "Communication implementation details",
            "frequency": 5
          },
          {
            "name": "Networks working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit III: Embedded Computing Systems: Working with microcontrollers (Raspberry Pi, Arduino architectures), Interfacing, Firmware execution logic.",
        "expectedMarks": 16,
        "topics": [
          {
            "name": "Embedded implementation details",
            "frequency": 5
          },
          {
            "name": "Computing working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit IV: Smart Edge Analytics: Deploying light Machine Learning models on Edge devices (TinyML), Real-time stream filtering.",
        "expectedMarks": 15,
        "topics": [
          {
            "name": "Analytics implementation details",
            "frequency": 5
          },
          {
            "name": "Deploying working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit V: Industry Deployments & Security: Industrial IoT (IIoT), Threat modeling for connected endpoints, Device authentication patterns.",
        "expectedMarks": 13,
        "topics": [
          {
            "name": "Industry implementation details",
            "frequency": 5
          },
          {
            "name": "Deployments working parameters",
            "frequency": 4
          }
        ]
      }
    ],
    "repeatedQuestions": [
      {
        "id": "rq-iot-aiml-1",
        "question": "Discuss the fundamental concepts of IoT System Architecture: Hardware foundations. How is it implemented/used in Internet of Things?",
        "years": [
          2022,
          2024
        ],
        "frequency": 2,
        "importance": "Very High Probability"
      },
      {
        "id": "rq-iot-aiml-2",
        "question": "Discuss the fundamental concepts of IoT Communication Networks: Low-power wireless networks (LoRaWAN. How is it implemented/used in Internet of Things?",
        "years": [
          2023,
          2025
        ],
        "frequency": 3,
        "importance": "High Probability"
      },
      {
        "id": "rq-iot-aiml-3",
        "question": "Discuss the fundamental concepts of Embedded Computing Systems: Working with microcontrollers (Raspberry Pi. How is it implemented/used in Internet of Things?",
        "years": [
          2024
        ],
        "frequency": 4,
        "importance": "Medium Probability"
      }
    ],
    "oneNightRevision": {
      "topQuestions": [
        "Write short notes on key methodologies and design parameters of Internet of Things (Focus on Unit 3).",
        "Write short notes on key methodologies and design parameters of Internet of Things (Focus on Unit 4).",
        "Write short notes on key methodologies and design parameters of Internet of Things (Focus on Unit 5)."
      ],
      "definitions": [
        {
          "term": "Internet of Things",
          "definition": "IoT system architecture, hardware interface, MQTT and CoAP protocols, microcontrollers (Pi, Arduino), and edge machine learning (TinyML)."
        },
        {
          "term": "Core Principle of AL-802",
          "definition": "The foundational architecture and operational logic that dictates the behavior of Internet of Things in engineering applications."
        }
      ],
      "diagrams": [
        {
          "title": "Internet of Things System Layout",
          "description": "Block diagram displaying the architectural configuration and interface linkages."
        }
      ],
      "formulas": [
        {
          "name": "AL-802 Efficiency Formula",
          "formula": "η = (Output Power / Input Power) * 100%",
          "explanation": "Calculates the performance ratio indicating total energy conversion efficiency."
        }
      ],
      "lastMinuteNotes": [
        "💡 Focus on the structural building blocks of Internet of Things and their practical design constraints.",
        "💡 Review unit-wise previous exam papers and standard notations for numerical stability."
      ]
    },
    "videos": []
  },
  {
    "id": "cm-ce",
    "name": "Construction Materials",
    "code": "CE-302",
    "branchId": "ce",
    "semester": 3,
    "description": "Properties of Stones and Bricks, Lime, Cement, Mortar, Concrete ingredients, Admixtures, Timber seasoning and preservation, advanced building finishes.",
    "resourceCount": 26,
    "overview": {
      "syllabus": [
        "Unit I: Stones & Bricks: Engineering properties, testing, manufacturing of bricks, structural clay products. High-quality heavy-duty bricks, fly ash bricks.",
        "Unit II: Lime, Cement & Mortars: Types and properties of lime. Cement: Composition, manufacturing, physical properties, types, and testing. Mortar: Types, preparation, and proportions for different works.",
        "Unit III: Concrete & Admixtures: Concrete ingredients, water-cement ratio, workability, strength, durability. Concrete mix design foundations. Admixtures: Accelerators, retarders, plasticizers.",
        "Unit IV: Timber & Alternative Materials: Structure, defects, seasoning, and preservation of timber. Engineered wood products (plywood, particle board). Glass, plastics, and composite structural materials.",
        "Unit V: Advanced Materials & Finishes: Paints, varnishes, distempers, bituminous materials, waterproofing agents, and geosynthetics."
      ],
      "weightageSummary": "Unit III: Concrete & Admixtures: Concret typically represents around 40% of overall exam weightage."
    },
    "weightage": [
      {
        "unit": "Unit I: Stones & Bricks: Engineering properties, testing, manufacturing of bricks, structural clay products. High-quality heavy-duty bricks, fly ash bricks.",
        "expectedMarks": 12,
        "topics": [
          {
            "name": "Stones implementation details",
            "frequency": 5
          },
          {
            "name": "Bricks working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit II: Lime, Cement & Mortars: Types and properties of lime. Cement: Composition, manufacturing, physical properties, types, and testing. Mortar: Types, preparation, and proportions for different works.",
        "expectedMarks": 14,
        "topics": [
          {
            "name": "Cement implementation details",
            "frequency": 5
          },
          {
            "name": "Mortars working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit III: Concrete & Admixtures: Concrete ingredients, water-cement ratio, workability, strength, durability. Concrete mix design foundations. Admixtures: Accelerators, retarders, plasticizers.",
        "expectedMarks": 16,
        "topics": [
          {
            "name": "Concrete implementation details",
            "frequency": 5
          },
          {
            "name": "Admixtures working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit IV: Timber & Alternative Materials: Structure, defects, seasoning, and preservation of timber. Engineered wood products (plywood, particle board). Glass, plastics, and composite structural materials.",
        "expectedMarks": 15,
        "topics": [
          {
            "name": "Timber implementation details",
            "frequency": 5
          },
          {
            "name": "Alternative working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit V: Advanced Materials & Finishes: Paints, varnishes, distempers, bituminous materials, waterproofing agents, and geosynthetics.",
        "expectedMarks": 13,
        "topics": [
          {
            "name": "Advanced implementation details",
            "frequency": 5
          },
          {
            "name": "Materials working parameters",
            "frequency": 4
          }
        ]
      }
    ],
    "repeatedQuestions": [
      {
        "id": "rq-cm-ce-1",
        "question": "Discuss the fundamental concepts of Stones & Bricks: Engineering properties. How is it implemented/used in Construction Materials?",
        "years": [
          2022,
          2024
        ],
        "frequency": 2,
        "importance": "Very High Probability"
      },
      {
        "id": "rq-cm-ce-2",
        "question": "Discuss the fundamental concepts of Lime. How is it implemented/used in Construction Materials?",
        "years": [
          2023,
          2025
        ],
        "frequency": 3,
        "importance": "High Probability"
      },
      {
        "id": "rq-cm-ce-3",
        "question": "Discuss the fundamental concepts of Concrete & Admixtures: Concrete ingredients. How is it implemented/used in Construction Materials?",
        "years": [
          2024
        ],
        "frequency": 4,
        "importance": "Medium Probability"
      }
    ],
    "oneNightRevision": {
      "topQuestions": [
        "Write short notes on key methodologies and design parameters of Construction Materials (Focus on Unit 3).",
        "Write short notes on key methodologies and design parameters of Construction Materials (Focus on Unit 4).",
        "Write short notes on key methodologies and design parameters of Construction Materials (Focus on Unit 5)."
      ],
      "definitions": [
        {
          "term": "Construction Materials",
          "definition": "Properties of Stones and Bricks, Lime, Cement, Mortar, Concrete ingredients, Admixtures, Timber seasoning and preservation, advanced building finishes."
        },
        {
          "term": "Core Principle of CE-302",
          "definition": "The foundational architecture and operational logic that dictates the behavior of Construction Materials in engineering applications."
        }
      ],
      "diagrams": [
        {
          "title": "Construction Materials System Layout",
          "description": "Block diagram displaying the architectural configuration and interface linkages."
        }
      ],
      "formulas": [
        {
          "name": "CE-302 Efficiency Formula",
          "formula": "η = (Output Power / Input Power) * 100%",
          "explanation": "Calculates the performance ratio indicating total energy conversion efficiency."
        }
      ],
      "lastMinuteNotes": [
        "💡 Focus on the structural building blocks of Construction Materials and their practical design constraints.",
        "💡 Review unit-wise previous exam papers and standard notations for numerical stability."
      ]
    },
    "videos": []
  },
  {
    "id": "sur-ce",
    "name": "Surveying",
    "code": "CE-303",
    "branchId": "ce",
    "semester": 3,
    "description": "Principles of Chain Surveying, Compass and Theodolite adjustments, Leveling operations, Tacheometry, curve ranging, GPS and drone-based modern mapping.",
    "resourceCount": 26,
    "overview": {
      "syllabus": [
        "Unit I: Fundamental Concepts & Chain Surveying: Principles of surveying, scales, linear measurements. Chain surveying: Fieldwork, offsets, obstacles, and errors.",
        "Unit II: Compass & Theodolite Surveying: Compass: Types, bearing systems, local attraction, traversing. Theodolite: Temporary and permanent adjustments, horizontal and vertical angle measurements.",
        "Unit III: Levelling & Contouring: Terms, types of leveling, booking and reducing levels, curvature and refraction corrections. Contouring: Characteristics, methods, and structural applications.",
        "Unit IV: Tacheometry & Curve Ranging: Tacheometric surveying systems, analytic lens. Curve setting: Elements and methods of setting out simple, compound, reverse, and transition curves.",
        "Unit V: Modern Surveying Techniques: Total Station operations, Global Positioning System (GPS), Remote Sensing, Photogrammetry, and drone-based mapping concepts."
      ],
      "weightageSummary": "Unit III: Levelling & Contouring: Terms, typically represents around 40% of overall exam weightage."
    },
    "weightage": [
      {
        "unit": "Unit I: Fundamental Concepts & Chain Surveying: Principles of surveying, scales, linear measurements. Chain surveying: Fieldwork, offsets, obstacles, and errors.",
        "expectedMarks": 12,
        "topics": [
          {
            "name": "Fundamental implementation details",
            "frequency": 5
          },
          {
            "name": "Surveying working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit II: Compass & Theodolite Surveying: Compass: Types, bearing systems, local attraction, traversing. Theodolite: Temporary and permanent adjustments, horizontal and vertical angle measurements.",
        "expectedMarks": 14,
        "topics": [
          {
            "name": "Compass implementation details",
            "frequency": 5
          },
          {
            "name": "Theodolite working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit III: Levelling & Contouring: Terms, types of leveling, booking and reducing levels, curvature and refraction corrections. Contouring: Characteristics, methods, and structural applications.",
        "expectedMarks": 16,
        "topics": [
          {
            "name": "Levelling implementation details",
            "frequency": 5
          },
          {
            "name": "Contouring working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit IV: Tacheometry & Curve Ranging: Tacheometric surveying systems, analytic lens. Curve setting: Elements and methods of setting out simple, compound, reverse, and transition curves.",
        "expectedMarks": 15,
        "topics": [
          {
            "name": "Tacheometry implementation details",
            "frequency": 5
          },
          {
            "name": "Ranging working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit V: Modern Surveying Techniques: Total Station operations, Global Positioning System (GPS), Remote Sensing, Photogrammetry, and drone-based mapping concepts.",
        "expectedMarks": 13,
        "topics": [
          {
            "name": "Modern implementation details",
            "frequency": 5
          },
          {
            "name": "Surveying working parameters",
            "frequency": 4
          }
        ]
      }
    ],
    "repeatedQuestions": [
      {
        "id": "rq-sur-ce-1",
        "question": "Discuss the fundamental concepts of Fundamental Concepts & Chain Surveying: Principles of surveying. How is it implemented/used in Surveying?",
        "years": [
          2022,
          2024
        ],
        "frequency": 2,
        "importance": "Very High Probability"
      },
      {
        "id": "rq-sur-ce-2",
        "question": "Discuss the fundamental concepts of Compass & Theodolite Surveying: Compass: Types. How is it implemented/used in Surveying?",
        "years": [
          2023,
          2025
        ],
        "frequency": 3,
        "importance": "High Probability"
      },
      {
        "id": "rq-sur-ce-3",
        "question": "Discuss the fundamental concepts of Levelling & Contouring: Terms. How is it implemented/used in Surveying?",
        "years": [
          2024
        ],
        "frequency": 4,
        "importance": "Medium Probability"
      }
    ],
    "oneNightRevision": {
      "topQuestions": [
        "Write short notes on key methodologies and design parameters of Surveying (Focus on Unit 3).",
        "Write short notes on key methodologies and design parameters of Surveying (Focus on Unit 4).",
        "Write short notes on key methodologies and design parameters of Surveying (Focus on Unit 5)."
      ],
      "definitions": [
        {
          "term": "Surveying",
          "definition": "Principles of Chain Surveying, Compass and Theodolite adjustments, Leveling operations, Tacheometry, curve ranging, GPS and drone-based modern mapping."
        },
        {
          "term": "Core Principle of CE-303",
          "definition": "The foundational architecture and operational logic that dictates the behavior of Surveying in engineering applications."
        }
      ],
      "diagrams": [
        {
          "title": "Surveying System Layout",
          "description": "Block diagram displaying the architectural configuration and interface linkages."
        }
      ],
      "formulas": [
        {
          "name": "CE-303 Efficiency Formula",
          "formula": "η = (Output Power / Input Power) * 100%",
          "explanation": "Calculates the performance ratio indicating total energy conversion efficiency."
        }
      ],
      "lastMinuteNotes": [
        "💡 Focus on the structural building blocks of Surveying and their practical design constraints.",
        "💡 Review unit-wise previous exam papers and standard notations for numerical stability."
      ]
    },
    "videos": []
  },
  {
    "id": "bpa-ce",
    "name": "Building Planning & Architecture",
    "code": "CE-304",
    "branchId": "ce",
    "semester": 3,
    "description": "Drawing foundations, residential and public building orientation layouts, principles of architectural composition, building services, and CAD tools.",
    "resourceCount": 26,
    "overview": {
      "syllabus": [
        "Unit I: Drawing Foundations & Building Components: Scale, lettering, standard symbols, line work. Substructure and superstructure components, load-bearing vs framed structures.",
        "Unit II: Building Planning Principles: Orientation, sun diagram, wind direction. Elements of planning: Privacy, grouping, roominess, circulation, sanitation, and municipal bylaws.",
        "Unit III: Residential & Public Buildings: Planning of residential layouts (bungalows, flats). Planning of public spaces: Schools, hospitals, offices, and commercial complexes.",
        "Unit IV: Architectural Composition: Principles of composition: Mass, space, proportion, symmetry, balance, contrast, and unity. Interior design elements and space optimization.",
        "Unit V: Building Services & Smart Drafting: Lighting, ventilation, acoustics, drainage, plumbing, and fire safety layout rules. Introduction to computerized architectural drafting (CAD)."
      ],
      "weightageSummary": "Unit III: Residential & Public Buildings typically represents around 40% of overall exam weightage."
    },
    "weightage": [
      {
        "unit": "Unit I: Drawing Foundations & Building Components: Scale, lettering, standard symbols, line work. Substructure and superstructure components, load-bearing vs framed structures.",
        "expectedMarks": 12,
        "topics": [
          {
            "name": "Drawing implementation details",
            "frequency": 5
          },
          {
            "name": "Foundations working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit II: Building Planning Principles: Orientation, sun diagram, wind direction. Elements of planning: Privacy, grouping, roominess, circulation, sanitation, and municipal bylaws.",
        "expectedMarks": 14,
        "topics": [
          {
            "name": "Building implementation details",
            "frequency": 5
          },
          {
            "name": "Planning working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit III: Residential & Public Buildings: Planning of residential layouts (bungalows, flats). Planning of public spaces: Schools, hospitals, offices, and commercial complexes.",
        "expectedMarks": 16,
        "topics": [
          {
            "name": "Residential implementation details",
            "frequency": 5
          },
          {
            "name": "Public working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit IV: Architectural Composition: Principles of composition: Mass, space, proportion, symmetry, balance, contrast, and unity. Interior design elements and space optimization.",
        "expectedMarks": 15,
        "topics": [
          {
            "name": "Architectural implementation details",
            "frequency": 5
          },
          {
            "name": "Composition working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit V: Building Services & Smart Drafting: Lighting, ventilation, acoustics, drainage, plumbing, and fire safety layout rules. Introduction to computerized architectural drafting (CAD).",
        "expectedMarks": 13,
        "topics": [
          {
            "name": "Building implementation details",
            "frequency": 5
          },
          {
            "name": "Services working parameters",
            "frequency": 4
          }
        ]
      }
    ],
    "repeatedQuestions": [
      {
        "id": "rq-bpa-ce-1",
        "question": "Discuss the fundamental concepts of Drawing Foundations & Building Components: Scale. How is it implemented/used in Building Planning & Architecture?",
        "years": [
          2022,
          2024
        ],
        "frequency": 2,
        "importance": "Very High Probability"
      },
      {
        "id": "rq-bpa-ce-2",
        "question": "Discuss the fundamental concepts of Building Planning Principles: Orientation. How is it implemented/used in Building Planning & Architecture?",
        "years": [
          2023,
          2025
        ],
        "frequency": 3,
        "importance": "High Probability"
      },
      {
        "id": "rq-bpa-ce-3",
        "question": "Discuss the fundamental concepts of Residential & Public Buildings: Planning of residential layouts (bungalows. How is it implemented/used in Building Planning & Architecture?",
        "years": [
          2024
        ],
        "frequency": 4,
        "importance": "Medium Probability"
      }
    ],
    "oneNightRevision": {
      "topQuestions": [
        "Write short notes on key methodologies and design parameters of Building Planning & Architecture (Focus on Unit 3).",
        "Write short notes on key methodologies and design parameters of Building Planning & Architecture (Focus on Unit 4).",
        "Write short notes on key methodologies and design parameters of Building Planning & Architecture (Focus on Unit 5)."
      ],
      "definitions": [
        {
          "term": "Building Planning & Architecture",
          "definition": "Drawing foundations, residential and public building orientation layouts, principles of architectural composition, building services, and CAD tools."
        },
        {
          "term": "Core Principle of CE-304",
          "definition": "The foundational architecture and operational logic that dictates the behavior of Building Planning & Architecture in engineering applications."
        }
      ],
      "diagrams": [
        {
          "title": "Building Planning & Architecture System Layout",
          "description": "Block diagram displaying the architectural configuration and interface linkages."
        }
      ],
      "formulas": [
        {
          "name": "CE-304 Efficiency Formula",
          "formula": "η = (Output Power / Input Power) * 100%",
          "explanation": "Calculates the performance ratio indicating total energy conversion efficiency."
        }
      ],
      "lastMinuteNotes": [
        "💡 Focus on the structural building blocks of Building Planning & Architecture and their practical design constraints.",
        "💡 Review unit-wise previous exam papers and standard notations for numerical stability."
      ]
    },
    "videos": []
  },
  {
    "id": "som-ce",
    "name": "Strength of Materials",
    "code": "CE-305",
    "branchId": "ce",
    "semester": 3,
    "description": "Simple stress and strain Hooke's Law, SFD and BMD for beams, theory of pure bending, column buckling equations, and deflection calculations.",
    "resourceCount": 26,
    "overview": {
      "syllabus": [
        "Unit I: Simple Stress and Strain: Mechanical properties, Hooke's Law, stress-strain curves for ductile and brittle materials. Elastic constants and relationships. Thermal stresses, principal stresses, and Mohr's Circle.",
        "Unit II: Shear Force and Bending Moment: Concept of beams, types of loads and supports. SFD and BMD for cantilever, simply supported, and overhanging beams under point loads, UDL, and UVL.",
        "Unit III: Bending and Shear Stresses: Theory of pure bending, section modulus, flexural formula derivation. Distribution of bending and shear stresses across various beam cross-sections (I, T, L, Circular, Rectangular).",
        "Unit IV: Torsion and Columns: Torsion of circular shafts, hollow shafts, power transmission. Columns and struts: Euler's theory for long columns, crippling load calculation for different end conditions, Rankine's formula.",
        "Unit V: Deflection of Beams & Thin Cylinders: Deflection equations using Double Integration and Macaulay's methods. Thin cylindrical and spherical shells under internal pressure."
      ],
      "weightageSummary": "Unit III: Bending and Shear Stresses: Th typically represents around 40% of overall exam weightage."
    },
    "weightage": [
      {
        "unit": "Unit I: Simple Stress and Strain: Mechanical properties, Hooke's Law, stress-strain curves for ductile and brittle materials. Elastic constants and relationships. Thermal stresses, principal stresses, and Mohr's Circle.",
        "expectedMarks": 12,
        "topics": [
          {
            "name": "Simple implementation details",
            "frequency": 5
          },
          {
            "name": "Stress working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit II: Shear Force and Bending Moment: Concept of beams, types of loads and supports. SFD and BMD for cantilever, simply supported, and overhanging beams under point loads, UDL, and UVL.",
        "expectedMarks": 14,
        "topics": [
          {
            "name": "Bending implementation details",
            "frequency": 5
          },
          {
            "name": "Moment working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit III: Bending and Shear Stresses: Theory of pure bending, section modulus, flexural formula derivation. Distribution of bending and shear stresses across various beam cross-sections (I, T, L, Circular, Rectangular).",
        "expectedMarks": 16,
        "topics": [
          {
            "name": "Bending implementation details",
            "frequency": 5
          },
          {
            "name": "Stresses working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit IV: Torsion and Columns: Torsion of circular shafts, hollow shafts, power transmission. Columns and struts: Euler's theory for long columns, crippling load calculation for different end conditions, Rankine's formula.",
        "expectedMarks": 15,
        "topics": [
          {
            "name": "Torsion implementation details",
            "frequency": 5
          },
          {
            "name": "Columns working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit V: Deflection of Beams & Thin Cylinders: Deflection equations using Double Integration and Macaulay's methods. Thin cylindrical and spherical shells under internal pressure.",
        "expectedMarks": 13,
        "topics": [
          {
            "name": "Deflection implementation details",
            "frequency": 5
          },
          {
            "name": "Cylinders working parameters",
            "frequency": 4
          }
        ]
      }
    ],
    "repeatedQuestions": [
      {
        "id": "rq-som-ce-1",
        "question": "Discuss the fundamental concepts of Simple Stress and Strain: Mechanical properties. How is it implemented/used in Strength of Materials?",
        "years": [
          2022,
          2024
        ],
        "frequency": 2,
        "importance": "Very High Probability"
      },
      {
        "id": "rq-som-ce-2",
        "question": "Discuss the fundamental concepts of Shear Force and Bending Moment: Concept of beams. How is it implemented/used in Strength of Materials?",
        "years": [
          2023,
          2025
        ],
        "frequency": 3,
        "importance": "High Probability"
      },
      {
        "id": "rq-som-ce-3",
        "question": "Discuss the fundamental concepts of Bending and Shear Stresses: Theory of pure bending. How is it implemented/used in Strength of Materials?",
        "years": [
          2024
        ],
        "frequency": 4,
        "importance": "Medium Probability"
      }
    ],
    "oneNightRevision": {
      "topQuestions": [
        "Write short notes on key methodologies and design parameters of Strength of Materials (Focus on Unit 3).",
        "Write short notes on key methodologies and design parameters of Strength of Materials (Focus on Unit 4).",
        "Write short notes on key methodologies and design parameters of Strength of Materials (Focus on Unit 5)."
      ],
      "definitions": [
        {
          "term": "Strength of Materials",
          "definition": "Simple stress and strain Hooke's Law, SFD and BMD for beams, theory of pure bending, column buckling equations, and deflection calculations."
        },
        {
          "term": "Core Principle of CE-305",
          "definition": "The foundational architecture and operational logic that dictates the behavior of Strength of Materials in engineering applications."
        }
      ],
      "diagrams": [
        {
          "title": "Strength of Materials System Layout",
          "description": "Block diagram displaying the architectural configuration and interface linkages."
        }
      ],
      "formulas": [
        {
          "name": "CE-305 Efficiency Formula",
          "formula": "η = (Output Power / Input Power) * 100%",
          "explanation": "Calculates the performance ratio indicating total energy conversion efficiency."
        }
      ],
      "lastMinuteNotes": [
        "💡 Focus on the structural building blocks of Strength of Materials and their practical design constraints.",
        "💡 Review unit-wise previous exam papers and standard notations for numerical stability."
      ]
    },
    "videos": []
  },
  {
    "id": "ct-ce",
    "name": "Concrete Technology",
    "code": "CE-402",
    "branchId": "ce",
    "semester": 4,
    "description": "Cement chemistry, workability of fresh concrete, hardened concrete testing, IS Code concrete mix design, and high-strength geopolymer materials.",
    "resourceCount": 28,
    "overview": {
      "syllabus": [
        "Unit I: Concrete Ingredients & Hydration: Detailed analysis of cement chemistry, hydration mechanism, physical attributes of coarse and fine aggregates, grading curves.",
        "Unit II: Fresh Concrete Properties: Workability testing (Slump, Compacting Factor, Vee-Bee consistometer), segregation, bleeding, concrete manufacturing steps (batching, mixing, transporting, placing, compacting, curing).",
        "Unit III: Hardened Concrete & Durability: Stress-strain behavior, modulus of elasticity, shrinkage, creep. Durability factor: Carbonation, sulfate attack, chloride ingress, alkali-aggregate reaction.",
        "Unit IV: Mix Design: Principles of concrete volumetric proportioning, IS Code method (IS 10262), ACI method, statistical quality control in testing.",
        "Unit V: Special Concretes: High-strength concrete, self-compacting concrete, fiber-reinforced concrete, ready-mix concrete, geopolymer concrete, and shotcreting."
      ],
      "weightageSummary": "Unit III: Hardened Concrete & Durability typically represents around 40% of overall exam weightage."
    },
    "weightage": [
      {
        "unit": "Unit I: Concrete Ingredients & Hydration: Detailed analysis of cement chemistry, hydration mechanism, physical attributes of coarse and fine aggregates, grading curves.",
        "expectedMarks": 12,
        "topics": [
          {
            "name": "Concrete implementation details",
            "frequency": 5
          },
          {
            "name": "Ingredients working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit II: Fresh Concrete Properties: Workability testing (Slump, Compacting Factor, Vee-Bee consistometer), segregation, bleeding, concrete manufacturing steps (batching, mixing, transporting, placing, compacting, curing).",
        "expectedMarks": 14,
        "topics": [
          {
            "name": "Concrete implementation details",
            "frequency": 5
          },
          {
            "name": "Properties working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit III: Hardened Concrete & Durability: Stress-strain behavior, modulus of elasticity, shrinkage, creep. Durability factor: Carbonation, sulfate attack, chloride ingress, alkali-aggregate reaction.",
        "expectedMarks": 16,
        "topics": [
          {
            "name": "Hardened implementation details",
            "frequency": 5
          },
          {
            "name": "Concrete working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit IV: Mix Design: Principles of concrete volumetric proportioning, IS Code method (IS 10262), ACI method, statistical quality control in testing.",
        "expectedMarks": 15,
        "topics": [
          {
            "name": "Design implementation details",
            "frequency": 5
          },
          {
            "name": "Principles working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit V: Special Concretes: High-strength concrete, self-compacting concrete, fiber-reinforced concrete, ready-mix concrete, geopolymer concrete, and shotcreting.",
        "expectedMarks": 13,
        "topics": [
          {
            "name": "Special implementation details",
            "frequency": 5
          },
          {
            "name": "Concretes working parameters",
            "frequency": 4
          }
        ]
      }
    ],
    "repeatedQuestions": [
      {
        "id": "rq-ct-ce-1",
        "question": "Discuss the fundamental concepts of Concrete Ingredients & Hydration: Detailed analysis of cement chemistry. How is it implemented/used in Concrete Technology?",
        "years": [
          2022,
          2024
        ],
        "frequency": 2,
        "importance": "Very High Probability"
      },
      {
        "id": "rq-ct-ce-2",
        "question": "Discuss the fundamental concepts of Fresh Concrete Properties: Workability testing (Slump. How is it implemented/used in Concrete Technology?",
        "years": [
          2023,
          2025
        ],
        "frequency": 3,
        "importance": "High Probability"
      },
      {
        "id": "rq-ct-ce-3",
        "question": "Discuss the fundamental concepts of Hardened Concrete & Durability: Stress-strain behavior. How is it implemented/used in Concrete Technology?",
        "years": [
          2024
        ],
        "frequency": 4,
        "importance": "Medium Probability"
      }
    ],
    "oneNightRevision": {
      "topQuestions": [
        "Write short notes on key methodologies and design parameters of Concrete Technology (Focus on Unit 3).",
        "Write short notes on key methodologies and design parameters of Concrete Technology (Focus on Unit 4).",
        "Write short notes on key methodologies and design parameters of Concrete Technology (Focus on Unit 5)."
      ],
      "definitions": [
        {
          "term": "Concrete Technology",
          "definition": "Cement chemistry, workability of fresh concrete, hardened concrete testing, IS Code concrete mix design, and high-strength geopolymer materials."
        },
        {
          "term": "Core Principle of CE-402",
          "definition": "The foundational architecture and operational logic that dictates the behavior of Concrete Technology in engineering applications."
        }
      ],
      "diagrams": [
        {
          "title": "Concrete Technology System Layout",
          "description": "Block diagram displaying the architectural configuration and interface linkages."
        }
      ],
      "formulas": [
        {
          "name": "CE-402 Efficiency Formula",
          "formula": "η = (Output Power / Input Power) * 100%",
          "explanation": "Calculates the performance ratio indicating total energy conversion efficiency."
        }
      ],
      "lastMinuteNotes": [
        "💡 Focus on the structural building blocks of Concrete Technology and their practical design constraints.",
        "💡 Review unit-wise previous exam papers and standard notations for numerical stability."
      ]
    },
    "videos": []
  },
  {
    "id": "sm-ce",
    "name": "Soil Mechanics",
    "code": "CE-403",
    "branchId": "ce",
    "semester": 4,
    "description": "Soil weight-volume relationships, constant and falling head permeability, compaction and Terzaghi consolidation index, shear strength, and lateral earth pressure.",
    "resourceCount": 28,
    "overview": {
      "syllabus": [
        "Unit I: Geotechnical Properties & Indexing: Soil formation, three-phase system, weight-volume relationships. Index properties: Grain size distribution, Atterberg limits, soil classification systems (IS code standard).",
        "Unit II: Permeability and Seepage: Darcy's Law, coefficient of permeability testing (constant and falling head). Seepage analysis: Two-dimensional flow, flow nets, quicksand condition, piping.",
        "Unit III: Compaction and Consolidation: Compaction mechanics, optimum moisture content, proctor tests, field compaction gear. Consolidation theory: Terzaghi's one-dimensional model, compression index, time factor.",
        "Unit IV: Shear Strength: Mohr-Coulomb failure criterion, shear parameters. Laboratory tests: Direct shear, Unconfined Compression (UCS), Triaxial (UU, CU, CD tests), Vane shear test.",
        "Unit V: Earth Pressure & Stability of Slopes: Lateral earth pressure (Rankine's and Coulomb's theories), active, passive, and at-rest conditions. Stability of infinite and finite slopes, Swedish circle method."
      ],
      "weightageSummary": "Unit III: Compaction and Consolidation:  typically represents around 40% of overall exam weightage."
    },
    "weightage": [
      {
        "unit": "Unit I: Geotechnical Properties & Indexing: Soil formation, three-phase system, weight-volume relationships. Index properties: Grain size distribution, Atterberg limits, soil classification systems (IS code standard).",
        "expectedMarks": 12,
        "topics": [
          {
            "name": "Geotechnical implementation details",
            "frequency": 5
          },
          {
            "name": "Properties working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit II: Permeability and Seepage: Darcy's Law, coefficient of permeability testing (constant and falling head). Seepage analysis: Two-dimensional flow, flow nets, quicksand condition, piping.",
        "expectedMarks": 14,
        "topics": [
          {
            "name": "Permeability implementation details",
            "frequency": 5
          },
          {
            "name": "Seepage working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit III: Compaction and Consolidation: Compaction mechanics, optimum moisture content, proctor tests, field compaction gear. Consolidation theory: Terzaghi's one-dimensional model, compression index, time factor.",
        "expectedMarks": 16,
        "topics": [
          {
            "name": "Compaction implementation details",
            "frequency": 5
          },
          {
            "name": "Consolidation working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit IV: Shear Strength: Mohr-Coulomb failure criterion, shear parameters. Laboratory tests: Direct shear, Unconfined Compression (UCS), Triaxial (UU, CU, CD tests), Vane shear test.",
        "expectedMarks": 15,
        "topics": [
          {
            "name": "Strength implementation details",
            "frequency": 5
          },
          {
            "name": "Mohr-Coulomb working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit V: Earth Pressure & Stability of Slopes: Lateral earth pressure (Rankine's and Coulomb's theories), active, passive, and at-rest conditions. Stability of infinite and finite slopes, Swedish circle method.",
        "expectedMarks": 13,
        "topics": [
          {
            "name": "Pressure implementation details",
            "frequency": 5
          },
          {
            "name": "Stability working parameters",
            "frequency": 4
          }
        ]
      }
    ],
    "repeatedQuestions": [
      {
        "id": "rq-sm-ce-1",
        "question": "Discuss the fundamental concepts of Geotechnical Properties & Indexing: Soil formation. How is it implemented/used in Soil Mechanics?",
        "years": [
          2022,
          2024
        ],
        "frequency": 2,
        "importance": "Very High Probability"
      },
      {
        "id": "rq-sm-ce-2",
        "question": "Discuss the fundamental concepts of Permeability and Seepage: Darcy's Law. How is it implemented/used in Soil Mechanics?",
        "years": [
          2023,
          2025
        ],
        "frequency": 3,
        "importance": "High Probability"
      },
      {
        "id": "rq-sm-ce-3",
        "question": "Discuss the fundamental concepts of Compaction and Consolidation: Compaction mechanics. How is it implemented/used in Soil Mechanics?",
        "years": [
          2024
        ],
        "frequency": 4,
        "importance": "Medium Probability"
      }
    ],
    "oneNightRevision": {
      "topQuestions": [
        "Write short notes on key methodologies and design parameters of Soil Mechanics (Focus on Unit 3).",
        "Write short notes on key methodologies and design parameters of Soil Mechanics (Focus on Unit 4).",
        "Write short notes on key methodologies and design parameters of Soil Mechanics (Focus on Unit 5)."
      ],
      "definitions": [
        {
          "term": "Soil Mechanics",
          "definition": "Soil weight-volume relationships, constant and falling head permeability, compaction and Terzaghi consolidation index, shear strength, and lateral earth pressure."
        },
        {
          "term": "Core Principle of CE-403",
          "definition": "The foundational architecture and operational logic that dictates the behavior of Soil Mechanics in engineering applications."
        }
      ],
      "diagrams": [
        {
          "title": "Soil Mechanics System Layout",
          "description": "Block diagram displaying the architectural configuration and interface linkages."
        }
      ],
      "formulas": [
        {
          "name": "CE-403 Efficiency Formula",
          "formula": "η = (Output Power / Input Power) * 100%",
          "explanation": "Calculates the performance ratio indicating total energy conversion efficiency."
        }
      ],
      "lastMinuteNotes": [
        "💡 Focus on the structural building blocks of Soil Mechanics and their practical design constraints.",
        "💡 Review unit-wise previous exam papers and standard notations for numerical stability."
      ]
    },
    "videos": []
  },
  {
    "id": "aos1-ce",
    "name": "Analysis of Structures-I",
    "code": "CE-404",
    "branchId": "ce",
    "semester": 4,
    "description": "Degree of static indeterminacy, deflection of trusses using unit load method, ILD moving loads, three-hinged arches horizontal thrust, and continuous beams.",
    "resourceCount": 28,
    "overview": {
      "syllabus": [
        "Unit I: Determinate Structures & Energy Principles: Degree of static and kinematic indeterminacy, stability. Strain energy theorems: Castigliano's theorems, Betti's law, Maxwell's reciprocal theorem.",
        "Unit II: Deflection of Determinate Frameworks: Deflection of pin-jointed trusses and rigid frames using Virtual Work and Unit Load methods.",
        "Unit III: Influence Lines Diagrams (ILD): ILD for reaction, shear force, and bending moment in simply supported beams. Moving loads: Maximum BM and SF under single, wheel, and UDL distributions.",
        "Unit IV: Arches and Cables: Three-hinged arches (parabolic and circular), determination of horizontal thrust, bending moment, normal thrust, and radial shear. Deflection profiles of cables under tension.",
        "Unit V: Indeterminate Beam Basics: Analysis of propped cantilevers and continuous beams using the Theorem of Three Moments (Clapeyron's Theorem)."
      ],
      "weightageSummary": "Unit III: Influence Lines Diagrams (ILD) typically represents around 40% of overall exam weightage."
    },
    "weightage": [
      {
        "unit": "Unit I: Determinate Structures & Energy Principles: Degree of static and kinematic indeterminacy, stability. Strain energy theorems: Castigliano's theorems, Betti's law, Maxwell's reciprocal theorem.",
        "expectedMarks": 12,
        "topics": [
          {
            "name": "Determinate implementation details",
            "frequency": 5
          },
          {
            "name": "Structures working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit II: Deflection of Determinate Frameworks: Deflection of pin-jointed trusses and rigid frames using Virtual Work and Unit Load methods.",
        "expectedMarks": 14,
        "topics": [
          {
            "name": "Deflection implementation details",
            "frequency": 5
          },
          {
            "name": "Determinate working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit III: Influence Lines Diagrams (ILD): ILD for reaction, shear force, and bending moment in simply supported beams. Moving loads: Maximum BM and SF under single, wheel, and UDL distributions.",
        "expectedMarks": 16,
        "topics": [
          {
            "name": "Influence implementation details",
            "frequency": 5
          },
          {
            "name": "Diagrams working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit IV: Arches and Cables: Three-hinged arches (parabolic and circular), determination of horizontal thrust, bending moment, normal thrust, and radial shear. Deflection profiles of cables under tension.",
        "expectedMarks": 15,
        "topics": [
          {
            "name": "Arches implementation details",
            "frequency": 5
          },
          {
            "name": "Cables working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit V: Indeterminate Beam Basics: Analysis of propped cantilevers and continuous beams using the Theorem of Three Moments (Clapeyron's Theorem).",
        "expectedMarks": 13,
        "topics": [
          {
            "name": "Indeterminate implementation details",
            "frequency": 5
          },
          {
            "name": "Basics working parameters",
            "frequency": 4
          }
        ]
      }
    ],
    "repeatedQuestions": [
      {
        "id": "rq-aos1-ce-1",
        "question": "Discuss the fundamental concepts of Determinate Structures & Energy Principles: Degree of static and kinematic indeterminacy. How is it implemented/used in Analysis of Structures-I?",
        "years": [
          2022,
          2024
        ],
        "frequency": 2,
        "importance": "Very High Probability"
      },
      {
        "id": "rq-aos1-ce-2",
        "question": "Discuss the fundamental concepts of Deflection of Determinate Fram. How is it implemented/used in Analysis of Structures-I?",
        "years": [
          2023,
          2025
        ],
        "frequency": 3,
        "importance": "High Probability"
      },
      {
        "id": "rq-aos1-ce-3",
        "question": "Discuss the fundamental concepts of Influence Lines Diagrams (ILD): ILD for reaction. How is it implemented/used in Analysis of Structures-I?",
        "years": [
          2024
        ],
        "frequency": 4,
        "importance": "Medium Probability"
      }
    ],
    "oneNightRevision": {
      "topQuestions": [
        "Write short notes on key methodologies and design parameters of Analysis of Structures-I (Focus on Unit 3).",
        "Write short notes on key methodologies and design parameters of Analysis of Structures-I (Focus on Unit 4).",
        "Write short notes on key methodologies and design parameters of Analysis of Structures-I (Focus on Unit 5)."
      ],
      "definitions": [
        {
          "term": "Analysis of Structures-I",
          "definition": "Degree of static indeterminacy, deflection of trusses using unit load method, ILD moving loads, three-hinged arches horizontal thrust, and continuous beams."
        },
        {
          "term": "Core Principle of CE-404",
          "definition": "The foundational architecture and operational logic that dictates the behavior of Analysis of Structures-I in engineering applications."
        }
      ],
      "diagrams": [
        {
          "title": "Analysis of Structures-I System Layout",
          "description": "Block diagram displaying the architectural configuration and interface linkages."
        }
      ],
      "formulas": [
        {
          "name": "CE-404 Efficiency Formula",
          "formula": "η = (Output Power / Input Power) * 100%",
          "explanation": "Calculates the performance ratio indicating total energy conversion efficiency."
        }
      ],
      "lastMinuteNotes": [
        "💡 Focus on the structural building blocks of Analysis of Structures-I and their practical design constraints.",
        "💡 Review unit-wise previous exam papers and standard notations for numerical stability."
      ]
    },
    "videos": []
  },
  {
    "id": "te1-ce",
    "name": "Transportation Engineering-I",
    "code": "CE-405",
    "branchId": "ce",
    "semester": 4,
    "description": "Highway planning parameters, sight distances super-elevation alignment design, traffic signals, road materials testing, and pavement calculations.",
    "resourceCount": 28,
    "overview": {
      "syllabus": [
        "Unit I: Highway Planning & Alignment: History of road development (Jayakar Committee, Nagpur/Bombay/Lucknow road plans). Highway alignment surveys, economic appraisal.",
        "Unit II: Geometric Design: Cross-sectional elements, camber, sight distances (SSD, OSD, ISDs). Horizontal alignment: Super-elevation, extra widening, transition curves. Vertical alignment: Summit and valley curves.",
        "Unit III: Traffic Engineering: Traffic characteristics, speed-volume-density relationships, PCU. Intersection design, rotary intersections, traffic signs, signals (Webster's method), and road markings.",
        "Unit IV: Highway Materials & Testing: Subgrade soil evaluation (CBR, Plate bearing test). Aggregate testing (abrasion, impact, crushing value). Bitumen testing (penetration, ductility, softening point, viscosity).",
        "Unit V: Pavement Design: Structural differences between flexible and rigid pavements. Design of flexible pavements (IRC-37 guidelines). Design of rigid pavements (Westergaard's stress equations, IRC-58 guidelines)."
      ],
      "weightageSummary": "Unit III: Traffic Engineering: Traffic c typically represents around 40% of overall exam weightage."
    },
    "weightage": [
      {
        "unit": "Unit I: Highway Planning & Alignment: History of road development (Jayakar Committee, Nagpur/Bombay/Lucknow road plans). Highway alignment surveys, economic appraisal.",
        "expectedMarks": 12,
        "topics": [
          {
            "name": "Highway implementation details",
            "frequency": 5
          },
          {
            "name": "Planning working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit II: Geometric Design: Cross-sectional elements, camber, sight distances (SSD, OSD, ISDs). Horizontal alignment: Super-elevation, extra widening, transition curves. Vertical alignment: Summit and valley curves.",
        "expectedMarks": 14,
        "topics": [
          {
            "name": "Geometric implementation details",
            "frequency": 5
          },
          {
            "name": "Design working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit III: Traffic Engineering: Traffic characteristics, speed-volume-density relationships, PCU. Intersection design, rotary intersections, traffic signs, signals (Webster's method), and road markings.",
        "expectedMarks": 16,
        "topics": [
          {
            "name": "Traffic implementation details",
            "frequency": 5
          },
          {
            "name": "Engineering working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit IV: Highway Materials & Testing: Subgrade soil evaluation (CBR, Plate bearing test). Aggregate testing (abrasion, impact, crushing value). Bitumen testing (penetration, ductility, softening point, viscosity).",
        "expectedMarks": 15,
        "topics": [
          {
            "name": "Highway implementation details",
            "frequency": 5
          },
          {
            "name": "Materials working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit V: Pavement Design: Structural differences between flexible and rigid pavements. Design of flexible pavements (IRC-37 guidelines). Design of rigid pavements (Westergaard's stress equations, IRC-58 guidelines).",
        "expectedMarks": 13,
        "topics": [
          {
            "name": "Pavement implementation details",
            "frequency": 5
          },
          {
            "name": "Design working parameters",
            "frequency": 4
          }
        ]
      }
    ],
    "repeatedQuestions": [
      {
        "id": "rq-te1-ce-1",
        "question": "Discuss the fundamental concepts of Highway Planning & Alignment: History of road development (Jayakar Committee. How is it implemented/used in Transportation Engineering-I?",
        "years": [
          2022,
          2024
        ],
        "frequency": 2,
        "importance": "Very High Probability"
      },
      {
        "id": "rq-te1-ce-2",
        "question": "Discuss the fundamental concepts of Geometric Design: Cross-sectional elements. How is it implemented/used in Transportation Engineering-I?",
        "years": [
          2023,
          2025
        ],
        "frequency": 3,
        "importance": "High Probability"
      },
      {
        "id": "rq-te1-ce-3",
        "question": "Discuss the fundamental concepts of Traffic Engineering: Traffic characteristics. How is it implemented/used in Transportation Engineering-I?",
        "years": [
          2024
        ],
        "frequency": 4,
        "importance": "Medium Probability"
      }
    ],
    "oneNightRevision": {
      "topQuestions": [
        "Write short notes on key methodologies and design parameters of Transportation Engineering-I (Focus on Unit 3).",
        "Write short notes on key methodologies and design parameters of Transportation Engineering-I (Focus on Unit 4).",
        "Write short notes on key methodologies and design parameters of Transportation Engineering-I (Focus on Unit 5)."
      ],
      "definitions": [
        {
          "term": "Transportation Engineering-I",
          "definition": "Highway planning parameters, sight distances super-elevation alignment design, traffic signals, road materials testing, and pavement calculations."
        },
        {
          "term": "Core Principle of CE-405",
          "definition": "The foundational architecture and operational logic that dictates the behavior of Transportation Engineering-I in engineering applications."
        }
      ],
      "diagrams": [
        {
          "title": "Transportation Engineering-I System Layout",
          "description": "Block diagram displaying the architectural configuration and interface linkages."
        }
      ],
      "formulas": [
        {
          "name": "CE-405 Efficiency Formula",
          "formula": "η = (Output Power / Input Power) * 100%",
          "explanation": "Calculates the performance ratio indicating total energy conversion efficiency."
        }
      ],
      "lastMinuteNotes": [
        "💡 Focus on the structural building blocks of Transportation Engineering-I and their practical design constraints.",
        "💡 Review unit-wise previous exam papers and standard notations for numerical stability."
      ]
    },
    "videos": []
  },
  {
    "id": "fm1-ce",
    "name": "Fluid Mechanics-I",
    "code": "CE-501",
    "branchId": "ce",
    "semester": 5,
    "description": "Hydrostatic pressure and metacentric height, continuity equation, Bernoulli dynamics, weirs and notches coefficients, Darcy-Weisbach pipe flow losses.",
    "resourceCount": 30,
    "overview": {
      "syllabus": [
        "Unit I: Fluid Properties & Hydrostatics: Density, viscosity, surface tension, capillarity. Fluid pressure measurement: Manometers, piezometers. Hydrostatic pressure on plane and curved surfaces, buoyancy, metacentric height.",
        "Unit II: Fluid Kinematics: Types of fluid flow, streamlines, pathlines, streaklines. Continuity equation in 3D, velocity potential, stream function, vortex flow.",
        "Unit III: Fluid Dynamics: Euler's equation, Bernoulli's theorem derivation and structural applications (Venturimeter, Orificemeter, Pitot tube). Impulse-momentum equation.",
        "Unit IV: Flow Through Orifices, Mouthpieces & Weirs: Classification, hydraulic coefficients. Weirs and notches: Rectangular, triangular, trapezoidal, end contractions, Cipolletti weir.",
        "Unit V: Flow Through Pipes: Major and minor energy losses, Darcy-Weisbach equation, Moody's diagram. Hydraulic gradient line (HGL) and Total Energy Line (TEL). Pipes in series and parallel, water hammer."
      ],
      "weightageSummary": "Unit III: Fluid Dynamics: Euler's equati typically represents around 40% of overall exam weightage."
    },
    "weightage": [
      {
        "unit": "Unit I: Fluid Properties & Hydrostatics: Density, viscosity, surface tension, capillarity. Fluid pressure measurement: Manometers, piezometers. Hydrostatic pressure on plane and curved surfaces, buoyancy, metacentric height.",
        "expectedMarks": 12,
        "topics": [
          {
            "name": "Properties implementation details",
            "frequency": 5
          },
          {
            "name": "Hydrostatics working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit II: Fluid Kinematics: Types of fluid flow, streamlines, pathlines, streaklines. Continuity equation in 3D, velocity potential, stream function, vortex flow.",
        "expectedMarks": 14,
        "topics": [
          {
            "name": "Kinematics implementation details",
            "frequency": 5
          },
          {
            "name": "streamlines working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit III: Fluid Dynamics: Euler's equation, Bernoulli's theorem derivation and structural applications (Venturimeter, Orificemeter, Pitot tube). Impulse-momentum equation.",
        "expectedMarks": 16,
        "topics": [
          {
            "name": "Dynamics implementation details",
            "frequency": 5
          },
          {
            "name": "equation working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit IV: Flow Through Orifices, Mouthpieces & Weirs: Classification, hydraulic coefficients. Weirs and notches: Rectangular, triangular, trapezoidal, end contractions, Cipolletti weir.",
        "expectedMarks": 15,
        "topics": [
          {
            "name": "Through implementation details",
            "frequency": 5
          },
          {
            "name": "Orifices working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit V: Flow Through Pipes: Major and minor energy losses, Darcy-Weisbach equation, Moody's diagram. Hydraulic gradient line (HGL) and Total Energy Line (TEL). Pipes in series and parallel, water hammer.",
        "expectedMarks": 13,
        "topics": [
          {
            "name": "Through implementation details",
            "frequency": 5
          },
          {
            "name": "energy working parameters",
            "frequency": 4
          }
        ]
      }
    ],
    "repeatedQuestions": [
      {
        "id": "rq-fm1-ce-1",
        "question": "Discuss the fundamental concepts of Fluid Properties & Hydrostatics: Density. How is it implemented/used in Fluid Mechanics-I?",
        "years": [
          2022,
          2024
        ],
        "frequency": 2,
        "importance": "Very High Probability"
      },
      {
        "id": "rq-fm1-ce-2",
        "question": "Discuss the fundamental concepts of Fluid Kinematics: Types of fluid flow. How is it implemented/used in Fluid Mechanics-I?",
        "years": [
          2023,
          2025
        ],
        "frequency": 3,
        "importance": "High Probability"
      },
      {
        "id": "rq-fm1-ce-3",
        "question": "Discuss the fundamental concepts of Fluid Dynamics: Euler's equation. How is it implemented/used in Fluid Mechanics-I?",
        "years": [
          2024
        ],
        "frequency": 4,
        "importance": "Medium Probability"
      }
    ],
    "oneNightRevision": {
      "topQuestions": [
        "Write short notes on key methodologies and design parameters of Fluid Mechanics-I (Focus on Unit 3).",
        "Write short notes on key methodologies and design parameters of Fluid Mechanics-I (Focus on Unit 4).",
        "Write short notes on key methodologies and design parameters of Fluid Mechanics-I (Focus on Unit 5)."
      ],
      "definitions": [
        {
          "term": "Fluid Mechanics-I",
          "definition": "Hydrostatic pressure and metacentric height, continuity equation, Bernoulli dynamics, weirs and notches coefficients, Darcy-Weisbach pipe flow losses."
        },
        {
          "term": "Core Principle of CE-501",
          "definition": "The foundational architecture and operational logic that dictates the behavior of Fluid Mechanics-I in engineering applications."
        }
      ],
      "diagrams": [
        {
          "title": "Fluid Mechanics-I System Layout",
          "description": "Block diagram displaying the architectural configuration and interface linkages."
        }
      ],
      "formulas": [
        {
          "name": "CE-501 Efficiency Formula",
          "formula": "η = (Output Power / Input Power) * 100%",
          "explanation": "Calculates the performance ratio indicating total energy conversion efficiency."
        }
      ],
      "lastMinuteNotes": [
        "💡 Focus on the structural building blocks of Fluid Mechanics-I and their practical design constraints.",
        "💡 Review unit-wise previous exam papers and standard notations for numerical stability."
      ]
    },
    "videos": []
  },
  {
    "id": "aos2-ce",
    "name": "Analysis of Structures-II",
    "code": "CE-502",
    "branchId": "ce",
    "semester": 5,
    "description": "Slope Deflection displacements, Moment Distribution multi-story frames, Kani's rotation contributions, two-hinged arches, and flexibility matrix methods.",
    "resourceCount": 30,
    "overview": {
      "syllabus": [
        "Unit I: Displacement Methods (Fixed/Continuous Structures): Slope Deflection Method applied to continuous beams and rigid frames (with and without side sway).",
        "Unit II: Moment Distribution Method (MDM): Stiffness and carry-over factors, distribution of moments for continuous structures, multi-story frame analysis steps.",
        "Unit III: Kani's Method: Rotation contribution concepts, analysis of continuous beams and symmetrical/unsymmetrical frames under lateral loading.",
        "Unit IV: Two-Hinged Arches: Analysis of structural reactions, horizontal thrust, bending moments, rib shortening, temperature effects in parabolic and circular layouts.",
        "Unit V: Matrix Methods of Structural Analysis: Basic concepts of flexibility and stiffness matrices, element vs global coordinate systems, formulation for continuous beams."
      ],
      "weightageSummary": "Unit III: Kani's Method: Rotation contri typically represents around 40% of overall exam weightage."
    },
    "weightage": [
      {
        "unit": "Unit I: Displacement Methods (Fixed/Continuous Structures): Slope Deflection Method applied to continuous beams and rigid frames (with and without side sway).",
        "expectedMarks": 12,
        "topics": [
          {
            "name": "Displacement implementation details",
            "frequency": 5
          },
          {
            "name": "Methods working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit II: Moment Distribution Method (MDM): Stiffness and carry-over factors, distribution of moments for continuous structures, multi-story frame analysis steps.",
        "expectedMarks": 14,
        "topics": [
          {
            "name": "Moment implementation details",
            "frequency": 5
          },
          {
            "name": "Distribution working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit III: Kani's Method: Rotation contribution concepts, analysis of continuous beams and symmetrical/unsymmetrical frames under lateral loading.",
        "expectedMarks": 16,
        "topics": [
          {
            "name": "Method implementation details",
            "frequency": 5
          },
          {
            "name": "Rotation working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit IV: Two-Hinged Arches: Analysis of structural reactions, horizontal thrust, bending moments, rib shortening, temperature effects in parabolic and circular layouts.",
        "expectedMarks": 15,
        "topics": [
          {
            "name": "Two-Hinged implementation details",
            "frequency": 5
          },
          {
            "name": "Arches working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit V: Matrix Methods of Structural Analysis: Basic concepts of flexibility and stiffness matrices, element vs global coordinate systems, formulation for continuous beams.",
        "expectedMarks": 13,
        "topics": [
          {
            "name": "Matrix implementation details",
            "frequency": 5
          },
          {
            "name": "Methods working parameters",
            "frequency": 4
          }
        ]
      }
    ],
    "repeatedQuestions": [
      {
        "id": "rq-aos2-ce-1",
        "question": "Discuss the fundamental concepts of Displacement Methods (Fixed/Co. How is it implemented/used in Analysis of Structures-II?",
        "years": [
          2022,
          2024
        ],
        "frequency": 2,
        "importance": "Very High Probability"
      },
      {
        "id": "rq-aos2-ce-2",
        "question": "Discuss the fundamental concepts of Moment Distribution Method (MDM): Stiffness and carry-over factors. How is it implemented/used in Analysis of Structures-II?",
        "years": [
          2023,
          2025
        ],
        "frequency": 3,
        "importance": "High Probability"
      },
      {
        "id": "rq-aos2-ce-3",
        "question": "Discuss the fundamental concepts of Kani's Method: Rotation contribution concepts. How is it implemented/used in Analysis of Structures-II?",
        "years": [
          2024
        ],
        "frequency": 4,
        "importance": "Medium Probability"
      }
    ],
    "oneNightRevision": {
      "topQuestions": [
        "Write short notes on key methodologies and design parameters of Analysis of Structures-II (Focus on Unit 3).",
        "Write short notes on key methodologies and design parameters of Analysis of Structures-II (Focus on Unit 4).",
        "Write short notes on key methodologies and design parameters of Analysis of Structures-II (Focus on Unit 5)."
      ],
      "definitions": [
        {
          "term": "Analysis of Structures-II",
          "definition": "Slope Deflection displacements, Moment Distribution multi-story frames, Kani's rotation contributions, two-hinged arches, and flexibility matrix methods."
        },
        {
          "term": "Core Principle of CE-502",
          "definition": "The foundational architecture and operational logic that dictates the behavior of Analysis of Structures-II in engineering applications."
        }
      ],
      "diagrams": [
        {
          "title": "Analysis of Structures-II System Layout",
          "description": "Block diagram displaying the architectural configuration and interface linkages."
        }
      ],
      "formulas": [
        {
          "name": "CE-502 Efficiency Formula",
          "formula": "η = (Output Power / Input Power) * 100%",
          "explanation": "Calculates the performance ratio indicating total energy conversion efficiency."
        }
      ],
      "lastMinuteNotes": [
        "💡 Focus on the structural building blocks of Analysis of Structures-II and their practical design constraints.",
        "💡 Review unit-wise previous exam papers and standard notations for numerical stability."
      ]
    },
    "videos": []
  },
  {
    "id": "rcd1-ce",
    "name": "Design of RC Structures-I",
    "code": "CE-503",
    "branchId": "ce",
    "semester": 5,
    "description": "Working Stress Method rectangular beams, LSM flexural design safety, shear reinforcement codes, one-way and two-way slabs, short columns, and isolated footings.",
    "resourceCount": 30,
    "overview": {
      "syllabus": [
        "Unit I: Design Philosophies & Working Stress Method (WSM): Assumptions, permissible stresses, design of singly and doubly reinforced rectangular beams using WSM framework.",
        "Unit II: Limit State Method (LSM) Foundations: Safety factors, stress-strain behavior of concrete and steel, analysis and design of singly and doubly reinforced rectangular beams under flexure.",
        "Unit III: Flanged Beams & Shear Analysis: Analysis of T and L beams. Shear resistance mechanism, design of shear reinforcement, bond, anchorage, and development length criteria.",
        "Unit IV: Design of Slabs: Structural behavior of one-way and two-way slabs (simply supported, continuous, restrained corner configurations using IS 456 codes).",
        "Unit V: Compression Members: Classification of columns, short columns under axial load, uniaxial bending interactions, design of isolated square and rectangular column footings."
      ],
      "weightageSummary": "Unit III: Flanged Beams & Shear Analysis typically represents around 40% of overall exam weightage."
    },
    "weightage": [
      {
        "unit": "Unit I: Design Philosophies & Working Stress Method (WSM): Assumptions, permissible stresses, design of singly and doubly reinforced rectangular beams using WSM framework.",
        "expectedMarks": 12,
        "topics": [
          {
            "name": "Design implementation details",
            "frequency": 5
          },
          {
            "name": "Philosophies working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit II: Limit State Method (LSM) Foundations: Safety factors, stress-strain behavior of concrete and steel, analysis and design of singly and doubly reinforced rectangular beams under flexure.",
        "expectedMarks": 14,
        "topics": [
          {
            "name": "Method implementation details",
            "frequency": 5
          },
          {
            "name": "Foundations working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit III: Flanged Beams & Shear Analysis: Analysis of T and L beams. Shear resistance mechanism, design of shear reinforcement, bond, anchorage, and development length criteria.",
        "expectedMarks": 16,
        "topics": [
          {
            "name": "Flanged implementation details",
            "frequency": 5
          },
          {
            "name": "Analysis working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit IV: Design of Slabs: Structural behavior of one-way and two-way slabs (simply supported, continuous, restrained corner configurations using IS 456 codes).",
        "expectedMarks": 15,
        "topics": [
          {
            "name": "Design implementation details",
            "frequency": 5
          },
          {
            "name": "Structural working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit V: Compression Members: Classification of columns, short columns under axial load, uniaxial bending interactions, design of isolated square and rectangular column footings.",
        "expectedMarks": 13,
        "topics": [
          {
            "name": "Compression implementation details",
            "frequency": 5
          },
          {
            "name": "Members working parameters",
            "frequency": 4
          }
        ]
      }
    ],
    "repeatedQuestions": [
      {
        "id": "rq-rcd1-ce-1",
        "question": "Discuss the fundamental concepts of Design Philosophies & Working Stress Method (WSM): Assumptions. How is it implemented/used in Design of RC Structures-I?",
        "years": [
          2022,
          2024
        ],
        "frequency": 2,
        "importance": "Very High Probability"
      },
      {
        "id": "rq-rcd1-ce-2",
        "question": "Discuss the fundamental concepts of Limit State Method (LSM) Foundations: Safety factors. How is it implemented/used in Design of RC Structures-I?",
        "years": [
          2023,
          2025
        ],
        "frequency": 3,
        "importance": "High Probability"
      },
      {
        "id": "rq-rcd1-ce-3",
        "question": "Discuss the fundamental concepts of Flanged Beams & Shear Analysis: Analysis of T and L beams. Shear resistance mechanism. How is it implemented/used in Design of RC Structures-I?",
        "years": [
          2024
        ],
        "frequency": 4,
        "importance": "Medium Probability"
      }
    ],
    "oneNightRevision": {
      "topQuestions": [
        "Write short notes on key methodologies and design parameters of Design of RC Structures-I (Focus on Unit 3).",
        "Write short notes on key methodologies and design parameters of Design of RC Structures-I (Focus on Unit 4).",
        "Write short notes on key methodologies and design parameters of Design of RC Structures-I (Focus on Unit 5)."
      ],
      "definitions": [
        {
          "term": "Design of RC Structures-I",
          "definition": "Working Stress Method rectangular beams, LSM flexural design safety, shear reinforcement codes, one-way and two-way slabs, short columns, and isolated footings."
        },
        {
          "term": "Core Principle of CE-503",
          "definition": "The foundational architecture and operational logic that dictates the behavior of Design of RC Structures-I in engineering applications."
        }
      ],
      "diagrams": [
        {
          "title": "Design of RC Structures-I System Layout",
          "description": "Block diagram displaying the architectural configuration and interface linkages."
        }
      ],
      "formulas": [
        {
          "name": "CE-503 Efficiency Formula",
          "formula": "η = (Output Power / Input Power) * 100%",
          "explanation": "Calculates the performance ratio indicating total energy conversion efficiency."
        }
      ],
      "lastMinuteNotes": [
        "💡 Focus on the structural building blocks of Design of RC Structures-I and their practical design constraints.",
        "💡 Review unit-wise previous exam papers and standard notations for numerical stability."
      ]
    },
    "videos": []
  },
  {
    "id": "sd1-ce",
    "name": "Design of Steel Structures-I",
    "code": "CE-601",
    "branchId": "ce",
    "semester": 6,
    "description": "HSFG bolted connections and welds, net effective area tension splices, lacing and batten columns, column base bases, and laterally supported beams.",
    "resourceCount": 32,
    "overview": {
      "syllabus": [
        "Unit I: Connections (Riveted, Bolted, Welded): Properties of structural steel, design of high-strength friction grip (HSFG) bolts, fillet and butt welds, eccentric connections.",
        "Unit II: Tension Members: Types of sections, net effective sectional area, lug angles, design of tension members, splices based on IS 800 standards.",
        "Unit III: Compression Members: Buckling states, effective length, design of axially loaded compression elements, built-up columns, design of lacings and battens.",
        "Unit IV: Column Bases & Foundation Links: Design of slab base, gusseted base, base connections subjected to axial load and bending moments.",
        "Unit V: Flexural Elements (Beams): Design of laterally supported and laterally unsupported steel beams, web buckling, web crippling, built-up beams."
      ],
      "weightageSummary": "Unit III: Compression Members: Buckling  typically represents around 40% of overall exam weightage."
    },
    "weightage": [
      {
        "unit": "Unit I: Connections (Riveted, Bolted, Welded): Properties of structural steel, design of high-strength friction grip (HSFG) bolts, fillet and butt welds, eccentric connections.",
        "expectedMarks": 12,
        "topics": [
          {
            "name": "Connections implementation details",
            "frequency": 5
          },
          {
            "name": "Riveted working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit II: Tension Members: Types of sections, net effective sectional area, lug angles, design of tension members, splices based on IS 800 standards.",
        "expectedMarks": 14,
        "topics": [
          {
            "name": "Tension implementation details",
            "frequency": 5
          },
          {
            "name": "Members working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit III: Compression Members: Buckling states, effective length, design of axially loaded compression elements, built-up columns, design of lacings and battens.",
        "expectedMarks": 16,
        "topics": [
          {
            "name": "Compression implementation details",
            "frequency": 5
          },
          {
            "name": "Members working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit IV: Column Bases & Foundation Links: Design of slab base, gusseted base, base connections subjected to axial load and bending moments.",
        "expectedMarks": 15,
        "topics": [
          {
            "name": "Column implementation details",
            "frequency": 5
          },
          {
            "name": "Foundation working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit V: Flexural Elements (Beams): Design of laterally supported and laterally unsupported steel beams, web buckling, web crippling, built-up beams.",
        "expectedMarks": 13,
        "topics": [
          {
            "name": "Flexural implementation details",
            "frequency": 5
          },
          {
            "name": "Elements working parameters",
            "frequency": 4
          }
        ]
      }
    ],
    "repeatedQuestions": [
      {
        "id": "rq-sd1-ce-1",
        "question": "Discuss the fundamental concepts of Connections (Riveted. How is it implemented/used in Design of Steel Structures-I?",
        "years": [
          2022,
          2024
        ],
        "frequency": 2,
        "importance": "Very High Probability"
      },
      {
        "id": "rq-sd1-ce-2",
        "question": "Discuss the fundamental concepts of Tension Members: Types of sections. How is it implemented/used in Design of Steel Structures-I?",
        "years": [
          2023,
          2025
        ],
        "frequency": 3,
        "importance": "High Probability"
      },
      {
        "id": "rq-sd1-ce-3",
        "question": "Discuss the fundamental concepts of Compression Members: Buckling states. How is it implemented/used in Design of Steel Structures-I?",
        "years": [
          2024
        ],
        "frequency": 4,
        "importance": "Medium Probability"
      }
    ],
    "oneNightRevision": {
      "topQuestions": [
        "Write short notes on key methodologies and design parameters of Design of Steel Structures-I (Focus on Unit 3).",
        "Write short notes on key methodologies and design parameters of Design of Steel Structures-I (Focus on Unit 4).",
        "Write short notes on key methodologies and design parameters of Design of Steel Structures-I (Focus on Unit 5)."
      ],
      "definitions": [
        {
          "term": "Design of Steel Structures-I",
          "definition": "HSFG bolted connections and welds, net effective area tension splices, lacing and batten columns, column base bases, and laterally supported beams."
        },
        {
          "term": "Core Principle of CE-601",
          "definition": "The foundational architecture and operational logic that dictates the behavior of Design of Steel Structures-I in engineering applications."
        }
      ],
      "diagrams": [
        {
          "title": "Design of Steel Structures-I System Layout",
          "description": "Block diagram displaying the architectural configuration and interface linkages."
        }
      ],
      "formulas": [
        {
          "name": "CE-601 Efficiency Formula",
          "formula": "η = (Output Power / Input Power) * 100%",
          "explanation": "Calculates the performance ratio indicating total energy conversion efficiency."
        }
      ],
      "lastMinuteNotes": [
        "💡 Focus on the structural building blocks of Design of Steel Structures-I and their practical design constraints.",
        "💡 Review unit-wise previous exam papers and standard notations for numerical stability."
      ]
    },
    "videos": []
  },
  {
    "id": "ee1-ce",
    "name": "Environmental Engineering-I",
    "code": "CE-602",
    "branchId": "ce",
    "semester": 6,
    "description": "Population forecasting intake design, quality primary sedimentation, slow/rapid sand filtration, network Hardy Cross softening, and air control ESP cyclones.",
    "resourceCount": 32,
    "overview": {
      "syllabus": [
        "Unit I: Water Demand & Population Forecasting: Types of water demands, per capita consumption, fluctuations. Population forecasting mathematical techniques, water intake structures.",
        "Unit II: Water Quality & Preprocessing: Physical, chemical, and biological water quality parameters, water-borne diseases. Primary treatment: Screening, plain sedimentation, coagulation-sedimentation.",
        "Unit III: Filtration & Disinfection: Theory of filtration, slow sand filters, rapid sand filters, pressure filters. Disinfection methods: Chlorination mechanisms, break-point chlorination, ozonation.",
        "Unit IV: Advanced Treatment & Distribution: Water softening, iron/manganese removal, aeration. Distribution networks: Layouts, hydraulic analysis (Hardy Cross method), valves, hydrants.",
        "Unit V: Air & Noise Pollution Control: Composition of air, pollutants, meteorology impacts, plume behavior. Air pollution control devices (cyclone separators, electrostatic precipitators). Noise measurement indices."
      ],
      "weightageSummary": "Unit III: Filtration & Disinfection: The typically represents around 40% of overall exam weightage."
    },
    "weightage": [
      {
        "unit": "Unit I: Water Demand & Population Forecasting: Types of water demands, per capita consumption, fluctuations. Population forecasting mathematical techniques, water intake structures.",
        "expectedMarks": 12,
        "topics": [
          {
            "name": "Demand implementation details",
            "frequency": 5
          },
          {
            "name": "Population working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit II: Water Quality & Preprocessing: Physical, chemical, and biological water quality parameters, water-borne diseases. Primary treatment: Screening, plain sedimentation, coagulation-sedimentation.",
        "expectedMarks": 14,
        "topics": [
          {
            "name": "Quality implementation details",
            "frequency": 5
          },
          {
            "name": "Preprocessing working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit III: Filtration & Disinfection: Theory of filtration, slow sand filters, rapid sand filters, pressure filters. Disinfection methods: Chlorination mechanisms, break-point chlorination, ozonation.",
        "expectedMarks": 16,
        "topics": [
          {
            "name": "Filtration implementation details",
            "frequency": 5
          },
          {
            "name": "Disinfection working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit IV: Advanced Treatment & Distribution: Water softening, iron/manganese removal, aeration. Distribution networks: Layouts, hydraulic analysis (Hardy Cross method), valves, hydrants.",
        "expectedMarks": 15,
        "topics": [
          {
            "name": "Advanced implementation details",
            "frequency": 5
          },
          {
            "name": "Treatment working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit V: Air & Noise Pollution Control: Composition of air, pollutants, meteorology impacts, plume behavior. Air pollution control devices (cyclone separators, electrostatic precipitators). Noise measurement indices.",
        "expectedMarks": 13,
        "topics": [
          {
            "name": "Pollution implementation details",
            "frequency": 5
          },
          {
            "name": "Control working parameters",
            "frequency": 4
          }
        ]
      }
    ],
    "repeatedQuestions": [
      {
        "id": "rq-ee1-ce-1",
        "question": "Discuss the fundamental concepts of Water Demand & Population Forecasting: Types of water demands. How is it implemented/used in Environmental Engineering-I?",
        "years": [
          2022,
          2024
        ],
        "frequency": 2,
        "importance": "Very High Probability"
      },
      {
        "id": "rq-ee1-ce-2",
        "question": "Discuss the fundamental concepts of Water Quality & Preprocessing: Physical. How is it implemented/used in Environmental Engineering-I?",
        "years": [
          2023,
          2025
        ],
        "frequency": 3,
        "importance": "High Probability"
      },
      {
        "id": "rq-ee1-ce-3",
        "question": "Discuss the fundamental concepts of Filtration & Disinfection: Theory of filtration. How is it implemented/used in Environmental Engineering-I?",
        "years": [
          2024
        ],
        "frequency": 4,
        "importance": "Medium Probability"
      }
    ],
    "oneNightRevision": {
      "topQuestions": [
        "Write short notes on key methodologies and design parameters of Environmental Engineering-I (Focus on Unit 3).",
        "Write short notes on key methodologies and design parameters of Environmental Engineering-I (Focus on Unit 4).",
        "Write short notes on key methodologies and design parameters of Environmental Engineering-I (Focus on Unit 5)."
      ],
      "definitions": [
        {
          "term": "Environmental Engineering-I",
          "definition": "Population forecasting intake design, quality primary sedimentation, slow/rapid sand filtration, network Hardy Cross softening, and air control ESP cyclones."
        },
        {
          "term": "Core Principle of CE-602",
          "definition": "The foundational architecture and operational logic that dictates the behavior of Environmental Engineering-I in engineering applications."
        }
      ],
      "diagrams": [
        {
          "title": "Environmental Engineering-I System Layout",
          "description": "Block diagram displaying the architectural configuration and interface linkages."
        }
      ],
      "formulas": [
        {
          "name": "CE-602 Efficiency Formula",
          "formula": "η = (Output Power / Input Power) * 100%",
          "explanation": "Calculates the performance ratio indicating total energy conversion efficiency."
        }
      ],
      "lastMinuteNotes": [
        "💡 Focus on the structural building blocks of Environmental Engineering-I and their practical design constraints.",
        "💡 Review unit-wise previous exam papers and standard notations for numerical stability."
      ]
    },
    "videos": []
  },
  {
    "id": "wre-ce",
    "name": "Water Resources Engineering",
    "code": "CE-603",
    "branchId": "ce",
    "semester": 6,
    "description": "Hydrological cycle catchment precipitation, Unit Hydrograph runoff estimation, crop delta canal design Lacey Kennedy theories, and cross drainage works.",
    "resourceCount": 32,
    "overview": {
      "syllabus": [
        "Unit I: Hydrology & Precipitation: Hydrologic cycle, catchments. Rain gauges, network design, abstraction losses (evaporation, infiltration indices, interception).",
        "Unit II: Runoff & Hydrograph Analysis: Factors affecting runoff, hydrograph components, base flow separation, Unit Hydrograph theory, S-hydrograph.",
        "Unit III: Irrigation Foundations & Crop Water Needs: Types of irrigation, soil-moisture-plant relationships, duty, delta, base period. Consumptive use, irrigation efficiency.",
        "Unit IV: Canal Engineering: Classification, alignment, design of stable channels in alluvial soils (Lacey's and Kennedy's silt theories), canal lining.",
        "Unit V: Cross Drainage Works & Reservoirs: Selection of cross-drainage types (aqueducts, super-passages, syphon aqueducts). Reservoir planning: Storage capacity, mass curve, siltation management."
      ],
      "weightageSummary": "Unit III: Irrigation Foundations & Crop  typically represents around 40% of overall exam weightage."
    },
    "weightage": [
      {
        "unit": "Unit I: Hydrology & Precipitation: Hydrologic cycle, catchments. Rain gauges, network design, abstraction losses (evaporation, infiltration indices, interception).",
        "expectedMarks": 12,
        "topics": [
          {
            "name": "Hydrology implementation details",
            "frequency": 5
          },
          {
            "name": "Precipitation working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit II: Runoff & Hydrograph Analysis: Factors affecting runoff, hydrograph components, base flow separation, Unit Hydrograph theory, S-hydrograph.",
        "expectedMarks": 14,
        "topics": [
          {
            "name": "Runoff implementation details",
            "frequency": 5
          },
          {
            "name": "Hydrograph working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit III: Irrigation Foundations & Crop Water Needs: Types of irrigation, soil-moisture-plant relationships, duty, delta, base period. Consumptive use, irrigation efficiency.",
        "expectedMarks": 16,
        "topics": [
          {
            "name": "Irrigation implementation details",
            "frequency": 5
          },
          {
            "name": "Foundations working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit IV: Canal Engineering: Classification, alignment, design of stable channels in alluvial soils (Lacey's and Kennedy's silt theories), canal lining.",
        "expectedMarks": 15,
        "topics": [
          {
            "name": "Engineering implementation details",
            "frequency": 5
          },
          {
            "name": "Classification working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit V: Cross Drainage Works & Reservoirs: Selection of cross-drainage types (aqueducts, super-passages, syphon aqueducts). Reservoir planning: Storage capacity, mass curve, siltation management.",
        "expectedMarks": 13,
        "topics": [
          {
            "name": "Drainage implementation details",
            "frequency": 5
          },
          {
            "name": "Reservoirs working parameters",
            "frequency": 4
          }
        ]
      }
    ],
    "repeatedQuestions": [
      {
        "id": "rq-wre-ce-1",
        "question": "Discuss the fundamental concepts of Hydrology & Precipitation: Hydrologic cycle. How is it implemented/used in Water Resources Engineering?",
        "years": [
          2022,
          2024
        ],
        "frequency": 2,
        "importance": "Very High Probability"
      },
      {
        "id": "rq-wre-ce-2",
        "question": "Discuss the fundamental concepts of Runoff & Hydrograph Analysis: Factors affecting runoff. How is it implemented/used in Water Resources Engineering?",
        "years": [
          2023,
          2025
        ],
        "frequency": 3,
        "importance": "High Probability"
      },
      {
        "id": "rq-wre-ce-3",
        "question": "Discuss the fundamental concepts of Irrigation Foundations & Crop Water Needs: Types of irrigation. How is it implemented/used in Water Resources Engineering?",
        "years": [
          2024
        ],
        "frequency": 4,
        "importance": "Medium Probability"
      }
    ],
    "oneNightRevision": {
      "topQuestions": [
        "Write short notes on key methodologies and design parameters of Water Resources Engineering (Focus on Unit 3).",
        "Write short notes on key methodologies and design parameters of Water Resources Engineering (Focus on Unit 4).",
        "Write short notes on key methodologies and design parameters of Water Resources Engineering (Focus on Unit 5)."
      ],
      "definitions": [
        {
          "term": "Water Resources Engineering",
          "definition": "Hydrological cycle catchment precipitation, Unit Hydrograph runoff estimation, crop delta canal design Lacey Kennedy theories, and cross drainage works."
        },
        {
          "term": "Core Principle of CE-603",
          "definition": "The foundational architecture and operational logic that dictates the behavior of Water Resources Engineering in engineering applications."
        }
      ],
      "diagrams": [
        {
          "title": "Water Resources Engineering System Layout",
          "description": "Block diagram displaying the architectural configuration and interface linkages."
        }
      ],
      "formulas": [
        {
          "name": "CE-603 Efficiency Formula",
          "formula": "η = (Output Power / Input Power) * 100%",
          "explanation": "Calculates the performance ratio indicating total energy conversion efficiency."
        }
      ],
      "lastMinuteNotes": [
        "💡 Focus on the structural building blocks of Water Resources Engineering and their practical design constraints.",
        "💡 Review unit-wise previous exam papers and standard notations for numerical stability."
      ]
    },
    "videos": []
  },
  {
    "id": "ecv-ce",
    "name": "Estimating, Costing & Valuation",
    "code": "CE-701",
    "branchId": "ce",
    "semester": 7,
    "description": "Abstract billing quantity structures detailed estimates, rate analyses floor plaster concrete works, tender contracts specs, and sinking fund valuation.",
    "resourceCount": 34,
    "overview": {
      "syllabus": [
        "Unit I: Introduction to Estimation: Types of estimates (approximate, detailed, revised). Measurement units, abstracting bills of quantities, data sheets, administrative approvals.",
        "Unit II: Detailed Estimation: Quantity calculations for load-bearing and framed residential structures using centerline and long-wall/short-wall methods. Earthwork estimation for roads and canals.",
        "Unit III: Analysis of Rates: Purpose, prime cost, overheads, profits. Deriving standard rates for concrete, brickwork, plastering, excavation, and flooring works.",
        "Unit IV: Specifications & Contracts: Writing technical specifications for construction items. Contract types (Lump-sum, Item-rate, Percentage-rate, Turnkey). Tender notices, earnest money, security deposits, arbitration.",
        "Unit V: Valuation: Principles, definition of gross income, net income, outgoings, scrap value, salvage value, sinking fund, depreciation. Methods of valuing land and buildings."
      ],
      "weightageSummary": "Unit III: Analysis of Rates: Purpose, pr typically represents around 40% of overall exam weightage."
    },
    "weightage": [
      {
        "unit": "Unit I: Introduction to Estimation: Types of estimates (approximate, detailed, revised). Measurement units, abstracting bills of quantities, data sheets, administrative approvals.",
        "expectedMarks": 12,
        "topics": [
          {
            "name": "Estimation implementation details",
            "frequency": 5
          },
          {
            "name": "estimates working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit II: Detailed Estimation: Quantity calculations for load-bearing and framed residential structures using centerline and long-wall/short-wall methods. Earthwork estimation for roads and canals.",
        "expectedMarks": 14,
        "topics": [
          {
            "name": "Detailed implementation details",
            "frequency": 5
          },
          {
            "name": "Estimation working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit III: Analysis of Rates: Purpose, prime cost, overheads, profits. Deriving standard rates for concrete, brickwork, plastering, excavation, and flooring works.",
        "expectedMarks": 16,
        "topics": [
          {
            "name": "Analysis implementation details",
            "frequency": 5
          },
          {
            "name": "Purpose working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit IV: Specifications & Contracts: Writing technical specifications for construction items. Contract types (Lump-sum, Item-rate, Percentage-rate, Turnkey). Tender notices, earnest money, security deposits, arbitration.",
        "expectedMarks": 15,
        "topics": [
          {
            "name": "Specifications implementation details",
            "frequency": 5
          },
          {
            "name": "Contracts working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit V: Valuation: Principles, definition of gross income, net income, outgoings, scrap value, salvage value, sinking fund, depreciation. Methods of valuing land and buildings.",
        "expectedMarks": 13,
        "topics": [
          {
            "name": "Valuation implementation details",
            "frequency": 5
          },
          {
            "name": "Principles working parameters",
            "frequency": 4
          }
        ]
      }
    ],
    "repeatedQuestions": [
      {
        "id": "rq-ecv-ce-1",
        "question": "Discuss the fundamental concepts of Introduction to Estimation: Types of estimates (approximate. How is it implemented/used in Estimating, Costing & Valuation?",
        "years": [
          2022,
          2024
        ],
        "frequency": 2,
        "importance": "Very High Probability"
      },
      {
        "id": "rq-ecv-ce-2",
        "question": "Discuss the fundamental concepts of Detailed Estimation: Quantity. How is it implemented/used in Estimating, Costing & Valuation?",
        "years": [
          2023,
          2025
        ],
        "frequency": 3,
        "importance": "High Probability"
      },
      {
        "id": "rq-ecv-ce-3",
        "question": "Discuss the fundamental concepts of Analysis of Rates: Purpose. How is it implemented/used in Estimating, Costing & Valuation?",
        "years": [
          2024
        ],
        "frequency": 4,
        "importance": "Medium Probability"
      }
    ],
    "oneNightRevision": {
      "topQuestions": [
        "Write short notes on key methodologies and design parameters of Estimating, Costing & Valuation (Focus on Unit 3).",
        "Write short notes on key methodologies and design parameters of Estimating, Costing & Valuation (Focus on Unit 4).",
        "Write short notes on key methodologies and design parameters of Estimating, Costing & Valuation (Focus on Unit 5)."
      ],
      "definitions": [
        {
          "term": "Estimating, Costing & Valuation",
          "definition": "Abstract billing quantity structures detailed estimates, rate analyses floor plaster concrete works, tender contracts specs, and sinking fund valuation."
        },
        {
          "term": "Core Principle of CE-701",
          "definition": "The foundational architecture and operational logic that dictates the behavior of Estimating, Costing & Valuation in engineering applications."
        }
      ],
      "diagrams": [
        {
          "title": "Estimating, Costing & Valuation System Layout",
          "description": "Block diagram displaying the architectural configuration and interface linkages."
        }
      ],
      "formulas": [
        {
          "name": "CE-701 Efficiency Formula",
          "formula": "η = (Output Power / Input Power) * 100%",
          "explanation": "Calculates the performance ratio indicating total energy conversion efficiency."
        }
      ],
      "lastMinuteNotes": [
        "💡 Focus on the structural building blocks of Estimating, Costing & Valuation and their practical design constraints.",
        "💡 Review unit-wise previous exam papers and standard notations for numerical stability."
      ]
    },
    "videos": []
  },
  {
    "id": "fe-ce",
    "name": "Foundation Engineering",
    "code": "CE-702",
    "branchId": "ce",
    "semester": 7,
    "description": "Subsurface boring SPT CPT soil sampling, Terzaghi bearing capacity shallow foundations, settlement primary consolidation, pile group efficiency, caisson tilts.",
    "resourceCount": 34,
    "overview": {
      "syllabus": [
        "Unit I: Subsurface Exploration: Soil investigation program, boring methods, sampling techniques, disturbed and undisturbed samples. Standard Penetration Test (SPT), Cone Penetration Test (CPT).",
        "Unit II: Bearing Capacity of Shallow Foundations: Terzaghi's theory, Meyerhof's method, IS code formulas. Factors affecting bearing capacity, plate load test parameters.",
        "Unit III: Settlement Analysis: Immediate, primary consolidation settlements, differential settlement tolerances for various structural frameworks.",
        "Unit IV: Deep Foundations (Pile Foundations): Classification of piles, load-carrying capacity of single pile (dynamic and static formulas), pile load test. Group efficiency, negative skin friction.",
        "Unit V: Well Foundations & Caissons: Components of open well foundations, forces acting on wells, tilts and shifts correction measures, pneumatic caissons."
      ],
      "weightageSummary": "Unit III: Settlement Analysis: Immediate typically represents around 40% of overall exam weightage."
    },
    "weightage": [
      {
        "unit": "Unit I: Subsurface Exploration: Soil investigation program, boring methods, sampling techniques, disturbed and undisturbed samples. Standard Penetration Test (SPT), Cone Penetration Test (CPT).",
        "expectedMarks": 12,
        "topics": [
          {
            "name": "Subsurface implementation details",
            "frequency": 5
          },
          {
            "name": "Exploration working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit II: Bearing Capacity of Shallow Foundations: Terzaghi's theory, Meyerhof's method, IS code formulas. Factors affecting bearing capacity, plate load test parameters.",
        "expectedMarks": 14,
        "topics": [
          {
            "name": "Bearing implementation details",
            "frequency": 5
          },
          {
            "name": "Capacity working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit III: Settlement Analysis: Immediate, primary consolidation settlements, differential settlement tolerances for various structural frameworks.",
        "expectedMarks": 16,
        "topics": [
          {
            "name": "Settlement implementation details",
            "frequency": 5
          },
          {
            "name": "Analysis working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit IV: Deep Foundations (Pile Foundations): Classification of piles, load-carrying capacity of single pile (dynamic and static formulas), pile load test. Group efficiency, negative skin friction.",
        "expectedMarks": 15,
        "topics": [
          {
            "name": "Foundations implementation details",
            "frequency": 5
          },
          {
            "name": "Classification working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit V: Well Foundations & Caissons: Components of open well foundations, forces acting on wells, tilts and shifts correction measures, pneumatic caissons.",
        "expectedMarks": 13,
        "topics": [
          {
            "name": "Foundations implementation details",
            "frequency": 5
          },
          {
            "name": "Caissons working parameters",
            "frequency": 4
          }
        ]
      }
    ],
    "repeatedQuestions": [
      {
        "id": "rq-fe-ce-1",
        "question": "Discuss the fundamental concepts of Subsurface Exploration: Soil investigation program. How is it implemented/used in Foundation Engineering?",
        "years": [
          2022,
          2024
        ],
        "frequency": 2,
        "importance": "Very High Probability"
      },
      {
        "id": "rq-fe-ce-2",
        "question": "Discuss the fundamental concepts of Bearing Capacity of Shallow Foundations: Terzaghi's theory. How is it implemented/used in Foundation Engineering?",
        "years": [
          2023,
          2025
        ],
        "frequency": 3,
        "importance": "High Probability"
      },
      {
        "id": "rq-fe-ce-3",
        "question": "Discuss the fundamental concepts of Settlement Analysis: Immediate. How is it implemented/used in Foundation Engineering?",
        "years": [
          2024
        ],
        "frequency": 4,
        "importance": "Medium Probability"
      }
    ],
    "oneNightRevision": {
      "topQuestions": [
        "Write short notes on key methodologies and design parameters of Foundation Engineering (Focus on Unit 3).",
        "Write short notes on key methodologies and design parameters of Foundation Engineering (Focus on Unit 4).",
        "Write short notes on key methodologies and design parameters of Foundation Engineering (Focus on Unit 5)."
      ],
      "definitions": [
        {
          "term": "Foundation Engineering",
          "definition": "Subsurface boring SPT CPT soil sampling, Terzaghi bearing capacity shallow foundations, settlement primary consolidation, pile group efficiency, caisson tilts."
        },
        {
          "term": "Core Principle of CE-702",
          "definition": "The foundational architecture and operational logic that dictates the behavior of Foundation Engineering in engineering applications."
        }
      ],
      "diagrams": [
        {
          "title": "Foundation Engineering System Layout",
          "description": "Block diagram displaying the architectural configuration and interface linkages."
        }
      ],
      "formulas": [
        {
          "name": "CE-702 Efficiency Formula",
          "formula": "η = (Output Power / Input Power) * 100%",
          "explanation": "Calculates the performance ratio indicating total energy conversion efficiency."
        }
      ],
      "lastMinuteNotes": [
        "💡 Focus on the structural building blocks of Foundation Engineering and their practical design constraints.",
        "💡 Review unit-wise previous exam papers and standard notations for numerical stability."
      ]
    },
    "videos": []
  },
  {
    "id": "cmqs-ce",
    "name": "Construction Management & Quantity Surveying",
    "code": "CE-801",
    "branchId": "ce",
    "semester": 8,
    "description": "Project lifecycle scheduling bar charts, CPM PERT floats critical paths, resource leveling network crashing, excavators concrete mixers safety, and BIM.",
    "resourceCount": 36,
    "overview": {
      "syllabus": [
        "Unit I: Project Planning & Bar Charts: Construction project lifecycle, scheduling tools, limitations of Bar Charts and Milestone charts.",
        "Unit II: Network Techniques (CPM & PERT): Network diagrams, event/activity definitions. Critical Path Method (CPM): Floats, critical path calculation. PERT: Time estimates, probability of project completion.",
        "Unit III: Resource Allocation & Crashing: Resource smoothing, resource leveling. Cost-time trade-off: Direct and indirect project costs, optimizing time via network crashing.",
        "Unit IV: Construction Equipment & Safety: Safety management rules, performance attributes of excavators, dozers, scrapers, cranes, concrete mixers, and compactors.",
        "Unit V: Quality Control & BIM Foundations: Quality assurance loops, site inspection checklists, introduction to Building Information Modeling (BIM) workflows."
      ],
      "weightageSummary": "Unit III: Resource Allocation & Crashing typically represents around 40% of overall exam weightage."
    },
    "weightage": [
      {
        "unit": "Unit I: Project Planning & Bar Charts: Construction project lifecycle, scheduling tools, limitations of Bar Charts and Milestone charts.",
        "expectedMarks": 12,
        "topics": [
          {
            "name": "Project implementation details",
            "frequency": 5
          },
          {
            "name": "Planning working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit II: Network Techniques (CPM & PERT): Network diagrams, event/activity definitions. Critical Path Method (CPM): Floats, critical path calculation. PERT: Time estimates, probability of project completion.",
        "expectedMarks": 14,
        "topics": [
          {
            "name": "Network implementation details",
            "frequency": 5
          },
          {
            "name": "Techniques working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit III: Resource Allocation & Crashing: Resource smoothing, resource leveling. Cost-time trade-off: Direct and indirect project costs, optimizing time via network crashing.",
        "expectedMarks": 16,
        "topics": [
          {
            "name": "Resource implementation details",
            "frequency": 5
          },
          {
            "name": "Allocation working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit IV: Construction Equipment & Safety: Safety management rules, performance attributes of excavators, dozers, scrapers, cranes, concrete mixers, and compactors.",
        "expectedMarks": 15,
        "topics": [
          {
            "name": "Construction implementation details",
            "frequency": 5
          },
          {
            "name": "Equipment working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit V: Quality Control & BIM Foundations: Quality assurance loops, site inspection checklists, introduction to Building Information Modeling (BIM) workflows.",
        "expectedMarks": 13,
        "topics": [
          {
            "name": "Quality implementation details",
            "frequency": 5
          },
          {
            "name": "Control working parameters",
            "frequency": 4
          }
        ]
      }
    ],
    "repeatedQuestions": [
      {
        "id": "rq-cmqs-ce-1",
        "question": "Discuss the fundamental concepts of Project Planning & Bar Charts: Construction project lifecycle. How is it implemented/used in Construction Management & Quantity Surveying?",
        "years": [
          2022,
          2024
        ],
        "frequency": 2,
        "importance": "Very High Probability"
      },
      {
        "id": "rq-cmqs-ce-2",
        "question": "Discuss the fundamental concepts of Network Techniques (CPM & PERT): Network diagrams. How is it implemented/used in Construction Management & Quantity Surveying?",
        "years": [
          2023,
          2025
        ],
        "frequency": 3,
        "importance": "High Probability"
      },
      {
        "id": "rq-cmqs-ce-3",
        "question": "Discuss the fundamental concepts of Resource Allocation & Crashing: Resource smoothing. How is it implemented/used in Construction Management & Quantity Surveying?",
        "years": [
          2024
        ],
        "frequency": 4,
        "importance": "Medium Probability"
      }
    ],
    "oneNightRevision": {
      "topQuestions": [
        "Write short notes on key methodologies and design parameters of Construction Management & Quantity Surveying (Focus on Unit 3).",
        "Write short notes on key methodologies and design parameters of Construction Management & Quantity Surveying (Focus on Unit 4).",
        "Write short notes on key methodologies and design parameters of Construction Management & Quantity Surveying (Focus on Unit 5)."
      ],
      "definitions": [
        {
          "term": "Construction Management & Quantity Surveying",
          "definition": "Project lifecycle scheduling bar charts, CPM PERT floats critical paths, resource leveling network crashing, excavators concrete mixers safety, and BIM."
        },
        {
          "term": "Core Principle of CE-801",
          "definition": "The foundational architecture and operational logic that dictates the behavior of Construction Management & Quantity Surveying in engineering applications."
        }
      ],
      "diagrams": [
        {
          "title": "Construction Management & Quantity Surveying System Layout",
          "description": "Block diagram displaying the architectural configuration and interface linkages."
        }
      ],
      "formulas": [
        {
          "name": "CE-801 Efficiency Formula",
          "formula": "η = (Output Power / Input Power) * 100%",
          "explanation": "Calculates the performance ratio indicating total energy conversion efficiency."
        }
      ],
      "lastMinuteNotes": [
        "💡 Focus on the structural building blocks of Construction Management & Quantity Surveying and their practical design constraints.",
        "💡 Review unit-wise previous exam papers and standard notations for numerical stability."
      ]
    },
    "videos": []
  },
  {
    "id": "asd-ce",
    "name": "Advanced Structural Design (RC & Steel)",
    "code": "CE-802",
    "branchId": "ce",
    "semester": 8,
    "description": "Cantilever and counterfort retaining walls, circular water tanks IS 3370 code, prestressed concrete losses, plate girders stiffeners, and gantry girders.",
    "resourceCount": 36,
    "overview": {
      "syllabus": [
        "Unit I: Retaining Walls: Structural behavior, stability checks, design of cantilever and counterfort retaining walls.",
        "Unit II: Water Tanks: Design requirements, permissible stresses, design of circular and rectangular ground/overhead water tanks using IS 3370 codes.",
        "Unit III: Prestressed Concrete: Basic concepts, materials used, tensioning systems (pre and post-tensioning), loss of prestress computations.",
        "Unit IV: Plate Girders: Structural functions, design of web, flanges, intermediate stiffeners, bearing stiffeners based on steel structures manual.",
        "Unit V: Industrial Buildings: Structural layout, gantry girders design, plastic analysis foundations, shape factors."
      ],
      "weightageSummary": "Unit III: Prestressed Concrete: Basic co typically represents around 40% of overall exam weightage."
    },
    "weightage": [
      {
        "unit": "Unit I: Retaining Walls: Structural behavior, stability checks, design of cantilever and counterfort retaining walls.",
        "expectedMarks": 12,
        "topics": [
          {
            "name": "Retaining implementation details",
            "frequency": 5
          },
          {
            "name": "Structural working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit II: Water Tanks: Design requirements, permissible stresses, design of circular and rectangular ground/overhead water tanks using IS 3370 codes.",
        "expectedMarks": 14,
        "topics": [
          {
            "name": "Design implementation details",
            "frequency": 5
          },
          {
            "name": "requirements working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit III: Prestressed Concrete: Basic concepts, materials used, tensioning systems (pre and post-tensioning), loss of prestress computations.",
        "expectedMarks": 16,
        "topics": [
          {
            "name": "Prestressed implementation details",
            "frequency": 5
          },
          {
            "name": "Concrete working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit IV: Plate Girders: Structural functions, design of web, flanges, intermediate stiffeners, bearing stiffeners based on steel structures manual.",
        "expectedMarks": 15,
        "topics": [
          {
            "name": "Girders implementation details",
            "frequency": 5
          },
          {
            "name": "Structural working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit V: Industrial Buildings: Structural layout, gantry girders design, plastic analysis foundations, shape factors.",
        "expectedMarks": 13,
        "topics": [
          {
            "name": "Industrial implementation details",
            "frequency": 5
          },
          {
            "name": "Buildings working parameters",
            "frequency": 4
          }
        ]
      }
    ],
    "repeatedQuestions": [
      {
        "id": "rq-asd-ce-1",
        "question": "Discuss the fundamental concepts of Retaining Walls: Structural behavior. How is it implemented/used in Advanced Structural Design (RC & Steel)?",
        "years": [
          2022,
          2024
        ],
        "frequency": 2,
        "importance": "Very High Probability"
      },
      {
        "id": "rq-asd-ce-2",
        "question": "Discuss the fundamental concepts of Water Tanks: Design requirements. How is it implemented/used in Advanced Structural Design (RC & Steel)?",
        "years": [
          2023,
          2025
        ],
        "frequency": 3,
        "importance": "High Probability"
      },
      {
        "id": "rq-asd-ce-3",
        "question": "Discuss the fundamental concepts of Prestressed Concrete: Basic concepts. How is it implemented/used in Advanced Structural Design (RC & Steel)?",
        "years": [
          2024
        ],
        "frequency": 4,
        "importance": "Medium Probability"
      }
    ],
    "oneNightRevision": {
      "topQuestions": [
        "Write short notes on key methodologies and design parameters of Advanced Structural Design (RC & Steel) (Focus on Unit 3).",
        "Write short notes on key methodologies and design parameters of Advanced Structural Design (RC & Steel) (Focus on Unit 4).",
        "Write short notes on key methodologies and design parameters of Advanced Structural Design (RC & Steel) (Focus on Unit 5)."
      ],
      "definitions": [
        {
          "term": "Advanced Structural Design (RC & Steel)",
          "definition": "Cantilever and counterfort retaining walls, circular water tanks IS 3370 code, prestressed concrete losses, plate girders stiffeners, and gantry girders."
        },
        {
          "term": "Core Principle of CE-802",
          "definition": "The foundational architecture and operational logic that dictates the behavior of Advanced Structural Design (RC & Steel) in engineering applications."
        }
      ],
      "diagrams": [
        {
          "title": "Advanced Structural Design (RC & Steel) System Layout",
          "description": "Block diagram displaying the architectural configuration and interface linkages."
        }
      ],
      "formulas": [
        {
          "name": "CE-802 Efficiency Formula",
          "formula": "η = (Output Power / Input Power) * 100%",
          "explanation": "Calculates the performance ratio indicating total energy conversion efficiency."
        }
      ],
      "lastMinuteNotes": [
        "💡 Focus on the structural building blocks of Advanced Structural Design (RC & Steel) and their practical design constraints.",
        "💡 Review unit-wise previous exam papers and standard notations for numerical stability."
      ]
    },
    "videos": []
  },
  {
    "id": "ds-it",
    "name": "Discrete Structure",
    "code": "IT-302",
    "branchId": "it",
    "semester": 3,
    "description": "Set theory, relation, function, algebraic structures, groups, ring theory, propositional logic, truth tables, graph theory, trees and cut-sets.",
    "resourceCount": 26,
    "overview": {
      "syllabus": [
        "Unit I: Set Theory, Relation, Function, Theorem Proving Techniques (Mathematical Induction, Proof by Contradiction), Pigeonhole Principle.",
        "Unit II: Algebraic Structures: Semi Groups, Monoids, Groups, Abelian Groups, Subgroups, Cyclic Groups, Cosets, Normal Subgroups, Homomorphism and Isomorphism, Rings and Fields.",
        "Unit III: Propositional Logic: Basic Logical Operations, Truth Tables, Tautologies, Contradictions, Algebra of Proposition, Normal Forms, Predicates, Universal and Existential Quantifiers. Finite State Machines as models and language recognizers.",
        "Unit IV: Graph Theory: Planar Graphs, Multigraphs, Weighted Graphs, Isomorphic Graphs, Paths, Cycles, Connectivity, Shortest Path (Dijkstra's), Eulerian and Hamiltonian Paths/Circuits, Graph Coloring.",
        "Unit V: Trees and Cut-sets: Trees, Rooted Trees, Path Lengths in Rooted Trees, Binary Search Trees, Spanning Trees, Minimum Spanning Tree Algorithms (Kruskal’s, Prim’s)."
      ],
      "weightageSummary": "Unit III: Propositional Logic: Basic Log typically represents around 40% of overall exam weightage."
    },
    "weightage": [
      {
        "unit": "Unit I: Set Theory, Relation, Function, Theorem Proving Techniques (Mathematical Induction, Proof by Contradiction), Pigeonhole Principle.",
        "expectedMarks": 12,
        "topics": [
          {
            "name": "Theory implementation details",
            "frequency": 5
          },
          {
            "name": "Relation working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit II: Algebraic Structures: Semi Groups, Monoids, Groups, Abelian Groups, Subgroups, Cyclic Groups, Cosets, Normal Subgroups, Homomorphism and Isomorphism, Rings and Fields.",
        "expectedMarks": 14,
        "topics": [
          {
            "name": "Algebraic implementation details",
            "frequency": 5
          },
          {
            "name": "Structures working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit III: Propositional Logic: Basic Logical Operations, Truth Tables, Tautologies, Contradictions, Algebra of Proposition, Normal Forms, Predicates, Universal and Existential Quantifiers. Finite State Machines as models and language recognizers.",
        "expectedMarks": 16,
        "topics": [
          {
            "name": "Propositional implementation details",
            "frequency": 5
          },
          {
            "name": "Logical working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit IV: Graph Theory: Planar Graphs, Multigraphs, Weighted Graphs, Isomorphic Graphs, Paths, Cycles, Connectivity, Shortest Path (Dijkstra's), Eulerian and Hamiltonian Paths/Circuits, Graph Coloring.",
        "expectedMarks": 15,
        "topics": [
          {
            "name": "Theory implementation details",
            "frequency": 5
          },
          {
            "name": "Planar working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit V: Trees and Cut-sets: Trees, Rooted Trees, Path Lengths in Rooted Trees, Binary Search Trees, Spanning Trees, Minimum Spanning Tree Algorithms (Kruskal’s, Prim’s).",
        "expectedMarks": 13,
        "topics": [
          {
            "name": "Cut-sets implementation details",
            "frequency": 5
          },
          {
            "name": "Rooted working parameters",
            "frequency": 4
          }
        ]
      }
    ],
    "repeatedQuestions": [
      {
        "id": "rq-ds-it-1",
        "question": "Discuss the fundamental concepts of Set Theory. How is it implemented/used in Discrete Structure?",
        "years": [
          2022,
          2024
        ],
        "frequency": 2,
        "importance": "Very High Probability"
      },
      {
        "id": "rq-ds-it-2",
        "question": "Discuss the fundamental concepts of Algebraic Structures: Semi Groups. How is it implemented/used in Discrete Structure?",
        "years": [
          2023,
          2025
        ],
        "frequency": 3,
        "importance": "High Probability"
      },
      {
        "id": "rq-ds-it-3",
        "question": "Discuss the fundamental concepts of Propositional Logic: Basic Logical Operations. How is it implemented/used in Discrete Structure?",
        "years": [
          2024
        ],
        "frequency": 4,
        "importance": "Medium Probability"
      }
    ],
    "oneNightRevision": {
      "topQuestions": [
        "Write short notes on key methodologies and design parameters of Discrete Structure (Focus on Unit 3).",
        "Write short notes on key methodologies and design parameters of Discrete Structure (Focus on Unit 4).",
        "Write short notes on key methodologies and design parameters of Discrete Structure (Focus on Unit 5)."
      ],
      "definitions": [
        {
          "term": "Discrete Structure",
          "definition": "Set theory, relation, function, algebraic structures, groups, ring theory, propositional logic, truth tables, graph theory, trees and cut-sets."
        },
        {
          "term": "Core Principle of IT-302",
          "definition": "The foundational architecture and operational logic that dictates the behavior of Discrete Structure in engineering applications."
        }
      ],
      "diagrams": [
        {
          "title": "Discrete Structure System Layout",
          "description": "Block diagram displaying the architectural configuration and interface linkages."
        }
      ],
      "formulas": [
        {
          "name": "IT-302 Performance metric",
          "formula": "Complexity = O(f(n))",
          "explanation": "Indicates the asymptotic computational resource requirement as input size n grows."
        }
      ],
      "lastMinuteNotes": [
        "💡 Focus on the structural building blocks of Discrete Structure and their practical design constraints.",
        "💡 Review unit-wise previous exam papers and standard notations for numerical stability."
      ]
    },
    "videos": []
  },
  {
    "id": "dst-it",
    "name": "Data Structures",
    "code": "IT-303",
    "branchId": "it",
    "semester": 3,
    "description": "ADT concepts, arrays address calculation, stacks and queues infix to postfix conversion, linked lists polynomial manipulation, trees, and graphs.",
    "resourceCount": 26,
    "overview": {
      "syllabus": [
        "Unit I: Introduction: Concepts of Data Structures, Abstract Data Types, Memory Representation, Asymptotic Notations. Arrays: Single and Multidimensional Arrays, Address Calculation.",
        "Unit II: Stacks and Queues: Representation, Operations, Applications (Infix to Postfix, Evaluation of Expressions). Queues: Linear, Circular, Dequeue, Priority Queue.",
        "Unit III: Linked Lists: Singly, Doubly, and Circular Linked Lists. Applications like Polynomial Manipulation.",
        "Unit IV: Trees: Binary Trees, Tree Traversals (Inorder, Preorder, Postorder), Binary Search Trees, AVL Trees, Heap, Introduction to B-Trees, B+ Trees, and Red-Black Trees.",
        "Unit V: Graphs: Representation (Adjacency Matrix/List), Traversals (DFS, BFS), MST, Shortest Paths. Sorting & Searching: Bubble, Insertion, Selection, Quick, Merge, Heap Sort; Linear and Binary Search."
      ],
      "weightageSummary": "Unit III: Linked Lists: Singly, Doubly,  typically represents around 40% of overall exam weightage."
    },
    "weightage": [
      {
        "unit": "Unit I: Introduction: Concepts of Data Structures, Abstract Data Types, Memory Representation, Asymptotic Notations. Arrays: Single and Multidimensional Arrays, Address Calculation.",
        "expectedMarks": 12,
        "topics": [
          {
            "name": "Structures implementation details",
            "frequency": 5
          },
          {
            "name": "Abstract working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit II: Stacks and Queues: Representation, Operations, Applications (Infix to Postfix, Evaluation of Expressions). Queues: Linear, Circular, Dequeue, Priority Queue.",
        "expectedMarks": 14,
        "topics": [
          {
            "name": "Stacks implementation details",
            "frequency": 5
          },
          {
            "name": "Queues working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit III: Linked Lists: Singly, Doubly, and Circular Linked Lists. Applications like Polynomial Manipulation.",
        "expectedMarks": 16,
        "topics": [
          {
            "name": "Linked implementation details",
            "frequency": 5
          },
          {
            "name": "Singly working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit IV: Trees: Binary Trees, Tree Traversals (Inorder, Preorder, Postorder), Binary Search Trees, AVL Trees, Heap, Introduction to B-Trees, B+ Trees, and Red-Black Trees.",
        "expectedMarks": 15,
        "topics": [
          {
            "name": "Binary implementation details",
            "frequency": 5
          },
          {
            "name": "Traversals working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit V: Graphs: Representation (Adjacency Matrix/List), Traversals (DFS, BFS), MST, Shortest Paths. Sorting & Searching: Bubble, Insertion, Selection, Quick, Merge, Heap Sort; Linear and Binary Search.",
        "expectedMarks": 13,
        "topics": [
          {
            "name": "Graphs implementation details",
            "frequency": 5
          },
          {
            "name": "Representation working parameters",
            "frequency": 4
          }
        ]
      }
    ],
    "repeatedQuestions": [
      {
        "id": "rq-dst-it-1",
        "question": "Discuss the fundamental concepts of Introduction: Concepts of Data Structures. How is it implemented/used in Data Structures?",
        "years": [
          2022,
          2024
        ],
        "frequency": 2,
        "importance": "Very High Probability"
      },
      {
        "id": "rq-dst-it-2",
        "question": "Discuss the fundamental concepts of Stacks and Queues: Representation. How is it implemented/used in Data Structures?",
        "years": [
          2023,
          2025
        ],
        "frequency": 3,
        "importance": "High Probability"
      },
      {
        "id": "rq-dst-it-3",
        "question": "Discuss the fundamental concepts of Linked Lists: Singly. How is it implemented/used in Data Structures?",
        "years": [
          2024
        ],
        "frequency": 4,
        "importance": "Medium Probability"
      }
    ],
    "oneNightRevision": {
      "topQuestions": [
        "Write short notes on key methodologies and design parameters of Data Structures (Focus on Unit 3).",
        "Write short notes on key methodologies and design parameters of Data Structures (Focus on Unit 4).",
        "Write short notes on key methodologies and design parameters of Data Structures (Focus on Unit 5)."
      ],
      "definitions": [
        {
          "term": "Data Structures",
          "definition": "ADT concepts, arrays address calculation, stacks and queues infix to postfix conversion, linked lists polynomial manipulation, trees, and graphs."
        },
        {
          "term": "Core Principle of IT-303",
          "definition": "The foundational architecture and operational logic that dictates the behavior of Data Structures in engineering applications."
        }
      ],
      "diagrams": [
        {
          "title": "Data Structures System Layout",
          "description": "Block diagram displaying the architectural configuration and interface linkages."
        }
      ],
      "formulas": [
        {
          "name": "IT-303 Performance metric",
          "formula": "Complexity = O(f(n))",
          "explanation": "Indicates the asymptotic computational resource requirement as input size n grows."
        }
      ],
      "lastMinuteNotes": [
        "💡 Focus on the structural building blocks of Data Structures and their practical design constraints.",
        "💡 Review unit-wise previous exam papers and standard notations for numerical stability."
      ]
    },
    "videos": []
  },
  {
    "id": "oop-it",
    "name": "Object Oriented Programming & Methodology",
    "code": "IT-304",
    "branchId": "it",
    "semester": 3,
    "description": "OOP concepts C++ control structures, classes and friend functions, copy constructors, operator overloading, inheritance, virtual base classes, and exception templates.",
    "resourceCount": 26,
    "overview": {
      "syllabus": [
        "Unit I: OOP Concepts: Data Abstraction, Encapsulation, Inheritance, Polymorphism. Elements of C++: Tokens, Expressions, Control Structures.",
        "Unit II: Classes and Objects: Specifying a Class, Defining Member Functions, Memory Allocation for Objects, Static Data Members and Functions, Array of Objects, Friend Functions.",
        "Unit III: Constructors and Destructors: Parameterized, Copy, Dynamic Constructors, Destructors. Operator Overloading and Type Conversions.",
        "Unit IV: Inheritance: Single, Multiple, Hierarchical, Hybrid Inheritance, Virtual Base Classes, Abstract Classes. Pointers, Virtual Functions, and Polymorphism.",
        "Unit V: Managing Console I/O, Working with Files: Sequential and Random Access, Templates, Exception Handling."
      ],
      "weightageSummary": "Unit III: Constructors and Destructors:  typically represents around 40% of overall exam weightage."
    },
    "weightage": [
      {
        "unit": "Unit I: OOP Concepts: Data Abstraction, Encapsulation, Inheritance, Polymorphism. Elements of C++: Tokens, Expressions, Control Structures.",
        "expectedMarks": 12,
        "topics": [
          {
            "name": "Abstraction implementation details",
            "frequency": 5
          },
          {
            "name": "Encapsulation working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit II: Classes and Objects: Specifying a Class, Defining Member Functions, Memory Allocation for Objects, Static Data Members and Functions, Array of Objects, Friend Functions.",
        "expectedMarks": 14,
        "topics": [
          {
            "name": "Classes implementation details",
            "frequency": 5
          },
          {
            "name": "Objects working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit III: Constructors and Destructors: Parameterized, Copy, Dynamic Constructors, Destructors. Operator Overloading and Type Conversions.",
        "expectedMarks": 16,
        "topics": [
          {
            "name": "Constructors implementation details",
            "frequency": 5
          },
          {
            "name": "Destructors working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit IV: Inheritance: Single, Multiple, Hierarchical, Hybrid Inheritance, Virtual Base Classes, Abstract Classes. Pointers, Virtual Functions, and Polymorphism.",
        "expectedMarks": 15,
        "topics": [
          {
            "name": "Inheritance implementation details",
            "frequency": 5
          },
          {
            "name": "Single working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit V: Managing Console I/O, Working with Files: Sequential and Random Access, Templates, Exception Handling.",
        "expectedMarks": 13,
        "topics": [
          {
            "name": "Managing implementation details",
            "frequency": 5
          },
          {
            "name": "Console working parameters",
            "frequency": 4
          }
        ]
      }
    ],
    "repeatedQuestions": [
      {
        "id": "rq-oop-it-1",
        "question": "Discuss the fundamental concepts of OOP Concepts: Data Abstraction. How is it implemented/used in Object Oriented Programming & Methodology?",
        "years": [
          2022,
          2024
        ],
        "frequency": 2,
        "importance": "Very High Probability"
      },
      {
        "id": "rq-oop-it-2",
        "question": "Discuss the fundamental concepts of Classes and Objects: Specifying a Class. How is it implemented/used in Object Oriented Programming & Methodology?",
        "years": [
          2023,
          2025
        ],
        "frequency": 3,
        "importance": "High Probability"
      },
      {
        "id": "rq-oop-it-3",
        "question": "Discuss the fundamental concepts of Constructors and Destructors: Parameterized. How is it implemented/used in Object Oriented Programming & Methodology?",
        "years": [
          2024
        ],
        "frequency": 4,
        "importance": "Medium Probability"
      }
    ],
    "oneNightRevision": {
      "topQuestions": [
        "Write short notes on key methodologies and design parameters of Object Oriented Programming & Methodology (Focus on Unit 3).",
        "Write short notes on key methodologies and design parameters of Object Oriented Programming & Methodology (Focus on Unit 4).",
        "Write short notes on key methodologies and design parameters of Object Oriented Programming & Methodology (Focus on Unit 5)."
      ],
      "definitions": [
        {
          "term": "Object Oriented Programming & Methodology",
          "definition": "OOP concepts C++ control structures, classes and friend functions, copy constructors, operator overloading, inheritance, virtual base classes, and exception templates."
        },
        {
          "term": "Core Principle of IT-304",
          "definition": "The foundational architecture and operational logic that dictates the behavior of Object Oriented Programming & Methodology in engineering applications."
        }
      ],
      "diagrams": [
        {
          "title": "Object Oriented Programming & Methodology System Layout",
          "description": "Block diagram displaying the architectural configuration and interface linkages."
        }
      ],
      "formulas": [
        {
          "name": "IT-304 Performance metric",
          "formula": "Complexity = O(f(n))",
          "explanation": "Indicates the asymptotic computational resource requirement as input size n grows."
        }
      ],
      "lastMinuteNotes": [
        "💡 Focus on the structural building blocks of Object Oriented Programming & Methodology and their practical design constraints.",
        "💡 Review unit-wise previous exam papers and standard notations for numerical stability."
      ]
    },
    "videos": []
  },
  {
    "id": "dcd-it",
    "name": "Digital Circuit & Design",
    "code": "IT-305",
    "branchId": "it",
    "semester": 3,
    "description": "Number systems, logic gate simplification K-Maps, combinational half/full adders decoders multiplexers, sequential edge triggered RS JK flip flops, counters, and RAM ROM.",
    "resourceCount": 26,
    "overview": {
      "syllabus": [
        "Unit I: Review of Number Systems, Boolean Algebra, Logic Gates, Simplification of Boolean Functions using Karnaugh Map (K-Map) and Quine-McCluskey Method.",
        "Unit II: Combinational Logic: Half/Full Adder, Half/Full Subtractor, Carry Look-ahead Adder, BCD Adder, Multiplexer, Demultiplexer, Encoder, Decoder, ALU.",
        "Unit III: Sequential Logic: Flip-Flops (RS, JK, D, T, Master-Slave), Edge Triggering, Realization of one Flip-Flop using another.",
        "Unit IV: Registers and Counters: Shift Registers, Asynchronous and Synchronous Counters, Ring Counter, Johnson Counter, State Diagrams and State Reduction.",
        "Unit V: Memory & D/A, A/D Converters: RAM, ROM, PLA, PAL. DAC and ADC specifications and architectures."
      ],
      "weightageSummary": "Unit III: Sequential Logic: Flip-Flops ( typically represents around 40% of overall exam weightage."
    },
    "weightage": [
      {
        "unit": "Unit I: Review of Number Systems, Boolean Algebra, Logic Gates, Simplification of Boolean Functions using Karnaugh Map (K-Map) and Quine-McCluskey Method.",
        "expectedMarks": 12,
        "topics": [
          {
            "name": "Review implementation details",
            "frequency": 5
          },
          {
            "name": "Number working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit II: Combinational Logic: Half/Full Adder, Half/Full Subtractor, Carry Look-ahead Adder, BCD Adder, Multiplexer, Demultiplexer, Encoder, Decoder, ALU.",
        "expectedMarks": 14,
        "topics": [
          {
            "name": "Combinational implementation details",
            "frequency": 5
          },
          {
            "name": "Subtractor working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit III: Sequential Logic: Flip-Flops (RS, JK, D, T, Master-Slave), Edge Triggering, Realization of one Flip-Flop using another.",
        "expectedMarks": 16,
        "topics": [
          {
            "name": "Sequential implementation details",
            "frequency": 5
          },
          {
            "name": "Flip-Flops working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit IV: Registers and Counters: Shift Registers, Asynchronous and Synchronous Counters, Ring Counter, Johnson Counter, State Diagrams and State Reduction.",
        "expectedMarks": 15,
        "topics": [
          {
            "name": "Registers implementation details",
            "frequency": 5
          },
          {
            "name": "Counters working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit V: Memory & D/A, A/D Converters: RAM, ROM, PLA, PAL. DAC and ADC specifications and architectures.",
        "expectedMarks": 13,
        "topics": [
          {
            "name": "Memory implementation details",
            "frequency": 5
          },
          {
            "name": "Converters working parameters",
            "frequency": 4
          }
        ]
      }
    ],
    "repeatedQuestions": [
      {
        "id": "rq-dcd-it-1",
        "question": "Discuss the fundamental concepts of Review of Number Systems. How is it implemented/used in Digital Circuit & Design?",
        "years": [
          2022,
          2024
        ],
        "frequency": 2,
        "importance": "Very High Probability"
      },
      {
        "id": "rq-dcd-it-2",
        "question": "Discuss the fundamental concepts of Combinational Logic: Half/Full Adder. How is it implemented/used in Digital Circuit & Design?",
        "years": [
          2023,
          2025
        ],
        "frequency": 3,
        "importance": "High Probability"
      },
      {
        "id": "rq-dcd-it-3",
        "question": "Discuss the fundamental concepts of Sequential Logic: Flip-Flops (RS. How is it implemented/used in Digital Circuit & Design?",
        "years": [
          2024
        ],
        "frequency": 4,
        "importance": "Medium Probability"
      }
    ],
    "oneNightRevision": {
      "topQuestions": [
        "Write short notes on key methodologies and design parameters of Digital Circuit & Design (Focus on Unit 3).",
        "Write short notes on key methodologies and design parameters of Digital Circuit & Design (Focus on Unit 4).",
        "Write short notes on key methodologies and design parameters of Digital Circuit & Design (Focus on Unit 5)."
      ],
      "definitions": [
        {
          "term": "Digital Circuit & Design",
          "definition": "Number systems, logic gate simplification K-Maps, combinational half/full adders decoders multiplexers, sequential edge triggered RS JK flip flops, counters, and RAM ROM."
        },
        {
          "term": "Core Principle of IT-305",
          "definition": "The foundational architecture and operational logic that dictates the behavior of Digital Circuit & Design in engineering applications."
        }
      ],
      "diagrams": [
        {
          "title": "Digital Circuit & Design System Layout",
          "description": "Block diagram displaying the architectural configuration and interface linkages."
        }
      ],
      "formulas": [
        {
          "name": "IT-305 Performance metric",
          "formula": "Complexity = O(f(n))",
          "explanation": "Indicates the asymptotic computational resource requirement as input size n grows."
        }
      ],
      "lastMinuteNotes": [
        "💡 Focus on the structural building blocks of Digital Circuit & Design and their practical design constraints.",
        "💡 Review unit-wise previous exam papers and standard notations for numerical stability."
      ]
    },
    "videos": []
  },
  {
    "id": "m3-it",
    "name": "Discrete Structures / Mathematics-III",
    "code": "BT-401",
    "branchId": "it",
    "semester": 4,
    "description": "Analytic functions C-R equations, complex Laurent series residues integration, Regula-Falsi Newton-Raphson, Simpson RK4 ODE solvers, and bases linear transformations.",
    "resourceCount": 28,
    "overview": {
      "syllabus": [
        "Unit I: Functions of Complex Variables: Analytic Functions, Cauchy-Riemann Equations, Harmonic Functions, Conformal Mapping.",
        "Unit II: Complex Integration: Cauchy’s Integral Theorem, Cauchy’s Integral Formula, Taylor's and Laurent's Series, Residues and Contour Integration.",
        "Unit III: Numerical Techniques: Roots of Algebraic and Transcendental Equations (Regula-Falsi, Newton-Raphson). Finite Differences, Interpolation (Newton’s Forward/Backward, Lagrange’s).",
        "Unit IV: Numerical Calculus & Ordinary Differential Equations: Numerical Differentiation and Integration (Trapezoidal, Simpson's Rules), Numerical Solutions of ODEs (Euler's, Runge-Kutta Methods).",
        "Unit V: Linear Algebra & Vector Spaces: Vector Spaces, Linear Independence, Bases, Linear Transformations, Rank-Nullity Theorem, Eigenvalues and Eigenvectors."
      ],
      "weightageSummary": "Unit III: Numerical Techniques: Roots of typically represents around 40% of overall exam weightage."
    },
    "weightage": [
      {
        "unit": "Unit I: Functions of Complex Variables: Analytic Functions, Cauchy-Riemann Equations, Harmonic Functions, Conformal Mapping.",
        "expectedMarks": 12,
        "topics": [
          {
            "name": "Functions implementation details",
            "frequency": 5
          },
          {
            "name": "Complex working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit II: Complex Integration: Cauchy’s Integral Theorem, Cauchy’s Integral Formula, Taylor's and Laurent's Series, Residues and Contour Integration.",
        "expectedMarks": 14,
        "topics": [
          {
            "name": "Complex implementation details",
            "frequency": 5
          },
          {
            "name": "Integration working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit III: Numerical Techniques: Roots of Algebraic and Transcendental Equations (Regula-Falsi, Newton-Raphson). Finite Differences, Interpolation (Newton’s Forward/Backward, Lagrange’s).",
        "expectedMarks": 16,
        "topics": [
          {
            "name": "Numerical implementation details",
            "frequency": 5
          },
          {
            "name": "Techniques working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit IV: Numerical Calculus & Ordinary Differential Equations: Numerical Differentiation and Integration (Trapezoidal, Simpson's Rules), Numerical Solutions of ODEs (Euler's, Runge-Kutta Methods).",
        "expectedMarks": 15,
        "topics": [
          {
            "name": "Numerical implementation details",
            "frequency": 5
          },
          {
            "name": "Calculus working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit V: Linear Algebra & Vector Spaces: Vector Spaces, Linear Independence, Bases, Linear Transformations, Rank-Nullity Theorem, Eigenvalues and Eigenvectors.",
        "expectedMarks": 13,
        "topics": [
          {
            "name": "Linear implementation details",
            "frequency": 5
          },
          {
            "name": "Algebra working parameters",
            "frequency": 4
          }
        ]
      }
    ],
    "repeatedQuestions": [
      {
        "id": "rq-m3-it-1",
        "question": "Discuss the fundamental concepts of Functions of Complex Variables: Analytic Functions. How is it implemented/used in Discrete Structures / Mathematics-III?",
        "years": [
          2022,
          2024
        ],
        "frequency": 2,
        "importance": "Very High Probability"
      },
      {
        "id": "rq-m3-it-2",
        "question": "Discuss the fundamental concepts of Complex Integration: Cauchy’s Integral Theorem. How is it implemented/used in Discrete Structures / Mathematics-III?",
        "years": [
          2023,
          2025
        ],
        "frequency": 3,
        "importance": "High Probability"
      },
      {
        "id": "rq-m3-it-3",
        "question": "Discuss the fundamental concepts of Numerical Techniques: Roots of Algebraic and Transcendental Equations (Regula-Falsi. How is it implemented/used in Discrete Structures / Mathematics-III?",
        "years": [
          2024
        ],
        "frequency": 4,
        "importance": "Medium Probability"
      }
    ],
    "oneNightRevision": {
      "topQuestions": [
        "Write short notes on key methodologies and design parameters of Discrete Structures / Mathematics-III (Focus on Unit 3).",
        "Write short notes on key methodologies and design parameters of Discrete Structures / Mathematics-III (Focus on Unit 4).",
        "Write short notes on key methodologies and design parameters of Discrete Structures / Mathematics-III (Focus on Unit 5)."
      ],
      "definitions": [
        {
          "term": "Discrete Structures / Mathematics-III",
          "definition": "Analytic functions C-R equations, complex Laurent series residues integration, Regula-Falsi Newton-Raphson, Simpson RK4 ODE solvers, and bases linear transformations."
        },
        {
          "term": "Core Principle of BT-401",
          "definition": "The foundational architecture and operational logic that dictates the behavior of Discrete Structures / Mathematics-III in engineering applications."
        }
      ],
      "diagrams": [
        {
          "title": "Discrete Structures / Mathematics-III System Layout",
          "description": "Block diagram displaying the architectural configuration and interface linkages."
        }
      ],
      "formulas": [
        {
          "name": "BT-401 Performance metric",
          "formula": "Complexity = O(f(n))",
          "explanation": "Indicates the asymptotic computational resource requirement as input size n grows."
        }
      ],
      "lastMinuteNotes": [
        "💡 Focus on the structural building blocks of Discrete Structures / Mathematics-III and their practical design constraints.",
        "💡 Review unit-wise previous exam papers and standard notations for numerical stability."
      ]
    },
    "videos": []
  },
  {
    "id": "ada-it",
    "name": "Analysis & Design of Algorithms",
    "code": "IT-402",
    "branchId": "it",
    "semester": 4,
    "description": "Divide and conquer algorithm complexities, Kruskal Prim greedy MST, 0/1 Knapsack multistage Floyd-Warshall dynamic programming, N-Queens backtracking, and NP-completeness.",
    "resourceCount": 28,
    "overview": {
      "syllabus": [
        "Unit I: Introduction: Algorithm Analysis, Time and Space Complexities, Asymptotic Notations (O, Omega, Theta). Recurrence Relations, Divide and Conquer (Merge Sort, Quick Sort, Binary Search).",
        "Unit II: Greedy Method: Fractional Knapsack Problem, Job Sequencing with Deadlines, Minimum Cost Spanning Trees (Prim's, Kruskal's), Optimal Merge Patterns.",
        "Unit III: Dynamic Programming: 0/1 Knapsack, Multistage Graphs, All-Pairs Shortest Paths (Floyd-Warshall), Travelling Salesperson Problem, Longest Common Subsequence.",
        "Unit IV: Backtracking and Branch & Bound: N-Queens Problem, Graph Coloring, Hamiltonian Cycles. Branch and Bound: Assignment Problem, 15-Puzzle Problem.",
        "Unit V: NP-Hard and NP-Complete Problems: Basic Concepts, Non-Deterministic Algorithms, P, NP, NP-Hard, and NP-Complete Classes, Cook’s Theorem, Reduction."
      ],
      "weightageSummary": "Unit III: Dynamic Programming: 0/1 Knaps typically represents around 40% of overall exam weightage."
    },
    "weightage": [
      {
        "unit": "Unit I: Introduction: Algorithm Analysis, Time and Space Complexities, Asymptotic Notations (O, Omega, Theta). Recurrence Relations, Divide and Conquer (Merge Sort, Quick Sort, Binary Search).",
        "expectedMarks": 12,
        "topics": [
          {
            "name": "Algorithm implementation details",
            "frequency": 5
          },
          {
            "name": "Analysis working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit II: Greedy Method: Fractional Knapsack Problem, Job Sequencing with Deadlines, Minimum Cost Spanning Trees (Prim's, Kruskal's), Optimal Merge Patterns.",
        "expectedMarks": 14,
        "topics": [
          {
            "name": "Greedy implementation details",
            "frequency": 5
          },
          {
            "name": "Method working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit III: Dynamic Programming: 0/1 Knapsack, Multistage Graphs, All-Pairs Shortest Paths (Floyd-Warshall), Travelling Salesperson Problem, Longest Common Subsequence.",
        "expectedMarks": 16,
        "topics": [
          {
            "name": "Dynamic implementation details",
            "frequency": 5
          },
          {
            "name": "Programming working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit IV: Backtracking and Branch & Bound: N-Queens Problem, Graph Coloring, Hamiltonian Cycles. Branch and Bound: Assignment Problem, 15-Puzzle Problem.",
        "expectedMarks": 15,
        "topics": [
          {
            "name": "Backtracking implementation details",
            "frequency": 5
          },
          {
            "name": "Branch working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit V: NP-Hard and NP-Complete Problems: Basic Concepts, Non-Deterministic Algorithms, P, NP, NP-Hard, and NP-Complete Classes, Cook’s Theorem, Reduction.",
        "expectedMarks": 13,
        "topics": [
          {
            "name": "NP-Hard implementation details",
            "frequency": 5
          },
          {
            "name": "NP-Complete working parameters",
            "frequency": 4
          }
        ]
      }
    ],
    "repeatedQuestions": [
      {
        "id": "rq-ada-it-1",
        "question": "Discuss the fundamental concepts of Introduction: Algorithm Analysis. How is it implemented/used in Analysis & Design of Algorithms?",
        "years": [
          2022,
          2024
        ],
        "frequency": 2,
        "importance": "Very High Probability"
      },
      {
        "id": "rq-ada-it-2",
        "question": "Discuss the fundamental concepts of Greedy Method: Fractional Knapsack Problem. How is it implemented/used in Analysis & Design of Algorithms?",
        "years": [
          2023,
          2025
        ],
        "frequency": 3,
        "importance": "High Probability"
      },
      {
        "id": "rq-ada-it-3",
        "question": "Discuss the fundamental concepts of Dynamic Programming: 0/1 Knapsack. How is it implemented/used in Analysis & Design of Algorithms?",
        "years": [
          2024
        ],
        "frequency": 4,
        "importance": "Medium Probability"
      }
    ],
    "oneNightRevision": {
      "topQuestions": [
        "Write short notes on key methodologies and design parameters of Analysis & Design of Algorithms (Focus on Unit 3).",
        "Write short notes on key methodologies and design parameters of Analysis & Design of Algorithms (Focus on Unit 4).",
        "Write short notes on key methodologies and design parameters of Analysis & Design of Algorithms (Focus on Unit 5)."
      ],
      "definitions": [
        {
          "term": "Analysis & Design of Algorithms",
          "definition": "Divide and conquer algorithm complexities, Kruskal Prim greedy MST, 0/1 Knapsack multistage Floyd-Warshall dynamic programming, N-Queens backtracking, and NP-completeness."
        },
        {
          "term": "Core Principle of IT-402",
          "definition": "The foundational architecture and operational logic that dictates the behavior of Analysis & Design of Algorithms in engineering applications."
        }
      ],
      "diagrams": [
        {
          "title": "Analysis & Design of Algorithms System Layout",
          "description": "Block diagram displaying the architectural configuration and interface linkages."
        }
      ],
      "formulas": [
        {
          "name": "IT-402 Performance metric",
          "formula": "Complexity = O(f(n))",
          "explanation": "Indicates the asymptotic computational resource requirement as input size n grows."
        }
      ],
      "lastMinuteNotes": [
        "💡 Focus on the structural building blocks of Analysis & Design of Algorithms and their practical design constraints.",
        "💡 Review unit-wise previous exam papers and standard notations for numerical stability."
      ]
    },
    "videos": []
  },
  {
    "id": "se-it",
    "name": "Software Engineering",
    "code": "IT-403",
    "branchId": "it",
    "semester": 4,
    "description": "Waterfall Spiral Agile process models, SRS standards requirements engineering, modular cohesion coupling software design, white-box basis path testing, and COCOMO.",
    "resourceCount": 28,
    "overview": {
      "syllabus": [
        "Unit I: Software Process Models: SDLC, Waterfall, Spiral, Prototype, Win-Win Spiral, Evolutionary, and Agile Methodologies.",
        "Unit II: Software Requirements Engineering: Requirement Elicitation, Analysis, Documentation, SRS Standards, Feasibility Study.",
        "Unit III: Software Design: Design Concepts, Modular Design, Cohesion and Coupling, Object-Oriented Design, UML Diagrams (Class, Use Case, Sequence Diagrams).",
        "Unit IV: Software Testing: White-Box Testing (Basis Path, Control Structure), Black-Box Testing (Equivalence Partitioning, Boundary Value Analysis), Unit, Integration, System, and Acceptance Testing.",
        "Unit V: Software Maintenance & Project Management: Reliability, COCOMO Model, Risk Management, Software Configuration Management (SCM)."
      ],
      "weightageSummary": "Unit III: Software Design: Design Concep typically represents around 40% of overall exam weightage."
    },
    "weightage": [
      {
        "unit": "Unit I: Software Process Models: SDLC, Waterfall, Spiral, Prototype, Win-Win Spiral, Evolutionary, and Agile Methodologies.",
        "expectedMarks": 12,
        "topics": [
          {
            "name": "Software implementation details",
            "frequency": 5
          },
          {
            "name": "Process working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit II: Software Requirements Engineering: Requirement Elicitation, Analysis, Documentation, SRS Standards, Feasibility Study.",
        "expectedMarks": 14,
        "topics": [
          {
            "name": "Software implementation details",
            "frequency": 5
          },
          {
            "name": "Requirements working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit III: Software Design: Design Concepts, Modular Design, Cohesion and Coupling, Object-Oriented Design, UML Diagrams (Class, Use Case, Sequence Diagrams).",
        "expectedMarks": 16,
        "topics": [
          {
            "name": "Software implementation details",
            "frequency": 5
          },
          {
            "name": "Design working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit IV: Software Testing: White-Box Testing (Basis Path, Control Structure), Black-Box Testing (Equivalence Partitioning, Boundary Value Analysis), Unit, Integration, System, and Acceptance Testing.",
        "expectedMarks": 15,
        "topics": [
          {
            "name": "Software implementation details",
            "frequency": 5
          },
          {
            "name": "Testing working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit V: Software Maintenance & Project Management: Reliability, COCOMO Model, Risk Management, Software Configuration Management (SCM).",
        "expectedMarks": 13,
        "topics": [
          {
            "name": "Software implementation details",
            "frequency": 5
          },
          {
            "name": "Maintenance working parameters",
            "frequency": 4
          }
        ]
      }
    ],
    "repeatedQuestions": [
      {
        "id": "rq-se-it-1",
        "question": "Discuss the fundamental concepts of Software Process Models: SDLC. How is it implemented/used in Software Engineering?",
        "years": [
          2022,
          2024
        ],
        "frequency": 2,
        "importance": "Very High Probability"
      },
      {
        "id": "rq-se-it-2",
        "question": "Discuss the fundamental concepts of Software Requirements Engineering: Requirement Elicitation. How is it implemented/used in Software Engineering?",
        "years": [
          2023,
          2025
        ],
        "frequency": 3,
        "importance": "High Probability"
      },
      {
        "id": "rq-se-it-3",
        "question": "Discuss the fundamental concepts of Software Design: Design Concepts. How is it implemented/used in Software Engineering?",
        "years": [
          2024
        ],
        "frequency": 4,
        "importance": "Medium Probability"
      }
    ],
    "oneNightRevision": {
      "topQuestions": [
        "Write short notes on key methodologies and design parameters of Software Engineering (Focus on Unit 3).",
        "Write short notes on key methodologies and design parameters of Software Engineering (Focus on Unit 4).",
        "Write short notes on key methodologies and design parameters of Software Engineering (Focus on Unit 5)."
      ],
      "definitions": [
        {
          "term": "Software Engineering",
          "definition": "Waterfall Spiral Agile process models, SRS standards requirements engineering, modular cohesion coupling software design, white-box basis path testing, and COCOMO."
        },
        {
          "term": "Core Principle of IT-403",
          "definition": "The foundational architecture and operational logic that dictates the behavior of Software Engineering in engineering applications."
        }
      ],
      "diagrams": [
        {
          "title": "Software Engineering System Layout",
          "description": "Block diagram displaying the architectural configuration and interface linkages."
        }
      ],
      "formulas": [
        {
          "name": "IT-403 Performance metric",
          "formula": "Complexity = O(f(n))",
          "explanation": "Indicates the asymptotic computational resource requirement as input size n grows."
        }
      ],
      "lastMinuteNotes": [
        "💡 Focus on the structural building blocks of Software Engineering and their practical design constraints.",
        "💡 Review unit-wise previous exam papers and standard notations for numerical stability."
      ]
    },
    "videos": []
  },
  {
    "id": "coa-it",
    "name": "Computer Organization & Architecture",
    "code": "IT-404",
    "branchId": "it",
    "semester": 4,
    "description": "RTL registers bus transfer logic, general register CPU formats addressing modes, Booth's multiplication, cache mapping page tables virtual memory, and DMA.",
    "resourceCount": 28,
    "overview": {
      "syllabus": [
        "Unit I: Basic Structure of Computers: Functional Units, Bus Structure, Register Transfer Language (RTL), Arithmetic Micro-operations, Logic Micro-operations.",
        "Unit II: Central Processing Unit: General Register Organization, Stack Organization, Instruction Formats, Addressing Modes, Data Transfer and Manipulation, RISC vs CISC Architecture.",
        "Unit III: Computer Arithmetic: Addition and Subtraction with Signed Magnitude, Multiplication Algorithms (Booth’s Algorithm), Division Algorithms, Floating-Point Arithmetic Operations.",
        "Unit IV: Memory Organization: Memory Hierarchy, Main Memory (RAM, ROM), Auxiliary Memory, Associative Memory, Cache Memory (Mapping Techniques, Replacement Algorithms), Virtual Memory.",
        "Unit V: Input-Output Organization: Peripheral Devices, Input-Output Interface, Asynchronous Data Transfer (Strobe, Handshaking), Modes of Transfer (Programmed I/O, Interrupt-Initiated I/O, DMA)."
      ],
      "weightageSummary": "Unit III: Computer Arithmetic: Addition  typically represents around 40% of overall exam weightage."
    },
    "weightage": [
      {
        "unit": "Unit I: Basic Structure of Computers: Functional Units, Bus Structure, Register Transfer Language (RTL), Arithmetic Micro-operations, Logic Micro-operations.",
        "expectedMarks": 12,
        "topics": [
          {
            "name": "Structure implementation details",
            "frequency": 5
          },
          {
            "name": "Computers working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit II: Central Processing Unit: General Register Organization, Stack Organization, Instruction Formats, Addressing Modes, Data Transfer and Manipulation, RISC vs CISC Architecture.",
        "expectedMarks": 14,
        "topics": [
          {
            "name": "Central implementation details",
            "frequency": 5
          },
          {
            "name": "Processing working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit III: Computer Arithmetic: Addition and Subtraction with Signed Magnitude, Multiplication Algorithms (Booth’s Algorithm), Division Algorithms, Floating-Point Arithmetic Operations.",
        "expectedMarks": 16,
        "topics": [
          {
            "name": "Computer implementation details",
            "frequency": 5
          },
          {
            "name": "Arithmetic working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit IV: Memory Organization: Memory Hierarchy, Main Memory (RAM, ROM), Auxiliary Memory, Associative Memory, Cache Memory (Mapping Techniques, Replacement Algorithms), Virtual Memory.",
        "expectedMarks": 15,
        "topics": [
          {
            "name": "Memory implementation details",
            "frequency": 5
          },
          {
            "name": "Organization working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit V: Input-Output Organization: Peripheral Devices, Input-Output Interface, Asynchronous Data Transfer (Strobe, Handshaking), Modes of Transfer (Programmed I/O, Interrupt-Initiated I/O, DMA).",
        "expectedMarks": 13,
        "topics": [
          {
            "name": "Input-Output implementation details",
            "frequency": 5
          },
          {
            "name": "Organization working parameters",
            "frequency": 4
          }
        ]
      }
    ],
    "repeatedQuestions": [
      {
        "id": "rq-coa-it-1",
        "question": "Discuss the fundamental concepts of Basic Structure of Computers: Functional Units. How is it implemented/used in Computer Organization & Architecture?",
        "years": [
          2022,
          2024
        ],
        "frequency": 2,
        "importance": "Very High Probability"
      },
      {
        "id": "rq-coa-it-2",
        "question": "Discuss the fundamental concepts of Central Processing Unit: General Register Organization. How is it implemented/used in Computer Organization & Architecture?",
        "years": [
          2023,
          2025
        ],
        "frequency": 3,
        "importance": "High Probability"
      },
      {
        "id": "rq-coa-it-3",
        "question": "Discuss the fundamental concepts of Computer Arithmetic: Addition and Subtraction with Signed Magnitude. How is it implemented/used in Computer Organization & Architecture?",
        "years": [
          2024
        ],
        "frequency": 4,
        "importance": "Medium Probability"
      }
    ],
    "oneNightRevision": {
      "topQuestions": [
        "Write short notes on key methodologies and design parameters of Computer Organization & Architecture (Focus on Unit 3).",
        "Write short notes on key methodologies and design parameters of Computer Organization & Architecture (Focus on Unit 4).",
        "Write short notes on key methodologies and design parameters of Computer Organization & Architecture (Focus on Unit 5)."
      ],
      "definitions": [
        {
          "term": "Computer Organization & Architecture",
          "definition": "RTL registers bus transfer logic, general register CPU formats addressing modes, Booth's multiplication, cache mapping page tables virtual memory, and DMA."
        },
        {
          "term": "Core Principle of IT-404",
          "definition": "The foundational architecture and operational logic that dictates the behavior of Computer Organization & Architecture in engineering applications."
        }
      ],
      "diagrams": [
        {
          "title": "Computer Organization & Architecture System Layout",
          "description": "Block diagram displaying the architectural configuration and interface linkages."
        }
      ],
      "formulas": [
        {
          "name": "IT-404 Performance metric",
          "formula": "Complexity = O(f(n))",
          "explanation": "Indicates the asymptotic computational resource requirement as input size n grows."
        }
      ],
      "lastMinuteNotes": [
        "💡 Focus on the structural building blocks of Computer Organization & Architecture and their practical design constraints.",
        "💡 Review unit-wise previous exam papers and standard notations for numerical stability."
      ]
    },
    "videos": []
  },
  {
    "id": "os-it",
    "name": "Operating Systems",
    "code": "IT-405",
    "branchId": "it",
    "semester": 4,
    "description": "Evolution system calls operating structures, process scheduling algorithms, critical section semaphores Banker's deadlock avoidance, demand paging, and disk SCAN.",
    "resourceCount": 28,
    "overview": {
      "syllabus": [
        "Unit I: Introduction: Evolution of Operating Systems, Types (Batch, Multiprogramming, Time-sharing, Real-time), System Calls, OS Structure.",
        "Unit II: Process Management: Process Concept, Scheduling Criteria, Scheduling Algorithms (FCFS, SJF, Priority, Round Robin). Threads.",
        "Unit III: Concurrency & Deadlocks: Inter-process Communication, Critical Section Problem, Semaphores, Classical IPC Problems. Deadlock Characterization, Prevention, Avoidance (Banker’s Algorithm), Detection, and Recovery.",
        "Unit IV: Memory Management: Logical vs Physical Address Space, Swapping, Contiguous Allocation, Paging, Segmentation. Virtual Memory: Demand Paging, Page Replacement Algorithms (FIFO, Optimal, LRU), Thrashing.",
        "Unit V: File & Storage Management: File Concept, Access Methods, Directory Structure, Allocation Methods, Disk Scheduling Algorithms (FCFS, SSTF, SCAN, C-SCAN)."
      ],
      "weightageSummary": "Unit III: Concurrency & Deadlocks: Inter typically represents around 40% of overall exam weightage."
    },
    "weightage": [
      {
        "unit": "Unit I: Introduction: Evolution of Operating Systems, Types (Batch, Multiprogramming, Time-sharing, Real-time), System Calls, OS Structure.",
        "expectedMarks": 12,
        "topics": [
          {
            "name": "Evolution implementation details",
            "frequency": 5
          },
          {
            "name": "Operating working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit II: Process Management: Process Concept, Scheduling Criteria, Scheduling Algorithms (FCFS, SJF, Priority, Round Robin). Threads.",
        "expectedMarks": 14,
        "topics": [
          {
            "name": "Process implementation details",
            "frequency": 5
          },
          {
            "name": "Management working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit III: Concurrency & Deadlocks: Inter-process Communication, Critical Section Problem, Semaphores, Classical IPC Problems. Deadlock Characterization, Prevention, Avoidance (Banker’s Algorithm), Detection, and Recovery.",
        "expectedMarks": 16,
        "topics": [
          {
            "name": "Concurrency implementation details",
            "frequency": 5
          },
          {
            "name": "Deadlocks working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit IV: Memory Management: Logical vs Physical Address Space, Swapping, Contiguous Allocation, Paging, Segmentation. Virtual Memory: Demand Paging, Page Replacement Algorithms (FIFO, Optimal, LRU), Thrashing.",
        "expectedMarks": 15,
        "topics": [
          {
            "name": "Memory implementation details",
            "frequency": 5
          },
          {
            "name": "Management working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit V: File & Storage Management: File Concept, Access Methods, Directory Structure, Allocation Methods, Disk Scheduling Algorithms (FCFS, SSTF, SCAN, C-SCAN).",
        "expectedMarks": 13,
        "topics": [
          {
            "name": "Storage implementation details",
            "frequency": 5
          },
          {
            "name": "Management working parameters",
            "frequency": 4
          }
        ]
      }
    ],
    "repeatedQuestions": [
      {
        "id": "rq-os-it-1",
        "question": "Discuss the fundamental concepts of Introduction: Evolution of Operating Systems. How is it implemented/used in Operating Systems?",
        "years": [
          2022,
          2024
        ],
        "frequency": 2,
        "importance": "Very High Probability"
      },
      {
        "id": "rq-os-it-2",
        "question": "Discuss the fundamental concepts of Process Management: Process Concept. How is it implemented/used in Operating Systems?",
        "years": [
          2023,
          2025
        ],
        "frequency": 3,
        "importance": "High Probability"
      },
      {
        "id": "rq-os-it-3",
        "question": "Discuss the fundamental concepts of Concurrency & Deadlocks: Inter-process Communication. How is it implemented/used in Operating Systems?",
        "years": [
          2024
        ],
        "frequency": 4,
        "importance": "Medium Probability"
      }
    ],
    "oneNightRevision": {
      "topQuestions": [
        "Write short notes on key methodologies and design parameters of Operating Systems (Focus on Unit 3).",
        "Write short notes on key methodologies and design parameters of Operating Systems (Focus on Unit 4).",
        "Write short notes on key methodologies and design parameters of Operating Systems (Focus on Unit 5)."
      ],
      "definitions": [
        {
          "term": "Operating Systems",
          "definition": "Evolution system calls operating structures, process scheduling algorithms, critical section semaphores Banker's deadlock avoidance, demand paging, and disk SCAN."
        },
        {
          "term": "Core Principle of IT-405",
          "definition": "The foundational architecture and operational logic that dictates the behavior of Operating Systems in engineering applications."
        }
      ],
      "diagrams": [
        {
          "title": "Operating Systems System Layout",
          "description": "Block diagram displaying the architectural configuration and interface linkages."
        }
      ],
      "formulas": [
        {
          "name": "IT-405 Performance metric",
          "formula": "Complexity = O(f(n))",
          "explanation": "Indicates the asymptotic computational resource requirement as input size n grows."
        }
      ],
      "lastMinuteNotes": [
        "💡 Focus on the structural building blocks of Operating Systems and their practical design constraints.",
        "💡 Review unit-wise previous exam papers and standard notations for numerical stability."
      ]
    },
    "videos": []
  },
  {
    "id": "dbms-it",
    "name": "Database Management Systems",
    "code": "IT-501",
    "branchId": "it",
    "semester": 5,
    "description": "ER model mapping relational algebra, SQL triggers views, candidate keys normalization 1NF-BCNF, ACID conflict serializability 2PL locks, and B-Tree indexing.",
    "resourceCount": 30,
    "overview": {
      "syllabus": [
        "Unit I: Introduction: DBMS Architecture, Data Independence, Data Models (ER Model, Relational Model), Keys, ER-to-Relational Mapping.",
        "Unit II: Relational Query Languages: Relational Algebra, Relational Calculus, SQL (DDL, DML, DCL), Joins, Nested Queries, Triggers, Views.",
        "Unit III: Database Design Theory: Integrity Constraints, Functional Dependencies, Normalization (1NF, 2NF, 3NF, BCNF, 4NF), Multi-valued Dependencies.",
        "Unit IV: Transaction Management & Concurrency: Transaction Concepts, ACID Properties, Schedules (Serializability, Recoverability), Concurrency Control (Locking Protocols, Timestamp-based, Deadlock Handling).",
        "Unit V: Recovery & Indexing: Crash Recovery (Log-based, Checkpoints), File Organizations, Indexing Structures (Primary, Secondary, B-Trees, B+ Trees)."
      ],
      "weightageSummary": "Unit III: Database Design Theory: Integr typically represents around 40% of overall exam weightage."
    },
    "weightage": [
      {
        "unit": "Unit I: Introduction: DBMS Architecture, Data Independence, Data Models (ER Model, Relational Model), Keys, ER-to-Relational Mapping.",
        "expectedMarks": 12,
        "topics": [
          {
            "name": "Architecture implementation details",
            "frequency": 5
          },
          {
            "name": "Independence working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit II: Relational Query Languages: Relational Algebra, Relational Calculus, SQL (DDL, DML, DCL), Joins, Nested Queries, Triggers, Views.",
        "expectedMarks": 14,
        "topics": [
          {
            "name": "Relational implementation details",
            "frequency": 5
          },
          {
            "name": "Languages working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit III: Database Design Theory: Integrity Constraints, Functional Dependencies, Normalization (1NF, 2NF, 3NF, BCNF, 4NF), Multi-valued Dependencies.",
        "expectedMarks": 16,
        "topics": [
          {
            "name": "Database implementation details",
            "frequency": 5
          },
          {
            "name": "Design working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit IV: Transaction Management & Concurrency: Transaction Concepts, ACID Properties, Schedules (Serializability, Recoverability), Concurrency Control (Locking Protocols, Timestamp-based, Deadlock Handling).",
        "expectedMarks": 15,
        "topics": [
          {
            "name": "Transaction implementation details",
            "frequency": 5
          },
          {
            "name": "Management working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit V: Recovery & Indexing: Crash Recovery (Log-based, Checkpoints), File Organizations, Indexing Structures (Primary, Secondary, B-Trees, B+ Trees).",
        "expectedMarks": 13,
        "topics": [
          {
            "name": "Recovery implementation details",
            "frequency": 5
          },
          {
            "name": "Indexing working parameters",
            "frequency": 4
          }
        ]
      }
    ],
    "repeatedQuestions": [
      {
        "id": "rq-dbms-it-1",
        "question": "Discuss the fundamental concepts of Introduction: DBMS Architecture. How is it implemented/used in Database Management Systems?",
        "years": [
          2022,
          2024
        ],
        "frequency": 2,
        "importance": "Very High Probability"
      },
      {
        "id": "rq-dbms-it-2",
        "question": "Discuss the fundamental concepts of Relational Query Languages: Relational Algebra. How is it implemented/used in Database Management Systems?",
        "years": [
          2023,
          2025
        ],
        "frequency": 3,
        "importance": "High Probability"
      },
      {
        "id": "rq-dbms-it-3",
        "question": "Discuss the fundamental concepts of Database Design Theory: Integrity Constraints. How is it implemented/used in Database Management Systems?",
        "years": [
          2024
        ],
        "frequency": 4,
        "importance": "Medium Probability"
      }
    ],
    "oneNightRevision": {
      "topQuestions": [
        "Write short notes on key methodologies and design parameters of Database Management Systems (Focus on Unit 3).",
        "Write short notes on key methodologies and design parameters of Database Management Systems (Focus on Unit 4).",
        "Write short notes on key methodologies and design parameters of Database Management Systems (Focus on Unit 5)."
      ],
      "definitions": [
        {
          "term": "Database Management Systems",
          "definition": "ER model mapping relational algebra, SQL triggers views, candidate keys normalization 1NF-BCNF, ACID conflict serializability 2PL locks, and B-Tree indexing."
        },
        {
          "term": "Core Principle of IT-501",
          "definition": "The foundational architecture and operational logic that dictates the behavior of Database Management Systems in engineering applications."
        }
      ],
      "diagrams": [
        {
          "title": "Database Management Systems System Layout",
          "description": "Block diagram displaying the architectural configuration and interface linkages."
        }
      ],
      "formulas": [
        {
          "name": "IT-501 Performance metric",
          "formula": "Complexity = O(f(n))",
          "explanation": "Indicates the asymptotic computational resource requirement as input size n grows."
        }
      ],
      "lastMinuteNotes": [
        "💡 Focus on the structural building blocks of Database Management Systems and their practical design constraints.",
        "💡 Review unit-wise previous exam papers and standard notations for numerical stability."
      ]
    },
    "videos": []
  },
  {
    "id": "toc-it",
    "name": "Theory of Computation",
    "code": "IT-502",
    "branchId": "it",
    "semester": 5,
    "description": "DFA NFA Mealy Moore equivalence, regular expression pumping lemma, context free grammar derivation CNF GNF normal forms, pushdown automata, and Turing Machines.",
    "resourceCount": 30,
    "overview": {
      "syllabus": [
        "Unit I: Finite Automata: DFA, NFA, Equivalence of DFA and NFA, Minimization of Finite Automata, Mealy and Moore Machines.",
        "Unit II: Regular Expressions & Languages: Regular Expressions, Equivalence with Finite Automata, Pumping Lemma for Regular Languages, Closure Properties.",
        "Unit III: Context-Free Grammars (CFG) & Languages: Derivation Trees, Ambiguity, Simplification of CFGs, Normal Forms (CNF, GNF), Pumping Lemma for CFLs.",
        "Unit IV: Pushdown Automata (PDA): Deterministic and Non-Deterministic PDA, Equivalence of PDA and CFG.",
        "Unit V: Turing Machines & Undecidability: Design of Turing Machines, Halting Problem, Church-Turing Thesis, Decidability, Post Correspondence Problem (PCP)."
      ],
      "weightageSummary": "Unit III: Context-Free Grammars (CFG) &  typically represents around 40% of overall exam weightage."
    },
    "weightage": [
      {
        "unit": "Unit I: Finite Automata: DFA, NFA, Equivalence of DFA and NFA, Minimization of Finite Automata, Mealy and Moore Machines.",
        "expectedMarks": 12,
        "topics": [
          {
            "name": "Finite implementation details",
            "frequency": 5
          },
          {
            "name": "Automata working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit II: Regular Expressions & Languages: Regular Expressions, Equivalence with Finite Automata, Pumping Lemma for Regular Languages, Closure Properties.",
        "expectedMarks": 14,
        "topics": [
          {
            "name": "Regular implementation details",
            "frequency": 5
          },
          {
            "name": "Expressions working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit III: Context-Free Grammars (CFG) & Languages: Derivation Trees, Ambiguity, Simplification of CFGs, Normal Forms (CNF, GNF), Pumping Lemma for CFLs.",
        "expectedMarks": 16,
        "topics": [
          {
            "name": "Context-Free implementation details",
            "frequency": 5
          },
          {
            "name": "Grammars working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit IV: Pushdown Automata (PDA): Deterministic and Non-Deterministic PDA, Equivalence of PDA and CFG.",
        "expectedMarks": 15,
        "topics": [
          {
            "name": "Pushdown implementation details",
            "frequency": 5
          },
          {
            "name": "Automata working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit V: Turing Machines & Undecidability: Design of Turing Machines, Halting Problem, Church-Turing Thesis, Decidability, Post Correspondence Problem (PCP).",
        "expectedMarks": 13,
        "topics": [
          {
            "name": "Turing implementation details",
            "frequency": 5
          },
          {
            "name": "Machines working parameters",
            "frequency": 4
          }
        ]
      }
    ],
    "repeatedQuestions": [
      {
        "id": "rq-toc-it-1",
        "question": "Discuss the fundamental concepts of Finite Automata: DFA. How is it implemented/used in Theory of Computation?",
        "years": [
          2022,
          2024
        ],
        "frequency": 2,
        "importance": "Very High Probability"
      },
      {
        "id": "rq-toc-it-2",
        "question": "Discuss the fundamental concepts of Regular Expressions & Languages: Regular Expressions. How is it implemented/used in Theory of Computation?",
        "years": [
          2023,
          2025
        ],
        "frequency": 3,
        "importance": "High Probability"
      },
      {
        "id": "rq-toc-it-3",
        "question": "Discuss the fundamental concepts of Context-Free Grammars (CFG) & Languages: Derivation Trees. How is it implemented/used in Theory of Computation?",
        "years": [
          2024
        ],
        "frequency": 4,
        "importance": "Medium Probability"
      }
    ],
    "oneNightRevision": {
      "topQuestions": [
        "Write short notes on key methodologies and design parameters of Theory of Computation (Focus on Unit 3).",
        "Write short notes on key methodologies and design parameters of Theory of Computation (Focus on Unit 4).",
        "Write short notes on key methodologies and design parameters of Theory of Computation (Focus on Unit 5)."
      ],
      "definitions": [
        {
          "term": "Theory of Computation",
          "definition": "DFA NFA Mealy Moore equivalence, regular expression pumping lemma, context free grammar derivation CNF GNF normal forms, pushdown automata, and Turing Machines."
        },
        {
          "term": "Core Principle of IT-502",
          "definition": "The foundational architecture and operational logic that dictates the behavior of Theory of Computation in engineering applications."
        }
      ],
      "diagrams": [
        {
          "title": "Theory of Computation System Layout",
          "description": "Block diagram displaying the architectural configuration and interface linkages."
        }
      ],
      "formulas": [
        {
          "name": "IT-502 Performance metric",
          "formula": "Complexity = O(f(n))",
          "explanation": "Indicates the asymptotic computational resource requirement as input size n grows."
        }
      ],
      "lastMinuteNotes": [
        "💡 Focus on the structural building blocks of Theory of Computation and their practical design constraints.",
        "💡 Review unit-wise previous exam papers and standard notations for numerical stability."
      ]
    },
    "videos": []
  },
  {
    "id": "cn-it",
    "name": "Computer Networks",
    "code": "IT-503",
    "branchId": "it",
    "semester": 5,
    "description": "OSI TCP/IP layers topology, CRC framing sliding window, routing distance vector link state algorithms, UDP TCP congestion, and application DNS HTTP FTP.",
    "resourceCount": 30,
    "overview": {
      "syllabus": [
        "Unit I: Introduction & Physical Layer: Network Topologies, ISO-OSI Reference Model, TCP/IP Suite. Physical Layer concepts, Transmission Media.",
        "Unit II: Data Link Layer: Framing, Error Detection & Correction (Parity, CRC, Hamming Code), Flow Control (Stop & Wait, Sliding Window Protocols), MAC Sublayer (ALOHA, CSMA/CD, CSMA/CA).",
        "Unit III: Network Layer: Routing Algorithms (Distance Vector, Link State), IP Addressing (IPv4, IPv6), Subnetting, CIDR, ARP, RARP, ICMP.",
        "Unit IV: Transport Layer: Connection-oriented and Connectionless Services, UDP, TCP (Header Format, Connection Management, Congestion Control).",
        "Unit V: Application Layer: DNS, Email (SMTP, POP3, IMAP), HTTP, FTP, Network Security Fundamentals."
      ],
      "weightageSummary": "Unit III: Network Layer: Routing Algorit typically represents around 40% of overall exam weightage."
    },
    "weightage": [
      {
        "unit": "Unit I: Introduction & Physical Layer: Network Topologies, ISO-OSI Reference Model, TCP/IP Suite. Physical Layer concepts, Transmission Media.",
        "expectedMarks": 12,
        "topics": [
          {
            "name": "Physical implementation details",
            "frequency": 5
          },
          {
            "name": "Network working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit II: Data Link Layer: Framing, Error Detection & Correction (Parity, CRC, Hamming Code), Flow Control (Stop & Wait, Sliding Window Protocols), MAC Sublayer (ALOHA, CSMA/CD, CSMA/CA).",
        "expectedMarks": 14,
        "topics": [
          {
            "name": "Framing implementation details",
            "frequency": 5
          },
          {
            "name": "Detection working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit III: Network Layer: Routing Algorithms (Distance Vector, Link State), IP Addressing (IPv4, IPv6), Subnetting, CIDR, ARP, RARP, ICMP.",
        "expectedMarks": 16,
        "topics": [
          {
            "name": "Network implementation details",
            "frequency": 5
          },
          {
            "name": "Routing working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit IV: Transport Layer: Connection-oriented and Connectionless Services, UDP, TCP (Header Format, Connection Management, Congestion Control).",
        "expectedMarks": 15,
        "topics": [
          {
            "name": "Transport implementation details",
            "frequency": 5
          },
          {
            "name": "Connection-oriented working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit V: Application Layer: DNS, Email (SMTP, POP3, IMAP), HTTP, FTP, Network Security Fundamentals.",
        "expectedMarks": 13,
        "topics": [
          {
            "name": "Application implementation details",
            "frequency": 5
          },
          {
            "name": "Network working parameters",
            "frequency": 4
          }
        ]
      }
    ],
    "repeatedQuestions": [
      {
        "id": "rq-cn-it-1",
        "question": "Discuss the fundamental concepts of Introduction & Physical Layer: Network Topologies. How is it implemented/used in Computer Networks?",
        "years": [
          2022,
          2024
        ],
        "frequency": 2,
        "importance": "Very High Probability"
      },
      {
        "id": "rq-cn-it-2",
        "question": "Discuss the fundamental concepts of Data Link Layer: Framing. How is it implemented/used in Computer Networks?",
        "years": [
          2023,
          2025
        ],
        "frequency": 3,
        "importance": "High Probability"
      },
      {
        "id": "rq-cn-it-3",
        "question": "Discuss the fundamental concepts of Network Layer: Routing Algorithms (Distance Vector. How is it implemented/used in Computer Networks?",
        "years": [
          2024
        ],
        "frequency": 4,
        "importance": "Medium Probability"
      }
    ],
    "oneNightRevision": {
      "topQuestions": [
        "Write short notes on key methodologies and design parameters of Computer Networks (Focus on Unit 3).",
        "Write short notes on key methodologies and design parameters of Computer Networks (Focus on Unit 4).",
        "Write short notes on key methodologies and design parameters of Computer Networks (Focus on Unit 5)."
      ],
      "definitions": [
        {
          "term": "Computer Networks",
          "definition": "OSI TCP/IP layers topology, CRC framing sliding window, routing distance vector link state algorithms, UDP TCP congestion, and application DNS HTTP FTP."
        },
        {
          "term": "Core Principle of IT-503",
          "definition": "The foundational architecture and operational logic that dictates the behavior of Computer Networks in engineering applications."
        }
      ],
      "diagrams": [
        {
          "title": "Computer Networks System Layout",
          "description": "Block diagram displaying the architectural configuration and interface linkages."
        }
      ],
      "formulas": [
        {
          "name": "IT-503 Performance metric",
          "formula": "Complexity = O(f(n))",
          "explanation": "Indicates the asymptotic computational resource requirement as input size n grows."
        }
      ],
      "lastMinuteNotes": [
        "💡 Focus on the structural building blocks of Computer Networks and their practical design constraints.",
        "💡 Review unit-wise previous exam papers and standard notations for numerical stability."
      ]
    },
    "videos": []
  },
  {
    "id": "cyber-it",
    "name": "Cyber Security",
    "code": "IT-504",
    "branchId": "it",
    "semester": 5,
    "description": "Symmetric DES AES public key RSA cryptography, IDS VPN firewalls network security, Information Technology Act 2000 cyber law, and secure software penetration testing.",
    "resourceCount": 30,
    "overview": {
      "syllabus": [
        "Unit I: Introduction to Cyber Security: Cyber Crimes, Cyber Security Principles, Vulnerabilities, Threats, and Attacks.",
        "Unit II: Cryptography: Symmetric Key Cryptography (DES, AES), Public Key Cryptography (RSA), Hash Functions, Digital Signatures.",
        "Unit III: Network Security: Firewalls, Intrusion Detection Systems (IDS), Virtual Private Networks (VPN), Wireless Security.",
        "Unit IV: Cyber Laws & IT Act: Information Technology Act 2000, Amendments, Intellectual Property Rights (IPR), Cyber Forensics Introduction.",
        "Unit V: Secure Software & Risk Management: Secure Coding Practices, Vulnerability Assessment, Penetration Testing, Risk Assessment."
      ],
      "weightageSummary": "Unit III: Network Security: Firewalls, I typically represents around 40% of overall exam weightage."
    },
    "weightage": [
      {
        "unit": "Unit I: Introduction to Cyber Security: Cyber Crimes, Cyber Security Principles, Vulnerabilities, Threats, and Attacks.",
        "expectedMarks": 12,
        "topics": [
          {
            "name": "Security implementation details",
            "frequency": 5
          },
          {
            "name": "Crimes working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit II: Cryptography: Symmetric Key Cryptography (DES, AES), Public Key Cryptography (RSA), Hash Functions, Digital Signatures.",
        "expectedMarks": 14,
        "topics": [
          {
            "name": "Cryptography implementation details",
            "frequency": 5
          },
          {
            "name": "Symmetric working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit III: Network Security: Firewalls, Intrusion Detection Systems (IDS), Virtual Private Networks (VPN), Wireless Security.",
        "expectedMarks": 16,
        "topics": [
          {
            "name": "Network implementation details",
            "frequency": 5
          },
          {
            "name": "Security working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit IV: Cyber Laws & IT Act: Information Technology Act 2000, Amendments, Intellectual Property Rights (IPR), Cyber Forensics Introduction.",
        "expectedMarks": 15,
        "topics": [
          {
            "name": "Information implementation details",
            "frequency": 5
          },
          {
            "name": "Technology working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit V: Secure Software & Risk Management: Secure Coding Practices, Vulnerability Assessment, Penetration Testing, Risk Assessment.",
        "expectedMarks": 13,
        "topics": [
          {
            "name": "Secure implementation details",
            "frequency": 5
          },
          {
            "name": "Software working parameters",
            "frequency": 4
          }
        ]
      }
    ],
    "repeatedQuestions": [
      {
        "id": "rq-cyber-it-1",
        "question": "Discuss the fundamental concepts of Introduction to Cyber Security: Cyber Crimes. How is it implemented/used in Cyber Security?",
        "years": [
          2022,
          2024
        ],
        "frequency": 2,
        "importance": "Very High Probability"
      },
      {
        "id": "rq-cyber-it-2",
        "question": "Discuss the fundamental concepts of Cryptography: Symmetric Key Cryptography (DES. How is it implemented/used in Cyber Security?",
        "years": [
          2023,
          2025
        ],
        "frequency": 3,
        "importance": "High Probability"
      },
      {
        "id": "rq-cyber-it-3",
        "question": "Discuss the fundamental concepts of Network Security: Firewalls. How is it implemented/used in Cyber Security?",
        "years": [
          2024
        ],
        "frequency": 4,
        "importance": "Medium Probability"
      }
    ],
    "oneNightRevision": {
      "topQuestions": [
        "Write short notes on key methodologies and design parameters of Cyber Security (Focus on Unit 3).",
        "Write short notes on key methodologies and design parameters of Cyber Security (Focus on Unit 4).",
        "Write short notes on key methodologies and design parameters of Cyber Security (Focus on Unit 5)."
      ],
      "definitions": [
        {
          "term": "Cyber Security",
          "definition": "Symmetric DES AES public key RSA cryptography, IDS VPN firewalls network security, Information Technology Act 2000 cyber law, and secure software penetration testing."
        },
        {
          "term": "Core Principle of IT-504",
          "definition": "The foundational architecture and operational logic that dictates the behavior of Cyber Security in engineering applications."
        }
      ],
      "diagrams": [
        {
          "title": "Cyber Security System Layout",
          "description": "Block diagram displaying the architectural configuration and interface linkages."
        }
      ],
      "formulas": [
        {
          "name": "IT-504 Performance metric",
          "formula": "Complexity = O(f(n))",
          "explanation": "Indicates the asymptotic computational resource requirement as input size n grows."
        }
      ],
      "lastMinuteNotes": [
        "💡 Focus on the structural building blocks of Cyber Security and their practical design constraints.",
        "💡 Review unit-wise previous exam papers and standard notations for numerical stability."
      ]
    },
    "videos": []
  },
  {
    "id": "web-it",
    "name": "Web Technology",
    "code": "IT-601",
    "branchId": "it",
    "semester": 6,
    "description": "HTML5 CSS3 Flexbox responsive layouts, client side JavaScript DOM events, Node.js Express server scripting, cookie session state management, and modern SPA React.",
    "resourceCount": 32,
    "overview": {
      "syllabus": [
        "Unit I: Web Engineering Fundamentals: Web Protocols (HTTP, FTP), Web Architecture (2-Tier, 3-Tier, N-Tier), Static vs Dynamic Websites. HTML5 & CSS3: Structural Elements, Selectors, Responsive Web Design via Flexbox and Grid.",
        "Unit II: Client-Side Scripting: JavaScript fundamentals, Document Object Model (DOM) manipulation, Event handling, JSON validation, Form parsing, Introduction to ES6 concepts and AJAX.",
        "Unit III: Server-Side Programming: Introduction to Node.js runtime environment and Express.js framework, request/response tracking, middleware applications, routing patterns, or Java-based web structures (Servlets/JSP life cycles).",
        "Unit IV: Database Connectivity & State Management: Managing user states via Cookies and Sessions. Connecting server application instances to relational (MySQL) or non-relational (MongoDB) databases.",
        "Unit V: Modern Web Frameworks & XML: XML Schemas, DTD, XSLT parsing. Conceptual overviews of modern Single Page Application (SPA) components via React.js or Angular frameworks, Web security basics (XSS, CSRF protection)."
      ],
      "weightageSummary": "Unit III: Server-Side Programming: Intro typically represents around 40% of overall exam weightage."
    },
    "weightage": [
      {
        "unit": "Unit I: Web Engineering Fundamentals: Web Protocols (HTTP, FTP), Web Architecture (2-Tier, 3-Tier, N-Tier), Static vs Dynamic Websites. HTML5 & CSS3: Structural Elements, Selectors, Responsive Web Design via Flexbox and Grid.",
        "expectedMarks": 12,
        "topics": [
          {
            "name": "Engineering implementation details",
            "frequency": 5
          },
          {
            "name": "Fundamentals working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit II: Client-Side Scripting: JavaScript fundamentals, Document Object Model (DOM) manipulation, Event handling, JSON validation, Form parsing, Introduction to ES6 concepts and AJAX.",
        "expectedMarks": 14,
        "topics": [
          {
            "name": "Client-Side implementation details",
            "frequency": 5
          },
          {
            "name": "Scripting working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit III: Server-Side Programming: Introduction to Node.js runtime environment and Express.js framework, request/response tracking, middleware applications, routing patterns, or Java-based web structures (Servlets/JSP life cycles).",
        "expectedMarks": 16,
        "topics": [
          {
            "name": "Server-Side implementation details",
            "frequency": 5
          },
          {
            "name": "Programming working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit IV: Database Connectivity & State Management: Managing user states via Cookies and Sessions. Connecting server application instances to relational (MySQL) or non-relational (MongoDB) databases.",
        "expectedMarks": 15,
        "topics": [
          {
            "name": "Database implementation details",
            "frequency": 5
          },
          {
            "name": "Connectivity working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit V: Modern Web Frameworks & XML: XML Schemas, DTD, XSLT parsing. Conceptual overviews of modern Single Page Application (SPA) components via React.js or Angular frameworks, Web security basics (XSS, CSRF protection).",
        "expectedMarks": 13,
        "topics": [
          {
            "name": "Modern implementation details",
            "frequency": 5
          },
          {
            "name": "Frameworks working parameters",
            "frequency": 4
          }
        ]
      }
    ],
    "repeatedQuestions": [
      {
        "id": "rq-web-it-1",
        "question": "Discuss the fundamental concepts of Web Engineering Fundamentals: Web Protocols (HTTP. How is it implemented/used in Web Technology?",
        "years": [
          2022,
          2024
        ],
        "frequency": 2,
        "importance": "Very High Probability"
      },
      {
        "id": "rq-web-it-2",
        "question": "Discuss the fundamental concepts of Client-Side Scripting: JavaScript fundamentals. How is it implemented/used in Web Technology?",
        "years": [
          2023,
          2025
        ],
        "frequency": 3,
        "importance": "High Probability"
      },
      {
        "id": "rq-web-it-3",
        "question": "Discuss the fundamental concepts of Server-Side Programming: Introduction to Node.js runtime environment and Express.js framework. How is it implemented/used in Web Technology?",
        "years": [
          2024
        ],
        "frequency": 4,
        "importance": "Medium Probability"
      }
    ],
    "oneNightRevision": {
      "topQuestions": [
        "Write short notes on key methodologies and design parameters of Web Technology (Focus on Unit 3).",
        "Write short notes on key methodologies and design parameters of Web Technology (Focus on Unit 4).",
        "Write short notes on key methodologies and design parameters of Web Technology (Focus on Unit 5)."
      ],
      "definitions": [
        {
          "term": "Web Technology",
          "definition": "HTML5 CSS3 Flexbox responsive layouts, client side JavaScript DOM events, Node.js Express server scripting, cookie session state management, and modern SPA React."
        },
        {
          "term": "Core Principle of IT-601",
          "definition": "The foundational architecture and operational logic that dictates the behavior of Web Technology in engineering applications."
        }
      ],
      "diagrams": [
        {
          "title": "Web Technology System Layout",
          "description": "Block diagram displaying the architectural configuration and interface linkages."
        }
      ],
      "formulas": [
        {
          "name": "IT-601 Performance metric",
          "formula": "Complexity = O(f(n))",
          "explanation": "Indicates the asymptotic computational resource requirement as input size n grows."
        }
      ],
      "lastMinuteNotes": [
        "💡 Focus on the structural building blocks of Web Technology and their practical design constraints.",
        "💡 Review unit-wise previous exam papers and standard notations for numerical stability."
      ]
    },
    "videos": []
  },
  {
    "id": "cg-it",
    "name": "Computer Graphics & Multimedia",
    "code": "IT-602",
    "branchId": "it",
    "semester": 6,
    "description": "Bresenham line circle generation, homogeneous 2D transformations Cohen-Sutherland clipping, 3D projections, hidden Z-buffer visible detection, and JPEG MPEG compression.",
    "resourceCount": 32,
    "overview": {
      "syllabus": [
        "Unit I: Graphics Systems & Line Generation: Video Display Devices, Raster-Scan and Random-Scan Systems. Line Drawing Algorithms (DHA, Bresenham’s), Circle Generating Algorithms.",
        "Unit II: 2D Transformations & Clipping: Translation, Rotation, Scaling, Matrix Representations, Homogeneous Coordinates, Composite Transformations. Clipping: Cohen-Sutherland Line Clipping, Sutherland-Hodgman Polygon Clipping.",
        "Unit III: 3D Concepts & Transformations: 3D Display Methods, 3D Transformations (Translation, Scaling, Rotation), Projections (Parallel and Perspective).",
        "Unit IV: Visible Surface Detection & Shading: Hidden Lines and Surfaces, Back-Face Detection, Depth-Buffer Method, Scan-Line Method. Illumination Models, Gouraud and Phong Shading.",
        "Unit V: Multimedia Components: Audio, Video, Text, and Animation properties. Compression Techniques: Lossless and Lossy Compression, JPEG, MPEG benchmarks, Authoring tools."
      ],
      "weightageSummary": "Unit III: 3D Concepts & Transformations: typically represents around 40% of overall exam weightage."
    },
    "weightage": [
      {
        "unit": "Unit I: Graphics Systems & Line Generation: Video Display Devices, Raster-Scan and Random-Scan Systems. Line Drawing Algorithms (DHA, Bresenham’s), Circle Generating Algorithms.",
        "expectedMarks": 12,
        "topics": [
          {
            "name": "Graphics implementation details",
            "frequency": 5
          },
          {
            "name": "Systems working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit II: 2D Transformations & Clipping: Translation, Rotation, Scaling, Matrix Representations, Homogeneous Coordinates, Composite Transformations. Clipping: Cohen-Sutherland Line Clipping, Sutherland-Hodgman Polygon Clipping.",
        "expectedMarks": 14,
        "topics": [
          {
            "name": "Transformations implementation details",
            "frequency": 5
          },
          {
            "name": "Clipping working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit III: 3D Concepts & Transformations: 3D Display Methods, 3D Transformations (Translation, Scaling, Rotation), Projections (Parallel and Perspective).",
        "expectedMarks": 16,
        "topics": [
          {
            "name": "Transformations implementation details",
            "frequency": 5
          },
          {
            "name": "Display working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit IV: Visible Surface Detection & Shading: Hidden Lines and Surfaces, Back-Face Detection, Depth-Buffer Method, Scan-Line Method. Illumination Models, Gouraud and Phong Shading.",
        "expectedMarks": 15,
        "topics": [
          {
            "name": "Visible implementation details",
            "frequency": 5
          },
          {
            "name": "Surface working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit V: Multimedia Components: Audio, Video, Text, and Animation properties. Compression Techniques: Lossless and Lossy Compression, JPEG, MPEG benchmarks, Authoring tools.",
        "expectedMarks": 13,
        "topics": [
          {
            "name": "Multimedia implementation details",
            "frequency": 5
          },
          {
            "name": "Components working parameters",
            "frequency": 4
          }
        ]
      }
    ],
    "repeatedQuestions": [
      {
        "id": "rq-cg-it-1",
        "question": "Discuss the fundamental concepts of Graphics Systems & Line Generation: Video Display Devices. How is it implemented/used in Computer Graphics & Multimedia?",
        "years": [
          2022,
          2024
        ],
        "frequency": 2,
        "importance": "Very High Probability"
      },
      {
        "id": "rq-cg-it-2",
        "question": "Discuss the fundamental concepts of 2D Transformations & Clipping: Translation. How is it implemented/used in Computer Graphics & Multimedia?",
        "years": [
          2023,
          2025
        ],
        "frequency": 3,
        "importance": "High Probability"
      },
      {
        "id": "rq-cg-it-3",
        "question": "Discuss the fundamental concepts of 3D Concepts & Transformations: 3D Display Methods. How is it implemented/used in Computer Graphics & Multimedia?",
        "years": [
          2024
        ],
        "frequency": 4,
        "importance": "Medium Probability"
      }
    ],
    "oneNightRevision": {
      "topQuestions": [
        "Write short notes on key methodologies and design parameters of Computer Graphics & Multimedia (Focus on Unit 3).",
        "Write short notes on key methodologies and design parameters of Computer Graphics & Multimedia (Focus on Unit 4).",
        "Write short notes on key methodologies and design parameters of Computer Graphics & Multimedia (Focus on Unit 5)."
      ],
      "definitions": [
        {
          "term": "Computer Graphics & Multimedia",
          "definition": "Bresenham line circle generation, homogeneous 2D transformations Cohen-Sutherland clipping, 3D projections, hidden Z-buffer visible detection, and JPEG MPEG compression."
        },
        {
          "term": "Core Principle of IT-602",
          "definition": "The foundational architecture and operational logic that dictates the behavior of Computer Graphics & Multimedia in engineering applications."
        }
      ],
      "diagrams": [
        {
          "title": "Computer Graphics & Multimedia System Layout",
          "description": "Block diagram displaying the architectural configuration and interface linkages."
        }
      ],
      "formulas": [
        {
          "name": "IT-602 Performance metric",
          "formula": "Complexity = O(f(n))",
          "explanation": "Indicates the asymptotic computational resource requirement as input size n grows."
        }
      ],
      "lastMinuteNotes": [
        "💡 Focus on the structural building blocks of Computer Graphics & Multimedia and their practical design constraints.",
        "💡 Review unit-wise previous exam papers and standard notations for numerical stability."
      ]
    },
    "videos": []
  },
  {
    "id": "stqa-it",
    "name": "Software Testing & Quality Assurance",
    "code": "IT-603",
    "branchId": "it",
    "semester": 6,
    "description": "SDLC testing defect lifecycle, unit integration system regression testing levels, static reviews black box white box, SQA reliability metrics, and test automation.",
    "resourceCount": 32,
    "overview": {
      "syllabus": [
        "Unit I: Testing Methodology: Principles of Testing, Software Development Life Cycle Models vs Testing, Defect Lifecycle.",
        "Unit II: Levels of Testing: Unit Testing, Integration Testing, System Testing, Acceptance Testing, Alpha/Beta Testing, Regression Testing.",
        "Unit III: Test Case Design: Static Testing (Reviews, Walkthroughs), Dynamic Testing, Functional Testing (Black Box), Structural Testing (White Box).",
        "Unit IV: Software Quality Assurance (SQA): Quality Concepts, SQA Activities, Software Reliability, Quality Metrics, ISO 9000, SEI CMM Models.",
        "Unit V: Test Automation: Automated Testing vs Manual Testing, Testing Tools (Selection, Benefits), Test Metrics and Reporting."
      ],
      "weightageSummary": "Unit III: Test Case Design: Static Testi typically represents around 40% of overall exam weightage."
    },
    "weightage": [
      {
        "unit": "Unit I: Testing Methodology: Principles of Testing, Software Development Life Cycle Models vs Testing, Defect Lifecycle.",
        "expectedMarks": 12,
        "topics": [
          {
            "name": "Testing implementation details",
            "frequency": 5
          },
          {
            "name": "Methodology working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit II: Levels of Testing: Unit Testing, Integration Testing, System Testing, Acceptance Testing, Alpha/Beta Testing, Regression Testing.",
        "expectedMarks": 14,
        "topics": [
          {
            "name": "Levels implementation details",
            "frequency": 5
          },
          {
            "name": "Testing working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit III: Test Case Design: Static Testing (Reviews, Walkthroughs), Dynamic Testing, Functional Testing (Black Box), Structural Testing (White Box).",
        "expectedMarks": 16,
        "topics": [
          {
            "name": "Design implementation details",
            "frequency": 5
          },
          {
            "name": "Static working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit IV: Software Quality Assurance (SQA): Quality Concepts, SQA Activities, Software Reliability, Quality Metrics, ISO 9000, SEI CMM Models.",
        "expectedMarks": 15,
        "topics": [
          {
            "name": "Software implementation details",
            "frequency": 5
          },
          {
            "name": "Quality working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit V: Test Automation: Automated Testing vs Manual Testing, Testing Tools (Selection, Benefits), Test Metrics and Reporting.",
        "expectedMarks": 13,
        "topics": [
          {
            "name": "Automation implementation details",
            "frequency": 5
          },
          {
            "name": "Automated working parameters",
            "frequency": 4
          }
        ]
      }
    ],
    "repeatedQuestions": [
      {
        "id": "rq-stqa-it-1",
        "question": "Discuss the fundamental concepts of Testing Methodology: Principles of Testing. How is it implemented/used in Software Testing & Quality Assurance?",
        "years": [
          2022,
          2024
        ],
        "frequency": 2,
        "importance": "Very High Probability"
      },
      {
        "id": "rq-stqa-it-2",
        "question": "Discuss the fundamental concepts of Levels of Testing: Unit Testing. How is it implemented/used in Software Testing & Quality Assurance?",
        "years": [
          2023,
          2025
        ],
        "frequency": 3,
        "importance": "High Probability"
      },
      {
        "id": "rq-stqa-it-3",
        "question": "Discuss the fundamental concepts of Test Case Design: Static Testing (Reviews. How is it implemented/used in Software Testing & Quality Assurance?",
        "years": [
          2024
        ],
        "frequency": 4,
        "importance": "Medium Probability"
      }
    ],
    "oneNightRevision": {
      "topQuestions": [
        "Write short notes on key methodologies and design parameters of Software Testing & Quality Assurance (Focus on Unit 3).",
        "Write short notes on key methodologies and design parameters of Software Testing & Quality Assurance (Focus on Unit 4).",
        "Write short notes on key methodologies and design parameters of Software Testing & Quality Assurance (Focus on Unit 5)."
      ],
      "definitions": [
        {
          "term": "Software Testing & Quality Assurance",
          "definition": "SDLC testing defect lifecycle, unit integration system regression testing levels, static reviews black box white box, SQA reliability metrics, and test automation."
        },
        {
          "term": "Core Principle of IT-603",
          "definition": "The foundational architecture and operational logic that dictates the behavior of Software Testing & Quality Assurance in engineering applications."
        }
      ],
      "diagrams": [
        {
          "title": "Software Testing & Quality Assurance System Layout",
          "description": "Block diagram displaying the architectural configuration and interface linkages."
        }
      ],
      "formulas": [
        {
          "name": "IT-603 Performance metric",
          "formula": "Complexity = O(f(n))",
          "explanation": "Indicates the asymptotic computational resource requirement as input size n grows."
        }
      ],
      "lastMinuteNotes": [
        "💡 Focus on the structural building blocks of Software Testing & Quality Assurance and their practical design constraints.",
        "💡 Review unit-wise previous exam papers and standard notations for numerical stability."
      ]
    },
    "videos": []
  },
  {
    "id": "dsbd-it",
    "name": "Data Science / Big Data",
    "code": "IT-701",
    "branchId": "it",
    "semester": 7,
    "description": "Big Data 5 Vs traits, preprocessing EDA cleaning data visualization, linear algebra hypothesis testing statistics, HDFS MapReduce Hadoop, and NoSQL databases.",
    "resourceCount": 34,
    "overview": {
      "syllabus": [
        "Unit I: Introduction to Data Science & Big Data: Concepts, Characteristics (Volume, Velocity, Variety, Veracity), Data Science Lifecycle, Roles, Stack.",
        "Unit II: Data Preprocessing & Exploratory Data Analysis (EDA): Data Cleaning, Transformation, Summarization, Data Visualization Techniques.",
        "Unit III: Mathematical Foundations: Linear Algebra, Probability, Statistics for Data Science, Hypothesis Testing, Regression Analysis.",
        "Unit IV: Big Data Architecture & Hadoop: Hadoop Ecosystem, HDFS Architecture, MapReduce Framework and Programming Model.",
        "Unit V: NoSQL & Big Data Tools: Introduction to NoSQL Databases (MongoDB, Cassandra), Apache Spark Basics, Data Science Ethics and Privacy."
      ],
      "weightageSummary": "Unit III: Mathematical Foundations: Line typically represents around 40% of overall exam weightage."
    },
    "weightage": [
      {
        "unit": "Unit I: Introduction to Data Science & Big Data: Concepts, Characteristics (Volume, Velocity, Variety, Veracity), Data Science Lifecycle, Roles, Stack.",
        "expectedMarks": 12,
        "topics": [
          {
            "name": "Science implementation details",
            "frequency": 5
          },
          {
            "name": "Characteristics working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit II: Data Preprocessing & Exploratory Data Analysis (EDA): Data Cleaning, Transformation, Summarization, Data Visualization Techniques.",
        "expectedMarks": 14,
        "topics": [
          {
            "name": "Preprocessing implementation details",
            "frequency": 5
          },
          {
            "name": "Exploratory working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit III: Mathematical Foundations: Linear Algebra, Probability, Statistics for Data Science, Hypothesis Testing, Regression Analysis.",
        "expectedMarks": 16,
        "topics": [
          {
            "name": "Mathematical implementation details",
            "frequency": 5
          },
          {
            "name": "Foundations working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit IV: Big Data Architecture & Hadoop: Hadoop Ecosystem, HDFS Architecture, MapReduce Framework and Programming Model.",
        "expectedMarks": 15,
        "topics": [
          {
            "name": "Architecture implementation details",
            "frequency": 5
          },
          {
            "name": "Hadoop working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit V: NoSQL & Big Data Tools: Introduction to NoSQL Databases (MongoDB, Cassandra), Apache Spark Basics, Data Science Ethics and Privacy.",
        "expectedMarks": 13,
        "topics": [
          {
            "name": "Databases implementation details",
            "frequency": 5
          },
          {
            "name": "MongoDB working parameters",
            "frequency": 4
          }
        ]
      }
    ],
    "repeatedQuestions": [
      {
        "id": "rq-dsbd-it-1",
        "question": "Discuss the fundamental concepts of Introduction to Data Science & Big Data: Concepts. How is it implemented/used in Data Science / Big Data?",
        "years": [
          2022,
          2024
        ],
        "frequency": 2,
        "importance": "Very High Probability"
      },
      {
        "id": "rq-dsbd-it-2",
        "question": "Discuss the fundamental concepts of Data Preprocessing & Exploratory Data Analysis (EDA): Data Cleaning. How is it implemented/used in Data Science / Big Data?",
        "years": [
          2023,
          2025
        ],
        "frequency": 3,
        "importance": "High Probability"
      },
      {
        "id": "rq-dsbd-it-3",
        "question": "Discuss the fundamental concepts of Mathematical Foundations: Linear Algebra. How is it implemented/used in Data Science / Big Data?",
        "years": [
          2024
        ],
        "frequency": 4,
        "importance": "Medium Probability"
      }
    ],
    "oneNightRevision": {
      "topQuestions": [
        "Write short notes on key methodologies and design parameters of Data Science / Big Data (Focus on Unit 3).",
        "Write short notes on key methodologies and design parameters of Data Science / Big Data (Focus on Unit 4).",
        "Write short notes on key methodologies and design parameters of Data Science / Big Data (Focus on Unit 5)."
      ],
      "definitions": [
        {
          "term": "Data Science / Big Data",
          "definition": "Big Data 5 Vs traits, preprocessing EDA cleaning data visualization, linear algebra hypothesis testing statistics, HDFS MapReduce Hadoop, and NoSQL databases."
        },
        {
          "term": "Core Principle of IT-701",
          "definition": "The foundational architecture and operational logic that dictates the behavior of Data Science / Big Data in engineering applications."
        }
      ],
      "diagrams": [
        {
          "title": "Data Science / Big Data System Layout",
          "description": "Block diagram displaying the architectural configuration and interface linkages."
        }
      ],
      "formulas": [
        {
          "name": "IT-701 Performance metric",
          "formula": "Complexity = O(f(n))",
          "explanation": "Indicates the asymptotic computational resource requirement as input size n grows."
        }
      ],
      "lastMinuteNotes": [
        "💡 Focus on the structural building blocks of Data Science / Big Data and their practical design constraints.",
        "💡 Review unit-wise previous exam papers and standard notations for numerical stability."
      ]
    },
    "videos": []
  },
  {
    "id": "cc-it",
    "name": "Cloud Computing",
    "code": "IT-702",
    "branchId": "it",
    "semester": 7,
    "description": "IaaS PaaS SaaS service models, hypervisors Docker containerization virtualization, distributed file systems VPC, IAM security encryption, serverless fog edge systems.",
    "resourceCount": 34,
    "overview": {
      "syllabus": [
        "Unit I: Introduction to Cloud Computing: Shift from Parallel/Distributed Computing to Cloud, Cloud Characteristics, Benefits, Challenges.",
        "Unit II: Cloud Computing Architecture: Service Models (IaaS, PaaS, SaaS), Deployment Models (Public, Private, Hybrid, Community), Cloud Infrastructure Management.",
        "Unit III: Virtualization: Concepts, Types of Virtualization (Hypervisors, Full vs Para-virtualization), OS-level Virtualization (Containers, Docker).",
        "Unit IV: Cloud Storage & Resource Management: Distributed File Systems, Cloud Storage Providers, Resource Allocation, Scheduling, Load Balancing.",
        "Unit V: Cloud Security & Future Trends: Cloud Security Risks, Data Security, Identity and Access Management (IAM), Fog/Edge Computing, Serverless Architecture."
      ],
      "weightageSummary": "Unit III: Virtualization: Concepts, Type typically represents around 40% of overall exam weightage."
    },
    "weightage": [
      {
        "unit": "Unit I: Introduction to Cloud Computing: Shift from Parallel/Distributed Computing to Cloud, Cloud Characteristics, Benefits, Challenges.",
        "expectedMarks": 12,
        "topics": [
          {
            "name": "Computing implementation details",
            "frequency": 5
          },
          {
            "name": "Parallel working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit II: Cloud Computing Architecture: Service Models (IaaS, PaaS, SaaS), Deployment Models (Public, Private, Hybrid, Community), Cloud Infrastructure Management.",
        "expectedMarks": 14,
        "topics": [
          {
            "name": "Computing implementation details",
            "frequency": 5
          },
          {
            "name": "Architecture working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit III: Virtualization: Concepts, Types of Virtualization (Hypervisors, Full vs Para-virtualization), OS-level Virtualization (Containers, Docker).",
        "expectedMarks": 16,
        "topics": [
          {
            "name": "Virtualization implementation details",
            "frequency": 5
          },
          {
            "name": "Hypervisors working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit IV: Cloud Storage & Resource Management: Distributed File Systems, Cloud Storage Providers, Resource Allocation, Scheduling, Load Balancing.",
        "expectedMarks": 15,
        "topics": [
          {
            "name": "Storage implementation details",
            "frequency": 5
          },
          {
            "name": "Resource working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit V: Cloud Security & Future Trends: Cloud Security Risks, Data Security, Identity and Access Management (IAM), Fog/Edge Computing, Serverless Architecture.",
        "expectedMarks": 13,
        "topics": [
          {
            "name": "Security implementation details",
            "frequency": 5
          },
          {
            "name": "Future working parameters",
            "frequency": 4
          }
        ]
      }
    ],
    "repeatedQuestions": [
      {
        "id": "rq-cc-it-1",
        "question": "Discuss the fundamental concepts of Introduction to Cloud Computing: Shift from Parallel/Distributed Computing to Cloud. How is it implemented/used in Cloud Computing?",
        "years": [
          2022,
          2024
        ],
        "frequency": 2,
        "importance": "Very High Probability"
      },
      {
        "id": "rq-cc-it-2",
        "question": "Discuss the fundamental concepts of Cloud Computing Architecture: Service Models (IaaS. How is it implemented/used in Cloud Computing?",
        "years": [
          2023,
          2025
        ],
        "frequency": 3,
        "importance": "High Probability"
      },
      {
        "id": "rq-cc-it-3",
        "question": "Discuss the fundamental concepts of Virtualization: Concepts. How is it implemented/used in Cloud Computing?",
        "years": [
          2024
        ],
        "frequency": 4,
        "importance": "Medium Probability"
      }
    ],
    "oneNightRevision": {
      "topQuestions": [
        "Write short notes on key methodologies and design parameters of Cloud Computing (Focus on Unit 3).",
        "Write short notes on key methodologies and design parameters of Cloud Computing (Focus on Unit 4).",
        "Write short notes on key methodologies and design parameters of Cloud Computing (Focus on Unit 5)."
      ],
      "definitions": [
        {
          "term": "Cloud Computing",
          "definition": "IaaS PaaS SaaS service models, hypervisors Docker containerization virtualization, distributed file systems VPC, IAM security encryption, serverless fog edge systems."
        },
        {
          "term": "Core Principle of IT-702",
          "definition": "The foundational architecture and operational logic that dictates the behavior of Cloud Computing in engineering applications."
        }
      ],
      "diagrams": [
        {
          "title": "Cloud Computing System Layout",
          "description": "Block diagram displaying the architectural configuration and interface linkages."
        }
      ],
      "formulas": [
        {
          "name": "IT-702 Performance metric",
          "formula": "Complexity = O(f(n))",
          "explanation": "Indicates the asymptotic computational resource requirement as input size n grows."
        }
      ],
      "lastMinuteNotes": [
        "💡 Focus on the structural building blocks of Cloud Computing and their practical design constraints.",
        "💡 Review unit-wise previous exam papers and standard notations for numerical stability."
      ]
    },
    "videos": []
  },
  {
    "id": "itc-it",
    "name": "Information Theory & Coding",
    "code": "IT-801",
    "branchId": "it",
    "semester": 8,
    "description": "Entropy mutual information measure, Shannon coding Shannon-Fano capacity continuous channels, syndrome decoding block codes, generator cyclic polynomials, and convolutional codes.",
    "resourceCount": 36,
    "overview": {
      "syllabus": [
        "Unit I: Uncertainty and Information: Information Measure, Entropy, Mutual Information, Conditional Entropy, Shannon’s Theorem, Source Coding Theorem.",
        "Unit II: Continuous Channels: Discrete memoryless channels, Channel capacity, Huffman Coding, Shannon-Fano Coding techniques.",
        "Unit III: Linear Block Codes: Matrix description of Linear Block codes, Error detection and correction capabilities, Syndrome Decoding.",
        "Unit IV: Cyclic Codes: Algebraic structure of cyclic codes, Generator polynomials, Feedback Shift Register en-coding, Cyclic Redundancy Check (CRC).",
        "Unit V: Convolutional Codes: Encoding mechanisms, Tree codes, Trellis codes, Viterbi Decoding Algorithm basics."
      ],
      "weightageSummary": "Unit III: Linear Block Codes: Matrix des typically represents around 40% of overall exam weightage."
    },
    "weightage": [
      {
        "unit": "Unit I: Uncertainty and Information: Information Measure, Entropy, Mutual Information, Conditional Entropy, Shannon’s Theorem, Source Coding Theorem.",
        "expectedMarks": 12,
        "topics": [
          {
            "name": "Uncertainty implementation details",
            "frequency": 5
          },
          {
            "name": "Information working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit II: Continuous Channels: Discrete memoryless channels, Channel capacity, Huffman Coding, Shannon-Fano Coding techniques.",
        "expectedMarks": 14,
        "topics": [
          {
            "name": "Continuous implementation details",
            "frequency": 5
          },
          {
            "name": "Channels working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit III: Linear Block Codes: Matrix description of Linear Block codes, Error detection and correction capabilities, Syndrome Decoding.",
        "expectedMarks": 16,
        "topics": [
          {
            "name": "Linear implementation details",
            "frequency": 5
          },
          {
            "name": "Matrix working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit IV: Cyclic Codes: Algebraic structure of cyclic codes, Generator polynomials, Feedback Shift Register en-coding, Cyclic Redundancy Check (CRC).",
        "expectedMarks": 15,
        "topics": [
          {
            "name": "Cyclic implementation details",
            "frequency": 5
          },
          {
            "name": "Algebraic working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit V: Convolutional Codes: Encoding mechanisms, Tree codes, Trellis codes, Viterbi Decoding Algorithm basics.",
        "expectedMarks": 13,
        "topics": [
          {
            "name": "Convolutional implementation details",
            "frequency": 5
          },
          {
            "name": "Encoding working parameters",
            "frequency": 4
          }
        ]
      }
    ],
    "repeatedQuestions": [
      {
        "id": "rq-itc-it-1",
        "question": "Discuss the fundamental concepts of Uncertainty and Information: Information Measure. How is it implemented/used in Information Theory & Coding?",
        "years": [
          2022,
          2024
        ],
        "frequency": 2,
        "importance": "Very High Probability"
      },
      {
        "id": "rq-itc-it-2",
        "question": "Discuss the fundamental concepts of Continuous Channels: Discrete memoryless channels. How is it implemented/used in Information Theory & Coding?",
        "years": [
          2023,
          2025
        ],
        "frequency": 3,
        "importance": "High Probability"
      },
      {
        "id": "rq-itc-it-3",
        "question": "Discuss the fundamental concepts of Linear Block Codes: Matrix description of Linear Block codes. How is it implemented/used in Information Theory & Coding?",
        "years": [
          2024
        ],
        "frequency": 4,
        "importance": "Medium Probability"
      }
    ],
    "oneNightRevision": {
      "topQuestions": [
        "Write short notes on key methodologies and design parameters of Information Theory & Coding (Focus on Unit 3).",
        "Write short notes on key methodologies and design parameters of Information Theory & Coding (Focus on Unit 4).",
        "Write short notes on key methodologies and design parameters of Information Theory & Coding (Focus on Unit 5)."
      ],
      "definitions": [
        {
          "term": "Information Theory & Coding",
          "definition": "Entropy mutual information measure, Shannon coding Shannon-Fano capacity continuous channels, syndrome decoding block codes, generator cyclic polynomials, and convolutional codes."
        },
        {
          "term": "Core Principle of IT-801",
          "definition": "The foundational architecture and operational logic that dictates the behavior of Information Theory & Coding in engineering applications."
        }
      ],
      "diagrams": [
        {
          "title": "Information Theory & Coding System Layout",
          "description": "Block diagram displaying the architectural configuration and interface linkages."
        }
      ],
      "formulas": [
        {
          "name": "IT-801 Performance metric",
          "formula": "Complexity = O(f(n))",
          "explanation": "Indicates the asymptotic computational resource requirement as input size n grows."
        }
      ],
      "lastMinuteNotes": [
        "💡 Focus on the structural building blocks of Information Theory & Coding and their practical design constraints.",
        "💡 Review unit-wise previous exam papers and standard notations for numerical stability."
      ]
    },
    "videos": []
  },
  {
    "id": "iot-it",
    "name": "Internet of Things",
    "code": "IT-802",
    "branchId": "it",
    "semester": 8,
    "description": "IoT design enabling levels, MQTT CoAP application protocols architecture, sensors actuators microcontrollers Pi Arduino hardware, cloud database AWS Azure integration, and security.",
    "resourceCount": 36,
    "overview": {
      "syllabus": [
        "Unit I: Introduction to IoT: Definition, Characteristics, Physical & Logical Design, IoT Enabling Technologies, IoT Levels & Deployment Templates.",
        "Unit II: IoT Architecture & Protocols: IoT Reference Architecture, Device Layer, Network Layer, Application Layer Protocols (MQTT, CoAP, HTTP, AMQP).",
        "Unit III: IoT Hardware & Sensing: Sensors, Actuators, Microcontrollers (Arduino, Raspberry Pi, ESP8266), Interfacing Sensors and Hardware Programming.",
        "Unit IV: IoT Data Analytics & Cloud Integration: Stream Processing, Cloud Storage for IoT, Integrating IoT with Cloud Platforms (AWS IoT, Azure IoT).",
        "Unit V: IoT Security & Case Studies: IoT Security Vulnerabilities, Solutions, Smart Cities, Smart Agriculture, Industrial IoT (IIoT), Home Automation."
      ],
      "weightageSummary": "Unit III: IoT Hardware & Sensing: Sensor typically represents around 40% of overall exam weightage."
    },
    "weightage": [
      {
        "unit": "Unit I: Introduction to IoT: Definition, Characteristics, Physical & Logical Design, IoT Enabling Technologies, IoT Levels & Deployment Templates.",
        "expectedMarks": 12,
        "topics": [
          {
            "name": "Definition implementation details",
            "frequency": 5
          },
          {
            "name": "Characteristics working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit II: IoT Architecture & Protocols: IoT Reference Architecture, Device Layer, Network Layer, Application Layer Protocols (MQTT, CoAP, HTTP, AMQP).",
        "expectedMarks": 14,
        "topics": [
          {
            "name": "Architecture implementation details",
            "frequency": 5
          },
          {
            "name": "Protocols working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit III: IoT Hardware & Sensing: Sensors, Actuators, Microcontrollers (Arduino, Raspberry Pi, ESP8266), Interfacing Sensors and Hardware Programming.",
        "expectedMarks": 16,
        "topics": [
          {
            "name": "Hardware implementation details",
            "frequency": 5
          },
          {
            "name": "Sensing working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit IV: IoT Data Analytics & Cloud Integration: Stream Processing, Cloud Storage for IoT, Integrating IoT with Cloud Platforms (AWS IoT, Azure IoT).",
        "expectedMarks": 15,
        "topics": [
          {
            "name": "Analytics implementation details",
            "frequency": 5
          },
          {
            "name": "Integration working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit V: IoT Security & Case Studies: IoT Security Vulnerabilities, Solutions, Smart Cities, Smart Agriculture, Industrial IoT (IIoT), Home Automation.",
        "expectedMarks": 13,
        "topics": [
          {
            "name": "Security implementation details",
            "frequency": 5
          },
          {
            "name": "Studies working parameters",
            "frequency": 4
          }
        ]
      }
    ],
    "repeatedQuestions": [
      {
        "id": "rq-iot-it-1",
        "question": "Discuss the fundamental concepts of Introduction to IoT: Definition. How is it implemented/used in Internet of Things?",
        "years": [
          2022,
          2024
        ],
        "frequency": 2,
        "importance": "Very High Probability"
      },
      {
        "id": "rq-iot-it-2",
        "question": "Discuss the fundamental concepts of IoT Architecture & Protocols: IoT Reference Architecture. How is it implemented/used in Internet of Things?",
        "years": [
          2023,
          2025
        ],
        "frequency": 3,
        "importance": "High Probability"
      },
      {
        "id": "rq-iot-it-3",
        "question": "Discuss the fundamental concepts of IoT Hardware & Sensing: Sensors. How is it implemented/used in Internet of Things?",
        "years": [
          2024
        ],
        "frequency": 4,
        "importance": "Medium Probability"
      }
    ],
    "oneNightRevision": {
      "topQuestions": [
        "Write short notes on key methodologies and design parameters of Internet of Things (Focus on Unit 3).",
        "Write short notes on key methodologies and design parameters of Internet of Things (Focus on Unit 4).",
        "Write short notes on key methodologies and design parameters of Internet of Things (Focus on Unit 5)."
      ],
      "definitions": [
        {
          "term": "Internet of Things",
          "definition": "IoT design enabling levels, MQTT CoAP application protocols architecture, sensors actuators microcontrollers Pi Arduino hardware, cloud database AWS Azure integration, and security."
        },
        {
          "term": "Core Principle of IT-802",
          "definition": "The foundational architecture and operational logic that dictates the behavior of Internet of Things in engineering applications."
        }
      ],
      "diagrams": [
        {
          "title": "Internet of Things System Layout",
          "description": "Block diagram displaying the architectural configuration and interface linkages."
        }
      ],
      "formulas": [
        {
          "name": "IT-802 Performance metric",
          "formula": "Complexity = O(f(n))",
          "explanation": "Indicates the asymptotic computational resource requirement as input size n grows."
        }
      ],
      "lastMinuteNotes": [
        "💡 Focus on the structural building blocks of Internet of Things and their practical design constraints.",
        "💡 Review unit-wise previous exam papers and standard notations for numerical stability."
      ]
    },
    "videos": []
  },
  {
    "id": "ed-ec",
    "name": "Electronic Devices",
    "code": "EC-302",
    "branchId": "ec",
    "semester": 3,
    "description": "Semiconductor PN junction tunnel diodes, BJT configurations stability, JFET MOSFET operation biasing, small-signal BJT feedback amplifiers, and oscillators.",
    "resourceCount": 26,
    "overview": {
      "syllabus": [
        "Unit I: Semiconductor Diode: PN junction diode, current equations, diffusion and transition capacitances, switching characteristics. Zener diode, Avalanche breakdown, Tunnel diode, LED, Photodiode.",
        "Unit II: Bipolar Junction Transistors (BJT): Working principle, transistor configurations (CB, CE, CC), transistor characteristics, biasing circuits, thermal runaway, and stabilization.",
        "Unit III: Field Effect Transistors (FET): Construction and operation of JFET and MOSFET (Enhancement and Depletion type), V-I characteristics, Biasing of FETs.",
        "Unit IV: Amplifiers and Oscillators: Low-frequency small-signal equivalent circuits of BJT and FET. Feedback amplifiers: Classification, effects of negative feedback. Oscillators: Barkhausen criterion, RC phase shift, Wien bridge, Hartley, and Colpitts oscillators.",
        "Unit V: Special Semiconductor Devices: Operational principles of UJT, SCR, Diac, Triac, Varactor diode, and solar cells."
      ],
      "weightageSummary": "Unit III: Field Effect Transistors (FET) typically represents around 40% of overall exam weightage."
    },
    "weightage": [
      {
        "unit": "Unit I: Semiconductor Diode: PN junction diode, current equations, diffusion and transition capacitances, switching characteristics. Zener diode, Avalanche breakdown, Tunnel diode, LED, Photodiode.",
        "expectedMarks": 12,
        "topics": [
          {
            "name": "Semiconductor implementation details",
            "frequency": 5
          },
          {
            "name": "junction working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit II: Bipolar Junction Transistors (BJT): Working principle, transistor configurations (CB, CE, CC), transistor characteristics, biasing circuits, thermal runaway, and stabilization.",
        "expectedMarks": 14,
        "topics": [
          {
            "name": "Bipolar implementation details",
            "frequency": 5
          },
          {
            "name": "Junction working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit III: Field Effect Transistors (FET): Construction and operation of JFET and MOSFET (Enhancement and Depletion type), V-I characteristics, Biasing of FETs.",
        "expectedMarks": 16,
        "topics": [
          {
            "name": "Effect implementation details",
            "frequency": 5
          },
          {
            "name": "Transistors working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit IV: Amplifiers and Oscillators: Low-frequency small-signal equivalent circuits of BJT and FET. Feedback amplifiers: Classification, effects of negative feedback. Oscillators: Barkhausen criterion, RC phase shift, Wien bridge, Hartley, and Colpitts oscillators.",
        "expectedMarks": 15,
        "topics": [
          {
            "name": "Amplifiers implementation details",
            "frequency": 5
          },
          {
            "name": "Oscillators working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit V: Special Semiconductor Devices: Operational principles of UJT, SCR, Diac, Triac, Varactor diode, and solar cells.",
        "expectedMarks": 13,
        "topics": [
          {
            "name": "Special implementation details",
            "frequency": 5
          },
          {
            "name": "Semiconductor working parameters",
            "frequency": 4
          }
        ]
      }
    ],
    "repeatedQuestions": [
      {
        "id": "rq-ed-ec-1",
        "question": "Discuss the fundamental concepts of Semiconductor Diode: PN junction diode. How is it implemented/used in Electronic Devices?",
        "years": [
          2022,
          2024
        ],
        "frequency": 2,
        "importance": "Very High Probability"
      },
      {
        "id": "rq-ed-ec-2",
        "question": "Discuss the fundamental concepts of Bipolar Junction Transistors (BJT): Working principle. How is it implemented/used in Electronic Devices?",
        "years": [
          2023,
          2025
        ],
        "frequency": 3,
        "importance": "High Probability"
      },
      {
        "id": "rq-ed-ec-3",
        "question": "Discuss the fundamental concepts of Field Effect Transistors (FET): Construction and operation of JFET and MOSFET (Enhancement and Depletion type). How is it implemented/used in Electronic Devices?",
        "years": [
          2024
        ],
        "frequency": 4,
        "importance": "Medium Probability"
      }
    ],
    "oneNightRevision": {
      "topQuestions": [
        "Write short notes on key methodologies and design parameters of Electronic Devices (Focus on Unit 3).",
        "Write short notes on key methodologies and design parameters of Electronic Devices (Focus on Unit 4).",
        "Write short notes on key methodologies and design parameters of Electronic Devices (Focus on Unit 5)."
      ],
      "definitions": [
        {
          "term": "Electronic Devices",
          "definition": "Semiconductor PN junction tunnel diodes, BJT configurations stability, JFET MOSFET operation biasing, small-signal BJT feedback amplifiers, and oscillators."
        },
        {
          "term": "Core Principle of EC-302",
          "definition": "The foundational architecture and operational logic that dictates the behavior of Electronic Devices in engineering applications."
        }
      ],
      "diagrams": [
        {
          "title": "Electronic Devices System Layout",
          "description": "Block diagram displaying the architectural configuration and interface linkages."
        }
      ],
      "formulas": [
        {
          "name": "EC-302 Performance metric",
          "formula": "Complexity = O(f(n))",
          "explanation": "Indicates the asymptotic computational resource requirement as input size n grows."
        }
      ],
      "lastMinuteNotes": [
        "💡 Focus on the structural building blocks of Electronic Devices and their practical design constraints.",
        "💡 Review unit-wise previous exam papers and standard notations for numerical stability."
      ]
    },
    "videos": []
  },
  {
    "id": "dsd-ec",
    "name": "Digital System Design",
    "code": "EC-303",
    "branchId": "ec",
    "semester": 3,
    "description": "Logic gates K-Map minimization Quine-McCluskey, combinational adders comparators multiplexers, sequential edge triggered flip-flops registers counters, sequential Mealy Moore tables, and PLDs.",
    "resourceCount": 26,
    "overview": {
      "syllabus": [
        "Unit I: Number Systems and Logic Gates: Binary, Octal, Hexadecimal, codes (Gray, BCD, Excess-3). Boolean algebra, minimization techniques: K-Map up to 5 variables, Quine-McCluskey method.",
        "Unit II: Combinational Logic Circuits: Adders, Subtractors, Carry Look-Ahead Adder, BCD Adder, Code converters, Multiplexers, Demultiplexers, Encoders, Decoders, Comparators, Parity generators.",
        "Unit III: Sequential Logic Circuits: Latches and Flip-Flops (SR, JK, D, T), Master-Slave configurations, shift registers, counters (Asynchronous, Synchronous, Ring, Johnson).",
        "Unit IV: Synchronous Sequential Circuit Design: State tables, state diagrams, state reduction, state assignment, Mealy and Moore models, sequence detectors.",
        "Unit V: Logic Families and Programmable Logic: TTL, CMOS, ECL characteristics. Programmable Logic Devices: PAL, PLA, Introduction to CPLD and FPGA architectures."
      ],
      "weightageSummary": "Unit III: Sequential Logic Circuits: Lat typically represents around 40% of overall exam weightage."
    },
    "weightage": [
      {
        "unit": "Unit I: Number Systems and Logic Gates: Binary, Octal, Hexadecimal, codes (Gray, BCD, Excess-3). Boolean algebra, minimization techniques: K-Map up to 5 variables, Quine-McCluskey method.",
        "expectedMarks": 12,
        "topics": [
          {
            "name": "Number implementation details",
            "frequency": 5
          },
          {
            "name": "Systems working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit II: Combinational Logic Circuits: Adders, Subtractors, Carry Look-Ahead Adder, BCD Adder, Code converters, Multiplexers, Demultiplexers, Encoders, Decoders, Comparators, Parity generators.",
        "expectedMarks": 14,
        "topics": [
          {
            "name": "Combinational implementation details",
            "frequency": 5
          },
          {
            "name": "Circuits working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit III: Sequential Logic Circuits: Latches and Flip-Flops (SR, JK, D, T), Master-Slave configurations, shift registers, counters (Asynchronous, Synchronous, Ring, Johnson).",
        "expectedMarks": 16,
        "topics": [
          {
            "name": "Sequential implementation details",
            "frequency": 5
          },
          {
            "name": "Circuits working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit IV: Synchronous Sequential Circuit Design: State tables, state diagrams, state reduction, state assignment, Mealy and Moore models, sequence detectors.",
        "expectedMarks": 15,
        "topics": [
          {
            "name": "Synchronous implementation details",
            "frequency": 5
          },
          {
            "name": "Sequential working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit V: Logic Families and Programmable Logic: TTL, CMOS, ECL characteristics. Programmable Logic Devices: PAL, PLA, Introduction to CPLD and FPGA architectures.",
        "expectedMarks": 13,
        "topics": [
          {
            "name": "Families implementation details",
            "frequency": 5
          },
          {
            "name": "Programmable working parameters",
            "frequency": 4
          }
        ]
      }
    ],
    "repeatedQuestions": [
      {
        "id": "rq-dsd-ec-1",
        "question": "Discuss the fundamental concepts of Number Systems and Logic Gates: Binary. How is it implemented/used in Digital System Design?",
        "years": [
          2022,
          2024
        ],
        "frequency": 2,
        "importance": "Very High Probability"
      },
      {
        "id": "rq-dsd-ec-2",
        "question": "Discuss the fundamental concepts of Combinational Logic Circuits: Adders. How is it implemented/used in Digital System Design?",
        "years": [
          2023,
          2025
        ],
        "frequency": 3,
        "importance": "High Probability"
      },
      {
        "id": "rq-dsd-ec-3",
        "question": "Discuss the fundamental concepts of Sequential Logic Circuits: Latches and Flip-Flops (SR. How is it implemented/used in Digital System Design?",
        "years": [
          2024
        ],
        "frequency": 4,
        "importance": "Medium Probability"
      }
    ],
    "oneNightRevision": {
      "topQuestions": [
        "Write short notes on key methodologies and design parameters of Digital System Design (Focus on Unit 3).",
        "Write short notes on key methodologies and design parameters of Digital System Design (Focus on Unit 4).",
        "Write short notes on key methodologies and design parameters of Digital System Design (Focus on Unit 5)."
      ],
      "definitions": [
        {
          "term": "Digital System Design",
          "definition": "Logic gates K-Map minimization Quine-McCluskey, combinational adders comparators multiplexers, sequential edge triggered flip-flops registers counters, sequential Mealy Moore tables, and PLDs."
        },
        {
          "term": "Core Principle of EC-303",
          "definition": "The foundational architecture and operational logic that dictates the behavior of Digital System Design in engineering applications."
        }
      ],
      "diagrams": [
        {
          "title": "Digital System Design System Layout",
          "description": "Block diagram displaying the architectural configuration and interface linkages."
        }
      ],
      "formulas": [
        {
          "name": "EC-303 Performance metric",
          "formula": "Complexity = O(f(n))",
          "explanation": "Indicates the asymptotic computational resource requirement as input size n grows."
        }
      ],
      "lastMinuteNotes": [
        "💡 Focus on the structural building blocks of Digital System Design and their practical design constraints.",
        "💡 Review unit-wise previous exam papers and standard notations for numerical stability."
      ]
    },
    "videos": []
  },
  {
    "id": "na-ec",
    "name": "Network Analysis",
    "code": "EC-304",
    "branchId": "ec",
    "semester": 3,
    "description": "Mesh node network theorems Thevenin Maximum power transfer, transient analysis Laplace transforms, driving point network functions, two-port Z Y ABCD h-parameters, and PRF synthesize.",
    "resourceCount": 26,
    "overview": {
      "syllabus": [
        "Unit I: Network Theorems: Mesh and Node analysis, Linearity, Superposition, Thevenin’s, Norton’s, Maximum Power Transfer, Millman’s, and Reciprocity theorems (AC and DC excitation).",
        "Unit II: Transient Analysis: Initial and final conditions, transient response of RL, RC, and RLC networks to DC and sinusoidal excitations using differential equations and Laplace transforms.",
        "Unit III: Network Functions and Parameters: Driving point and transfer functions, poles and zeros, stability criteria. Two-port network parameters: Z, Y, ABCD, and h-parameters, interrelationships.",
        "Unit IV: Resonance and Coupled Circuits: Series and parallel resonance, bandwidth, Q-factor. Mutual inductance, dot convention, tuned coupled circuits.",
        "Unit V: Network Synthesis: Realizability criteria, Hurwitz polynomials, Positive Real Functions (PRF). Synthesis of LC, RC, and RL networks using Foster and Cauer forms."
      ],
      "weightageSummary": "Unit III: Network Functions and Paramete typically represents around 40% of overall exam weightage."
    },
    "weightage": [
      {
        "unit": "Unit I: Network Theorems: Mesh and Node analysis, Linearity, Superposition, Thevenin’s, Norton’s, Maximum Power Transfer, Millman’s, and Reciprocity theorems (AC and DC excitation).",
        "expectedMarks": 12,
        "topics": [
          {
            "name": "Network implementation details",
            "frequency": 5
          },
          {
            "name": "Theorems working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit II: Transient Analysis: Initial and final conditions, transient response of RL, RC, and RLC networks to DC and sinusoidal excitations using differential equations and Laplace transforms.",
        "expectedMarks": 14,
        "topics": [
          {
            "name": "Transient implementation details",
            "frequency": 5
          },
          {
            "name": "Analysis working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit III: Network Functions and Parameters: Driving point and transfer functions, poles and zeros, stability criteria. Two-port network parameters: Z, Y, ABCD, and h-parameters, interrelationships.",
        "expectedMarks": 16,
        "topics": [
          {
            "name": "Network implementation details",
            "frequency": 5
          },
          {
            "name": "Functions working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit IV: Resonance and Coupled Circuits: Series and parallel resonance, bandwidth, Q-factor. Mutual inductance, dot convention, tuned coupled circuits.",
        "expectedMarks": 15,
        "topics": [
          {
            "name": "Resonance implementation details",
            "frequency": 5
          },
          {
            "name": "Coupled working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit V: Network Synthesis: Realizability criteria, Hurwitz polynomials, Positive Real Functions (PRF). Synthesis of LC, RC, and RL networks using Foster and Cauer forms.",
        "expectedMarks": 13,
        "topics": [
          {
            "name": "Network implementation details",
            "frequency": 5
          },
          {
            "name": "Synthesis working parameters",
            "frequency": 4
          }
        ]
      }
    ],
    "repeatedQuestions": [
      {
        "id": "rq-na-ec-1",
        "question": "Discuss the fundamental concepts of Network Theorems: Mesh and Node analysis. How is it implemented/used in Network Analysis?",
        "years": [
          2022,
          2024
        ],
        "frequency": 2,
        "importance": "Very High Probability"
      },
      {
        "id": "rq-na-ec-2",
        "question": "Discuss the fundamental concepts of Transient Analysis: Initial and final conditions. How is it implemented/used in Network Analysis?",
        "years": [
          2023,
          2025
        ],
        "frequency": 3,
        "importance": "High Probability"
      },
      {
        "id": "rq-na-ec-3",
        "question": "Discuss the fundamental concepts of Network Functions and Parameters: Driving point and transfer functions. How is it implemented/used in Network Analysis?",
        "years": [
          2024
        ],
        "frequency": 4,
        "importance": "Medium Probability"
      }
    ],
    "oneNightRevision": {
      "topQuestions": [
        "Write short notes on key methodologies and design parameters of Network Analysis (Focus on Unit 3).",
        "Write short notes on key methodologies and design parameters of Network Analysis (Focus on Unit 4).",
        "Write short notes on key methodologies and design parameters of Network Analysis (Focus on Unit 5)."
      ],
      "definitions": [
        {
          "term": "Network Analysis",
          "definition": "Mesh node network theorems Thevenin Maximum power transfer, transient analysis Laplace transforms, driving point network functions, two-port Z Y ABCD h-parameters, and PRF synthesize."
        },
        {
          "term": "Core Principle of EC-304",
          "definition": "The foundational architecture and operational logic that dictates the behavior of Network Analysis in engineering applications."
        }
      ],
      "diagrams": [
        {
          "title": "Network Analysis System Layout",
          "description": "Block diagram displaying the architectural configuration and interface linkages."
        }
      ],
      "formulas": [
        {
          "name": "EC-304 Performance metric",
          "formula": "Complexity = O(f(n))",
          "explanation": "Indicates the asymptotic computational resource requirement as input size n grows."
        }
      ],
      "lastMinuteNotes": [
        "💡 Focus on the structural building blocks of Network Analysis and their practical design constraints.",
        "💡 Review unit-wise previous exam papers and standard notations for numerical stability."
      ]
    },
    "videos": []
  },
  {
    "id": "emi-ec",
    "name": "Electronic Measurements & Instrumentation",
    "code": "EC-305",
    "branchId": "ec",
    "semester": 3,
    "description": "PMMC moving iron errors calibration, Wheatstone Maxwell bridges, vertical horizontal DSO CRO measurements Lissajous, LVDT strain gauge piezoelectric transducers, and DVM.",
    "resourceCount": 26,
    "overview": {
      "syllabus": [
        "Unit I: Measurement Errors and Standards: Accuracy, precision, sensitivity, types of errors, statistical analysis. Standard instruments, permanent magnet moving coil (PMMC) and moving iron instruments.",
        "Unit II: Bridges and Generators: DC bridges (Wheatstone, Kelvin), AC bridges (Maxwell, Hay, Schering, Wien). Signal generators, function generators, wave analyzers.",
        "Unit III: Cathode Ray Oscilloscope (CRO): Block diagram, CRT operation, vertical and horizontal deflection systems, measurement of voltage, frequency, and phase (Lissajous patterns), digital storage oscilloscope (DSO).",
        "Unit IV: Transducers: Classification, selection parameters. Resistive (strain gauge), Inductive (LVDT), Capacitive, Piezoelectric, Thermoelectric, and Optoelectronic transducers.",
        "Unit V: Digital Instrumentation & Data Acquisition: Digital voltmeters (DVM), digital frequency counters, data acquisition systems (DAS) architecture, strip chart and X-Y recorders."
      ],
      "weightageSummary": "Unit III: Cathode Ray Oscilloscope (CRO) typically represents around 40% of overall exam weightage."
    },
    "weightage": [
      {
        "unit": "Unit I: Measurement Errors and Standards: Accuracy, precision, sensitivity, types of errors, statistical analysis. Standard instruments, permanent magnet moving coil (PMMC) and moving iron instruments.",
        "expectedMarks": 12,
        "topics": [
          {
            "name": "Measurement implementation details",
            "frequency": 5
          },
          {
            "name": "Errors working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit II: Bridges and Generators: DC bridges (Wheatstone, Kelvin), AC bridges (Maxwell, Hay, Schering, Wien). Signal generators, function generators, wave analyzers.",
        "expectedMarks": 14,
        "topics": [
          {
            "name": "Bridges implementation details",
            "frequency": 5
          },
          {
            "name": "Generators working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit III: Cathode Ray Oscilloscope (CRO): Block diagram, CRT operation, vertical and horizontal deflection systems, measurement of voltage, frequency, and phase (Lissajous patterns), digital storage oscilloscope (DSO).",
        "expectedMarks": 16,
        "topics": [
          {
            "name": "Cathode implementation details",
            "frequency": 5
          },
          {
            "name": "Oscilloscope working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit IV: Transducers: Classification, selection parameters. Resistive (strain gauge), Inductive (LVDT), Capacitive, Piezoelectric, Thermoelectric, and Optoelectronic transducers.",
        "expectedMarks": 15,
        "topics": [
          {
            "name": "Transducers implementation details",
            "frequency": 5
          },
          {
            "name": "Classification working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit V: Digital Instrumentation & Data Acquisition: Digital voltmeters (DVM), digital frequency counters, data acquisition systems (DAS) architecture, strip chart and X-Y recorders.",
        "expectedMarks": 13,
        "topics": [
          {
            "name": "Digital implementation details",
            "frequency": 5
          },
          {
            "name": "Instrumentation working parameters",
            "frequency": 4
          }
        ]
      }
    ],
    "repeatedQuestions": [
      {
        "id": "rq-emi-ec-1",
        "question": "Discuss the fundamental concepts of Measurement Errors and Standards: Accuracy. How is it implemented/used in Electronic Measurements & Instrumentation?",
        "years": [
          2022,
          2024
        ],
        "frequency": 2,
        "importance": "Very High Probability"
      },
      {
        "id": "rq-emi-ec-2",
        "question": "Discuss the fundamental concepts of Bridges and Generators: DC bridges (Wheatstone. How is it implemented/used in Electronic Measurements & Instrumentation?",
        "years": [
          2023,
          2025
        ],
        "frequency": 3,
        "importance": "High Probability"
      },
      {
        "id": "rq-emi-ec-3",
        "question": "Discuss the fundamental concepts of Cathode Ray Oscilloscope (CRO): Block diagram. How is it implemented/used in Electronic Measurements & Instrumentation?",
        "years": [
          2024
        ],
        "frequency": 4,
        "importance": "Medium Probability"
      }
    ],
    "oneNightRevision": {
      "topQuestions": [
        "Write short notes on key methodologies and design parameters of Electronic Measurements & Instrumentation (Focus on Unit 3).",
        "Write short notes on key methodologies and design parameters of Electronic Measurements & Instrumentation (Focus on Unit 4).",
        "Write short notes on key methodologies and design parameters of Electronic Measurements & Instrumentation (Focus on Unit 5)."
      ],
      "definitions": [
        {
          "term": "Electronic Measurements & Instrumentation",
          "definition": "PMMC moving iron errors calibration, Wheatstone Maxwell bridges, vertical horizontal DSO CRO measurements Lissajous, LVDT strain gauge piezoelectric transducers, and DVM."
        },
        {
          "term": "Core Principle of EC-305",
          "definition": "The foundational architecture and operational logic that dictates the behavior of Electronic Measurements & Instrumentation in engineering applications."
        }
      ],
      "diagrams": [
        {
          "title": "Electronic Measurements & Instrumentation System Layout",
          "description": "Block diagram displaying the architectural configuration and interface linkages."
        }
      ],
      "formulas": [
        {
          "name": "EC-305 Performance metric",
          "formula": "Complexity = O(f(n))",
          "explanation": "Indicates the asymptotic computational resource requirement as input size n grows."
        }
      ],
      "lastMinuteNotes": [
        "💡 Focus on the structural building blocks of Electronic Measurements & Instrumentation and their practical design constraints.",
        "💡 Review unit-wise previous exam papers and standard notations for numerical stability."
      ]
    },
    "videos": []
  },
  {
    "id": "ss-ec",
    "name": "Signals & Systems",
    "code": "EC-402",
    "branchId": "ec",
    "semester": 4,
    "description": "Continuous discrete signals system properties, convolution integrals sums continuous discrete LTI systems, CTFT DTFT Fourier frequency, Laplace transform convergence, and Z-transform ROC.",
    "resourceCount": 28,
    "overview": {
      "syllabus": [
        "Unit I: Classification of Signals and Systems: Continuous-time (CT) and Discrete-time (DT) signals, transformation of independent variables. System properties: Linearity, Time-invariance, Causality, Stability, Invertibility.",
        "Unit II: Linear Time-Invariant (LTI) Systems: Continuous and discrete-time LTI systems, convolution integral and convolution sum. Properties of LTI systems, differential and difference equation representations.",
        "Unit III: Fourier Analysis: Fourier series representation of periodic signals. Continuous-Time Fourier Transform (CTFT) and Discrete-Time Fourier Transform (DTFT): Properties, frequency response of LTI systems.",
        "Unit IV: Laplace Transform: Convergence domain (ROC), properties, inverse Laplace transform, solution of differential equations, system function and stability analysis.",
        "Unit V: Z-Transform: Region of Convergence (ROC), properties, inverse Z-transform methods (power series, partial fraction), analysis of DT-LTI systems, stability and causality."
      ],
      "weightageSummary": "Unit III: Fourier Analysis: Fourier seri typically represents around 40% of overall exam weightage."
    },
    "weightage": [
      {
        "unit": "Unit I: Classification of Signals and Systems: Continuous-time (CT) and Discrete-time (DT) signals, transformation of independent variables. System properties: Linearity, Time-invariance, Causality, Stability, Invertibility.",
        "expectedMarks": 12,
        "topics": [
          {
            "name": "Classification implementation details",
            "frequency": 5
          },
          {
            "name": "Signals working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit II: Linear Time-Invariant (LTI) Systems: Continuous and discrete-time LTI systems, convolution integral and convolution sum. Properties of LTI systems, differential and difference equation representations.",
        "expectedMarks": 14,
        "topics": [
          {
            "name": "Linear implementation details",
            "frequency": 5
          },
          {
            "name": "Time-Invariant working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit III: Fourier Analysis: Fourier series representation of periodic signals. Continuous-Time Fourier Transform (CTFT) and Discrete-Time Fourier Transform (DTFT): Properties, frequency response of LTI systems.",
        "expectedMarks": 16,
        "topics": [
          {
            "name": "Fourier implementation details",
            "frequency": 5
          },
          {
            "name": "Analysis working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit IV: Laplace Transform: Convergence domain (ROC), properties, inverse Laplace transform, solution of differential equations, system function and stability analysis.",
        "expectedMarks": 15,
        "topics": [
          {
            "name": "Laplace implementation details",
            "frequency": 5
          },
          {
            "name": "Transform working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit V: Z-Transform: Region of Convergence (ROC), properties, inverse Z-transform methods (power series, partial fraction), analysis of DT-LTI systems, stability and causality.",
        "expectedMarks": 13,
        "topics": [
          {
            "name": "Z-Transform implementation details",
            "frequency": 5
          },
          {
            "name": "Region working parameters",
            "frequency": 4
          }
        ]
      }
    ],
    "repeatedQuestions": [
      {
        "id": "rq-ss-ec-1",
        "question": "Discuss the fundamental concepts of Classification of Signals and Systems: Continuous-time (CT) and Discrete-time (DT) signals. How is it implemented/used in Signals & Systems?",
        "years": [
          2022,
          2024
        ],
        "frequency": 2,
        "importance": "Very High Probability"
      },
      {
        "id": "rq-ss-ec-2",
        "question": "Discuss the fundamental concepts of Linear Time-Invariant (LTI) Systems: Continuous and discrete-time LTI systems. How is it implemented/used in Signals & Systems?",
        "years": [
          2023,
          2025
        ],
        "frequency": 3,
        "importance": "High Probability"
      },
      {
        "id": "rq-ss-ec-3",
        "question": "Discuss the fundamental concepts of Fourier Analysis: Fourier series representation of periodic signals. Continuous-Time Fourier Transform (CTFT) and Discrete-Time Fourier Transform (DTFT): Properties. How is it implemented/used in Signals & Systems?",
        "years": [
          2024
        ],
        "frequency": 4,
        "importance": "Medium Probability"
      }
    ],
    "oneNightRevision": {
      "topQuestions": [
        "Write short notes on key methodologies and design parameters of Signals & Systems (Focus on Unit 3).",
        "Write short notes on key methodologies and design parameters of Signals & Systems (Focus on Unit 4).",
        "Write short notes on key methodologies and design parameters of Signals & Systems (Focus on Unit 5)."
      ],
      "definitions": [
        {
          "term": "Signals & Systems",
          "definition": "Continuous discrete signals system properties, convolution integrals sums continuous discrete LTI systems, CTFT DTFT Fourier frequency, Laplace transform convergence, and Z-transform ROC."
        },
        {
          "term": "Core Principle of EC-402",
          "definition": "The foundational architecture and operational logic that dictates the behavior of Signals & Systems in engineering applications."
        }
      ],
      "diagrams": [
        {
          "title": "Signals & Systems System Layout",
          "description": "Block diagram displaying the architectural configuration and interface linkages."
        }
      ],
      "formulas": [
        {
          "name": "EC-402 Performance metric",
          "formula": "Complexity = O(f(n))",
          "explanation": "Indicates the asymptotic computational resource requirement as input size n grows."
        }
      ],
      "lastMinuteNotes": [
        "💡 Focus on the structural building blocks of Signals & Systems and their practical design constraints.",
        "💡 Review unit-wise previous exam papers and standard notations for numerical stability."
      ]
    },
    "videos": []
  },
  {
    "id": "ac-ec",
    "name": "Analog Communication",
    "code": "EC-403",
    "branchId": "ec",
    "semester": 4,
    "description": "AM DSB SSB passband modulation envelope detection, FM PM angle frequency generation direct indirect, superheterodyne image receivers, noise performance AM FM, and pulse sampling PAM PWM PPM.",
    "resourceCount": 28,
    "overview": {
      "syllabus": [
        "Unit I: Amplitude Modulation (AM): Need for modulation. Generation and demodulation of AM, DSB-SC, SSB, and VSB signals. Envelope detector, coherent detection. Baseband and passband signal properties.",
        "Unit II: Angle Modulation: Frequency Modulation (FM) and Phase Modulation (PM), narrow-band and wide-band FM. Generation of FM (Direct and Indirect methods), FM demodulators (Balanced slope detector, Foster-Seeley discriminator, Ratio detector).",
        "Unit III: Radio Transmitters and Receivers: AM transmitters, FM transmitters. Receiver characteristics: Sensitivity, selectivity, fidelity. Superheterodyne receiver structure, Intermediate Frequency (IF), image frequency rejection.",
        "Unit IV: Noise in Communication Systems: Sources of noise, white noise, noise temperature, noise figure. Noise performance analysis in AM, DSB-SC, SSB, and FM receivers. Pre-emphasis and de-emphasis.",
        "Unit V: Pulse Modulation: Sampling theorem for low-pass and band-pass signals. Generation and demodulation of Pulse Amplitude Modulation (PAM), Pulse Width Modulation (PWM), and Pulse Position Modulation (PPM)."
      ],
      "weightageSummary": "Unit III: Radio Transmitters and Receive typically represents around 40% of overall exam weightage."
    },
    "weightage": [
      {
        "unit": "Unit I: Amplitude Modulation (AM): Need for modulation. Generation and demodulation of AM, DSB-SC, SSB, and VSB signals. Envelope detector, coherent detection. Baseband and passband signal properties.",
        "expectedMarks": 12,
        "topics": [
          {
            "name": "Amplitude implementation details",
            "frequency": 5
          },
          {
            "name": "Modulation working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit II: Angle Modulation: Frequency Modulation (FM) and Phase Modulation (PM), narrow-band and wide-band FM. Generation of FM (Direct and Indirect methods), FM demodulators (Balanced slope detector, Foster-Seeley discriminator, Ratio detector).",
        "expectedMarks": 14,
        "topics": [
          {
            "name": "Modulation implementation details",
            "frequency": 5
          },
          {
            "name": "Frequency working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit III: Radio Transmitters and Receivers: AM transmitters, FM transmitters. Receiver characteristics: Sensitivity, selectivity, fidelity. Superheterodyne receiver structure, Intermediate Frequency (IF), image frequency rejection.",
        "expectedMarks": 16,
        "topics": [
          {
            "name": "Transmitters implementation details",
            "frequency": 5
          },
          {
            "name": "Receivers working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit IV: Noise in Communication Systems: Sources of noise, white noise, noise temperature, noise figure. Noise performance analysis in AM, DSB-SC, SSB, and FM receivers. Pre-emphasis and de-emphasis.",
        "expectedMarks": 15,
        "topics": [
          {
            "name": "Communication implementation details",
            "frequency": 5
          },
          {
            "name": "Systems working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit V: Pulse Modulation: Sampling theorem for low-pass and band-pass signals. Generation and demodulation of Pulse Amplitude Modulation (PAM), Pulse Width Modulation (PWM), and Pulse Position Modulation (PPM).",
        "expectedMarks": 13,
        "topics": [
          {
            "name": "Modulation implementation details",
            "frequency": 5
          },
          {
            "name": "Sampling working parameters",
            "frequency": 4
          }
        ]
      }
    ],
    "repeatedQuestions": [
      {
        "id": "rq-ac-ec-1",
        "question": "Discuss the fundamental concepts of Amplitude Modulation (AM): Need for modulation. Generation and demodulation of AM. How is it implemented/used in Analog Communication?",
        "years": [
          2022,
          2024
        ],
        "frequency": 2,
        "importance": "Very High Probability"
      },
      {
        "id": "rq-ac-ec-2",
        "question": "Discuss the fundamental concepts of Angle Modulation: Frequency Modulation (FM) and Phase Modulation (PM). How is it implemented/used in Analog Communication?",
        "years": [
          2023,
          2025
        ],
        "frequency": 3,
        "importance": "High Probability"
      },
      {
        "id": "rq-ac-ec-3",
        "question": "Discuss the fundamental concepts of Radio Transmitters and Receivers: AM transmitters. How is it implemented/used in Analog Communication?",
        "years": [
          2024
        ],
        "frequency": 4,
        "importance": "Medium Probability"
      }
    ],
    "oneNightRevision": {
      "topQuestions": [
        "Write short notes on key methodologies and design parameters of Analog Communication (Focus on Unit 3).",
        "Write short notes on key methodologies and design parameters of Analog Communication (Focus on Unit 4).",
        "Write short notes on key methodologies and design parameters of Analog Communication (Focus on Unit 5)."
      ],
      "definitions": [
        {
          "term": "Analog Communication",
          "definition": "AM DSB SSB passband modulation envelope detection, FM PM angle frequency generation direct indirect, superheterodyne image receivers, noise performance AM FM, and pulse sampling PAM PWM PPM."
        },
        {
          "term": "Core Principle of EC-403",
          "definition": "The foundational architecture and operational logic that dictates the behavior of Analog Communication in engineering applications."
        }
      ],
      "diagrams": [
        {
          "title": "Analog Communication System Layout",
          "description": "Block diagram displaying the architectural configuration and interface linkages."
        }
      ],
      "formulas": [
        {
          "name": "EC-403 Performance metric",
          "formula": "Complexity = O(f(n))",
          "explanation": "Indicates the asymptotic computational resource requirement as input size n grows."
        }
      ],
      "lastMinuteNotes": [
        "💡 Focus on the structural building blocks of Analog Communication and their practical design constraints.",
        "💡 Review unit-wise previous exam papers and standard notations for numerical stability."
      ]
    },
    "videos": []
  },
  {
    "id": "anc-ec",
    "name": "Analog Circuits",
    "code": "EC-404",
    "branchId": "ec",
    "semester": 4,
    "description": "Ideal practical Op-Amp slew rate offset, summing differentiator integrator instrumentation configurations, Schmitt trigger peak log comparators, IC 555 timer multivibrators, and regulators.",
    "resourceCount": 28,
    "overview": {
      "syllabus": [
        "Unit I: Operational Amplifier (Op-Amp) Characteristics: Ideal op-amp parameters, block diagram, equivalent circuit. Practical op-amp: Input bias current, input offset voltage, slew rate, CMRR. Frequency response and compensation.",
        "Unit II: Linear Applications of Op-Amp: Inverting and non-inverting amplifiers, voltage follower, summing amplifier, differentiator, integrator, instrumentation amplifier, V-to-I and I-to-V converters.",
        "Unit III: Non-linear Applications of Op-Amp: Comparators, Schmitt trigger, precision rectifiers, peak detectors, log and antilog amplifiers, sample and hold circuits.",
        "Unit IV: Waveform Generators and Timers: Astable, monostable, and bistable multivibrators using Op-Amps. IC 555 timer: Block diagram, functional operation, applications as astable and monostable multivibrators.",
        "Unit V: Active Filters and Voltage Regulators: First and second-order Low-Pass, High-Pass, Band-Pass, and Band-Reject Butterworth filters. Voltage regulators: IC 723, three-terminal regulators, switching regulators basics."
      ],
      "weightageSummary": "Unit III: Non-linear Applications of Op- typically represents around 40% of overall exam weightage."
    },
    "weightage": [
      {
        "unit": "Unit I: Operational Amplifier (Op-Amp) Characteristics: Ideal op-amp parameters, block diagram, equivalent circuit. Practical op-amp: Input bias current, input offset voltage, slew rate, CMRR. Frequency response and compensation.",
        "expectedMarks": 12,
        "topics": [
          {
            "name": "Operational implementation details",
            "frequency": 5
          },
          {
            "name": "Amplifier working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit II: Linear Applications of Op-Amp: Inverting and non-inverting amplifiers, voltage follower, summing amplifier, differentiator, integrator, instrumentation amplifier, V-to-I and I-to-V converters.",
        "expectedMarks": 14,
        "topics": [
          {
            "name": "Linear implementation details",
            "frequency": 5
          },
          {
            "name": "Applications working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit III: Non-linear Applications of Op-Amp: Comparators, Schmitt trigger, precision rectifiers, peak detectors, log and antilog amplifiers, sample and hold circuits.",
        "expectedMarks": 16,
        "topics": [
          {
            "name": "Non-linear implementation details",
            "frequency": 5
          },
          {
            "name": "Applications working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit IV: Waveform Generators and Timers: Astable, monostable, and bistable multivibrators using Op-Amps. IC 555 timer: Block diagram, functional operation, applications as astable and monostable multivibrators.",
        "expectedMarks": 15,
        "topics": [
          {
            "name": "Waveform implementation details",
            "frequency": 5
          },
          {
            "name": "Generators working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit V: Active Filters and Voltage Regulators: First and second-order Low-Pass, High-Pass, Band-Pass, and Band-Reject Butterworth filters. Voltage regulators: IC 723, three-terminal regulators, switching regulators basics.",
        "expectedMarks": 13,
        "topics": [
          {
            "name": "Active implementation details",
            "frequency": 5
          },
          {
            "name": "Filters working parameters",
            "frequency": 4
          }
        ]
      }
    ],
    "repeatedQuestions": [
      {
        "id": "rq-anc-ec-1",
        "question": "Discuss the fundamental concepts of Operational Amplifier (Op-Amp) Characteristics: Ideal op-amp parameters. How is it implemented/used in Analog Circuits?",
        "years": [
          2022,
          2024
        ],
        "frequency": 2,
        "importance": "Very High Probability"
      },
      {
        "id": "rq-anc-ec-2",
        "question": "Discuss the fundamental concepts of Linear Applications of Op-Amp: Inverting and non-inverting amplifiers. How is it implemented/used in Analog Circuits?",
        "years": [
          2023,
          2025
        ],
        "frequency": 3,
        "importance": "High Probability"
      },
      {
        "id": "rq-anc-ec-3",
        "question": "Discuss the fundamental concepts of Non-linear Applications of Op-Amp: Comparators. How is it implemented/used in Analog Circuits?",
        "years": [
          2024
        ],
        "frequency": 4,
        "importance": "Medium Probability"
      }
    ],
    "oneNightRevision": {
      "topQuestions": [
        "Write short notes on key methodologies and design parameters of Analog Circuits (Focus on Unit 3).",
        "Write short notes on key methodologies and design parameters of Analog Circuits (Focus on Unit 4).",
        "Write short notes on key methodologies and design parameters of Analog Circuits (Focus on Unit 5)."
      ],
      "definitions": [
        {
          "term": "Analog Circuits",
          "definition": "Ideal practical Op-Amp slew rate offset, summing differentiator integrator instrumentation configurations, Schmitt trigger peak log comparators, IC 555 timer multivibrators, and regulators."
        },
        {
          "term": "Core Principle of EC-404",
          "definition": "The foundational architecture and operational logic that dictates the behavior of Analog Circuits in engineering applications."
        }
      ],
      "diagrams": [
        {
          "title": "Analog Circuits System Layout",
          "description": "Block diagram displaying the architectural configuration and interface linkages."
        }
      ],
      "formulas": [
        {
          "name": "EC-404 Performance metric",
          "formula": "Complexity = O(f(n))",
          "explanation": "Indicates the asymptotic computational resource requirement as input size n grows."
        }
      ],
      "lastMinuteNotes": [
        "💡 Focus on the structural building blocks of Analog Circuits and their practical design constraints.",
        "💡 Review unit-wise previous exam papers and standard notations for numerical stability."
      ]
    },
    "videos": []
  },
  {
    "id": "cs-ec",
    "name": "Control Systems",
    "code": "EC-405",
    "branchId": "ec",
    "semester": 4,
    "description": "Block diagram reduction Mason SFG models, time response first second order specifications, Routh-Hurwitz stability root locus construction, Bode polar Nyquist plots, and state space matrices.",
    "resourceCount": 28,
    "overview": {
      "syllabus": [
        "Unit I: Modeling of Systems: Open-loop and closed-loop systems, mathematical modeling of mechanical and electrical systems. Block diagram reduction techniques, Signal Flow Graphs (SFG), Mason’s gain formula.",
        "Unit II: Time Domain Analysis: Standard test signals, time response of first and second-order systems. Time domain specifications, steady-state errors, error constants.",
        "Unit III: Stability and Root Locus: Concept of absolute and relative stability. Routh-Hurwitz stability criterion. Root Locus technique: Construction rules, stability analysis.",
        "Unit IV: Frequency Domain Analysis: Frequency domain specifications, correlation between time and frequency response. Bode plots, Polar plots, Nyquist stability criterion, gain margin, phase margin.",
        "Unit V: State Space Analysis: State variables, state-space models of continuous-time systems, state transition matrix, controllability, and observability concepts."
      ],
      "weightageSummary": "Unit III: Stability and Root Locus: Conc typically represents around 40% of overall exam weightage."
    },
    "weightage": [
      {
        "unit": "Unit I: Modeling of Systems: Open-loop and closed-loop systems, mathematical modeling of mechanical and electrical systems. Block diagram reduction techniques, Signal Flow Graphs (SFG), Mason’s gain formula.",
        "expectedMarks": 12,
        "topics": [
          {
            "name": "Modeling implementation details",
            "frequency": 5
          },
          {
            "name": "Systems working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit II: Time Domain Analysis: Standard test signals, time response of first and second-order systems. Time domain specifications, steady-state errors, error constants.",
        "expectedMarks": 14,
        "topics": [
          {
            "name": "Domain implementation details",
            "frequency": 5
          },
          {
            "name": "Analysis working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit III: Stability and Root Locus: Concept of absolute and relative stability. Routh-Hurwitz stability criterion. Root Locus technique: Construction rules, stability analysis.",
        "expectedMarks": 16,
        "topics": [
          {
            "name": "Stability implementation details",
            "frequency": 5
          },
          {
            "name": "absolute working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit IV: Frequency Domain Analysis: Frequency domain specifications, correlation between time and frequency response. Bode plots, Polar plots, Nyquist stability criterion, gain margin, phase margin.",
        "expectedMarks": 15,
        "topics": [
          {
            "name": "Frequency implementation details",
            "frequency": 5
          },
          {
            "name": "Domain working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit V: State Space Analysis: State variables, state-space models of continuous-time systems, state transition matrix, controllability, and observability concepts.",
        "expectedMarks": 13,
        "topics": [
          {
            "name": "Analysis implementation details",
            "frequency": 5
          },
          {
            "name": "variables working parameters",
            "frequency": 4
          }
        ]
      }
    ],
    "repeatedQuestions": [
      {
        "id": "rq-cs-ec-1",
        "question": "Discuss the fundamental concepts of Modeling of Systems: Open-loop and closed-loop systems. How is it implemented/used in Control Systems?",
        "years": [
          2022,
          2024
        ],
        "frequency": 2,
        "importance": "Very High Probability"
      },
      {
        "id": "rq-cs-ec-2",
        "question": "Discuss the fundamental concepts of Time Domain Analysis: Standard test signals. How is it implemented/used in Control Systems?",
        "years": [
          2023,
          2025
        ],
        "frequency": 3,
        "importance": "High Probability"
      },
      {
        "id": "rq-cs-ec-3",
        "question": "Discuss the fundamental concepts of Stability and Root Locus: Concept of absolute and relative stability. Routh-Hurwitz stability criterion. Root Locus technique: Construction rules. How is it implemented/used in Control Systems?",
        "years": [
          2024
        ],
        "frequency": 4,
        "importance": "Medium Probability"
      }
    ],
    "oneNightRevision": {
      "topQuestions": [
        "Write short notes on key methodologies and design parameters of Control Systems (Focus on Unit 3).",
        "Write short notes on key methodologies and design parameters of Control Systems (Focus on Unit 4).",
        "Write short notes on key methodologies and design parameters of Control Systems (Focus on Unit 5)."
      ],
      "definitions": [
        {
          "term": "Control Systems",
          "definition": "Block diagram reduction Mason SFG models, time response first second order specifications, Routh-Hurwitz stability root locus construction, Bode polar Nyquist plots, and state space matrices."
        },
        {
          "term": "Core Principle of EC-405",
          "definition": "The foundational architecture and operational logic that dictates the behavior of Control Systems in engineering applications."
        }
      ],
      "diagrams": [
        {
          "title": "Control Systems System Layout",
          "description": "Block diagram displaying the architectural configuration and interface linkages."
        }
      ],
      "formulas": [
        {
          "name": "EC-405 Performance metric",
          "formula": "Complexity = O(f(n))",
          "explanation": "Indicates the asymptotic computational resource requirement as input size n grows."
        }
      ],
      "lastMinuteNotes": [
        "💡 Focus on the structural building blocks of Control Systems and their practical design constraints.",
        "💡 Review unit-wise previous exam papers and standard notations for numerical stability."
      ]
    },
    "videos": []
  },
  {
    "id": "dsp-ec",
    "name": "Digital Signal Processing",
    "code": "EC-501",
    "branchId": "ec",
    "semester": 5,
    "description": "Circular linear DFT convolution overlap add, DIT DIF Radix 2 FFT algorithms, analog Butterworth Chebyshev design IIR bilinear impulse invariance, windowing FIR Kaiser, and quantization effects.",
    "resourceCount": 30,
    "overview": {
      "syllabus": [
        "Unit I: Discrete Fourier Transform (DFT): Properties of DFT, linear convolution vs circular convolution, computation of circular convolution using DFT, Sectioned convolution (Overlap-add and Overlap-save methods).",
        "Unit II: Fast Fourier Transform (FFT): Computational efficiency, Radix-2 FFT algorithms: Decimation-in-Time (DIT) and Decimation-in-Frequency (DIF) implementations, Inverse FFT.",
        "Unit III: IIR Filter Design: Analogue filter approximations (Butterworth and Chebyshev). Design of digital IIR filters from analogue filters: Impulse Invariance method, Bilinear Transformation method, frequency transformations.",
        "Unit IV: FIR Filter Design: Characteristics of linear phase FIR filters. Design of FIR filters using Windowing techniques (Rectangular, Hanning, Hamming, Blackman, Kaiser), Frequency Sampling method.",
        "Unit V: Realization of Digital Systems & Finite Word Length Effects: Direct form I, Direct form II, Cascade, and Parallel forms for IIR and FIR systems. Quantization noise, input quantization error, product quantization error, limit cycle oscillations."
      ],
      "weightageSummary": "Unit III: IIR Filter Design: Analogue fi typically represents around 40% of overall exam weightage."
    },
    "weightage": [
      {
        "unit": "Unit I: Discrete Fourier Transform (DFT): Properties of DFT, linear convolution vs circular convolution, computation of circular convolution using DFT, Sectioned convolution (Overlap-add and Overlap-save methods).",
        "expectedMarks": 12,
        "topics": [
          {
            "name": "Discrete implementation details",
            "frequency": 5
          },
          {
            "name": "Fourier working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit II: Fast Fourier Transform (FFT): Computational efficiency, Radix-2 FFT algorithms: Decimation-in-Time (DIT) and Decimation-in-Frequency (DIF) implementations, Inverse FFT.",
        "expectedMarks": 14,
        "topics": [
          {
            "name": "Fourier implementation details",
            "frequency": 5
          },
          {
            "name": "Transform working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit III: IIR Filter Design: Analogue filter approximations (Butterworth and Chebyshev). Design of digital IIR filters from analogue filters: Impulse Invariance method, Bilinear Transformation method, frequency transformations.",
        "expectedMarks": 16,
        "topics": [
          {
            "name": "Filter implementation details",
            "frequency": 5
          },
          {
            "name": "Design working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit IV: FIR Filter Design: Characteristics of linear phase FIR filters. Design of FIR filters using Windowing techniques (Rectangular, Hanning, Hamming, Blackman, Kaiser), Frequency Sampling method.",
        "expectedMarks": 15,
        "topics": [
          {
            "name": "Filter implementation details",
            "frequency": 5
          },
          {
            "name": "Design working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit V: Realization of Digital Systems & Finite Word Length Effects: Direct form I, Direct form II, Cascade, and Parallel forms for IIR and FIR systems. Quantization noise, input quantization error, product quantization error, limit cycle oscillations.",
        "expectedMarks": 13,
        "topics": [
          {
            "name": "Realization implementation details",
            "frequency": 5
          },
          {
            "name": "Digital working parameters",
            "frequency": 4
          }
        ]
      }
    ],
    "repeatedQuestions": [
      {
        "id": "rq-dsp-ec-1",
        "question": "Discuss the fundamental concepts of Discrete Fourier Transform (DFT): Properties of DFT. How is it implemented/used in Digital Signal Processing?",
        "years": [
          2022,
          2024
        ],
        "frequency": 2,
        "importance": "Very High Probability"
      },
      {
        "id": "rq-dsp-ec-2",
        "question": "Discuss the fundamental concepts of Fast Fourier Transform (FFT): Computational efficiency. How is it implemented/used in Digital Signal Processing?",
        "years": [
          2023,
          2025
        ],
        "frequency": 3,
        "importance": "High Probability"
      },
      {
        "id": "rq-dsp-ec-3",
        "question": "Discuss the fundamental concepts of IIR Filter Design: Analogue filter approximations (Butterworth and Chebyshev). Design of digital IIR filters from analogue filters: Impulse Invariance method. How is it implemented/used in Digital Signal Processing?",
        "years": [
          2024
        ],
        "frequency": 4,
        "importance": "Medium Probability"
      }
    ],
    "oneNightRevision": {
      "topQuestions": [
        "Write short notes on key methodologies and design parameters of Digital Signal Processing (Focus on Unit 3).",
        "Write short notes on key methodologies and design parameters of Digital Signal Processing (Focus on Unit 4).",
        "Write short notes on key methodologies and design parameters of Digital Signal Processing (Focus on Unit 5)."
      ],
      "definitions": [
        {
          "term": "Digital Signal Processing",
          "definition": "Circular linear DFT convolution overlap add, DIT DIF Radix 2 FFT algorithms, analog Butterworth Chebyshev design IIR bilinear impulse invariance, windowing FIR Kaiser, and quantization effects."
        },
        {
          "term": "Core Principle of EC-501",
          "definition": "The foundational architecture and operational logic that dictates the behavior of Digital Signal Processing in engineering applications."
        }
      ],
      "diagrams": [
        {
          "title": "Digital Signal Processing System Layout",
          "description": "Block diagram displaying the architectural configuration and interface linkages."
        }
      ],
      "formulas": [
        {
          "name": "EC-501 Performance metric",
          "formula": "Complexity = O(f(n))",
          "explanation": "Indicates the asymptotic computational resource requirement as input size n grows."
        }
      ],
      "lastMinuteNotes": [
        "💡 Focus on the structural building blocks of Digital Signal Processing and their practical design constraints.",
        "💡 Review unit-wise previous exam papers and standard notations for numerical stability."
      ]
    },
    "videos": []
  },
  {
    "id": "dc-ec",
    "name": "Digital Communication",
    "code": "EC-502",
    "branchId": "ec",
    "semester": 5,
    "description": "PCM DPCM Delta Modulation ADM companding laws, line coding ISI distortionless eye patterns match filters, ASK FSK PSK DPSK QPSK modulation coherent detection, error probability AWGN, and entropy coding.",
    "resourceCount": 30,
    "overview": {
      "syllabus": [
        "Unit I: Pulse Digital Modulation: Quantization process, uniform and non-uniform quantization, companding laws (μ-law, A-law). Pulse Code Modulation (PCM), Differential PCM (DPCM), Delta Modulation (DM), Adaptive Delta Modulation (ADM).",
        "Unit II: Baseband Pulse Transmission: Line coding formats and properties. Inter-Symbol Interference (ISI), Nyquist’s criterion for distortionless baseband transmission, raised cosine spectrum, Eye patterns. Match filter receiver.",
        "Unit III: Digital Modulation Techniques: Generation and coherent detection of Amplitude Shift Keying (ASK), Frequency Shift Keying (FSK), Phase Shift Keying (PSK), Differential PSK (DPSK), Quadrature PSK (QPSK), M-ary modulation schemes.",
        "Unit IV: Error Performance and Probability: Probability of error derivations for binary ASK, FSK, PSK, and QPSK in the presence of Additive White Gaussian Noise (AWGN). Carrier synchronization methods.",
        "Unit V: Information Theory and Information Capacity: Measure of information, entropy, source coding theorem, Huffman and Shannon-Fano coding. Channel capacity, Shannon-Hartley theorem, mutual information."
      ],
      "weightageSummary": "Unit III: Digital Modulation Techniques: typically represents around 40% of overall exam weightage."
    },
    "weightage": [
      {
        "unit": "Unit I: Pulse Digital Modulation: Quantization process, uniform and non-uniform quantization, companding laws (μ-law, A-law). Pulse Code Modulation (PCM), Differential PCM (DPCM), Delta Modulation (DM), Adaptive Delta Modulation (ADM).",
        "expectedMarks": 12,
        "topics": [
          {
            "name": "Digital implementation details",
            "frequency": 5
          },
          {
            "name": "Modulation working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit II: Baseband Pulse Transmission: Line coding formats and properties. Inter-Symbol Interference (ISI), Nyquist’s criterion for distortionless baseband transmission, raised cosine spectrum, Eye patterns. Match filter receiver.",
        "expectedMarks": 14,
        "topics": [
          {
            "name": "Baseband implementation details",
            "frequency": 5
          },
          {
            "name": "Transmission working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit III: Digital Modulation Techniques: Generation and coherent detection of Amplitude Shift Keying (ASK), Frequency Shift Keying (FSK), Phase Shift Keying (PSK), Differential PSK (DPSK), Quadrature PSK (QPSK), M-ary modulation schemes.",
        "expectedMarks": 16,
        "topics": [
          {
            "name": "Digital implementation details",
            "frequency": 5
          },
          {
            "name": "Modulation working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit IV: Error Performance and Probability: Probability of error derivations for binary ASK, FSK, PSK, and QPSK in the presence of Additive White Gaussian Noise (AWGN). Carrier synchronization methods.",
        "expectedMarks": 15,
        "topics": [
          {
            "name": "Performance implementation details",
            "frequency": 5
          },
          {
            "name": "Probability working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit V: Information Theory and Information Capacity: Measure of information, entropy, source coding theorem, Huffman and Shannon-Fano coding. Channel capacity, Shannon-Hartley theorem, mutual information.",
        "expectedMarks": 13,
        "topics": [
          {
            "name": "Information implementation details",
            "frequency": 5
          },
          {
            "name": "Theory working parameters",
            "frequency": 4
          }
        ]
      }
    ],
    "repeatedQuestions": [
      {
        "id": "rq-dc-ec-1",
        "question": "Discuss the fundamental concepts of Pulse Digital Modulation: Quantization process. How is it implemented/used in Digital Communication?",
        "years": [
          2022,
          2024
        ],
        "frequency": 2,
        "importance": "Very High Probability"
      },
      {
        "id": "rq-dc-ec-2",
        "question": "Discuss the fundamental concepts of Baseband Pulse Transmission: Line coding formats and properties. Inter-Symbol Interference (ISI). How is it implemented/used in Digital Communication?",
        "years": [
          2023,
          2025
        ],
        "frequency": 3,
        "importance": "High Probability"
      },
      {
        "id": "rq-dc-ec-3",
        "question": "Discuss the fundamental concepts of Digital Modulation Techniques: Generation and coherent detection of Amplitude Shift Keying (ASK). How is it implemented/used in Digital Communication?",
        "years": [
          2024
        ],
        "frequency": 4,
        "importance": "Medium Probability"
      }
    ],
    "oneNightRevision": {
      "topQuestions": [
        "Write short notes on key methodologies and design parameters of Digital Communication (Focus on Unit 3).",
        "Write short notes on key methodologies and design parameters of Digital Communication (Focus on Unit 4).",
        "Write short notes on key methodologies and design parameters of Digital Communication (Focus on Unit 5)."
      ],
      "definitions": [
        {
          "term": "Digital Communication",
          "definition": "PCM DPCM Delta Modulation ADM companding laws, line coding ISI distortionless eye patterns match filters, ASK FSK PSK DPSK QPSK modulation coherent detection, error probability AWGN, and entropy coding."
        },
        {
          "term": "Core Principle of EC-502",
          "definition": "The foundational architecture and operational logic that dictates the behavior of Digital Communication in engineering applications."
        }
      ],
      "diagrams": [
        {
          "title": "Digital Communication System Layout",
          "description": "Block diagram displaying the architectural configuration and interface linkages."
        }
      ],
      "formulas": [
        {
          "name": "EC-502 Performance metric",
          "formula": "Complexity = O(f(n))",
          "explanation": "Indicates the asymptotic computational resource requirement as input size n grows."
        }
      ],
      "lastMinuteNotes": [
        "💡 Focus on the structural building blocks of Digital Communication and their practical design constraints.",
        "💡 Review unit-wise previous exam papers and standard notations for numerical stability."
      ]
    },
    "videos": []
  },
  {
    "id": "mm-ec",
    "name": "Microprocessors & Microcontrollers",
    "code": "EC-503",
    "branchId": "ec",
    "semester": 5,
    "description": "8085 architecture pin interrupts timing machine assembly, 8086 segmented registers minimum maximum mode, 8255 PPI 8253 timer 8259 PIC interfacing, and 8051 microcontroller SFRs SFR.",
    "resourceCount": 30,
    "overview": {
      "syllabus": [
        "Unit I: 8085 Microprocessor Architecture: Pin configuration, internal register structure, ALU, timing and control unit. Instruction cycle, machine cycles, T-states, memory interfacing blocks.",
        "Unit II: 8085 Programming and Interrupts: Instruction set, addressing modes, assembly language programming (arithmetic, logical, data transfer operations). Interrupt structure of 8085, vector and non-vector interrupts.",
        "Unit III: 8086 Microprocessor: Internal architecture (BIU and EU), memory segmentation, segment registers, physical address generation. Minimum and maximum mode configurations.",
        "Unit IV: Peripheral Interfacing Blocks: Programmable Peripheral Interface (8255), Programmable Interval Timer (8253/8254), Programmable Interrupt Controller (8259), Keyboard/Display controller (8279) architecture and interfacing patterns.",
        "Unit V: 8051 Microcontroller Architecture: Pin descriptions, internal RAM/ROM layout, special function registers (SFRs), I/O ports. Timers/Counters, serial communication ports, interrupt structure. Basic assembly programming."
      ],
      "weightageSummary": "Unit III: 8086 Microprocessor: Internal  typically represents around 40% of overall exam weightage."
    },
    "weightage": [
      {
        "unit": "Unit I: 8085 Microprocessor Architecture: Pin configuration, internal register structure, ALU, timing and control unit. Instruction cycle, machine cycles, T-states, memory interfacing blocks.",
        "expectedMarks": 12,
        "topics": [
          {
            "name": "Microprocessor implementation details",
            "frequency": 5
          },
          {
            "name": "Architecture working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit II: 8085 Programming and Interrupts: Instruction set, addressing modes, assembly language programming (arithmetic, logical, data transfer operations). Interrupt structure of 8085, vector and non-vector interrupts.",
        "expectedMarks": 14,
        "topics": [
          {
            "name": "Programming implementation details",
            "frequency": 5
          },
          {
            "name": "Interrupts working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit III: 8086 Microprocessor: Internal architecture (BIU and EU), memory segmentation, segment registers, physical address generation. Minimum and maximum mode configurations.",
        "expectedMarks": 16,
        "topics": [
          {
            "name": "Microprocessor implementation details",
            "frequency": 5
          },
          {
            "name": "Internal working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit IV: Peripheral Interfacing Blocks: Programmable Peripheral Interface (8255), Programmable Interval Timer (8253/8254), Programmable Interrupt Controller (8259), Keyboard/Display controller (8279) architecture and interfacing patterns.",
        "expectedMarks": 15,
        "topics": [
          {
            "name": "Peripheral implementation details",
            "frequency": 5
          },
          {
            "name": "Interfacing working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit V: 8051 Microcontroller Architecture: Pin descriptions, internal RAM/ROM layout, special function registers (SFRs), I/O ports. Timers/Counters, serial communication ports, interrupt structure. Basic assembly programming.",
        "expectedMarks": 13,
        "topics": [
          {
            "name": "Microcontroller implementation details",
            "frequency": 5
          },
          {
            "name": "Architecture working parameters",
            "frequency": 4
          }
        ]
      }
    ],
    "repeatedQuestions": [
      {
        "id": "rq-mm-ec-1",
        "question": "Discuss the fundamental concepts of 8085 Microprocessor Architecture: Pin configuration. How is it implemented/used in Microprocessors & Microcontrollers?",
        "years": [
          2022,
          2024
        ],
        "frequency": 2,
        "importance": "Very High Probability"
      },
      {
        "id": "rq-mm-ec-2",
        "question": "Discuss the fundamental concepts of 8085 Programming and Interrupts: Instruction set. How is it implemented/used in Microprocessors & Microcontrollers?",
        "years": [
          2023,
          2025
        ],
        "frequency": 3,
        "importance": "High Probability"
      },
      {
        "id": "rq-mm-ec-3",
        "question": "Discuss the fundamental concepts of 8086 Microprocessor: Internal architecture (BIU and EU). How is it implemented/used in Microprocessors & Microcontrollers?",
        "years": [
          2024
        ],
        "frequency": 4,
        "importance": "Medium Probability"
      }
    ],
    "oneNightRevision": {
      "topQuestions": [
        "Write short notes on key methodologies and design parameters of Microprocessors & Microcontrollers (Focus on Unit 3).",
        "Write short notes on key methodologies and design parameters of Microprocessors & Microcontrollers (Focus on Unit 4).",
        "Write short notes on key methodologies and design parameters of Microprocessors & Microcontrollers (Focus on Unit 5)."
      ],
      "definitions": [
        {
          "term": "Microprocessors & Microcontrollers",
          "definition": "8085 architecture pin interrupts timing machine assembly, 8086 segmented registers minimum maximum mode, 8255 PPI 8253 timer 8259 PIC interfacing, and 8051 microcontroller SFRs SFR."
        },
        {
          "term": "Core Principle of EC-503",
          "definition": "The foundational architecture and operational logic that dictates the behavior of Microprocessors & Microcontrollers in engineering applications."
        }
      ],
      "diagrams": [
        {
          "title": "Microprocessors & Microcontrollers System Layout",
          "description": "Block diagram displaying the architectural configuration and interface linkages."
        }
      ],
      "formulas": [
        {
          "name": "EC-503 Performance metric",
          "formula": "Complexity = O(f(n))",
          "explanation": "Indicates the asymptotic computational resource requirement as input size n grows."
        }
      ],
      "lastMinuteNotes": [
        "💡 Focus on the structural building blocks of Microprocessors & Microcontrollers and their practical design constraints.",
        "💡 Review unit-wise previous exam papers and standard notations for numerical stability."
      ]
    },
    "videos": []
  },
  {
    "id": "cmc-ec",
    "name": "Cellular Mobile Communication",
    "code": "EC-601",
    "branchId": "ec",
    "semester": 6,
    "description": "Frequency reuse handoff cellular systems, propagation fading multi-path Doppler shift, FDMA TDMA CDMA multiple access OFDMA, GSM architecture subsystem, and LTE MIMO 5G structures.",
    "resourceCount": 32,
    "overview": {
      "syllabus": [
        "Unit I: Introduction to Cellular Systems: Evolution of mobile communication generations (1G to 5G baseline). Cellular concept: Frequency reuse, channel assignment strategies, handoff mechanisms, interference mitigation, cell splitting, sectoring.",
        "Unit II: Mobile Radio Propagation: Large-scale path loss, free space propagation model, reflection, diffraction, scattering. Small-scale fading and multipath, Doppler shift, types of fading.",
        "Unit III: Modulation Techniques & Multiple Access: Overview of digital modulation in mobile environments. Multiple access schemes: FDMA, TDMA, CDMA, Space Division Multiple Access (SDMA), Orthogonal Frequency Division Multiple Access (OFDMA).",
        "Unit IV: Cellular Network Architectures: GSM system architecture, radio subsystem, network and switching subsystem, GSM channels, frame structure, signal processing sequence. Introduction to CDMA (IS-95) standard profiles.",
        "Unit V: Modern Wireless Standards: Architecture of 3G (UMTS), 4G (LTE), LTE-Advanced architectures, MIMO system concepts, 5G architectural adjustments, network slicing protocols."
      ],
      "weightageSummary": "Unit III: Modulation Techniques & Multip typically represents around 40% of overall exam weightage."
    },
    "weightage": [
      {
        "unit": "Unit I: Introduction to Cellular Systems: Evolution of mobile communication generations (1G to 5G baseline). Cellular concept: Frequency reuse, channel assignment strategies, handoff mechanisms, interference mitigation, cell splitting, sectoring.",
        "expectedMarks": 12,
        "topics": [
          {
            "name": "Cellular implementation details",
            "frequency": 5
          },
          {
            "name": "Systems working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit II: Mobile Radio Propagation: Large-scale path loss, free space propagation model, reflection, diffraction, scattering. Small-scale fading and multipath, Doppler shift, types of fading.",
        "expectedMarks": 14,
        "topics": [
          {
            "name": "Mobile implementation details",
            "frequency": 5
          },
          {
            "name": "Propagation working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit III: Modulation Techniques & Multiple Access: Overview of digital modulation in mobile environments. Multiple access schemes: FDMA, TDMA, CDMA, Space Division Multiple Access (SDMA), Orthogonal Frequency Division Multiple Access (OFDMA).",
        "expectedMarks": 16,
        "topics": [
          {
            "name": "Modulation implementation details",
            "frequency": 5
          },
          {
            "name": "Techniques working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit IV: Cellular Network Architectures: GSM system architecture, radio subsystem, network and switching subsystem, GSM channels, frame structure, signal processing sequence. Introduction to CDMA (IS-95) standard profiles.",
        "expectedMarks": 15,
        "topics": [
          {
            "name": "Cellular implementation details",
            "frequency": 5
          },
          {
            "name": "Network working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit V: Modern Wireless Standards: Architecture of 3G (UMTS), 4G (LTE), LTE-Advanced architectures, MIMO system concepts, 5G architectural adjustments, network slicing protocols.",
        "expectedMarks": 13,
        "topics": [
          {
            "name": "Modern implementation details",
            "frequency": 5
          },
          {
            "name": "Wireless working parameters",
            "frequency": 4
          }
        ]
      }
    ],
    "repeatedQuestions": [
      {
        "id": "rq-cmc-ec-1",
        "question": "Discuss the fundamental concepts of Introduction to Cellular Systems: Evolution of mobile communication generations (1G to 5G baseline). Cellular concept: Frequency reuse. How is it implemented/used in Cellular Mobile Communication?",
        "years": [
          2022,
          2024
        ],
        "frequency": 2,
        "importance": "Very High Probability"
      },
      {
        "id": "rq-cmc-ec-2",
        "question": "Discuss the fundamental concepts of Mobile Radio Propagation: Large-scale path loss. How is it implemented/used in Cellular Mobile Communication?",
        "years": [
          2023,
          2025
        ],
        "frequency": 3,
        "importance": "High Probability"
      },
      {
        "id": "rq-cmc-ec-3",
        "question": "Discuss the fundamental concepts of Modulation Techniques & Multiple Access: Overview of digital modulation in mobile environments. Multiple access schemes: FDMA. How is it implemented/used in Cellular Mobile Communication?",
        "years": [
          2024
        ],
        "frequency": 4,
        "importance": "Medium Probability"
      }
    ],
    "oneNightRevision": {
      "topQuestions": [
        "Write short notes on key methodologies and design parameters of Cellular Mobile Communication (Focus on Unit 3).",
        "Write short notes on key methodologies and design parameters of Cellular Mobile Communication (Focus on Unit 4).",
        "Write short notes on key methodologies and design parameters of Cellular Mobile Communication (Focus on Unit 5)."
      ],
      "definitions": [
        {
          "term": "Cellular Mobile Communication",
          "definition": "Frequency reuse handoff cellular systems, propagation fading multi-path Doppler shift, FDMA TDMA CDMA multiple access OFDMA, GSM architecture subsystem, and LTE MIMO 5G structures."
        },
        {
          "term": "Core Principle of EC-601",
          "definition": "The foundational architecture and operational logic that dictates the behavior of Cellular Mobile Communication in engineering applications."
        }
      ],
      "diagrams": [
        {
          "title": "Cellular Mobile Communication System Layout",
          "description": "Block diagram displaying the architectural configuration and interface linkages."
        }
      ],
      "formulas": [
        {
          "name": "EC-601 Performance metric",
          "formula": "Complexity = O(f(n))",
          "explanation": "Indicates the asymptotic computational resource requirement as input size n grows."
        }
      ],
      "lastMinuteNotes": [
        "💡 Focus on the structural building blocks of Cellular Mobile Communication and their practical design constraints.",
        "💡 Review unit-wise previous exam papers and standard notations for numerical stability."
      ]
    },
    "videos": []
  },
  {
    "id": "eta-ec",
    "name": "Electromagnetic Theory & Antennas",
    "code": "EC-602",
    "branchId": "ec",
    "semester": 6,
    "description": "Maxwell equations boundary Poynting wave plane, transmission line reflection Smith stub, waveguides rectangular TE TM cutoff, dipole radiation antenna parameters directivity Friis, and arrays Yagi.",
    "resourceCount": 32,
    "overview": {
      "syllabus": [
        "Unit I: Maxwell's Equations and EM Waves: Maxwell's equations in differential and integral forms, boundary conditions. Wave equation, plane waves in lossy and lossless media, Poynting vector and theorem.",
        "Unit II: Transmission Lines: Transmission line equations, characteristic impedance, propagation constant, input impedance. Reflection coefficient, VSWR, Smith chart applications, impedance matching using stubs.",
        "Unit III: Waveguides: Rectangular waveguides, solution of wave equations in rectangular coordinates, TE and TM modes, cut-off frequency, guide wavelength, phase and group velocities.",
        "Unit IV: Antenna Fundamentals: Radiation mechanism, potential functions. Radiation fields of a Hertzian dipole, antenna parameters: Radiation pattern, directivity, gain, efficiency, effective aperture, Friis transmission equation.",
        "Unit V: Antenna Arrays and Types: Two-element arrays, N-element uniform linear arrays, broadside and end-fire arrays. Principles of Horn, Parabolic reflector, Microstrip patch, and Yagi-Uda antennas."
      ],
      "weightageSummary": "Unit III: Waveguides: Rectangular wavegu typically represents around 40% of overall exam weightage."
    },
    "weightage": [
      {
        "unit": "Unit I: Maxwell's Equations and EM Waves: Maxwell's equations in differential and integral forms, boundary conditions. Wave equation, plane waves in lossy and lossless media, Poynting vector and theorem.",
        "expectedMarks": 12,
        "topics": [
          {
            "name": "Maxwell implementation details",
            "frequency": 5
          },
          {
            "name": "Equations working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit II: Transmission Lines: Transmission line equations, characteristic impedance, propagation constant, input impedance. Reflection coefficient, VSWR, Smith chart applications, impedance matching using stubs.",
        "expectedMarks": 14,
        "topics": [
          {
            "name": "Transmission implementation details",
            "frequency": 5
          },
          {
            "name": "equations working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit III: Waveguides: Rectangular waveguides, solution of wave equations in rectangular coordinates, TE and TM modes, cut-off frequency, guide wavelength, phase and group velocities.",
        "expectedMarks": 16,
        "topics": [
          {
            "name": "Waveguides implementation details",
            "frequency": 5
          },
          {
            "name": "Rectangular working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit IV: Antenna Fundamentals: Radiation mechanism, potential functions. Radiation fields of a Hertzian dipole, antenna parameters: Radiation pattern, directivity, gain, efficiency, effective aperture, Friis transmission equation.",
        "expectedMarks": 15,
        "topics": [
          {
            "name": "Antenna implementation details",
            "frequency": 5
          },
          {
            "name": "Fundamentals working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit V: Antenna Arrays and Types: Two-element arrays, N-element uniform linear arrays, broadside and end-fire arrays. Principles of Horn, Parabolic reflector, Microstrip patch, and Yagi-Uda antennas.",
        "expectedMarks": 13,
        "topics": [
          {
            "name": "Antenna implementation details",
            "frequency": 5
          },
          {
            "name": "Arrays working parameters",
            "frequency": 4
          }
        ]
      }
    ],
    "repeatedQuestions": [
      {
        "id": "rq-eta-ec-1",
        "question": "Discuss the fundamental concepts of Maxwell's Equations and EM Waves: Maxwell's equations in differential and integral forms. How is it implemented/used in Electromagnetic Theory & Antennas?",
        "years": [
          2022,
          2024
        ],
        "frequency": 2,
        "importance": "Very High Probability"
      },
      {
        "id": "rq-eta-ec-2",
        "question": "Discuss the fundamental concepts of Transmission Lines: Transmission line equations. How is it implemented/used in Electromagnetic Theory & Antennas?",
        "years": [
          2023,
          2025
        ],
        "frequency": 3,
        "importance": "High Probability"
      },
      {
        "id": "rq-eta-ec-3",
        "question": "Discuss the fundamental concepts of Waveguides: Rectangular waveguides. How is it implemented/used in Electromagnetic Theory & Antennas?",
        "years": [
          2024
        ],
        "frequency": 4,
        "importance": "Medium Probability"
      }
    ],
    "oneNightRevision": {
      "topQuestions": [
        "Write short notes on key methodologies and design parameters of Electromagnetic Theory & Antennas (Focus on Unit 3).",
        "Write short notes on key methodologies and design parameters of Electromagnetic Theory & Antennas (Focus on Unit 4).",
        "Write short notes on key methodologies and design parameters of Electromagnetic Theory & Antennas (Focus on Unit 5)."
      ],
      "definitions": [
        {
          "term": "Electromagnetic Theory & Antennas",
          "definition": "Maxwell equations boundary Poynting wave plane, transmission line reflection Smith stub, waveguides rectangular TE TM cutoff, dipole radiation antenna parameters directivity Friis, and arrays Yagi."
        },
        {
          "term": "Core Principle of EC-602",
          "definition": "The foundational architecture and operational logic that dictates the behavior of Electromagnetic Theory & Antennas in engineering applications."
        }
      ],
      "diagrams": [
        {
          "title": "Electromagnetic Theory & Antennas System Layout",
          "description": "Block diagram displaying the architectural configuration and interface linkages."
        }
      ],
      "formulas": [
        {
          "name": "EC-602 Performance metric",
          "formula": "Complexity = O(f(n))",
          "explanation": "Indicates the asymptotic computational resource requirement as input size n grows."
        }
      ],
      "lastMinuteNotes": [
        "💡 Focus on the structural building blocks of Electromagnetic Theory & Antennas and their practical design constraints.",
        "💡 Review unit-wise previous exam papers and standard notations for numerical stability."
      ]
    },
    "videos": []
  },
  {
    "id": "vlsi-ec",
    "name": "CMOS VLSI Design",
    "code": "EC-603",
    "branchId": "ec",
    "semester": 6,
    "description": "MOSFET enhancement depletion threshold body effects, CMOS inverter static dynamic noise margins delay, logic gates XOR transmission gates domino, photolithography fabrication twin tub layout, and SRAM DRAM.",
    "resourceCount": 32,
    "overview": {
      "syllabus": [
        "Unit I: MOS Transistor Theory: MOS structure, enhancement and depletion mode MOSFETs, V-I characteristics, threshold voltage equations. Second-order effects: Body effect, channel length modulation, sub-threshold conduction.",
        "Unit II: CMOS Inverter: DC transfer characteristics, noise margins, static and dynamic power dissipation. Inverter delay, RC delay model, transistor sizing.",
        "Unit III: CMOS Logic Circuit Design: Static CMOS design of combinational gates (AND, OR, NAND, NOR, XOR). Transmission gates, Pass-transistor logic, Dynamic CMOS logic design, domino and dual-rail logic.",
        "Unit IV: VLSI Fabrication Processes: Twin-tub CMOS process flow, photolithography, ion implantation, diffusion, oxidation, metallization, layout design rules (lambda-based), stick diagrams.",
        "Unit V: Sequential and Memory Structures: Static latches and flip-flops, dynamic sequential circuits. Memory architectures: ROM, SRAM, and DRAM cell operations."
      ],
      "weightageSummary": "Unit III: CMOS Logic Circuit Design: Sta typically represents around 40% of overall exam weightage."
    },
    "weightage": [
      {
        "unit": "Unit I: MOS Transistor Theory: MOS structure, enhancement and depletion mode MOSFETs, V-I characteristics, threshold voltage equations. Second-order effects: Body effect, channel length modulation, sub-threshold conduction.",
        "expectedMarks": 12,
        "topics": [
          {
            "name": "Transistor implementation details",
            "frequency": 5
          },
          {
            "name": "Theory working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit II: CMOS Inverter: DC transfer characteristics, noise margins, static and dynamic power dissipation. Inverter delay, RC delay model, transistor sizing.",
        "expectedMarks": 14,
        "topics": [
          {
            "name": "Inverter implementation details",
            "frequency": 5
          },
          {
            "name": "transfer working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit III: CMOS Logic Circuit Design: Static CMOS design of combinational gates (AND, OR, NAND, NOR, XOR). Transmission gates, Pass-transistor logic, Dynamic CMOS logic design, domino and dual-rail logic.",
        "expectedMarks": 16,
        "topics": [
          {
            "name": "Circuit implementation details",
            "frequency": 5
          },
          {
            "name": "Design working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit IV: VLSI Fabrication Processes: Twin-tub CMOS process flow, photolithography, ion implantation, diffusion, oxidation, metallization, layout design rules (lambda-based), stick diagrams.",
        "expectedMarks": 15,
        "topics": [
          {
            "name": "Fabrication implementation details",
            "frequency": 5
          },
          {
            "name": "Processes working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit V: Sequential and Memory Structures: Static latches and flip-flops, dynamic sequential circuits. Memory architectures: ROM, SRAM, and DRAM cell operations.",
        "expectedMarks": 13,
        "topics": [
          {
            "name": "Sequential implementation details",
            "frequency": 5
          },
          {
            "name": "Memory working parameters",
            "frequency": 4
          }
        ]
      }
    ],
    "repeatedQuestions": [
      {
        "id": "rq-vlsi-ec-1",
        "question": "Discuss the fundamental concepts of MOS Transistor Theory: MOS structure. How is it implemented/used in CMOS VLSI Design?",
        "years": [
          2022,
          2024
        ],
        "frequency": 2,
        "importance": "Very High Probability"
      },
      {
        "id": "rq-vlsi-ec-2",
        "question": "Discuss the fundamental concepts of CMOS Inverter: DC transfer characteristics. How is it implemented/used in CMOS VLSI Design?",
        "years": [
          2023,
          2025
        ],
        "frequency": 3,
        "importance": "High Probability"
      },
      {
        "id": "rq-vlsi-ec-3",
        "question": "Discuss the fundamental concepts of CMOS Logic Circuit Design: Static CMOS design of combinational gates (AND. How is it implemented/used in CMOS VLSI Design?",
        "years": [
          2024
        ],
        "frequency": 4,
        "importance": "Medium Probability"
      }
    ],
    "oneNightRevision": {
      "topQuestions": [
        "Write short notes on key methodologies and design parameters of CMOS VLSI Design (Focus on Unit 3).",
        "Write short notes on key methodologies and design parameters of CMOS VLSI Design (Focus on Unit 4).",
        "Write short notes on key methodologies and design parameters of CMOS VLSI Design (Focus on Unit 5)."
      ],
      "definitions": [
        {
          "term": "CMOS VLSI Design",
          "definition": "MOSFET enhancement depletion threshold body effects, CMOS inverter static dynamic noise margins delay, logic gates XOR transmission gates domino, photolithography fabrication twin tub layout, and SRAM DRAM."
        },
        {
          "term": "Core Principle of EC-603",
          "definition": "The foundational architecture and operational logic that dictates the behavior of CMOS VLSI Design in engineering applications."
        }
      ],
      "diagrams": [
        {
          "title": "CMOS VLSI Design System Layout",
          "description": "Block diagram displaying the architectural configuration and interface linkages."
        }
      ],
      "formulas": [
        {
          "name": "EC-603 Performance metric",
          "formula": "Complexity = O(f(n))",
          "explanation": "Indicates the asymptotic computational resource requirement as input size n grows."
        }
      ],
      "lastMinuteNotes": [
        "💡 Focus on the structural building blocks of CMOS VLSI Design and their practical design constraints.",
        "💡 Review unit-wise previous exam papers and standard notations for numerical stability."
      ]
    },
    "videos": []
  },
  {
    "id": "mwe-ec",
    "name": "Microwave Engineering",
    "code": "EC-701",
    "branchId": "ec",
    "semester": 7,
    "description": "Magic Tee directional couplers isolators circulators cavity resonators, S-matrix Reciprocal unitary properties, klystron velocity modulation bunching TWT magnetron, PIN Gunn transit time IMPATT, and measurements.",
    "resourceCount": 34,
    "overview": {
      "syllabus": [
        "Unit I: Microwave Transmission Lines & Components: Cavity resonators, Microwave hybrid circuits: Waveguide tees (Magic Tee), directional couplers, attenuators, phase shifters. Ferrite devices: Isolators, circulators.",
        "Unit II: S-Parameters: Scattering matrix formulation, properties of S-matrix (unitary, reciprocal), S-matrix derivation for multi-port microwave junctions (Tees, Couplers, Circulators).",
        "Unit III: Microwave Tubes: Limitations of conventional tubes at microwave frequencies. Klystrons: Two-cavity klystron, reflex klystron (velocity modulation, bunching process, efficiency). Traveling Wave Tubes (TWT), Magnetron oscillators.",
        "Unit IV: Semiconductor Microwave Devices: PIN diode, Tunnel diode, Gunn diode (Gunn effect, RWH theory, domains). Avalanche transit-time devices: IMPATT and TRAPATT diodes.",
        "Unit V: Microwave Measurements: Microwave bench setup, measurement of frequency, wavelength, VSWR, impedance, attenuation, dielectric constant, and microwave power."
      ],
      "weightageSummary": "Unit III: Microwave Tubes: Limitations o typically represents around 40% of overall exam weightage."
    },
    "weightage": [
      {
        "unit": "Unit I: Microwave Transmission Lines & Components: Cavity resonators, Microwave hybrid circuits: Waveguide tees (Magic Tee), directional couplers, attenuators, phase shifters. Ferrite devices: Isolators, circulators.",
        "expectedMarks": 12,
        "topics": [
          {
            "name": "Microwave implementation details",
            "frequency": 5
          },
          {
            "name": "Transmission working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit II: S-Parameters: Scattering matrix formulation, properties of S-matrix (unitary, reciprocal), S-matrix derivation for multi-port microwave junctions (Tees, Couplers, Circulators).",
        "expectedMarks": 14,
        "topics": [
          {
            "name": "S-Parameters implementation details",
            "frequency": 5
          },
          {
            "name": "Scattering working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit III: Microwave Tubes: Limitations of conventional tubes at microwave frequencies. Klystrons: Two-cavity klystron, reflex klystron (velocity modulation, bunching process, efficiency). Traveling Wave Tubes (TWT), Magnetron oscillators.",
        "expectedMarks": 16,
        "topics": [
          {
            "name": "Microwave implementation details",
            "frequency": 5
          },
          {
            "name": "Limitations working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit IV: Semiconductor Microwave Devices: PIN diode, Tunnel diode, Gunn diode (Gunn effect, RWH theory, domains). Avalanche transit-time devices: IMPATT and TRAPATT diodes.",
        "expectedMarks": 15,
        "topics": [
          {
            "name": "Semiconductor implementation details",
            "frequency": 5
          },
          {
            "name": "Microwave working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit V: Microwave Measurements: Microwave bench setup, measurement of frequency, wavelength, VSWR, impedance, attenuation, dielectric constant, and microwave power.",
        "expectedMarks": 13,
        "topics": [
          {
            "name": "Microwave implementation details",
            "frequency": 5
          },
          {
            "name": "Measurements working parameters",
            "frequency": 4
          }
        ]
      }
    ],
    "repeatedQuestions": [
      {
        "id": "rq-mwe-ec-1",
        "question": "Discuss the fundamental concepts of Microwave Transmission Lines & Components: Cavity resonators. How is it implemented/used in Microwave Engineering?",
        "years": [
          2022,
          2024
        ],
        "frequency": 2,
        "importance": "Very High Probability"
      },
      {
        "id": "rq-mwe-ec-2",
        "question": "Discuss the fundamental concepts of S-Parameters: Scattering matrix formulation. How is it implemented/used in Microwave Engineering?",
        "years": [
          2023,
          2025
        ],
        "frequency": 3,
        "importance": "High Probability"
      },
      {
        "id": "rq-mwe-ec-3",
        "question": "Discuss the fundamental concepts of Microwave Tubes: Limitations of conventional tubes at microwave frequencies. Klystrons: Two-cavity klystron. How is it implemented/used in Microwave Engineering?",
        "years": [
          2024
        ],
        "frequency": 4,
        "importance": "Medium Probability"
      }
    ],
    "oneNightRevision": {
      "topQuestions": [
        "Write short notes on key methodologies and design parameters of Microwave Engineering (Focus on Unit 3).",
        "Write short notes on key methodologies and design parameters of Microwave Engineering (Focus on Unit 4).",
        "Write short notes on key methodologies and design parameters of Microwave Engineering (Focus on Unit 5)."
      ],
      "definitions": [
        {
          "term": "Microwave Engineering",
          "definition": "Magic Tee directional couplers isolators circulators cavity resonators, S-matrix Reciprocal unitary properties, klystron velocity modulation bunching TWT magnetron, PIN Gunn transit time IMPATT, and measurements."
        },
        {
          "term": "Core Principle of EC-701",
          "definition": "The foundational architecture and operational logic that dictates the behavior of Microwave Engineering in engineering applications."
        }
      ],
      "diagrams": [
        {
          "title": "Microwave Engineering System Layout",
          "description": "Block diagram displaying the architectural configuration and interface linkages."
        }
      ],
      "formulas": [
        {
          "name": "EC-701 Performance metric",
          "formula": "Complexity = O(f(n))",
          "explanation": "Indicates the asymptotic computational resource requirement as input size n grows."
        }
      ],
      "lastMinuteNotes": [
        "💡 Focus on the structural building blocks of Microwave Engineering and their practical design constraints.",
        "💡 Review unit-wise previous exam papers and standard notations for numerical stability."
      ]
    },
    "videos": []
  },
  {
    "id": "ofc-ec",
    "name": "Optical Fiber Communication",
    "code": "EC-702",
    "branchId": "ec",
    "semester": 7,
    "description": "Ray theory numerical aperture step graded index multimode step index, attenuation bending absorption dispersion material dispersion, LED Laser structures modulation, APD photodetector Responsivity, and WDM link power.",
    "resourceCount": 34,
    "overview": {
      "syllabus": [
        "Unit I: Optical Fiber Structures and Propagation: Ray theory transmission, total internal reflection, numerical aperture, acceptance angle. Step-index and graded-index fibers, single-mode and multi-mode fibers, V-number.",
        "Unit II: Signal Degradation in Fibers: Attenuation mechanisms: Absorption, scattering, bending losses. Dispersion: Intermodal dispersion, intramodal dispersion (material, waveguide), dispersion-shifted fibers.",
        "Unit III: Optical Sources: Light Emitting Diodes (LED): Structures, modulation characteristics, efficiency. Laser Diodes: Semiconductor laser theory, cavity structures, laser modulation mechanics.",
        "Unit IV: Optical Detectors and Receivers: PIN photodiode, Avalanche Photodiode (APD): Principles, quantum efficiency, responsivity, response time. Receiver structures, noise sources, preamplifier configurations.",
        "Unit V: Optical Link Design & WDM: Link power budget, rise-time budget. Wavelength Division Multiplexing (WDM) concepts, optical couplers, optical amplifiers (EDFA), fiber optic network topologies."
      ],
      "weightageSummary": "Unit III: Optical Sources: Light Emittin typically represents around 40% of overall exam weightage."
    },
    "weightage": [
      {
        "unit": "Unit I: Optical Fiber Structures and Propagation: Ray theory transmission, total internal reflection, numerical aperture, acceptance angle. Step-index and graded-index fibers, single-mode and multi-mode fibers, V-number.",
        "expectedMarks": 12,
        "topics": [
          {
            "name": "Optical implementation details",
            "frequency": 5
          },
          {
            "name": "Structures working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit II: Signal Degradation in Fibers: Attenuation mechanisms: Absorption, scattering, bending losses. Dispersion: Intermodal dispersion, intramodal dispersion (material, waveguide), dispersion-shifted fibers.",
        "expectedMarks": 14,
        "topics": [
          {
            "name": "Signal implementation details",
            "frequency": 5
          },
          {
            "name": "Degradation working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit III: Optical Sources: Light Emitting Diodes (LED): Structures, modulation characteristics, efficiency. Laser Diodes: Semiconductor laser theory, cavity structures, laser modulation mechanics.",
        "expectedMarks": 16,
        "topics": [
          {
            "name": "Optical implementation details",
            "frequency": 5
          },
          {
            "name": "Sources working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit IV: Optical Detectors and Receivers: PIN photodiode, Avalanche Photodiode (APD): Principles, quantum efficiency, responsivity, response time. Receiver structures, noise sources, preamplifier configurations.",
        "expectedMarks": 15,
        "topics": [
          {
            "name": "Optical implementation details",
            "frequency": 5
          },
          {
            "name": "Detectors working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit V: Optical Link Design & WDM: Link power budget, rise-time budget. Wavelength Division Multiplexing (WDM) concepts, optical couplers, optical amplifiers (EDFA), fiber optic network topologies.",
        "expectedMarks": 13,
        "topics": [
          {
            "name": "Optical implementation details",
            "frequency": 5
          },
          {
            "name": "Design working parameters",
            "frequency": 4
          }
        ]
      }
    ],
    "repeatedQuestions": [
      {
        "id": "rq-ofc-ec-1",
        "question": "Discuss the fundamental concepts of Optical Fiber Structures and Propagation: Ray theory transmission. How is it implemented/used in Optical Fiber Communication?",
        "years": [
          2022,
          2024
        ],
        "frequency": 2,
        "importance": "Very High Probability"
      },
      {
        "id": "rq-ofc-ec-2",
        "question": "Discuss the fundamental concepts of Signal Degradation in Fibers: Attenuation mechanisms: Absorption. How is it implemented/used in Optical Fiber Communication?",
        "years": [
          2023,
          2025
        ],
        "frequency": 3,
        "importance": "High Probability"
      },
      {
        "id": "rq-ofc-ec-3",
        "question": "Discuss the fundamental concepts of Optical Sources: Light Emitting Diodes (LED): Structures. How is it implemented/used in Optical Fiber Communication?",
        "years": [
          2024
        ],
        "frequency": 4,
        "importance": "Medium Probability"
      }
    ],
    "oneNightRevision": {
      "topQuestions": [
        "Write short notes on key methodologies and design parameters of Optical Fiber Communication (Focus on Unit 3).",
        "Write short notes on key methodologies and design parameters of Optical Fiber Communication (Focus on Unit 4).",
        "Write short notes on key methodologies and design parameters of Optical Fiber Communication (Focus on Unit 5)."
      ],
      "definitions": [
        {
          "term": "Optical Fiber Communication",
          "definition": "Ray theory numerical aperture step graded index multimode step index, attenuation bending absorption dispersion material dispersion, LED Laser structures modulation, APD photodetector Responsivity, and WDM link power."
        },
        {
          "term": "Core Principle of EC-702",
          "definition": "The foundational architecture and operational logic that dictates the behavior of Optical Fiber Communication in engineering applications."
        }
      ],
      "diagrams": [
        {
          "title": "Optical Fiber Communication System Layout",
          "description": "Block diagram displaying the architectural configuration and interface linkages."
        }
      ],
      "formulas": [
        {
          "name": "EC-702 Performance metric",
          "formula": "Complexity = O(f(n))",
          "explanation": "Indicates the asymptotic computational resource requirement as input size n grows."
        }
      ],
      "lastMinuteNotes": [
        "💡 Focus on the structural building blocks of Optical Fiber Communication and their practical design constraints.",
        "💡 Review unit-wise previous exam papers and standard notations for numerical stability."
      ]
    },
    "videos": []
  },
  {
    "id": "es-ec",
    "name": "Embedded Systems",
    "code": "EC-801",
    "branchId": "ec",
    "semester": 8,
    "description": "Classification embedded units, ARM Cortex profile instruction pipeline Thumb sets, serial UART SPI I2C CAN bus A-to-D D-to-A interfaces, RTOS task states scheduling semaphores, and debuggers emulators.",
    "resourceCount": 36,
    "overview": {
      "syllabus": [
        "Unit I: Introduction to Embedded Systems: Definition, classification, structural units, processor selection parameters, exemplary architectures. Exemplary processors.",
        "Unit II: Advanced Embedded Processor Architecture: ARM Cortex architecture profiles, register structure, instruction pipeline, memory map, ARM/Thumb instruction sets.",
        "Unit III: Interfacing and Bus Communication: Interfacing serial communication links (UART, SPI, I2C), parallel bus structures, USB, CAN bus implementations. Analog-to-Digital and Digital-to-Analog configurations.",
        "Unit IV: Real-Time Operating Systems (RTOS): Concepts, task states, task scheduling algorithms, semaphores, mutexes, message queues, inter-process communication, handling resource synchronization anomalies (Priority Inversion).",
        "Unit V: Embedded Software Development & Testing: Source code compilation links, debuggers, emulators, logic analyzers. Low-power optimization methods for remote terminal nodes."
      ],
      "weightageSummary": "Unit III: Interfacing and Bus Communicat typically represents around 40% of overall exam weightage."
    },
    "weightage": [
      {
        "unit": "Unit I: Introduction to Embedded Systems: Definition, classification, structural units, processor selection parameters, exemplary architectures. Exemplary processors.",
        "expectedMarks": 12,
        "topics": [
          {
            "name": "Embedded implementation details",
            "frequency": 5
          },
          {
            "name": "Systems working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit II: Advanced Embedded Processor Architecture: ARM Cortex architecture profiles, register structure, instruction pipeline, memory map, ARM/Thumb instruction sets.",
        "expectedMarks": 14,
        "topics": [
          {
            "name": "Advanced implementation details",
            "frequency": 5
          },
          {
            "name": "Embedded working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit III: Interfacing and Bus Communication: Interfacing serial communication links (UART, SPI, I2C), parallel bus structures, USB, CAN bus implementations. Analog-to-Digital and Digital-to-Analog configurations.",
        "expectedMarks": 16,
        "topics": [
          {
            "name": "Interfacing implementation details",
            "frequency": 5
          },
          {
            "name": "Communication working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit IV: Real-Time Operating Systems (RTOS): Concepts, task states, task scheduling algorithms, semaphores, mutexes, message queues, inter-process communication, handling resource synchronization anomalies (Priority Inversion).",
        "expectedMarks": 15,
        "topics": [
          {
            "name": "Real-Time implementation details",
            "frequency": 5
          },
          {
            "name": "Operating working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit V: Embedded Software Development & Testing: Source code compilation links, debuggers, emulators, logic analyzers. Low-power optimization methods for remote terminal nodes.",
        "expectedMarks": 13,
        "topics": [
          {
            "name": "Embedded implementation details",
            "frequency": 5
          },
          {
            "name": "Software working parameters",
            "frequency": 4
          }
        ]
      }
    ],
    "repeatedQuestions": [
      {
        "id": "rq-es-ec-1",
        "question": "Discuss the fundamental concepts of Introduction to Embedded Systems: Definition. How is it implemented/used in Embedded Systems?",
        "years": [
          2022,
          2024
        ],
        "frequency": 2,
        "importance": "Very High Probability"
      },
      {
        "id": "rq-es-ec-2",
        "question": "Discuss the fundamental concepts of Advanced Embedded Processor Architecture: ARM Cortex architecture profiles. How is it implemented/used in Embedded Systems?",
        "years": [
          2023,
          2025
        ],
        "frequency": 3,
        "importance": "High Probability"
      },
      {
        "id": "rq-es-ec-3",
        "question": "Discuss the fundamental concepts of Interfacing and Bus Communication: Interfacing serial communication links (UART. How is it implemented/used in Embedded Systems?",
        "years": [
          2024
        ],
        "frequency": 4,
        "importance": "Medium Probability"
      }
    ],
    "oneNightRevision": {
      "topQuestions": [
        "Write short notes on key methodologies and design parameters of Embedded Systems (Focus on Unit 3).",
        "Write short notes on key methodologies and design parameters of Embedded Systems (Focus on Unit 4).",
        "Write short notes on key methodologies and design parameters of Embedded Systems (Focus on Unit 5)."
      ],
      "definitions": [
        {
          "term": "Embedded Systems",
          "definition": "Classification embedded units, ARM Cortex profile instruction pipeline Thumb sets, serial UART SPI I2C CAN bus A-to-D D-to-A interfaces, RTOS task states scheduling semaphores, and debuggers emulators."
        },
        {
          "term": "Core Principle of EC-801",
          "definition": "The foundational architecture and operational logic that dictates the behavior of Embedded Systems in engineering applications."
        }
      ],
      "diagrams": [
        {
          "title": "Embedded Systems System Layout",
          "description": "Block diagram displaying the architectural configuration and interface linkages."
        }
      ],
      "formulas": [
        {
          "name": "EC-801 Performance metric",
          "formula": "Complexity = O(f(n))",
          "explanation": "Indicates the asymptotic computational resource requirement as input size n grows."
        }
      ],
      "lastMinuteNotes": [
        "💡 Focus on the structural building blocks of Embedded Systems and their practical design constraints.",
        "💡 Review unit-wise previous exam papers and standard notations for numerical stability."
      ]
    },
    "videos": []
  },
  {
    "id": "sc-ec",
    "name": "Satellite Communication",
    "code": "EC-802",
    "branchId": "ec",
    "semester": 8,
    "description": "Keplerian orbital mechanics look angles, space transponders transponder TTC&M subsystem, downlink uplink link budget rain attenuation, FDMA TDMA CDMA multiple access, and VSAT DTH GPS.",
    "resourceCount": 36,
    "overview": {
      "syllabus": [
        "Unit I: Satellite Orbits and Mechanics: Kepler's laws, orbital perturbations, orbital elements. Geostationary and non-geostationary orbits, look angle determination, satellite launches.",
        "Unit II: Space Segment and Subsystems: Attitude and orbit control system (AOCS), telemetry, tracking, command and monitoring (TTC&M), power systems, communication subsystems (transponders).",
        "Unit III: Satellite Link Design: Basic transmission theory, system noise temperature, G/T ratio. Downlink design, uplink design, link budgets under rain academic limits.",
        "Unit IV: Satellite Access Techniques: Multiple access structures: Pre-assigned and demand-assigned FDMA, TDMA (frame structure, synchronization), CDMA codes, Random access blocks.",
        "Unit V: Satellite Applications & Navigation: VSAT network architectures, Direct-to-Home (DTH) TV systems. Global Positioning System (GPS): Principle of position determination, space segment, control segment, user segment profiles."
      ],
      "weightageSummary": "Unit III: Satellite Link Design: Basic t typically represents around 40% of overall exam weightage."
    },
    "weightage": [
      {
        "unit": "Unit I: Satellite Orbits and Mechanics: Kepler's laws, orbital perturbations, orbital elements. Geostationary and non-geostationary orbits, look angle determination, satellite launches.",
        "expectedMarks": 12,
        "topics": [
          {
            "name": "Satellite implementation details",
            "frequency": 5
          },
          {
            "name": "Orbits working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit II: Space Segment and Subsystems: Attitude and orbit control system (AOCS), telemetry, tracking, command and monitoring (TTC&M), power systems, communication subsystems (transponders).",
        "expectedMarks": 14,
        "topics": [
          {
            "name": "Segment implementation details",
            "frequency": 5
          },
          {
            "name": "Subsystems working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit III: Satellite Link Design: Basic transmission theory, system noise temperature, G/T ratio. Downlink design, uplink design, link budgets under rain academic limits.",
        "expectedMarks": 16,
        "topics": [
          {
            "name": "Satellite implementation details",
            "frequency": 5
          },
          {
            "name": "Design working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit IV: Satellite Access Techniques: Multiple access structures: Pre-assigned and demand-assigned FDMA, TDMA (frame structure, synchronization), CDMA codes, Random access blocks.",
        "expectedMarks": 15,
        "topics": [
          {
            "name": "Satellite implementation details",
            "frequency": 5
          },
          {
            "name": "Access working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit V: Satellite Applications & Navigation: VSAT network architectures, Direct-to-Home (DTH) TV systems. Global Positioning System (GPS): Principle of position determination, space segment, control segment, user segment profiles.",
        "expectedMarks": 13,
        "topics": [
          {
            "name": "Satellite implementation details",
            "frequency": 5
          },
          {
            "name": "Applications working parameters",
            "frequency": 4
          }
        ]
      }
    ],
    "repeatedQuestions": [
      {
        "id": "rq-sc-ec-1",
        "question": "Discuss the fundamental concepts of Satellite Orbits and Mechanics: Kepler's laws. How is it implemented/used in Satellite Communication?",
        "years": [
          2022,
          2024
        ],
        "frequency": 2,
        "importance": "Very High Probability"
      },
      {
        "id": "rq-sc-ec-2",
        "question": "Discuss the fundamental concepts of Space Segment and Subsystems: Attitude and orbit control system (AOCS). How is it implemented/used in Satellite Communication?",
        "years": [
          2023,
          2025
        ],
        "frequency": 3,
        "importance": "High Probability"
      },
      {
        "id": "rq-sc-ec-3",
        "question": "Discuss the fundamental concepts of Satellite Link Design: Basic transmission theory. How is it implemented/used in Satellite Communication?",
        "years": [
          2024
        ],
        "frequency": 4,
        "importance": "Medium Probability"
      }
    ],
    "oneNightRevision": {
      "topQuestions": [
        "Write short notes on key methodologies and design parameters of Satellite Communication (Focus on Unit 3).",
        "Write short notes on key methodologies and design parameters of Satellite Communication (Focus on Unit 4).",
        "Write short notes on key methodologies and design parameters of Satellite Communication (Focus on Unit 5)."
      ],
      "definitions": [
        {
          "term": "Satellite Communication",
          "definition": "Keplerian orbital mechanics look angles, space transponders transponder TTC&M subsystem, downlink uplink link budget rain attenuation, FDMA TDMA CDMA multiple access, and VSAT DTH GPS."
        },
        {
          "term": "Core Principle of EC-802",
          "definition": "The foundational architecture and operational logic that dictates the behavior of Satellite Communication in engineering applications."
        }
      ],
      "diagrams": [
        {
          "title": "Satellite Communication System Layout",
          "description": "Block diagram displaying the architectural configuration and interface linkages."
        }
      ],
      "formulas": [
        {
          "name": "EC-802 Performance metric",
          "formula": "Complexity = O(f(n))",
          "explanation": "Indicates the asymptotic computational resource requirement as input size n grows."
        }
      ],
      "lastMinuteNotes": [
        "💡 Focus on the structural building blocks of Satellite Communication and their practical design constraints.",
        "💡 Review unit-wise previous exam papers and standard notations for numerical stability."
      ]
    },
    "videos": []
  },
  {
    "id": "ct-ee",
    "name": "Circuit Theory",
    "code": "EX-302",
    "branchId": "ee",
    "semester": 3,
    "description": "Network theorems DC AC, transient response RLC differential equations Laplace, poles zeros driving point network functions, resonance selective dot convention, and Hurwitz PRF Foster Cauer.",
    "resourceCount": 26,
    "overview": {
      "syllabus": [
        "Unit I: Network Theorems: Mesh and Node analysis, Superposition, Thevenin’s, Norton’s, Maximum Power Transfer, Millman’s, and Reciprocity theorems applied to both DC and AC circuits.",
        "Unit II: Transient Analysis: Behavior of circuit elements (R, L, C) under step, ramp, and impulse excitations. Initial and final conditions. Transient response of RL, RC, and RLC circuits using differential equations and Laplace transforms.",
        "Unit III: Network Functions & Two-Port Parameters: Concept of complex frequency, driving point and transfer functions, poles and zeros. Two-port network parameters: Z, Y, ABCD, and h-parameters, their interrelationships and conditions for reciprocity and symmetry.",
        "Unit IV: Resonance & Coupled Circuits: Series and parallel resonance, bandwidth, Q-factor, and selectivity. Coupled circuits: Self and mutual inductance, coefficient of coupling, dot convention, and tuned circuits.",
        "Unit V: Network Synthesis: Realizability criteria for one-port networks, Hurwitz polynomials, Positive Real Functions (PRF). Synthesis of reactive networks (LC, RC, RL) using Foster and Cauer forms."
      ],
      "weightageSummary": "Unit III: Network Functions & Two-Port P typically represents around 40% of overall exam weightage."
    },
    "weightage": [
      {
        "unit": "Unit I: Network Theorems: Mesh and Node analysis, Superposition, Thevenin’s, Norton’s, Maximum Power Transfer, Millman’s, and Reciprocity theorems applied to both DC and AC circuits.",
        "expectedMarks": 12,
        "topics": [
          {
            "name": "Network implementation details",
            "frequency": 5
          },
          {
            "name": "Theorems working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit II: Transient Analysis: Behavior of circuit elements (R, L, C) under step, ramp, and impulse excitations. Initial and final conditions. Transient response of RL, RC, and RLC circuits using differential equations and Laplace transforms.",
        "expectedMarks": 14,
        "topics": [
          {
            "name": "Transient implementation details",
            "frequency": 5
          },
          {
            "name": "Analysis working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit III: Network Functions & Two-Port Parameters: Concept of complex frequency, driving point and transfer functions, poles and zeros. Two-port network parameters: Z, Y, ABCD, and h-parameters, their interrelationships and conditions for reciprocity and symmetry.",
        "expectedMarks": 16,
        "topics": [
          {
            "name": "Network implementation details",
            "frequency": 5
          },
          {
            "name": "Functions working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit IV: Resonance & Coupled Circuits: Series and parallel resonance, bandwidth, Q-factor, and selectivity. Coupled circuits: Self and mutual inductance, coefficient of coupling, dot convention, and tuned circuits.",
        "expectedMarks": 15,
        "topics": [
          {
            "name": "Resonance implementation details",
            "frequency": 5
          },
          {
            "name": "Coupled working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit V: Network Synthesis: Realizability criteria for one-port networks, Hurwitz polynomials, Positive Real Functions (PRF). Synthesis of reactive networks (LC, RC, RL) using Foster and Cauer forms.",
        "expectedMarks": 13,
        "topics": [
          {
            "name": "Network implementation details",
            "frequency": 5
          },
          {
            "name": "Synthesis working parameters",
            "frequency": 4
          }
        ]
      }
    ],
    "repeatedQuestions": [
      {
        "id": "rq-ct-ee-1",
        "question": "Discuss the fundamental concepts of Network Theorems: Mesh and Node analysis. How is it implemented/used in Circuit Theory?",
        "years": [
          2022,
          2024
        ],
        "frequency": 2,
        "importance": "Very High Probability"
      },
      {
        "id": "rq-ct-ee-2",
        "question": "Discuss the fundamental concepts of Transient Analysis: Behavior of circuit elements (R. How is it implemented/used in Circuit Theory?",
        "years": [
          2023,
          2025
        ],
        "frequency": 3,
        "importance": "High Probability"
      },
      {
        "id": "rq-ct-ee-3",
        "question": "Discuss the fundamental concepts of Network Functions & Two-Port Parameters: Concept of complex frequency. How is it implemented/used in Circuit Theory?",
        "years": [
          2024
        ],
        "frequency": 4,
        "importance": "Medium Probability"
      }
    ],
    "oneNightRevision": {
      "topQuestions": [
        "Write short notes on key methodologies and design parameters of Circuit Theory (Focus on Unit 3).",
        "Write short notes on key methodologies and design parameters of Circuit Theory (Focus on Unit 4).",
        "Write short notes on key methodologies and design parameters of Circuit Theory (Focus on Unit 5)."
      ],
      "definitions": [
        {
          "term": "Circuit Theory",
          "definition": "Network theorems DC AC, transient response RLC differential equations Laplace, poles zeros driving point network functions, resonance selective dot convention, and Hurwitz PRF Foster Cauer."
        },
        {
          "term": "Core Principle of EX-302",
          "definition": "The foundational architecture and operational logic that dictates the behavior of Circuit Theory in engineering applications."
        }
      ],
      "diagrams": [
        {
          "title": "Circuit Theory System Layout",
          "description": "Block diagram displaying the architectural configuration and interface linkages."
        }
      ],
      "formulas": [
        {
          "name": "EX-302 Efficiency Formula",
          "formula": "η = (Output Power / Input Power) * 100%",
          "explanation": "Calculates the performance ratio indicating total energy conversion efficiency."
        }
      ],
      "lastMinuteNotes": [
        "💡 Focus on the structural building blocks of Circuit Theory and their practical design constraints.",
        "💡 Review unit-wise previous exam papers and standard notations for numerical stability."
      ]
    },
    "videos": []
  },
  {
    "id": "ae-ee",
    "name": "Analog Electronics",
    "code": "EX-303",
    "branchId": "ee",
    "semester": 3,
    "description": "Semiconductor diode applications rectifier clippers, BJT configurations stability bias h-parameter, JFET MOSFET structures, feedback topologies oscillators Barkhausen, and ideal practical Op-Amp.",
    "resourceCount": 26,
    "overview": {
      "syllabus": [
        "Unit I: Semiconductor Diodes & Applications: Review of PN junction, breakdown mechanisms (Zener and Avalanche). Diode circuits: Clippers, clampers, half-wave, full-wave, and bridge rectifiers with filters. Zener diode as a voltage regulator.",
        "Unit II: Bipolar Junction Transistors (BJT): Operating configurations (CB, CE, CC), V-I characteristics, biasing methods, thermal stability, and thermal runaway. Low-frequency small-signal h-parameter model analysis.",
        "Unit III: Field Effect Transistors (FET): Construction, operation, and characteristics of JFET and MOSFETs (Enhancement and Depletion type). FET biasing and small-signal equivalent models.",
        "Unit IV: Feedback & Oscillator Circuits: Concept of feedback, advantages of negative feedback, classification of feedback topologies. Feedback amplifier analysis. Oscillators: Barkhausen criterion, RC phase shift, Wien bridge, Hartley, and Colpitts configurations.",
        "Unit V: Operational Amplifiers (Op-Amps): Ideal and practical Op-Amp characteristics. Linear applications: Inverting/non-inverting amplifiers, summer, differentiator, integrator, and instrumentation amplifiers. Non-linear applications: Comparators and Schmitt triggers."
      ],
      "weightageSummary": "Unit III: Field Effect Transistors (FET) typically represents around 40% of overall exam weightage."
    },
    "weightage": [
      {
        "unit": "Unit I: Semiconductor Diodes & Applications: Review of PN junction, breakdown mechanisms (Zener and Avalanche). Diode circuits: Clippers, clampers, half-wave, full-wave, and bridge rectifiers with filters. Zener diode as a voltage regulator.",
        "expectedMarks": 12,
        "topics": [
          {
            "name": "Semiconductor implementation details",
            "frequency": 5
          },
          {
            "name": "Diodes working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit II: Bipolar Junction Transistors (BJT): Operating configurations (CB, CE, CC), V-I characteristics, biasing methods, thermal stability, and thermal runaway. Low-frequency small-signal h-parameter model analysis.",
        "expectedMarks": 14,
        "topics": [
          {
            "name": "Bipolar implementation details",
            "frequency": 5
          },
          {
            "name": "Junction working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit III: Field Effect Transistors (FET): Construction, operation, and characteristics of JFET and MOSFETs (Enhancement and Depletion type). FET biasing and small-signal equivalent models.",
        "expectedMarks": 16,
        "topics": [
          {
            "name": "Effect implementation details",
            "frequency": 5
          },
          {
            "name": "Transistors working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit IV: Feedback & Oscillator Circuits: Concept of feedback, advantages of negative feedback, classification of feedback topologies. Feedback amplifier analysis. Oscillators: Barkhausen criterion, RC phase shift, Wien bridge, Hartley, and Colpitts configurations.",
        "expectedMarks": 15,
        "topics": [
          {
            "name": "Feedback implementation details",
            "frequency": 5
          },
          {
            "name": "Oscillator working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit V: Operational Amplifiers (Op-Amps): Ideal and practical Op-Amp characteristics. Linear applications: Inverting/non-inverting amplifiers, summer, differentiator, integrator, and instrumentation amplifiers. Non-linear applications: Comparators and Schmitt triggers.",
        "expectedMarks": 13,
        "topics": [
          {
            "name": "Operational implementation details",
            "frequency": 5
          },
          {
            "name": "Amplifiers working parameters",
            "frequency": 4
          }
        ]
      }
    ],
    "repeatedQuestions": [
      {
        "id": "rq-ae-ee-1",
        "question": "Discuss the fundamental concepts of Semiconductor Diodes & Applications: Review of PN junction. How is it implemented/used in Analog Electronics?",
        "years": [
          2022,
          2024
        ],
        "frequency": 2,
        "importance": "Very High Probability"
      },
      {
        "id": "rq-ae-ee-2",
        "question": "Discuss the fundamental concepts of Bipolar Junction Transistors (BJT): Operating configurations (CB. How is it implemented/used in Analog Electronics?",
        "years": [
          2023,
          2025
        ],
        "frequency": 3,
        "importance": "High Probability"
      },
      {
        "id": "rq-ae-ee-3",
        "question": "Discuss the fundamental concepts of Field Effect Transistors (FET): Construction. How is it implemented/used in Analog Electronics?",
        "years": [
          2024
        ],
        "frequency": 4,
        "importance": "Medium Probability"
      }
    ],
    "oneNightRevision": {
      "topQuestions": [
        "Write short notes on key methodologies and design parameters of Analog Electronics (Focus on Unit 3).",
        "Write short notes on key methodologies and design parameters of Analog Electronics (Focus on Unit 4).",
        "Write short notes on key methodologies and design parameters of Analog Electronics (Focus on Unit 5)."
      ],
      "definitions": [
        {
          "term": "Analog Electronics",
          "definition": "Semiconductor diode applications rectifier clippers, BJT configurations stability bias h-parameter, JFET MOSFET structures, feedback topologies oscillators Barkhausen, and ideal practical Op-Amp."
        },
        {
          "term": "Core Principle of EX-303",
          "definition": "The foundational architecture and operational logic that dictates the behavior of Analog Electronics in engineering applications."
        }
      ],
      "diagrams": [
        {
          "title": "Analog Electronics System Layout",
          "description": "Block diagram displaying the architectural configuration and interface linkages."
        }
      ],
      "formulas": [
        {
          "name": "EX-303 Efficiency Formula",
          "formula": "η = (Output Power / Input Power) * 100%",
          "explanation": "Calculates the performance ratio indicating total energy conversion efficiency."
        }
      ],
      "lastMinuteNotes": [
        "💡 Focus on the structural building blocks of Analog Electronics and their practical design constraints.",
        "💡 Review unit-wise previous exam papers and standard notations for numerical stability."
      ]
    },
    "videos": []
  },
  {
    "id": "em1-ee",
    "name": "Electrical Machine-I",
    "code": "EX-304",
    "branchId": "ee",
    "semester": 3,
    "description": "Single phase transformer construction phasor open short circuit, efficiency Sumpner regulation, DC generator motor armature reaction cross demagnetizing commutation, shunt series compounding builds, and starters Swinburne Hopkinson.",
    "resourceCount": 26,
    "overview": {
      "syllabus": [
        "Unit I: Transformers-I: Working principle, construction of single-phase transformers, EMF equation, phasor diagrams at no-load and full-load. Equivalent circuit parameters, open-circuit (OC) and short-circuit (SC) tests.",
        "Unit II: Transformers-II: Efficiency and voltage regulation, all-day efficiency. Polarity test, Sumpner’s test. Three-phase transformers: Core and shell type, connections (Star-Star, Delta-Delta, Star-Delta, Delta-Star), Scott connection, and autotransformers.",
        "Unit III: DC Machines (Fundamentals & Armature Reaction): Constructional details, working principle of DC generators and motors, EMF and torque equations. Armature reaction, demagnetizing and cross-magnetizing ampere-turns, commutation, and interpoles.",
        "Unit IV: DC Generators: Characteristics of shunt, series, and compound generators, parallel operation of DC generators, voltage build-up conditions.",
        "Unit V: DC Motors: Characteristics of shunt, series, and compound motors. Starting of DC motors (3-point and 4-point starters). Speed control methods: Field control and armature control. Testing of DC machines: Swinburne’s test, Hopkinson’s test."
      ],
      "weightageSummary": "Unit III: DC Machines (Fundamentals & Ar typically represents around 40% of overall exam weightage."
    },
    "weightage": [
      {
        "unit": "Unit I: Transformers-I: Working principle, construction of single-phase transformers, EMF equation, phasor diagrams at no-load and full-load. Equivalent circuit parameters, open-circuit (OC) and short-circuit (SC) tests.",
        "expectedMarks": 12,
        "topics": [
          {
            "name": "Transformers-I implementation details",
            "frequency": 5
          },
          {
            "name": "Working working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit II: Transformers-II: Efficiency and voltage regulation, all-day efficiency. Polarity test, Sumpner’s test. Three-phase transformers: Core and shell type, connections (Star-Star, Delta-Delta, Star-Delta, Delta-Star), Scott connection, and autotransformers.",
        "expectedMarks": 14,
        "topics": [
          {
            "name": "Transformers-II implementation details",
            "frequency": 5
          },
          {
            "name": "Efficiency working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit III: DC Machines (Fundamentals & Armature Reaction): Constructional details, working principle of DC generators and motors, EMF and torque equations. Armature reaction, demagnetizing and cross-magnetizing ampere-turns, commutation, and interpoles.",
        "expectedMarks": 16,
        "topics": [
          {
            "name": "Machines implementation details",
            "frequency": 5
          },
          {
            "name": "Fundamentals working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit IV: DC Generators: Characteristics of shunt, series, and compound generators, parallel operation of DC generators, voltage build-up conditions.",
        "expectedMarks": 15,
        "topics": [
          {
            "name": "Generators implementation details",
            "frequency": 5
          },
          {
            "name": "Characteristics working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit V: DC Motors: Characteristics of shunt, series, and compound motors. Starting of DC motors (3-point and 4-point starters). Speed control methods: Field control and armature control. Testing of DC machines: Swinburne’s test, Hopkinson’s test.",
        "expectedMarks": 13,
        "topics": [
          {
            "name": "Motors implementation details",
            "frequency": 5
          },
          {
            "name": "Characteristics working parameters",
            "frequency": 4
          }
        ]
      }
    ],
    "repeatedQuestions": [
      {
        "id": "rq-em1-ee-1",
        "question": "Discuss the fundamental concepts of Transformers-I: Working principle. How is it implemented/used in Electrical Machine-I?",
        "years": [
          2022,
          2024
        ],
        "frequency": 2,
        "importance": "Very High Probability"
      },
      {
        "id": "rq-em1-ee-2",
        "question": "Discuss the fundamental concepts of Transformers-II: Efficiency and voltage regulation. How is it implemented/used in Electrical Machine-I?",
        "years": [
          2023,
          2025
        ],
        "frequency": 3,
        "importance": "High Probability"
      },
      {
        "id": "rq-em1-ee-3",
        "question": "Discuss the fundamental concepts of DC Machines (Fundamentals & Armature Reaction): Constructional details. How is it implemented/used in Electrical Machine-I?",
        "years": [
          2024
        ],
        "frequency": 4,
        "importance": "Medium Probability"
      }
    ],
    "oneNightRevision": {
      "topQuestions": [
        "Write short notes on key methodologies and design parameters of Electrical Machine-I (Focus on Unit 3).",
        "Write short notes on key methodologies and design parameters of Electrical Machine-I (Focus on Unit 4).",
        "Write short notes on key methodologies and design parameters of Electrical Machine-I (Focus on Unit 5)."
      ],
      "definitions": [
        {
          "term": "Electrical Machine-I",
          "definition": "Single phase transformer construction phasor open short circuit, efficiency Sumpner regulation, DC generator motor armature reaction cross demagnetizing commutation, shunt series compounding builds, and starters Swinburne Hopkinson."
        },
        {
          "term": "Core Principle of EX-304",
          "definition": "The foundational architecture and operational logic that dictates the behavior of Electrical Machine-I in engineering applications."
        }
      ],
      "diagrams": [
        {
          "title": "Electrical Machine-I System Layout",
          "description": "Block diagram displaying the architectural configuration and interface linkages."
        }
      ],
      "formulas": [
        {
          "name": "EX-304 Efficiency Formula",
          "formula": "η = (Output Power / Input Power) * 100%",
          "explanation": "Calculates the performance ratio indicating total energy conversion efficiency."
        }
      ],
      "lastMinuteNotes": [
        "💡 Focus on the structural building blocks of Electrical Machine-I and their practical design constraints.",
        "💡 Review unit-wise previous exam papers and standard notations for numerical stability."
      ]
    },
    "videos": []
  },
  {
    "id": "de-ee",
    "name": "Digital Electronics",
    "code": "EX-305",
    "branchId": "ee",
    "semester": 3,
    "description": "Number system Gray excess conversion K-Map Quine-McCluskey, combinational logic design subtractors adders decoders, flip-flops shift registers asynchronous synchronous counters, state machines Mealy Moore tables, and RAM ROM PLA CMOS.",
    "resourceCount": 26,
    "overview": {
      "syllabus": [
        "Unit I: Number Systems & Boolean Minimization: Binary, octal, hexadecimal conversion, codes (BCD, Gray, Excess-3). Minimization techniques: K-Map up to 5 variables, Quine-McCluskey tabulation method.",
        "Unit II: Combinational Logic Design: Adders, subtractors, carry look-ahead adder, multiplexers, demultiplexers, encoders, decoders, digital comparators, code converters.",
        "Unit III: Sequential Circuits: Flip-flops (SR, JK, D, T), master-slave configuration, edge-triggering. Conversion of flip-flops. Design of shift registers and counters (asynchronous, synchronous, ring, Johnson).",
        "Unit IV: State Machines & Sequential Logic Design: State tables, state diagrams, state reduction, state assignment. Mealy and Moore sequential circuit models, sequence detectors.",
        "Unit V: Semiconductor Memories & Logic Families: RAM, ROM, EPROM, PLA, PAL. Logic families: TTL, CMOS, ECL operational characteristics and comparative metrics."
      ],
      "weightageSummary": "Unit III: Sequential Circuits: Flip-flop typically represents around 40% of overall exam weightage."
    },
    "weightage": [
      {
        "unit": "Unit I: Number Systems & Boolean Minimization: Binary, octal, hexadecimal conversion, codes (BCD, Gray, Excess-3). Minimization techniques: K-Map up to 5 variables, Quine-McCluskey tabulation method.",
        "expectedMarks": 12,
        "topics": [
          {
            "name": "Number implementation details",
            "frequency": 5
          },
          {
            "name": "Systems working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit II: Combinational Logic Design: Adders, subtractors, carry look-ahead adder, multiplexers, demultiplexers, encoders, decoders, digital comparators, code converters.",
        "expectedMarks": 14,
        "topics": [
          {
            "name": "Combinational implementation details",
            "frequency": 5
          },
          {
            "name": "Design working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit III: Sequential Circuits: Flip-flops (SR, JK, D, T), master-slave configuration, edge-triggering. Conversion of flip-flops. Design of shift registers and counters (asynchronous, synchronous, ring, Johnson).",
        "expectedMarks": 16,
        "topics": [
          {
            "name": "Sequential implementation details",
            "frequency": 5
          },
          {
            "name": "Circuits working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit IV: State Machines & Sequential Logic Design: State tables, state diagrams, state reduction, state assignment. Mealy and Moore sequential circuit models, sequence detectors.",
        "expectedMarks": 15,
        "topics": [
          {
            "name": "Machines implementation details",
            "frequency": 5
          },
          {
            "name": "Sequential working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit V: Semiconductor Memories & Logic Families: RAM, ROM, EPROM, PLA, PAL. Logic families: TTL, CMOS, ECL operational characteristics and comparative metrics.",
        "expectedMarks": 13,
        "topics": [
          {
            "name": "Semiconductor implementation details",
            "frequency": 5
          },
          {
            "name": "Memories working parameters",
            "frequency": 4
          }
        ]
      }
    ],
    "repeatedQuestions": [
      {
        "id": "rq-de-ee-1",
        "question": "Discuss the fundamental concepts of Number Systems & Boolean Minimization: Binary. How is it implemented/used in Digital Electronics?",
        "years": [
          2022,
          2024
        ],
        "frequency": 2,
        "importance": "Very High Probability"
      },
      {
        "id": "rq-de-ee-2",
        "question": "Discuss the fundamental concepts of Combinational Logic Design: Adders. How is it implemented/used in Digital Electronics?",
        "years": [
          2023,
          2025
        ],
        "frequency": 3,
        "importance": "High Probability"
      },
      {
        "id": "rq-de-ee-3",
        "question": "Discuss the fundamental concepts of Sequential Circuits: Flip-flops (SR. How is it implemented/used in Digital Electronics?",
        "years": [
          2024
        ],
        "frequency": 4,
        "importance": "Medium Probability"
      }
    ],
    "oneNightRevision": {
      "topQuestions": [
        "Write short notes on key methodologies and design parameters of Digital Electronics (Focus on Unit 3).",
        "Write short notes on key methodologies and design parameters of Digital Electronics (Focus on Unit 4).",
        "Write short notes on key methodologies and design parameters of Digital Electronics (Focus on Unit 5)."
      ],
      "definitions": [
        {
          "term": "Digital Electronics",
          "definition": "Number system Gray excess conversion K-Map Quine-McCluskey, combinational logic design subtractors adders decoders, flip-flops shift registers asynchronous synchronous counters, state machines Mealy Moore tables, and RAM ROM PLA CMOS."
        },
        {
          "term": "Core Principle of EX-305",
          "definition": "The foundational architecture and operational logic that dictates the behavior of Digital Electronics in engineering applications."
        }
      ],
      "diagrams": [
        {
          "title": "Digital Electronics System Layout",
          "description": "Block diagram displaying the architectural configuration and interface linkages."
        }
      ],
      "formulas": [
        {
          "name": "EX-305 Efficiency Formula",
          "formula": "η = (Output Power / Input Power) * 100%",
          "explanation": "Calculates the performance ratio indicating total energy conversion efficiency."
        }
      ],
      "lastMinuteNotes": [
        "💡 Focus on the structural building blocks of Digital Electronics and their practical design constraints.",
        "💡 Review unit-wise previous exam papers and standard notations for numerical stability."
      ]
    },
    "videos": []
  },
  {
    "id": "m3-ee",
    "name": "Mathematics-III",
    "code": "BT-401",
    "branchId": "ee",
    "semester": 4,
    "description": "Functions complex analytic harmonic C-R equations, Taylor Laurent series residues integration, Regula-Falsi Newton-Raphson finite differences, Simpson Euler RK4 ODE solvers, and vector bases transformation.",
    "resourceCount": 28,
    "overview": {
      "syllabus": [
        "Unit I: Functions of Complex Variables: Analytic Functions, Cauchy-Riemann Equations, Harmonic Functions, Conformal Mapping.",
        "Unit II: Complex Integration: Cauchy’s Integral Theorem, Cauchy’s Integral Formula, Taylor's and Laurent's Series, Residues and Contour Integration.",
        "Unit III: Numerical Techniques: Roots of Algebraic and Transcendental Equations (Regula-Falsi, Newton-Raphson). Finite Differences, Interpolation (Newton’s Forward/Backward, Lagrange’s).",
        "Unit IV: Numerical Calculus & ODEs: Numerical Differentiation and Integration (Trapezoidal, Simpson's Rules), Numerical Solutions of Ordinary Differential Equations (Euler's, Runge-Kutta Methods).",
        "Unit V: Linear Algebra & Vector Spaces: Vector Spaces, Linear Independence, Bases, Linear Transformations, Rank-Nullity Theorem, Eigenvalues and Eigenvectors."
      ],
      "weightageSummary": "Unit III: Numerical Techniques: Roots of typically represents around 40% of overall exam weightage."
    },
    "weightage": [
      {
        "unit": "Unit I: Functions of Complex Variables: Analytic Functions, Cauchy-Riemann Equations, Harmonic Functions, Conformal Mapping.",
        "expectedMarks": 12,
        "topics": [
          {
            "name": "Functions implementation details",
            "frequency": 5
          },
          {
            "name": "Complex working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit II: Complex Integration: Cauchy’s Integral Theorem, Cauchy’s Integral Formula, Taylor's and Laurent's Series, Residues and Contour Integration.",
        "expectedMarks": 14,
        "topics": [
          {
            "name": "Complex implementation details",
            "frequency": 5
          },
          {
            "name": "Integration working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit III: Numerical Techniques: Roots of Algebraic and Transcendental Equations (Regula-Falsi, Newton-Raphson). Finite Differences, Interpolation (Newton’s Forward/Backward, Lagrange’s).",
        "expectedMarks": 16,
        "topics": [
          {
            "name": "Numerical implementation details",
            "frequency": 5
          },
          {
            "name": "Techniques working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit IV: Numerical Calculus & ODEs: Numerical Differentiation and Integration (Trapezoidal, Simpson's Rules), Numerical Solutions of Ordinary Differential Equations (Euler's, Runge-Kutta Methods).",
        "expectedMarks": 15,
        "topics": [
          {
            "name": "Numerical implementation details",
            "frequency": 5
          },
          {
            "name": "Calculus working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit V: Linear Algebra & Vector Spaces: Vector Spaces, Linear Independence, Bases, Linear Transformations, Rank-Nullity Theorem, Eigenvalues and Eigenvectors.",
        "expectedMarks": 13,
        "topics": [
          {
            "name": "Linear implementation details",
            "frequency": 5
          },
          {
            "name": "Algebra working parameters",
            "frequency": 4
          }
        ]
      }
    ],
    "repeatedQuestions": [
      {
        "id": "rq-m3-ee-1",
        "question": "Discuss the fundamental concepts of Functions of Complex Variables: Analytic Functions. How is it implemented/used in Mathematics-III?",
        "years": [
          2022,
          2024
        ],
        "frequency": 2,
        "importance": "Very High Probability"
      },
      {
        "id": "rq-m3-ee-2",
        "question": "Discuss the fundamental concepts of Complex Integration: Cauchy’s Integral Theorem. How is it implemented/used in Mathematics-III?",
        "years": [
          2023,
          2025
        ],
        "frequency": 3,
        "importance": "High Probability"
      },
      {
        "id": "rq-m3-ee-3",
        "question": "Discuss the fundamental concepts of Numerical Techniques: Roots of Algebraic and Transcendental Equations (Regula-Falsi. How is it implemented/used in Mathematics-III?",
        "years": [
          2024
        ],
        "frequency": 4,
        "importance": "Medium Probability"
      }
    ],
    "oneNightRevision": {
      "topQuestions": [
        "Write short notes on key methodologies and design parameters of Mathematics-III (Focus on Unit 3).",
        "Write short notes on key methodologies and design parameters of Mathematics-III (Focus on Unit 4).",
        "Write short notes on key methodologies and design parameters of Mathematics-III (Focus on Unit 5)."
      ],
      "definitions": [
        {
          "term": "Mathematics-III",
          "definition": "Functions complex analytic harmonic C-R equations, Taylor Laurent series residues integration, Regula-Falsi Newton-Raphson finite differences, Simpson Euler RK4 ODE solvers, and vector bases transformation."
        },
        {
          "term": "Core Principle of BT-401",
          "definition": "The foundational architecture and operational logic that dictates the behavior of Mathematics-III in engineering applications."
        }
      ],
      "diagrams": [
        {
          "title": "Mathematics-III System Layout",
          "description": "Block diagram displaying the architectural configuration and interface linkages."
        }
      ],
      "formulas": [
        {
          "name": "BT-401 Performance metric",
          "formula": "Complexity = O(f(n))",
          "explanation": "Indicates the asymptotic computational resource requirement as input size n grows."
        }
      ],
      "lastMinuteNotes": [
        "💡 Focus on the structural building blocks of Mathematics-III and their practical design constraints.",
        "💡 Review unit-wise previous exam papers and standard notations for numerical stability."
      ]
    },
    "videos": []
  },
  {
    "id": "em2-ee",
    "name": "Electrical Machine-II",
    "code": "EX-402",
    "branchId": "ee",
    "semester": 4,
    "description": "Alternator Synchronous generator winding factors voltage regulation Potier salient pole, synchronous motor excitation V-curve hunting, induction motor RMF slip torque speed control, and single phase shaded pole stepper.",
    "resourceCount": 28,
    "overview": {
      "syllabus": [
        "Unit I: Synchronous Generators (Alternators): Construction, types, winding factors, EMF equation. Armature reaction, synchronous reactance. Voltage regulation methods: EMF, MMF, Potier triangle (ZPF) methods. Two-reaction theory for salient pole machines.",
        "Unit II: Synchronous Motors: Principle of operation, starting methods, phasor diagrams, power-angle characteristics. V-curves and inverted V-curves, synchronous condensers, hunting and its prevention (damping windings).",
        "Unit III: Three-Phase Induction Motors-I: Construction, working principle, production of rotating magnetic field. Slip, torque-slip characteristics, maximum torque, effect of rotor resistance. Equivalent circuit parameters.",
        "Unit IV: Three-Phase Induction Motors-II: Starting methods (DOL, Star-Delta, Autotransformer, Rotor resistance). Speed control methods: Pole changing, stator voltage control, V/f control, slip power recovery schemes. No-load and blocked-rotor tests, circle diagram.",
        "Unit V: Single-Phase Motors & Special Machines: Double revolving field theory, starting methods, types: Split-phase, capacitor-start, capacitor-run, shaded-pole motors. Introduction to stepper motors, universal motors, and permanent magnet brushless DC motors."
      ],
      "weightageSummary": "Unit III: Three-Phase Induction Motors-I typically represents around 40% of overall exam weightage."
    },
    "weightage": [
      {
        "unit": "Unit I: Synchronous Generators (Alternators): Construction, types, winding factors, EMF equation. Armature reaction, synchronous reactance. Voltage regulation methods: EMF, MMF, Potier triangle (ZPF) methods. Two-reaction theory for salient pole machines.",
        "expectedMarks": 12,
        "topics": [
          {
            "name": "Synchronous implementation details",
            "frequency": 5
          },
          {
            "name": "Generators working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit II: Synchronous Motors: Principle of operation, starting methods, phasor diagrams, power-angle characteristics. V-curves and inverted V-curves, synchronous condensers, hunting and its prevention (damping windings).",
        "expectedMarks": 14,
        "topics": [
          {
            "name": "Synchronous implementation details",
            "frequency": 5
          },
          {
            "name": "Motors working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit III: Three-Phase Induction Motors-I: Construction, working principle, production of rotating magnetic field. Slip, torque-slip characteristics, maximum torque, effect of rotor resistance. Equivalent circuit parameters.",
        "expectedMarks": 16,
        "topics": [
          {
            "name": "Three-Phase implementation details",
            "frequency": 5
          },
          {
            "name": "Induction working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit IV: Three-Phase Induction Motors-II: Starting methods (DOL, Star-Delta, Autotransformer, Rotor resistance). Speed control methods: Pole changing, stator voltage control, V/f control, slip power recovery schemes. No-load and blocked-rotor tests, circle diagram.",
        "expectedMarks": 15,
        "topics": [
          {
            "name": "Three-Phase implementation details",
            "frequency": 5
          },
          {
            "name": "Induction working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit V: Single-Phase Motors & Special Machines: Double revolving field theory, starting methods, types: Split-phase, capacitor-start, capacitor-run, shaded-pole motors. Introduction to stepper motors, universal motors, and permanent magnet brushless DC motors.",
        "expectedMarks": 13,
        "topics": [
          {
            "name": "Single-Phase implementation details",
            "frequency": 5
          },
          {
            "name": "Motors working parameters",
            "frequency": 4
          }
        ]
      }
    ],
    "repeatedQuestions": [
      {
        "id": "rq-em2-ee-1",
        "question": "Discuss the fundamental concepts of Synchronous Generators (Alternators): Construction. How is it implemented/used in Electrical Machine-II?",
        "years": [
          2022,
          2024
        ],
        "frequency": 2,
        "importance": "Very High Probability"
      },
      {
        "id": "rq-em2-ee-2",
        "question": "Discuss the fundamental concepts of Synchronous Motors: Principle of operation. How is it implemented/used in Electrical Machine-II?",
        "years": [
          2023,
          2025
        ],
        "frequency": 3,
        "importance": "High Probability"
      },
      {
        "id": "rq-em2-ee-3",
        "question": "Discuss the fundamental concepts of Three-Phase Induction Motors-I: Construction. How is it implemented/used in Electrical Machine-II?",
        "years": [
          2024
        ],
        "frequency": 4,
        "importance": "Medium Probability"
      }
    ],
    "oneNightRevision": {
      "topQuestions": [
        "Write short notes on key methodologies and design parameters of Electrical Machine-II (Focus on Unit 3).",
        "Write short notes on key methodologies and design parameters of Electrical Machine-II (Focus on Unit 4).",
        "Write short notes on key methodologies and design parameters of Electrical Machine-II (Focus on Unit 5)."
      ],
      "definitions": [
        {
          "term": "Electrical Machine-II",
          "definition": "Alternator Synchronous generator winding factors voltage regulation Potier salient pole, synchronous motor excitation V-curve hunting, induction motor RMF slip torque speed control, and single phase shaded pole stepper."
        },
        {
          "term": "Core Principle of EX-402",
          "definition": "The foundational architecture and operational logic that dictates the behavior of Electrical Machine-II in engineering applications."
        }
      ],
      "diagrams": [
        {
          "title": "Electrical Machine-II System Layout",
          "description": "Block diagram displaying the architectural configuration and interface linkages."
        }
      ],
      "formulas": [
        {
          "name": "EX-402 Efficiency Formula",
          "formula": "η = (Output Power / Input Power) * 100%",
          "explanation": "Calculates the performance ratio indicating total energy conversion efficiency."
        }
      ],
      "lastMinuteNotes": [
        "💡 Focus on the structural building blocks of Electrical Machine-II and their practical design constraints.",
        "💡 Review unit-wise previous exam papers and standard notations for numerical stability."
      ]
    },
    "videos": []
  },
  {
    "id": "ps1-ee",
    "name": "Power System-I",
    "code": "EX-403",
    "branchId": "ee",
    "semester": 4,
    "description": "Thermal hydro economic load factor diversity load duration curve tariffs, overhead transmission line transposition self mutual GMD, short medium Nominal T Pi ABCD performance, sag mechanical support efficiency, and cables corona.",
    "resourceCount": 28,
    "overview": {
      "syllabus": [
        "Unit I: Generation Systems & Economics: Structure of power systems, block diagrams of thermal, hydro, and nuclear power stations. Economics of power generation: Load curve, load duration curve, demand factor, diversity factor, load factor, plant capacity factor. Tariffs.",
        "Unit II: Overhead Transmission Line Parameters: Inductance and capacitance calculation of single-phase and three-phase lines, symmetrical and unsymmetrical spacing, transposition of lines. Concept of self-GMD and mutual-GMD.",
        "Unit III: Performance of Transmission Lines: Classification (short, medium, long lines). Nominal-T and Nominal-π models. Regulation and efficiency. Efficiency and voltage regulation, ABCD parameters, Ferranti effect, surge impedance loading.",
        "Unit IV: Mechanical Design & Insulators: Sag and tension calculation in overhead lines (equal and unequal support heights), effect of wind and ice loading. Overhead line insulators: Types (pin, suspension, strain), voltage distribution across string, string efficiency and methods to improve it.",
        "Unit V: Underground Cables & Corona: Construction of cables, insulation resistance, capacitance of single-core and three-core cables, dielectric stress, grading of cables. Corona phenomenon: Factors affecting corona, critical disruptive voltage, visual critical voltage, corona loss, radio interference."
      ],
      "weightageSummary": "Unit III: Performance of Transmission Li typically represents around 40% of overall exam weightage."
    },
    "weightage": [
      {
        "unit": "Unit I: Generation Systems & Economics: Structure of power systems, block diagrams of thermal, hydro, and nuclear power stations. Economics of power generation: Load curve, load duration curve, demand factor, diversity factor, load factor, plant capacity factor. Tariffs.",
        "expectedMarks": 12,
        "topics": [
          {
            "name": "Generation implementation details",
            "frequency": 5
          },
          {
            "name": "Systems working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit II: Overhead Transmission Line Parameters: Inductance and capacitance calculation of single-phase and three-phase lines, symmetrical and unsymmetrical spacing, transposition of lines. Concept of self-GMD and mutual-GMD.",
        "expectedMarks": 14,
        "topics": [
          {
            "name": "Overhead implementation details",
            "frequency": 5
          },
          {
            "name": "Transmission working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit III: Performance of Transmission Lines: Classification (short, medium, long lines). Nominal-T and Nominal-π models. Regulation and efficiency. Efficiency and voltage regulation, ABCD parameters, Ferranti effect, surge impedance loading.",
        "expectedMarks": 16,
        "topics": [
          {
            "name": "Performance implementation details",
            "frequency": 5
          },
          {
            "name": "Transmission working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit IV: Mechanical Design & Insulators: Sag and tension calculation in overhead lines (equal and unequal support heights), effect of wind and ice loading. Overhead line insulators: Types (pin, suspension, strain), voltage distribution across string, string efficiency and methods to improve it.",
        "expectedMarks": 15,
        "topics": [
          {
            "name": "Mechanical implementation details",
            "frequency": 5
          },
          {
            "name": "Design working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit V: Underground Cables & Corona: Construction of cables, insulation resistance, capacitance of single-core and three-core cables, dielectric stress, grading of cables. Corona phenomenon: Factors affecting corona, critical disruptive voltage, visual critical voltage, corona loss, radio interference.",
        "expectedMarks": 13,
        "topics": [
          {
            "name": "Underground implementation details",
            "frequency": 5
          },
          {
            "name": "Cables working parameters",
            "frequency": 4
          }
        ]
      }
    ],
    "repeatedQuestions": [
      {
        "id": "rq-ps1-ee-1",
        "question": "Discuss the fundamental concepts of Generation Systems & Economics: Structure of power systems. How is it implemented/used in Power System-I?",
        "years": [
          2022,
          2024
        ],
        "frequency": 2,
        "importance": "Very High Probability"
      },
      {
        "id": "rq-ps1-ee-2",
        "question": "Discuss the fundamental concepts of Overhead Transmission Line Parameters: Inductance and capacitance calculation of single-phase and three-phase lines. How is it implemented/used in Power System-I?",
        "years": [
          2023,
          2025
        ],
        "frequency": 3,
        "importance": "High Probability"
      },
      {
        "id": "rq-ps1-ee-3",
        "question": "Discuss the fundamental concepts of Performance of Transmission Lines: Classification (short. How is it implemented/used in Power System-I?",
        "years": [
          2024
        ],
        "frequency": 4,
        "importance": "Medium Probability"
      }
    ],
    "oneNightRevision": {
      "topQuestions": [
        "Write short notes on key methodologies and design parameters of Power System-I (Focus on Unit 3).",
        "Write short notes on key methodologies and design parameters of Power System-I (Focus on Unit 4).",
        "Write short notes on key methodologies and design parameters of Power System-I (Focus on Unit 5)."
      ],
      "definitions": [
        {
          "term": "Power System-I",
          "definition": "Thermal hydro economic load factor diversity load duration curve tariffs, overhead transmission line transposition self mutual GMD, short medium Nominal T Pi ABCD performance, sag mechanical support efficiency, and cables corona."
        },
        {
          "term": "Core Principle of EX-403",
          "definition": "The foundational architecture and operational logic that dictates the behavior of Power System-I in engineering applications."
        }
      ],
      "diagrams": [
        {
          "title": "Power System-I System Layout",
          "description": "Block diagram displaying the architectural configuration and interface linkages."
        }
      ],
      "formulas": [
        {
          "name": "EX-403 Efficiency Formula",
          "formula": "η = (Output Power / Input Power) * 100%",
          "explanation": "Calculates the performance ratio indicating total energy conversion efficiency."
        }
      ],
      "lastMinuteNotes": [
        "💡 Focus on the structural building blocks of Power System-I and their practical design constraints.",
        "💡 Review unit-wise previous exam papers and standard notations for numerical stability."
      ]
    },
    "videos": []
  },
  {
    "id": "cs-ee",
    "name": "Control Systems",
    "code": "EX-404",
    "branchId": "ee",
    "semester": 4,
    "description": "Block diagram reduction Mason gain, time response first second order specifications, Routh-Hurwitz stability root locus construction, Bode polar Nyquist frequency plots, and state space continuous controllability.",
    "resourceCount": 28,
    "overview": {
      "syllabus": [
        "Unit I: System Modeling: Open-loop and closed-loop control systems, mathematical modeling of physical systems (electrical, mechanical). Transfer function calculation, block diagram reduction techniques, Signal Flow Graphs (SFG), Mason’s gain formula.",
        "Unit II: Time Response Analysis: Standard test signals, time response of first and second-order systems. Time domain specifications (rise time, peak time, settling time), steady-state errors and error constants.",
        "Unit III: Stability & Root Locus: Concept of absolute and relative stability, Routh-Hurwitz stability criterion. Root Locus technique: Guidance and construction rules, determination of system stability and dominant roots.",
        "Unit IV: Frequency Domain Analysis: Frequency domain specifications, Bode plots, Polar plots, Nyquist stability criterion, determination of gain margin and phase margin.",
        "Unit V: State Variable Analysis: State space representation of continuous-time systems, state transition matrix computation, conversion of state space to transfer functions, concepts of controllability and observability."
      ],
      "weightageSummary": "Unit III: Stability & Root Locus: Concep typically represents around 40% of overall exam weightage."
    },
    "weightage": [
      {
        "unit": "Unit I: System Modeling: Open-loop and closed-loop control systems, mathematical modeling of physical systems (electrical, mechanical). Transfer function calculation, block diagram reduction techniques, Signal Flow Graphs (SFG), Mason’s gain formula.",
        "expectedMarks": 12,
        "topics": [
          {
            "name": "System implementation details",
            "frequency": 5
          },
          {
            "name": "Modeling working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit II: Time Response Analysis: Standard test signals, time response of first and second-order systems. Time domain specifications (rise time, peak time, settling time), steady-state errors and error constants.",
        "expectedMarks": 14,
        "topics": [
          {
            "name": "Response implementation details",
            "frequency": 5
          },
          {
            "name": "Analysis working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit III: Stability & Root Locus: Concept of absolute and relative stability, Routh-Hurwitz stability criterion. Root Locus technique: Guidance and construction rules, determination of system stability and dominant roots.",
        "expectedMarks": 16,
        "topics": [
          {
            "name": "Stability implementation details",
            "frequency": 5
          },
          {
            "name": "absolute working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit IV: Frequency Domain Analysis: Frequency domain specifications, Bode plots, Polar plots, Nyquist stability criterion, determination of gain margin and phase margin.",
        "expectedMarks": 15,
        "topics": [
          {
            "name": "Frequency implementation details",
            "frequency": 5
          },
          {
            "name": "Domain working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit V: State Variable Analysis: State space representation of continuous-time systems, state transition matrix computation, conversion of state space to transfer functions, concepts of controllability and observability.",
        "expectedMarks": 13,
        "topics": [
          {
            "name": "Variable implementation details",
            "frequency": 5
          },
          {
            "name": "Analysis working parameters",
            "frequency": 4
          }
        ]
      }
    ],
    "repeatedQuestions": [
      {
        "id": "rq-cs-ee-1",
        "question": "Discuss the fundamental concepts of System Modeling: Open-loop and closed-loop control systems. How is it implemented/used in Control Systems?",
        "years": [
          2022,
          2024
        ],
        "frequency": 2,
        "importance": "Very High Probability"
      },
      {
        "id": "rq-cs-ee-2",
        "question": "Discuss the fundamental concepts of Time Response Analysis: Standard test signals. How is it implemented/used in Control Systems?",
        "years": [
          2023,
          2025
        ],
        "frequency": 3,
        "importance": "High Probability"
      },
      {
        "id": "rq-cs-ee-3",
        "question": "Discuss the fundamental concepts of Stability & Root Locus: Concept of absolute and relative stability. How is it implemented/used in Control Systems?",
        "years": [
          2024
        ],
        "frequency": 4,
        "importance": "Medium Probability"
      }
    ],
    "oneNightRevision": {
      "topQuestions": [
        "Write short notes on key methodologies and design parameters of Control Systems (Focus on Unit 3).",
        "Write short notes on key methodologies and design parameters of Control Systems (Focus on Unit 4).",
        "Write short notes on key methodologies and design parameters of Control Systems (Focus on Unit 5)."
      ],
      "definitions": [
        {
          "term": "Control Systems",
          "definition": "Block diagram reduction Mason gain, time response first second order specifications, Routh-Hurwitz stability root locus construction, Bode polar Nyquist frequency plots, and state space continuous controllability."
        },
        {
          "term": "Core Principle of EX-404",
          "definition": "The foundational architecture and operational logic that dictates the behavior of Control Systems in engineering applications."
        }
      ],
      "diagrams": [
        {
          "title": "Control Systems System Layout",
          "description": "Block diagram displaying the architectural configuration and interface linkages."
        }
      ],
      "formulas": [
        {
          "name": "EX-404 Efficiency Formula",
          "formula": "η = (Output Power / Input Power) * 100%",
          "explanation": "Calculates the performance ratio indicating total energy conversion efficiency."
        }
      ],
      "lastMinuteNotes": [
        "💡 Focus on the structural building blocks of Control Systems and their practical design constraints.",
        "💡 Review unit-wise previous exam papers and standard notations for numerical stability."
      ]
    },
    "videos": []
  },
  {
    "id": "ss-ee",
    "name": "Signal & Systems",
    "code": "EX-405",
    "branchId": "ee",
    "semester": 4,
    "description": "Continuous discrete signals system properties, convolution integral sums continuous discrete LTI systems, CTFT DTFT Fourier frequency, Laplace transform convergence, and Z-transform ROC.",
    "resourceCount": 28,
    "overview": {
      "syllabus": [
        "Unit I: Signal & System Classification: Continuous-time (CT) and Discrete-time (DT) signals, standard signals (step, impulse, ramp, exponential). System properties: Linearity, time-invariance, causality, stability, memory.",
        "Unit II: LTI Systems & Convolution: Impulse response of LTI systems, convolution integral for CT systems, convolution sum for DT systems. Properties of LTI systems.",
        "Unit III: Fourier Analysis: Continuous-Time Fourier Transform (CTFT) and Discrete-Time Fourier Transform (DTFT): Properties, frequency response representation of LTI systems.",
        "Unit IV: Laplace Transform: Definition, Region of Convergence (ROC) properties, inverse Laplace transform, system transfer function analysis, solution of differential equations.",
        "Unit V: Z-Transform: Z-transform of discrete sequences, ROC properties, inverse Z-transform methods (power series, partial fractions), application to the analysis of DT-LTI systems described by difference equations."
      ],
      "weightageSummary": "Unit III: Fourier Analysis: Continuous-T typically represents around 40% of overall exam weightage."
    },
    "weightage": [
      {
        "unit": "Unit I: Signal & System Classification: Continuous-time (CT) and Discrete-time (DT) signals, standard signals (step, impulse, ramp, exponential). System properties: Linearity, time-invariance, causality, stability, memory.",
        "expectedMarks": 12,
        "topics": [
          {
            "name": "Signal implementation details",
            "frequency": 5
          },
          {
            "name": "System working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit II: LTI Systems & Convolution: Impulse response of LTI systems, convolution integral for CT systems, convolution sum for DT systems. Properties of LTI systems.",
        "expectedMarks": 14,
        "topics": [
          {
            "name": "Systems implementation details",
            "frequency": 5
          },
          {
            "name": "Convolution working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit III: Fourier Analysis: Continuous-Time Fourier Transform (CTFT) and Discrete-Time Fourier Transform (DTFT): Properties, frequency response representation of LTI systems.",
        "expectedMarks": 16,
        "topics": [
          {
            "name": "Fourier implementation details",
            "frequency": 5
          },
          {
            "name": "Analysis working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit IV: Laplace Transform: Definition, Region of Convergence (ROC) properties, inverse Laplace transform, system transfer function analysis, solution of differential equations.",
        "expectedMarks": 15,
        "topics": [
          {
            "name": "Laplace implementation details",
            "frequency": 5
          },
          {
            "name": "Transform working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit V: Z-Transform: Z-transform of discrete sequences, ROC properties, inverse Z-transform methods (power series, partial fractions), application to the analysis of DT-LTI systems described by difference equations.",
        "expectedMarks": 13,
        "topics": [
          {
            "name": "Z-Transform implementation details",
            "frequency": 5
          },
          {
            "name": "Z-transform working parameters",
            "frequency": 4
          }
        ]
      }
    ],
    "repeatedQuestions": [
      {
        "id": "rq-ss-ee-1",
        "question": "Discuss the fundamental concepts of Signal & System Classification: Continuous-time (CT) and Discrete-time (DT) signals. How is it implemented/used in Signal & Systems?",
        "years": [
          2022,
          2024
        ],
        "frequency": 2,
        "importance": "Very High Probability"
      },
      {
        "id": "rq-ss-ee-2",
        "question": "Discuss the fundamental concepts of LTI Systems & Convolution: Impulse response of LTI systems. How is it implemented/used in Signal & Systems?",
        "years": [
          2023,
          2025
        ],
        "frequency": 3,
        "importance": "High Probability"
      },
      {
        "id": "rq-ss-ee-3",
        "question": "Discuss the fundamental concepts of Fourier Analysis: Continuous-Time Fourier Transform (CTFT) and Discrete-Time Fourier Transform (DTFT): Properties. How is it implemented/used in Signal & Systems?",
        "years": [
          2024
        ],
        "frequency": 4,
        "importance": "Medium Probability"
      }
    ],
    "oneNightRevision": {
      "topQuestions": [
        "Write short notes on key methodologies and design parameters of Signal & Systems (Focus on Unit 3).",
        "Write short notes on key methodologies and design parameters of Signal & Systems (Focus on Unit 4).",
        "Write short notes on key methodologies and design parameters of Signal & Systems (Focus on Unit 5)."
      ],
      "definitions": [
        {
          "term": "Signal & Systems",
          "definition": "Continuous discrete signals system properties, convolution integral sums continuous discrete LTI systems, CTFT DTFT Fourier frequency, Laplace transform convergence, and Z-transform ROC."
        },
        {
          "term": "Core Principle of EX-405",
          "definition": "The foundational architecture and operational logic that dictates the behavior of Signal & Systems in engineering applications."
        }
      ],
      "diagrams": [
        {
          "title": "Signal & Systems System Layout",
          "description": "Block diagram displaying the architectural configuration and interface linkages."
        }
      ],
      "formulas": [
        {
          "name": "EX-405 Efficiency Formula",
          "formula": "η = (Output Power / Input Power) * 100%",
          "explanation": "Calculates the performance ratio indicating total energy conversion efficiency."
        }
      ],
      "lastMinuteNotes": [
        "💡 Focus on the structural building blocks of Signal & Systems and their practical design constraints.",
        "💡 Review unit-wise previous exam papers and standard notations for numerical stability."
      ]
    },
    "videos": []
  },
  {
    "id": "pe-ee",
    "name": "Power Electronics",
    "code": "EX-501",
    "branchId": "ee",
    "semester": 5,
    "description": "Thyristor SCR gate turn off commutation dv/dt, phase controlled rectifiers dual converters source inductance, step up step down choppers buck boost class, inverters conduction modes PWM, and cycloconverters regulators.",
    "resourceCount": 30,
    "overview": {
      "syllabus": [
        "Unit I: Power Semiconductor Devices: Characteristics, construction, and operation of Power Diodes, SCR, Triac, Power BJT, Power MOSFET, and IGBT. SCR turn-on and turn-off (commutation) methods, di/dt and dv/dt protection, gate drive circuits.",
        "Unit II: Phase Controlled Rectifiers: Single-phase and three-phase half-wave and full-wave controlled rectifiers with R, RL, and RLE loads. Effect of freewheeling diode and source inductance. Dual converters.",
        "Unit III: DC-DC Converters (Choppers): Principles of step-up and step-down choppers. Control strategies: Time ratio control and current limit control. Chopper classifications (Class A, B, C, D, E). Buck, Boost, and Buck-Boost regulators.",
        "Unit IV: Inverters: Single-phase and three-phase (180-degree and 120-degree conduction modes) voltage source inverters (VSI), current source inverters (CSI). Voltage control techniques: Pulse Width Modulation (PWM) variants. Harmonic reduction.",
        "Unit V: AC Voltage Controllers & Cycloconverters: Single-phase and three-phase integral cycle control and phase control AC voltage regulators. Cycloconverters: Single-phase to single-phase step-up and step-down configurations."
      ],
      "weightageSummary": "Unit III: DC-DC Converters (Choppers): P typically represents around 40% of overall exam weightage."
    },
    "weightage": [
      {
        "unit": "Unit I: Power Semiconductor Devices: Characteristics, construction, and operation of Power Diodes, SCR, Triac, Power BJT, Power MOSFET, and IGBT. SCR turn-on and turn-off (commutation) methods, di/dt and dv/dt protection, gate drive circuits.",
        "expectedMarks": 12,
        "topics": [
          {
            "name": "Semiconductor implementation details",
            "frequency": 5
          },
          {
            "name": "Devices working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit II: Phase Controlled Rectifiers: Single-phase and three-phase half-wave and full-wave controlled rectifiers with R, RL, and RLE loads. Effect of freewheeling diode and source inductance. Dual converters.",
        "expectedMarks": 14,
        "topics": [
          {
            "name": "Controlled implementation details",
            "frequency": 5
          },
          {
            "name": "Rectifiers working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit III: DC-DC Converters (Choppers): Principles of step-up and step-down choppers. Control strategies: Time ratio control and current limit control. Chopper classifications (Class A, B, C, D, E). Buck, Boost, and Buck-Boost regulators.",
        "expectedMarks": 16,
        "topics": [
          {
            "name": "Converters implementation details",
            "frequency": 5
          },
          {
            "name": "Choppers working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit IV: Inverters: Single-phase and three-phase (180-degree and 120-degree conduction modes) voltage source inverters (VSI), current source inverters (CSI). Voltage control techniques: Pulse Width Modulation (PWM) variants. Harmonic reduction.",
        "expectedMarks": 15,
        "topics": [
          {
            "name": "Inverters implementation details",
            "frequency": 5
          },
          {
            "name": "Single-phase working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit V: AC Voltage Controllers & Cycloconverters: Single-phase and three-phase integral cycle control and phase control AC voltage regulators. Cycloconverters: Single-phase to single-phase step-up and step-down configurations.",
        "expectedMarks": 13,
        "topics": [
          {
            "name": "Voltage implementation details",
            "frequency": 5
          },
          {
            "name": "Controllers working parameters",
            "frequency": 4
          }
        ]
      }
    ],
    "repeatedQuestions": [
      {
        "id": "rq-pe-ee-1",
        "question": "Discuss the fundamental concepts of Power Semiconductor Devices: Characteristics. How is it implemented/used in Power Electronics?",
        "years": [
          2022,
          2024
        ],
        "frequency": 2,
        "importance": "Very High Probability"
      },
      {
        "id": "rq-pe-ee-2",
        "question": "Discuss the fundamental concepts of Phase Controlled Rectifiers: Single-phase and three-phase half-wave and full-wave controlled rectifiers with R. How is it implemented/used in Power Electronics?",
        "years": [
          2023,
          2025
        ],
        "frequency": 3,
        "importance": "High Probability"
      },
      {
        "id": "rq-pe-ee-3",
        "question": "Discuss the fundamental concepts of DC-DC Converters (Choppers): Principles of step-up and step-down choppers. Control strategies: Time ratio control and current limit control. Chopper classifications (Class A. How is it implemented/used in Power Electronics?",
        "years": [
          2024
        ],
        "frequency": 4,
        "importance": "Medium Probability"
      }
    ],
    "oneNightRevision": {
      "topQuestions": [
        "Write short notes on key methodologies and design parameters of Power Electronics (Focus on Unit 3).",
        "Write short notes on key methodologies and design parameters of Power Electronics (Focus on Unit 4).",
        "Write short notes on key methodologies and design parameters of Power Electronics (Focus on Unit 5)."
      ],
      "definitions": [
        {
          "term": "Power Electronics",
          "definition": "Thyristor SCR gate turn off commutation dv/dt, phase controlled rectifiers dual converters source inductance, step up step down choppers buck boost class, inverters conduction modes PWM, and cycloconverters regulators."
        },
        {
          "term": "Core Principle of EX-501",
          "definition": "The foundational architecture and operational logic that dictates the behavior of Power Electronics in engineering applications."
        }
      ],
      "diagrams": [
        {
          "title": "Power Electronics System Layout",
          "description": "Block diagram displaying the architectural configuration and interface linkages."
        }
      ],
      "formulas": [
        {
          "name": "EX-501 Efficiency Formula",
          "formula": "η = (Output Power / Input Power) * 100%",
          "explanation": "Calculates the performance ratio indicating total energy conversion efficiency."
        }
      ],
      "lastMinuteNotes": [
        "💡 Focus on the structural building blocks of Power Electronics and their practical design constraints.",
        "💡 Review unit-wise previous exam papers and standard notations for numerical stability."
      ]
    },
    "videos": []
  },
  {
    "id": "mm-ee",
    "name": "Microprocessors & Microcontrollers",
    "code": "EX-502",
    "branchId": "ee",
    "semester": 5,
    "description": "8085 architecture registers timing machine, 8085 instruction set programming, 8086 segmented register EU BIU minimum maximum, 8255 PPI timer PIC interfacing, and 8051 SFRs SFR.",
    "resourceCount": 30,
    "overview": {
      "syllabus": [
        "Unit I: 8085 Microprocessor Architecture: Pin diagram, internal architecture, registers, ALU, timing and control unit. Instruction cycle, machine cycles, T-states, and memory interfacing blocks.",
        "Unit II: 8085 Instruction Set & Programming: Addressing modes, data transfer, arithmetic, logical, and branching instructions. Assembly language programming examples. Interrupt structure of 8085.",
        "Unit III: 8086 Microprocessor Foundations: Internal architecture (BIU and EU), memory segmentation, physical address generation, minimum and maximum mode configurations.",
        "Unit IV: Interfacing Devices: Functional architectures and interfacing of Programmable Peripheral Interface (8255), Programmable Interval Timer (8253/8254), and Programmable Interrupt Controller (8259).",
        "Unit V: 8051 Microcontroller Architecture: Pin descriptions, internal RAM/ROM layout, special function registers (SFRs), I/O ports. Timers/Counters, serial communication ports, interrupt structures."
      ],
      "weightageSummary": "Unit III: 8086 Microprocessor Foundation typically represents around 40% of overall exam weightage."
    },
    "weightage": [
      {
        "unit": "Unit I: 8085 Microprocessor Architecture: Pin diagram, internal architecture, registers, ALU, timing and control unit. Instruction cycle, machine cycles, T-states, and memory interfacing blocks.",
        "expectedMarks": 12,
        "topics": [
          {
            "name": "Microprocessor implementation details",
            "frequency": 5
          },
          {
            "name": "Architecture working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit II: 8085 Instruction Set & Programming: Addressing modes, data transfer, arithmetic, logical, and branching instructions. Assembly language programming examples. Interrupt structure of 8085.",
        "expectedMarks": 14,
        "topics": [
          {
            "name": "Instruction implementation details",
            "frequency": 5
          },
          {
            "name": "Programming working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit III: 8086 Microprocessor Foundations: Internal architecture (BIU and EU), memory segmentation, physical address generation, minimum and maximum mode configurations.",
        "expectedMarks": 16,
        "topics": [
          {
            "name": "Microprocessor implementation details",
            "frequency": 5
          },
          {
            "name": "Foundations working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit IV: Interfacing Devices: Functional architectures and interfacing of Programmable Peripheral Interface (8255), Programmable Interval Timer (8253/8254), and Programmable Interrupt Controller (8259).",
        "expectedMarks": 15,
        "topics": [
          {
            "name": "Interfacing implementation details",
            "frequency": 5
          },
          {
            "name": "Devices working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit V: 8051 Microcontroller Architecture: Pin descriptions, internal RAM/ROM layout, special function registers (SFRs), I/O ports. Timers/Counters, serial communication ports, interrupt structures.",
        "expectedMarks": 13,
        "topics": [
          {
            "name": "Microcontroller implementation details",
            "frequency": 5
          },
          {
            "name": "Architecture working parameters",
            "frequency": 4
          }
        ]
      }
    ],
    "repeatedQuestions": [
      {
        "id": "rq-mm-ee-1",
        "question": "Discuss the fundamental concepts of 8085 Microprocessor Architecture: Pin diagram. How is it implemented/used in Microprocessors & Microcontrollers?",
        "years": [
          2022,
          2024
        ],
        "frequency": 2,
        "importance": "Very High Probability"
      },
      {
        "id": "rq-mm-ee-2",
        "question": "Discuss the fundamental concepts of 8085 Instruction Set & Programming: Addressing modes. How is it implemented/used in Microprocessors & Microcontrollers?",
        "years": [
          2023,
          2025
        ],
        "frequency": 3,
        "importance": "High Probability"
      },
      {
        "id": "rq-mm-ee-3",
        "question": "Discuss the fundamental concepts of 8086 Microprocessor Foundations: Internal architecture (BIU and EU). How is it implemented/used in Microprocessors & Microcontrollers?",
        "years": [
          2024
        ],
        "frequency": 4,
        "importance": "Medium Probability"
      }
    ],
    "oneNightRevision": {
      "topQuestions": [
        "Write short notes on key methodologies and design parameters of Microprocessors & Microcontrollers (Focus on Unit 3).",
        "Write short notes on key methodologies and design parameters of Microprocessors & Microcontrollers (Focus on Unit 4).",
        "Write short notes on key methodologies and design parameters of Microprocessors & Microcontrollers (Focus on Unit 5)."
      ],
      "definitions": [
        {
          "term": "Microprocessors & Microcontrollers",
          "definition": "8085 architecture registers timing machine, 8085 instruction set programming, 8086 segmented register EU BIU minimum maximum, 8255 PPI timer PIC interfacing, and 8051 SFRs SFR."
        },
        {
          "term": "Core Principle of EX-502",
          "definition": "The foundational architecture and operational logic that dictates the behavior of Microprocessors & Microcontrollers in engineering applications."
        }
      ],
      "diagrams": [
        {
          "title": "Microprocessors & Microcontrollers System Layout",
          "description": "Block diagram displaying the architectural configuration and interface linkages."
        }
      ],
      "formulas": [
        {
          "name": "EX-502 Efficiency Formula",
          "formula": "η = (Output Power / Input Power) * 100%",
          "explanation": "Calculates the performance ratio indicating total energy conversion efficiency."
        }
      ],
      "lastMinuteNotes": [
        "💡 Focus on the structural building blocks of Microprocessors & Microcontrollers and their practical design constraints.",
        "💡 Review unit-wise previous exam papers and standard notations for numerical stability."
      ]
    },
    "videos": []
  },
  {
    "id": "eem-ee",
    "name": "Electrical & Electronic Measurement",
    "code": "EX-503",
    "branchId": "ee",
    "semester": 5,
    "description": "Wheatstone Kelvin double Maxwell AC bridges, measuring instruments range extension instrument CT PT, wattmeter induction energy meter, DVM counters CRO sweep frequency, and transducers LVDT DAS.",
    "resourceCount": 30,
    "overview": {
      "syllabus": [
        "Unit I: Measurement of Resistance, Inductance, and Capacitance: DC bridges: Wheatstone bridge, Kelvin's double bridge for low resistance. AC bridges: Maxwell’s, Hay’s, Anderson’s for inductance; Schering’s, Wien’s for capacitance.",
        "Unit II: Galvanometers & Measuring Instruments: Principle, construction, and operation of PMMC, moving iron, electrodynamometer, and induction type instruments. Extension of ranges using instrument transformers (CT and PT).",
        "Unit III: Measurement of Power & Energy: Electrodynamometer wattmeter: Errors and compensation. Three-phase power measurement using two-wattmeter method. Single-phase induction type energy meter: Construction, operating principle, errors and adjustments.",
        "Unit IV: Electronic Instruments & Digital Measurements: Digital voltmeters (DVM), digital multi-meters, digital frequency counters. Cathode Ray Oscilloscope (CRO): Block diagram, sweep generation, measurement of voltage, current, phase, and frequency.",
        "Unit V: Transducers & Data Acquisition Systems: Classification of transducers. Selection criteria. Resistive, inductive (LVDT), capacitive, piezoelectric, and optoelectronic transducers. Data Acquisition Systems (DAS) building blocks."
      ],
      "weightageSummary": "Unit III: Measurement of Power & Energy: typically represents around 40% of overall exam weightage."
    },
    "weightage": [
      {
        "unit": "Unit I: Measurement of Resistance, Inductance, and Capacitance: DC bridges: Wheatstone bridge, Kelvin's double bridge for low resistance. AC bridges: Maxwell’s, Hay’s, Anderson’s for inductance; Schering’s, Wien’s for capacitance.",
        "expectedMarks": 12,
        "topics": [
          {
            "name": "Measurement implementation details",
            "frequency": 5
          },
          {
            "name": "Resistance working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit II: Galvanometers & Measuring Instruments: Principle, construction, and operation of PMMC, moving iron, electrodynamometer, and induction type instruments. Extension of ranges using instrument transformers (CT and PT).",
        "expectedMarks": 14,
        "topics": [
          {
            "name": "Galvanometers implementation details",
            "frequency": 5
          },
          {
            "name": "Measuring working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit III: Measurement of Power & Energy: Electrodynamometer wattmeter: Errors and compensation. Three-phase power measurement using two-wattmeter method. Single-phase induction type energy meter: Construction, operating principle, errors and adjustments.",
        "expectedMarks": 16,
        "topics": [
          {
            "name": "Measurement implementation details",
            "frequency": 5
          },
          {
            "name": "Energy working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit IV: Electronic Instruments & Digital Measurements: Digital voltmeters (DVM), digital multi-meters, digital frequency counters. Cathode Ray Oscilloscope (CRO): Block diagram, sweep generation, measurement of voltage, current, phase, and frequency.",
        "expectedMarks": 15,
        "topics": [
          {
            "name": "Electronic implementation details",
            "frequency": 5
          },
          {
            "name": "Instruments working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit V: Transducers & Data Acquisition Systems: Classification of transducers. Selection criteria. Resistive, inductive (LVDT), capacitive, piezoelectric, and optoelectronic transducers. Data Acquisition Systems (DAS) building blocks.",
        "expectedMarks": 13,
        "topics": [
          {
            "name": "Transducers implementation details",
            "frequency": 5
          },
          {
            "name": "Acquisition working parameters",
            "frequency": 4
          }
        ]
      }
    ],
    "repeatedQuestions": [
      {
        "id": "rq-eem-ee-1",
        "question": "Discuss the fundamental concepts of Measurement of Resistance. How is it implemented/used in Electrical & Electronic Measurement?",
        "years": [
          2022,
          2024
        ],
        "frequency": 2,
        "importance": "Very High Probability"
      },
      {
        "id": "rq-eem-ee-2",
        "question": "Discuss the fundamental concepts of Galvanometers & Measuring Instruments: Principle. How is it implemented/used in Electrical & Electronic Measurement?",
        "years": [
          2023,
          2025
        ],
        "frequency": 3,
        "importance": "High Probability"
      },
      {
        "id": "rq-eem-ee-3",
        "question": "Discuss the fundamental concepts of Measurement of Power & Energy: Electrodynamometer wattmeter: Errors and compensation. Three-phase power measurement using two-wattmeter method. Single-phase induction type energy meter: Construction. How is it implemented/used in Electrical & Electronic Measurement?",
        "years": [
          2024
        ],
        "frequency": 4,
        "importance": "Medium Probability"
      }
    ],
    "oneNightRevision": {
      "topQuestions": [
        "Write short notes on key methodologies and design parameters of Electrical & Electronic Measurement (Focus on Unit 3).",
        "Write short notes on key methodologies and design parameters of Electrical & Electronic Measurement (Focus on Unit 4).",
        "Write short notes on key methodologies and design parameters of Electrical & Electronic Measurement (Focus on Unit 5)."
      ],
      "definitions": [
        {
          "term": "Electrical & Electronic Measurement",
          "definition": "Wheatstone Kelvin double Maxwell AC bridges, measuring instruments range extension instrument CT PT, wattmeter induction energy meter, DVM counters CRO sweep frequency, and transducers LVDT DAS."
        },
        {
          "term": "Core Principle of EX-503",
          "definition": "The foundational architecture and operational logic that dictates the behavior of Electrical & Electronic Measurement in engineering applications."
        }
      ],
      "diagrams": [
        {
          "title": "Electrical & Electronic Measurement System Layout",
          "description": "Block diagram displaying the architectural configuration and interface linkages."
        }
      ],
      "formulas": [
        {
          "name": "EX-503 Efficiency Formula",
          "formula": "η = (Output Power / Input Power) * 100%",
          "explanation": "Calculates the performance ratio indicating total energy conversion efficiency."
        }
      ],
      "lastMinuteNotes": [
        "💡 Focus on the structural building blocks of Electrical & Electronic Measurement and their practical design constraints.",
        "💡 Review unit-wise previous exam papers and standard notations for numerical stability."
      ]
    },
    "videos": []
  },
  {
    "id": "ps2-ee",
    "name": "Power System-II",
    "code": "EX-601",
    "branchId": "ee",
    "semester": 6,
    "description": "Symmetrical faults PU reactance short circuit capacity, symmetrical components unsymmetrical LG LL LLG faults, swing equation power stability equal area criterion, economic load dispatch, and AGC SVC control.",
    "resourceCount": 32,
    "overview": {
      "syllabus": [
        "Unit I: Per-Unit System & Symmetrical Faults: Per-unit representation of power system components, single-line diagrams, reactance diagrams. Symmetrical three-phase faults, calculation of fault currents, short-circuit capacity (MVA selection).",
        "Unit II: Symmetrical Components & Unsymmetrical Faults: Symmetrical component transformation, sequence impedances and sequence networks of generators, transformers, and transmission lines. Analysis of unsymmetrical faults: Line-to-Ground (LG), Line-to-Line (LL), Double Line-to-Ground (LLG).",
        "Unit III: Power System Stability: Steady-state and transient stability definitions. Dynamics of synchronous machines: Swing equation. Equal Area Criterion: Application to sudden changes in mechanical input and faults, critical clearing angle and time.",
        "Unit IV: Economic Load Despatch: Incremental fuel cost curves, economic distribution of load between plants within a station neglecting transmission losses. Penalty factors, transmission loss coefficients, economic dispatch equation including losses.",
        "Unit V: Voltage & Frequency Control: Automatic Generation Control (AGC), single-area load frequency control, block diagram representation. Voltage control methods: Tap-changing transformers, shunt reactors, synchronous condensers, static VAR compensators (SVC)."
      ],
      "weightageSummary": "Unit III: Power System Stability: Steady typically represents around 40% of overall exam weightage."
    },
    "weightage": [
      {
        "unit": "Unit I: Per-Unit System & Symmetrical Faults: Per-unit representation of power system components, single-line diagrams, reactance diagrams. Symmetrical three-phase faults, calculation of fault currents, short-circuit capacity (MVA selection).",
        "expectedMarks": 12,
        "topics": [
          {
            "name": "Per-Unit implementation details",
            "frequency": 5
          },
          {
            "name": "System working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit II: Symmetrical Components & Unsymmetrical Faults: Symmetrical component transformation, sequence impedances and sequence networks of generators, transformers, and transmission lines. Analysis of unsymmetrical faults: Line-to-Ground (LG), Line-to-Line (LL), Double Line-to-Ground (LLG).",
        "expectedMarks": 14,
        "topics": [
          {
            "name": "Symmetrical implementation details",
            "frequency": 5
          },
          {
            "name": "Components working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit III: Power System Stability: Steady-state and transient stability definitions. Dynamics of synchronous machines: Swing equation. Equal Area Criterion: Application to sudden changes in mechanical input and faults, critical clearing angle and time.",
        "expectedMarks": 16,
        "topics": [
          {
            "name": "System implementation details",
            "frequency": 5
          },
          {
            "name": "Stability working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit IV: Economic Load Despatch: Incremental fuel cost curves, economic distribution of load between plants within a station neglecting transmission losses. Penalty factors, transmission loss coefficients, economic dispatch equation including losses.",
        "expectedMarks": 15,
        "topics": [
          {
            "name": "Economic implementation details",
            "frequency": 5
          },
          {
            "name": "Despatch working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit V: Voltage & Frequency Control: Automatic Generation Control (AGC), single-area load frequency control, block diagram representation. Voltage control methods: Tap-changing transformers, shunt reactors, synchronous condensers, static VAR compensators (SVC).",
        "expectedMarks": 13,
        "topics": [
          {
            "name": "Voltage implementation details",
            "frequency": 5
          },
          {
            "name": "Frequency working parameters",
            "frequency": 4
          }
        ]
      }
    ],
    "repeatedQuestions": [
      {
        "id": "rq-ps2-ee-1",
        "question": "Discuss the fundamental concepts of Per-Unit System & Symmetrical Faults: Per-unit representation of power system components. How is it implemented/used in Power System-II?",
        "years": [
          2022,
          2024
        ],
        "frequency": 2,
        "importance": "Very High Probability"
      },
      {
        "id": "rq-ps2-ee-2",
        "question": "Discuss the fundamental concepts of Symmetrical Components & Unsymmetrical Faults: Symmetrical component transformation. How is it implemented/used in Power System-II?",
        "years": [
          2023,
          2025
        ],
        "frequency": 3,
        "importance": "High Probability"
      },
      {
        "id": "rq-ps2-ee-3",
        "question": "Discuss the fundamental concepts of Power System Stability: Steady-state and transient stability definitions. Dynamics of synchronous machines: Swing equation. Equal Area Criterion: Application to sudden changes in mechanical input and faults. How is it implemented/used in Power System-II?",
        "years": [
          2024
        ],
        "frequency": 4,
        "importance": "Medium Probability"
      }
    ],
    "oneNightRevision": {
      "topQuestions": [
        "Write short notes on key methodologies and design parameters of Power System-II (Focus on Unit 3).",
        "Write short notes on key methodologies and design parameters of Power System-II (Focus on Unit 4).",
        "Write short notes on key methodologies and design parameters of Power System-II (Focus on Unit 5)."
      ],
      "definitions": [
        {
          "term": "Power System-II",
          "definition": "Symmetrical faults PU reactance short circuit capacity, symmetrical components unsymmetrical LG LL LLG faults, swing equation power stability equal area criterion, economic load dispatch, and AGC SVC control."
        },
        {
          "term": "Core Principle of EX-601",
          "definition": "The foundational architecture and operational logic that dictates the behavior of Power System-II in engineering applications."
        }
      ],
      "diagrams": [
        {
          "title": "Power System-II System Layout",
          "description": "Block diagram displaying the architectural configuration and interface linkages."
        }
      ],
      "formulas": [
        {
          "name": "EX-601 Efficiency Formula",
          "formula": "η = (Output Power / Input Power) * 100%",
          "explanation": "Calculates the performance ratio indicating total energy conversion efficiency."
        }
      ],
      "lastMinuteNotes": [
        "💡 Focus on the structural building blocks of Power System-II and their practical design constraints.",
        "💡 Review unit-wise previous exam papers and standard notations for numerical stability."
      ]
    },
    "videos": []
  },
  {
    "id": "dsp-ee",
    "name": "Digital Signal Processing",
    "code": "EX-602",
    "branchId": "ee",
    "semester": 6,
    "description": "Circular linear DFT convolution overlap add, DIT DIF Radix 2 FFT algorithms, analog Butterworth Chebyshev design IIR bilinear impulse invariance, windowing FIR Kaiser, and quantization effects.",
    "resourceCount": 32,
    "overview": {
      "syllabus": [
        "Unit I: Discrete Fourier Transform (DFT): Frequency domain sampling, properties of DFT, circular convolution, linear convolution via circular convolution, sectioned convolution (Overlap-add and Overlap-save methods).",
        "Unit II: Fast Fourier Transform (FFT): Computational efficiency. Radix-2 FFT algorithms: Decimation-in-Time (DIT) and Decimation-in-Frequency (DIF) network graphs. Inverse FFT structures.",
        "Unit III: IIR Digital Filter Design: Transformation of analog filters to digital filters. Analog filter approximations: Butterworth and Chebyshev. Design via Impulse Invariance and Bilinear Transformation methods. Frequency warping and mitigation.",
        "Unit IV: FIR Digital Filter Design: Symmetric and asymmetric FIR filters, linear phase characteristics. Design of FIR filters using Windowing methods (Rectangular, Hanning, Hamming, Kaiser), Frequency Sampling design.",
        "Unit V: Realization Systems & Finite Word Length Effects: Direct form I, Direct form II, Cascade, and Parallel structures for IIR and FIR systems. Quantization noise, input quantization, coefficient quantization, limit cycle oscillations."
      ],
      "weightageSummary": "Unit III: IIR Digital Filter Design: Tra typically represents around 40% of overall exam weightage."
    },
    "weightage": [
      {
        "unit": "Unit I: Discrete Fourier Transform (DFT): Frequency domain sampling, properties of DFT, circular convolution, linear convolution via circular convolution, sectioned convolution (Overlap-add and Overlap-save methods).",
        "expectedMarks": 12,
        "topics": [
          {
            "name": "Discrete implementation details",
            "frequency": 5
          },
          {
            "name": "Fourier working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit II: Fast Fourier Transform (FFT): Computational efficiency. Radix-2 FFT algorithms: Decimation-in-Time (DIT) and Decimation-in-Frequency (DIF) network graphs. Inverse FFT structures.",
        "expectedMarks": 14,
        "topics": [
          {
            "name": "Fourier implementation details",
            "frequency": 5
          },
          {
            "name": "Transform working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit III: IIR Digital Filter Design: Transformation of analog filters to digital filters. Analog filter approximations: Butterworth and Chebyshev. Design via Impulse Invariance and Bilinear Transformation methods. Frequency warping and mitigation.",
        "expectedMarks": 16,
        "topics": [
          {
            "name": "Digital implementation details",
            "frequency": 5
          },
          {
            "name": "Filter working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit IV: FIR Digital Filter Design: Symmetric and asymmetric FIR filters, linear phase characteristics. Design of FIR filters using Windowing methods (Rectangular, Hanning, Hamming, Kaiser), Frequency Sampling design.",
        "expectedMarks": 15,
        "topics": [
          {
            "name": "Digital implementation details",
            "frequency": 5
          },
          {
            "name": "Filter working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit V: Realization Systems & Finite Word Length Effects: Direct form I, Direct form II, Cascade, and Parallel structures for IIR and FIR systems. Quantization noise, input quantization, coefficient quantization, limit cycle oscillations.",
        "expectedMarks": 13,
        "topics": [
          {
            "name": "Realization implementation details",
            "frequency": 5
          },
          {
            "name": "Systems working parameters",
            "frequency": 4
          }
        ]
      }
    ],
    "repeatedQuestions": [
      {
        "id": "rq-dsp-ee-1",
        "question": "Discuss the fundamental concepts of Discrete Fourier Transform (DFT): Frequency domain sampling. How is it implemented/used in Digital Signal Processing?",
        "years": [
          2022,
          2024
        ],
        "frequency": 2,
        "importance": "Very High Probability"
      },
      {
        "id": "rq-dsp-ee-2",
        "question": "Discuss the fundamental concepts of Fast Fourier Transform (FFT):. How is it implemented/used in Digital Signal Processing?",
        "years": [
          2023,
          2025
        ],
        "frequency": 3,
        "importance": "High Probability"
      },
      {
        "id": "rq-dsp-ee-3",
        "question": "Discuss the fundamental concepts of IIR Digital Filter Design: Tra. How is it implemented/used in Digital Signal Processing?",
        "years": [
          2024
        ],
        "frequency": 4,
        "importance": "Medium Probability"
      }
    ],
    "oneNightRevision": {
      "topQuestions": [
        "Write short notes on key methodologies and design parameters of Digital Signal Processing (Focus on Unit 3).",
        "Write short notes on key methodologies and design parameters of Digital Signal Processing (Focus on Unit 4).",
        "Write short notes on key methodologies and design parameters of Digital Signal Processing (Focus on Unit 5)."
      ],
      "definitions": [
        {
          "term": "Digital Signal Processing",
          "definition": "Circular linear DFT convolution overlap add, DIT DIF Radix 2 FFT algorithms, analog Butterworth Chebyshev design IIR bilinear impulse invariance, windowing FIR Kaiser, and quantization effects."
        },
        {
          "term": "Core Principle of EX-602",
          "definition": "The foundational architecture and operational logic that dictates the behavior of Digital Signal Processing in engineering applications."
        }
      ],
      "diagrams": [
        {
          "title": "Digital Signal Processing System Layout",
          "description": "Block diagram displaying the architectural configuration and interface linkages."
        }
      ],
      "formulas": [
        {
          "name": "EX-602 Efficiency Formula",
          "formula": "η = (Output Power / Input Power) * 100%",
          "explanation": "Calculates the performance ratio indicating total energy conversion efficiency."
        }
      ],
      "lastMinuteNotes": [
        "💡 Focus on the structural building blocks of Digital Signal Processing and their practical design constraints.",
        "💡 Review unit-wise previous exam papers and standard notations for numerical stability."
      ]
    },
    "videos": []
  },
  {
    "id": "cn-ee",
    "name": "Computer Networks",
    "code": "EX-603",
    "branchId": "ee",
    "semester": 6,
    "description": "OSI TCP/IP layers topology, CRC framing sliding window, routing distance vector link state algorithms, UDP TCP congestion, and application DNS HTTP FTP.",
    "resourceCount": 32,
    "overview": {
      "syllabus": [
        "Unit I: Network Models: Reference models: ISO-OSI architecture, TCP/IP protocol suite topologies, transmission media (guided and unguided), switching frameworks.",
        "Unit II: Data Link Layer: Framing, error detection and correction (CRC, Hamming codes). Flow control protocols: Stop-and-Wait, Sliding Window (Go-Back-N, Selective Repeat). MAC sublayer: ALOHA, CSMA/CD, CSMA/CA.",
        "Unit III: Network Layer: IPv4 and IPv6 addressing schemes, subnetting, classless inter-domain routing (CIDR). Routing algorithms: Distance Vector (RIP), Link State (OSPF). ARP, ICMP.",
        "Unit IV: Transport Layer: Connectionless vs Connection-oriented services. UDP datagram structure. TCP segment format, connection establishment and termination, flow control, and TCP congestion control algorithms.",
        "Unit V: Application Layer & Network Security: Domain Name System (DNS), HTTP, FTP, SMTP. Basic cryptography tools: Symmetric/Asymmetric key encryption, firewalls, digital signatures."
      ],
      "weightageSummary": "Unit III: Network Layer: IPv4 and IPv6 a typically represents around 40% of overall exam weightage."
    },
    "weightage": [
      {
        "unit": "Unit I: Network Models: Reference models: ISO-OSI architecture, TCP/IP protocol suite topologies, transmission media (guided and unguided), switching frameworks.",
        "expectedMarks": 12,
        "topics": [
          {
            "name": "Network implementation details",
            "frequency": 5
          },
          {
            "name": "Models working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit II: Data Link Layer: Framing, error detection and correction (CRC, Hamming codes). Flow control protocols: Stop-and-Wait, Sliding Window (Go-Back-N, Selective Repeat). MAC sublayer: ALOHA, CSMA/CD, CSMA/CA.",
        "expectedMarks": 14,
        "topics": [
          {
            "name": "Framing implementation details",
            "frequency": 5
          },
          {
            "name": "detection working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit III: Network Layer: IPv4 and IPv6 addressing schemes, subnetting, classless inter-domain routing (CIDR). Routing algorithms: Distance Vector (RIP), Link State (OSPF). ARP, ICMP.",
        "expectedMarks": 16,
        "topics": [
          {
            "name": "Network implementation details",
            "frequency": 5
          },
          {
            "name": "addressing working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit IV: Transport Layer: Connectionless vs Connection-oriented services. UDP datagram structure. TCP segment format, connection establishment and termination, flow control, and TCP congestion control algorithms.",
        "expectedMarks": 15,
        "topics": [
          {
            "name": "Transport implementation details",
            "frequency": 5
          },
          {
            "name": "Connectionless working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit V: Application Layer & Network Security: Domain Name System (DNS), HTTP, FTP, SMTP. Basic cryptography tools: Symmetric/Asymmetric key encryption, firewalls, digital signatures.",
        "expectedMarks": 13,
        "topics": [
          {
            "name": "Application implementation details",
            "frequency": 5
          },
          {
            "name": "Network working parameters",
            "frequency": 4
          }
        ]
      }
    ],
    "repeatedQuestions": [
      {
        "id": "rq-cn-ee-1",
        "question": "Discuss the fundamental concepts of Network Models: Reference models: ISO-OSI architecture. How is it implemented/used in Computer Networks?",
        "years": [
          2022,
          2024
        ],
        "frequency": 2,
        "importance": "Very High Probability"
      },
      {
        "id": "rq-cn-ee-2",
        "question": "Discuss the fundamental concepts of Data Link Layer: Framing. How is it implemented/used in Computer Networks?",
        "years": [
          2023,
          2025
        ],
        "frequency": 3,
        "importance": "High Probability"
      },
      {
        "id": "rq-cn-ee-3",
        "question": "Discuss the fundamental concepts of Network Layer: IPv4 and IPv6 addressing schemes. How is it implemented/used in Computer Networks?",
        "years": [
          2024
        ],
        "frequency": 4,
        "importance": "Medium Probability"
      }
    ],
    "oneNightRevision": {
      "topQuestions": [
        "Write short notes on key methodologies and design parameters of Computer Networks (Focus on Unit 3).",
        "Write short notes on key methodologies and design parameters of Computer Networks (Focus on Unit 4).",
        "Write short notes on key methodologies and design parameters of Computer Networks (Focus on Unit 5)."
      ],
      "definitions": [
        {
          "term": "Computer Networks",
          "definition": "OSI TCP/IP layers topology, CRC framing sliding window, routing distance vector link state algorithms, UDP TCP congestion, and application DNS HTTP FTP."
        },
        {
          "term": "Core Principle of EX-603",
          "definition": "The foundational architecture and operational logic that dictates the behavior of Computer Networks in engineering applications."
        }
      ],
      "diagrams": [
        {
          "title": "Computer Networks System Layout",
          "description": "Block diagram displaying the architectural configuration and interface linkages."
        }
      ],
      "formulas": [
        {
          "name": "EX-603 Efficiency Formula",
          "formula": "η = (Output Power / Input Power) * 100%",
          "explanation": "Calculates the performance ratio indicating total energy conversion efficiency."
        }
      ],
      "lastMinuteNotes": [
        "💡 Focus on the structural building blocks of Computer Networks and their practical design constraints.",
        "💡 Review unit-wise previous exam papers and standard notations for numerical stability."
      ]
    },
    "videos": []
  },
  {
    "id": "hve-ee",
    "name": "High Voltage Engineering",
    "code": "EX-701",
    "branchId": "ee",
    "semester": 7,
    "description": "TownsendPaschen breakdown mechanisms gases liquid solid insulation, impulse voltage generation Marx Cockcroft-Walton resonant transformers, sphere gaps dividers Rogowski measurements, and apparatus testing.",
    "resourceCount": 34,
    "overview": {
      "syllabus": [
        "Unit I: Conduction and Breakdown in Gases: Ionization processes (Townsend's primary and secondary coefficients). Townsend's criterion for breakdown, Paschen's Law. Breakdown in electronegative gases. Streamer mechanism of breakdown. Corona discharges.",
        "Unit II: Breakdown in Liquid & Solid Dielectrics: Liquid dielectrics: Pure and commercial liquids, breakdown mechanisms (suspended particle, electronic, cavity breakdown). Solid dielectrics: Intrinsic, electromechanical, thermal, and tracking breakdowns.",
        "Unit III: Generation of High Voltages and Currents: Generation of high DC voltages: Rectifier circuits, Cockcroft-Walton voltage multiplier. Generation of high AC voltages: Testing transformers, resonant transformers. Generation of impulse voltages/currents: Marx circuit, multistage impulse generator profiles.",
        "Unit IV: Measurement of High Voltages and Currents: Measurement of high DC, AC, and impulse voltages: Sphere gaps, electrostatic voltmeters, generating voltmeters, voltage dividers (resistive and capacitive). Measurement of high impulse currents: Rogowski coils, magnetic shunts.",
        "Unit V: High Voltage Testing of Electrical Apparatus: Testing of insulators, bushings, isolators, circuit breakers, cables, and transformers according to international standards. Non-destructive insulation test techniques."
      ],
      "weightageSummary": "Unit III: Generation of High Voltages an typically represents around 40% of overall exam weightage."
    },
    "weightage": [
      {
        "unit": "Unit I: Conduction and Breakdown in Gases: Ionization processes (Townsend's primary and secondary coefficients). Townsend's criterion for breakdown, Paschen's Law. Breakdown in electronegative gases. Streamer mechanism of breakdown. Corona discharges.",
        "expectedMarks": 12,
        "topics": [
          {
            "name": "Conduction implementation details",
            "frequency": 5
          },
          {
            "name": "Breakdown working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit II: Breakdown in Liquid & Solid Dielectrics: Liquid dielectrics: Pure and commercial liquids, breakdown mechanisms (suspended particle, electronic, cavity breakdown). Solid dielectrics: Intrinsic, electromechanical, thermal, and tracking breakdowns.",
        "expectedMarks": 14,
        "topics": [
          {
            "name": "Breakdown implementation details",
            "frequency": 5
          },
          {
            "name": "Liquid working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit III: Generation of High Voltages and Currents: Generation of high DC voltages: Rectifier circuits, Cockcroft-Walton voltage multiplier. Generation of high AC voltages: Testing transformers, resonant transformers. Generation of impulse voltages/currents: Marx circuit, multistage impulse generator profiles.",
        "expectedMarks": 16,
        "topics": [
          {
            "name": "Generation implementation details",
            "frequency": 5
          },
          {
            "name": "Voltages working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit IV: Measurement of High Voltages and Currents: Measurement of high DC, AC, and impulse voltages: Sphere gaps, electrostatic voltmeters, generating voltmeters, voltage dividers (resistive and capacitive). Measurement of high impulse currents: Rogowski coils, magnetic shunts.",
        "expectedMarks": 15,
        "topics": [
          {
            "name": "Measurement implementation details",
            "frequency": 5
          },
          {
            "name": "Voltages working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit V: High Voltage Testing of Electrical Apparatus: Testing of insulators, bushings, isolators, circuit breakers, cables, and transformers according to international standards. Non-destructive insulation test techniques.",
        "expectedMarks": 13,
        "topics": [
          {
            "name": "Voltage implementation details",
            "frequency": 5
          },
          {
            "name": "Testing working parameters",
            "frequency": 4
          }
        ]
      }
    ],
    "repeatedQuestions": [
      {
        "id": "rq-hve-ee-1",
        "question": "Discuss the fundamental concepts of Conduction and Breakdown in Gases: Ionization processes (Townsend's primary and secondary coefficients). Townsend's criterion for breakdown. How is it implemented/used in High Voltage Engineering?",
        "years": [
          2022,
          2024
        ],
        "frequency": 2,
        "importance": "Very High Probability"
      },
      {
        "id": "rq-hve-ee-2",
        "question": "Discuss the fundamental concepts of Breakdown in Liquid & Solid Dielectrics: Liquid dielectrics: Pure and commercial liquids. How is it implemented/used in High Voltage Engineering?",
        "years": [
          2023,
          2025
        ],
        "frequency": 3,
        "importance": "High Probability"
      },
      {
        "id": "rq-hve-ee-3",
        "question": "Discuss the fundamental concepts of Generation of High Voltages and Currents: Generation of high DC voltages: Rectifier circuits. How is it implemented/used in High Voltage Engineering?",
        "years": [
          2024
        ],
        "frequency": 4,
        "importance": "Medium Probability"
      }
    ],
    "oneNightRevision": {
      "topQuestions": [
        "Write short notes on key methodologies and design parameters of High Voltage Engineering (Focus on Unit 3).",
        "Write short notes on key methodologies and design parameters of High Voltage Engineering (Focus on Unit 4).",
        "Write short notes on key methodologies and design parameters of High Voltage Engineering (Focus on Unit 5)."
      ],
      "definitions": [
        {
          "term": "High Voltage Engineering",
          "definition": "TownsendPaschen breakdown mechanisms gases liquid solid insulation, impulse voltage generation Marx Cockcroft-Walton resonant transformers, sphere gaps dividers Rogowski measurements, and apparatus testing."
        },
        {
          "term": "Core Principle of EX-701",
          "definition": "The foundational architecture and operational logic that dictates the behavior of High Voltage Engineering in engineering applications."
        }
      ],
      "diagrams": [
        {
          "title": "High Voltage Engineering System Layout",
          "description": "Block diagram displaying the architectural configuration and interface linkages."
        }
      ],
      "formulas": [
        {
          "name": "EX-701 Efficiency Formula",
          "formula": "η = (Output Power / Input Power) * 100%",
          "explanation": "Calculates the performance ratio indicating total energy conversion efficiency."
        }
      ],
      "lastMinuteNotes": [
        "💡 Focus on the structural building blocks of High Voltage Engineering and their practical design constraints.",
        "💡 Review unit-wise previous exam papers and standard notations for numerical stability."
      ]
    },
    "videos": []
  },
  {
    "id": "ed-ee",
    "name": "Electrical Drives",
    "code": "EX-702",
    "branchId": "ee",
    "semester": 7,
    "description": "Dynamics speed torque quadrant elements drives, solid state DC motor semi full converter fed chopper drives, induction motor stator voltage V/f vector control, and synchronous special drives.",
    "resourceCount": 34,
    "overview": {
      "syllabus": [
        "Unit I: Dynamics of Electrical Drives: Structural elements, dynamics of motor-load combination, quadrant operation of drives. Components of load torques, steady-state stability calculation, acceleration and deceleration time tracking.",
        "Unit II: DC Motor Drives: Solid-state speed control of DC shunt and series motors. Single-phase and three-phase semi-converter and full-converter fed DC drives. Chopper-fed DC drives: Single-quadrant, two-quadrant, and four-quadrant operations. Regenerative braking.",
        "Unit III: Induction Motor Drives: Conventional starting, braking, and speed control. PWM, VSI, and CSI fed drives. Cyclo-converter fed drives, vector control, slip-controlled drives (Crammers & Scherbius), and rotor impedance control.",
        "Unit IV: Synchronous Motor Drives: VSI and CSI fed drives; self-controlled brushless and commutatorless DC & AC motor drives.",
        "Unit V: Special Drives: Fundamentals of Switched Reluctance Motors (SRM), Stepper Motors, and Permanent Magnet Motors. Introduction to vector control and digital control of drives. Case studies: Electric traction, steel/cement/textile plants, and machine tool drives (CNC)."
      ],
      "weightageSummary": "Unit III: Induction Motor Drives: Conven typically represents around 40% of overall exam weightage."
    },
    "weightage": [
      {
        "unit": "Unit I: Dynamics of Electrical Drives: Structural elements, dynamics of motor-load combination, quadrant operation of drives. Components of load torques, steady-state stability calculation, acceleration and deceleration time tracking.",
        "expectedMarks": 12,
        "topics": [
          {
            "name": "Dynamics implementation details",
            "frequency": 5
          },
          {
            "name": "Electrical working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit II: DC Motor Drives: Solid-state speed control of DC shunt and series motors. Single-phase and three-phase semi-converter and full-converter fed DC drives. Chopper-fed DC drives: Single-quadrant, two-quadrant, and four-quadrant operations. Regenerative braking.",
        "expectedMarks": 14,
        "topics": [
          {
            "name": "Drives implementation details",
            "frequency": 5
          },
          {
            "name": "Solid-state working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit III: Induction Motor Drives: Conventional starting, braking, and speed control. PWM, VSI, and CSI fed drives. Cyclo-converter fed drives, vector control, slip-controlled drives (Crammers & Scherbius), and rotor impedance control.",
        "expectedMarks": 16,
        "topics": [
          {
            "name": "Induction implementation details",
            "frequency": 5
          },
          {
            "name": "Drives working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit IV: Synchronous Motor Drives: VSI and CSI fed drives; self-controlled brushless and commutatorless DC & AC motor drives.",
        "expectedMarks": 15,
        "topics": [
          {
            "name": "Synchronous implementation details",
            "frequency": 5
          },
          {
            "name": "Drives working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit V: Special Drives: Fundamentals of Switched Reluctance Motors (SRM), Stepper Motors, and Permanent Magnet Motors. Introduction to vector control and digital control of drives. Case studies: Electric traction, steel/cement/textile plants, and machine tool drives (CNC).",
        "expectedMarks": 13,
        "topics": [
          {
            "name": "Special implementation details",
            "frequency": 5
          },
          {
            "name": "Drives working parameters",
            "frequency": 4
          }
        ]
      }
    ],
    "repeatedQuestions": [
      {
        "id": "rq-ed-ee-1",
        "question": "Discuss the fundamental concepts of Dynamics of Electrical Drives: Structural elements. How is it implemented/used in Electrical Drives?",
        "years": [
          2022,
          2024
        ],
        "frequency": 2,
        "importance": "Very High Probability"
      },
      {
        "id": "rq-ed-ee-2",
        "question": "Discuss the fundamental concepts of DC Motor Drives: Solid-state speed control of DC shunt and series motors. Single-phase and three-phase semi-converter and full-converter fed DC drives. Chopper-fed DC drives: Single-quadrant. How is it implemented/used in Electrical Drives?",
        "years": [
          2023,
          2025
        ],
        "frequency": 3,
        "importance": "High Probability"
      },
      {
        "id": "rq-ed-ee-3",
        "question": "Discuss the fundamental concepts of Induction Motor Drives: Conventional starting. How is it implemented/used in Electrical Drives?",
        "years": [
          2024
        ],
        "frequency": 4,
        "importance": "Medium Probability"
      }
    ],
    "oneNightRevision": {
      "topQuestions": [
        "Write short notes on key methodologies and design parameters of Electrical Drives (Focus on Unit 3).",
        "Write short notes on key methodologies and design parameters of Electrical Drives (Focus on Unit 4).",
        "Write short notes on key methodologies and design parameters of Electrical Drives (Focus on Unit 5)."
      ],
      "definitions": [
        {
          "term": "Electrical Drives",
          "definition": "Dynamics speed torque quadrant elements drives, solid state DC motor semi full converter fed chopper drives, induction motor stator voltage V/f vector control, and synchronous special drives."
        },
        {
          "term": "Core Principle of EX-702",
          "definition": "The foundational architecture and operational logic that dictates the behavior of Electrical Drives in engineering applications."
        }
      ],
      "diagrams": [
        {
          "title": "Electrical Drives System Layout",
          "description": "Block diagram displaying the architectural configuration and interface linkages."
        }
      ],
      "formulas": [
        {
          "name": "EX-702 Efficiency Formula",
          "formula": "η = (Output Power / Input Power) * 100%",
          "explanation": "Calculates the performance ratio indicating total energy conversion efficiency."
        }
      ],
      "lastMinuteNotes": [
        "💡 Focus on the structural building blocks of Electrical Drives and their practical design constraints.",
        "💡 Review unit-wise previous exam papers and standard notations for numerical stability."
      ]
    },
    "videos": []
  },
  {
    "id": "pq-ee",
    "name": "Power Quality Problems and Mitigation Techniques",
    "code": "EX-802",
    "branchId": "ee",
    "semester": 8,
    "description": "Power voltage quality classes evaluation disturbances, passive shunt series active DSTATCOM compensation, UPQC unified compensators, sags transients harmonics, and harmonic control shunt active filters.",
    "resourceCount": 36,
    "overview": {
      "syllabus": [
        "Unit I: Introduction: Power quality and voltage quality. Power quality evaluation procedures: terms and definitions. General classes of power quality problems. Causes and effects of power quality disturbances.",
        "Unit II: Loads and Compensation: Loads that cause power quality problems. State-of-the-art on passive shunt and series compensation. Classification and working of passive shunt and series compensation. Classification, principle, and control of active shunt compensators (DSTATCOM). Active series compensators: working and control.",
        "Unit III: Unified Power Quality Compensators: Introduction to unified power quality compensators (UPQC). Classification, working, and operation of UPQC.",
        "Unit IV: Voltage Sags, Interruptions, and Transients: Voltage sags and interruption: Sources, estimating voltage sag performance, fundamental principles of protection, and monitoring sags. Transients over voltages: Sources of transient over voltages, principles of over-voltage protection, and utility capacitor switching transients. Harmonics: Fundamentals of harmonics and harmonic distortion, and harmonic sources from commercial and industrial loads.",
        "Unit V: Applied Harmonics: Harmonic distortion evaluation. Principles for controlling harmonics. Harmonic study devices for controlling harmonic distortion. Shunt active and passive filters: operation and control."
      ],
      "weightageSummary": "Unit III: Unified Power Quality Compensa typically represents around 40% of overall exam weightage."
    },
    "weightage": [
      {
        "unit": "Unit I: Introduction: Power quality and voltage quality. Power quality evaluation procedures: terms and definitions. General classes of power quality problems. Causes and effects of power quality disturbances.",
        "expectedMarks": 12,
        "topics": [
          {
            "name": "quality implementation details",
            "frequency": 5
          },
          {
            "name": "voltage working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit II: Loads and Compensation: Loads that cause power quality problems. State-of-the-art on passive shunt and series compensation. Classification and working of passive shunt and series compensation. Classification, principle, and control of active shunt compensators (DSTATCOM). Active series compensators: working and control.",
        "expectedMarks": 14,
        "topics": [
          {
            "name": "Compensation implementation details",
            "frequency": 5
          },
          {
            "name": "quality working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit III: Unified Power Quality Compensators: Introduction to unified power quality compensators (UPQC). Classification, working, and operation of UPQC.",
        "expectedMarks": 16,
        "topics": [
          {
            "name": "Unified implementation details",
            "frequency": 5
          },
          {
            "name": "Quality working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit IV: Voltage Sags, Interruptions, and Transients: Voltage sags and interruption: Sources, estimating voltage sag performance, fundamental principles of protection, and monitoring sags. Transients over voltages: Sources of transient over voltages, principles of over-voltage protection, and utility capacitor switching transients. Harmonics: Fundamentals of harmonics and harmonic distortion, and harmonic sources from commercial and industrial loads.",
        "expectedMarks": 15,
        "topics": [
          {
            "name": "Voltage implementation details",
            "frequency": 5
          },
          {
            "name": "Interruptions working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit V: Applied Harmonics: Harmonic distortion evaluation. Principles for controlling harmonics. Harmonic study devices for controlling harmonic distortion. Shunt active and passive filters: operation and control.",
        "expectedMarks": 13,
        "topics": [
          {
            "name": "Applied implementation details",
            "frequency": 5
          },
          {
            "name": "Harmonics working parameters",
            "frequency": 4
          }
        ]
      }
    ],
    "repeatedQuestions": [
      {
        "id": "rq-pq-ee-1",
        "question": "Discuss the fundamental concepts of Introduction: Power quality an. How is it implemented/used in Power Quality Problems and Mitigation Techniques?",
        "years": [
          2022,
          2024
        ],
        "frequency": 2,
        "importance": "Very High Probability"
      },
      {
        "id": "rq-pq-ee-2",
        "question": "Discuss the fundamental concepts of Loads and Compensation: Loads that cause power quality problems. State-of-the-art on passive shunt and series compensation. Classification and working of passive shunt and series compensation. Classification. How is it implemented/used in Power Quality Problems and Mitigation Techniques?",
        "years": [
          2023,
          2025
        ],
        "frequency": 3,
        "importance": "High Probability"
      },
      {
        "id": "rq-pq-ee-3",
        "question": "Discuss the fundamental concepts of Unified Power Quality Compensators: Introduction to unified power quality compensators (UPQC). Classification. How is it implemented/used in Power Quality Problems and Mitigation Techniques?",
        "years": [
          2024
        ],
        "frequency": 4,
        "importance": "Medium Probability"
      }
    ],
    "oneNightRevision": {
      "topQuestions": [
        "Write short notes on key methodologies and design parameters of Power Quality Problems and Mitigation Techniques (Focus on Unit 3).",
        "Write short notes on key methodologies and design parameters of Power Quality Problems and Mitigation Techniques (Focus on Unit 4).",
        "Write short notes on key methodologies and design parameters of Power Quality Problems and Mitigation Techniques (Focus on Unit 5)."
      ],
      "definitions": [
        {
          "term": "Power Quality Problems and Mitigation Techniques",
          "definition": "Power voltage quality classes evaluation disturbances, passive shunt series active DSTATCOM compensation, UPQC unified compensators, sags transients harmonics, and harmonic control shunt active filters."
        },
        {
          "term": "Core Principle of EX-802",
          "definition": "The foundational architecture and operational logic that dictates the behavior of Power Quality Problems and Mitigation Techniques in engineering applications."
        }
      ],
      "diagrams": [
        {
          "title": "Power Quality Problems and Mitigation Techniques System Layout",
          "description": "Block diagram displaying the architectural configuration and interface linkages."
        }
      ],
      "formulas": [
        {
          "name": "EX-802 Efficiency Formula",
          "formula": "η = (Output Power / Input Power) * 100%",
          "explanation": "Calculates the performance ratio indicating total energy conversion efficiency."
        }
      ],
      "lastMinuteNotes": [
        "💡 Focus on the structural building blocks of Power Quality Problems and Mitigation Techniques and their practical design constraints.",
        "💡 Review unit-wise previous exam papers and standard notations for numerical stability."
      ]
    },
    "videos": []
  },
  {
    "id": "thermo-me",
    "name": "Thermodynamics",
    "code": "ME-302",
    "branchId": "me",
    "semester": 3,
    "description": "Thermodynamic equilibrium first law SFEE, second law Carnot entropy inequality, availability exergy closed open, pure substance relations Joule-Kelvin, and air power cycles.",
    "resourceCount": 26,
    "overview": {
      "syllabus": [
        "Unit I: Basic Concepts & First Law: System, boundary, surroundings, property, state, process, cycle, thermodynamic equilibrium. Zeroth Law. First Law of Thermodynamics: Applied to closed and open systems, steady flow energy equation (SFEE) and its structural applications.",
        "Unit II: Second Law & Entropy: Kelvin-Planck and Clausius statements, structural equivalence. Reversible and irreversible processes, Carnot cycle, Carnot theorem. Entropy: Clausius inequality, entropy change for ideal gases, principle of increase of entropy.",
        "Unit III: Availability & Irreversibility: High and low-grade energy, available and unavailable energy. Exergy analysis of closed and open systems, dead state, irreversibility, second law efficiency.",
        "Unit IV: Pure Substances & Thermodynamic Relations: P-V, P-T, T-S, and H-S diagrams for pure substances. Dryness fraction measurement. Maxwell’s equations, TdS equations, Joule-Kelvin effect, Clausius-Clapeyron equation.",
        "Unit V: Gas Power Cycles: Air standard cycles: Otto, Diesel, Dual, Stirling, Ericsson, and Brayton cycles. Calculation of air standard efficiency, mean effective pressure, and comparison between cycles."
      ],
      "weightageSummary": "Unit III: Availability & Irreversibility typically represents around 40% of overall exam weightage."
    },
    "weightage": [
      {
        "unit": "Unit I: Basic Concepts & First Law: System, boundary, surroundings, property, state, process, cycle, thermodynamic equilibrium. Zeroth Law. First Law of Thermodynamics: Applied to closed and open systems, steady flow energy equation (SFEE) and its structural applications.",
        "expectedMarks": 12,
        "topics": [
          {
            "name": "System implementation details",
            "frequency": 5
          },
          {
            "name": "boundary working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit II: Second Law & Entropy: Kelvin-Planck and Clausius statements, structural equivalence. Reversible and irreversible processes, Carnot cycle, Carnot theorem. Entropy: Clausius inequality, entropy change for ideal gases, principle of increase of entropy.",
        "expectedMarks": 14,
        "topics": [
          {
            "name": "Second implementation details",
            "frequency": 5
          },
          {
            "name": "Entropy working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit III: Availability & Irreversibility: High and low-grade energy, available and unavailable energy. Exergy analysis of closed and open systems, dead state, irreversibility, second law efficiency.",
        "expectedMarks": 16,
        "topics": [
          {
            "name": "Availability implementation details",
            "frequency": 5
          },
          {
            "name": "Irreversibility working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit IV: Pure Substances & Thermodynamic Relations: P-V, P-T, T-S, and H-S diagrams for pure substances. Dryness fraction measurement. Maxwell’s equations, TdS equations, Joule-Kelvin effect, Clausius-Clapeyron equation.",
        "expectedMarks": 15,
        "topics": [
          {
            "name": "Substances implementation details",
            "frequency": 5
          },
          {
            "name": "Thermodynamic working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit V: Gas Power Cycles: Air standard cycles: Otto, Diesel, Dual, Stirling, Ericsson, and Brayton cycles. Calculation of air standard efficiency, mean effective pressure, and comparison between cycles.",
        "expectedMarks": 13,
        "topics": [
          {
            "name": "Cycles implementation details",
            "frequency": 5
          },
          {
            "name": "standard working parameters",
            "frequency": 4
          }
        ]
      }
    ],
    "repeatedQuestions": [
      {
        "id": "rq-thermo-me-1",
        "question": "Discuss the fundamental concepts of Basic Concepts & First Law: System. How is it implemented/used in Thermodynamics?",
        "years": [
          2022,
          2024
        ],
        "frequency": 2,
        "importance": "Very High Probability"
      },
      {
        "id": "rq-thermo-me-2",
        "question": "Discuss the fundamental concepts of Second Law & Entropy: Kelvin-Planck and Clausius statements. How is it implemented/used in Thermodynamics?",
        "years": [
          2023,
          2025
        ],
        "frequency": 3,
        "importance": "High Probability"
      },
      {
        "id": "rq-thermo-me-3",
        "question": "Discuss the fundamental concepts of Availability & Irreversibility: High and low-grade energy. How is it implemented/used in Thermodynamics?",
        "years": [
          2024
        ],
        "frequency": 4,
        "importance": "Medium Probability"
      }
    ],
    "oneNightRevision": {
      "topQuestions": [
        "Write short notes on key methodologies and design parameters of Thermodynamics (Focus on Unit 3).",
        "Write short notes on key methodologies and design parameters of Thermodynamics (Focus on Unit 4).",
        "Write short notes on key methodologies and design parameters of Thermodynamics (Focus on Unit 5)."
      ],
      "definitions": [
        {
          "term": "Thermodynamics",
          "definition": "Thermodynamic equilibrium first law SFEE, second law Carnot entropy inequality, availability exergy closed open, pure substance relations Joule-Kelvin, and air power cycles."
        },
        {
          "term": "Core Principle of ME-302",
          "definition": "The foundational architecture and operational logic that dictates the behavior of Thermodynamics in engineering applications."
        }
      ],
      "diagrams": [
        {
          "title": "Thermodynamics System Layout",
          "description": "Block diagram displaying the architectural configuration and interface linkages."
        }
      ],
      "formulas": [
        {
          "name": "ME-302 Efficiency Formula",
          "formula": "η = (Output Power / Input Power) * 100%",
          "explanation": "Calculates the performance ratio indicating total energy conversion efficiency."
        }
      ],
      "lastMinuteNotes": [
        "💡 Focus on the structural building blocks of Thermodynamics and their practical design constraints.",
        "💡 Review unit-wise previous exam papers and standard notations for numerical stability."
      ]
    },
    "videos": []
  },
  {
    "id": "mat-me",
    "name": "Materials Technology",
    "code": "ME-303",
    "branchId": "me",
    "semester": 3,
    "description": "Crystal lattice Miller defects dislocation, phase diagrams binary eutectic Fe-C phases, heat treatment annealing normalizing TTT surface, mechanical testing tensile fatigue creep, and non-ferrous alloys.",
    "resourceCount": 26,
    "overview": {
      "syllabus": [
        "Unit I: Crystal Structure & Imperfections: Unit cell, space lattices, BCC, FCC, and HCP structures, Miller indices. Crystal imperfections: Point, line, surface, and volume defects. Dislocation theory.",
        "Unit II: Phase Diagrams & Equilibrium: Solid solutions, Hume-Rothery rules. Isomorphous, eutectic, peritectic, and eutectoid systems. Iron-Carbon (Fe-C) equilibrium diagram: Phases, invariant reactions, and microstructural transformations.",
        "Unit III: Heat Treatment of Steels: TTT diagrams. Annealing, normalizing, hardening, tempering, austempering, and martempering. Surface hardening techniques: Carburizing, nitriding, cyaniding, and induction hardening.",
        "Unit IV: Mechanical Properties & Testing: Elastic and plastic deformation, slip and twinning. Destructive testing: Tensile, hardness (Brinell, Rockwell, Vickers), impact (Izod, Charpy), fatigue, and creep testing.",
        "Unit V: Engineering Materials: Classification, properties, and applications of alloy steels, cast irons, non-ferrous alloys (Al, Cu, Mg, Ti). Introduction to polymers, ceramics, and composite materials."
      ],
      "weightageSummary": "Unit III: Heat Treatment of Steels: TTT  typically represents around 40% of overall exam weightage."
    },
    "weightage": [
      {
        "unit": "Unit I: Crystal Structure & Imperfections: Unit cell, space lattices, BCC, FCC, and HCP structures, Miller indices. Crystal imperfections: Point, line, surface, and volume defects. Dislocation theory.",
        "expectedMarks": 12,
        "topics": [
          {
            "name": "Crystal implementation details",
            "frequency": 5
          },
          {
            "name": "Structure working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit II: Phase Diagrams & Equilibrium: Solid solutions, Hume-Rothery rules. Isomorphous, eutectic, peritectic, and eutectoid systems. Iron-Carbon (Fe-C) equilibrium diagram: Phases, invariant reactions, and microstructural transformations.",
        "expectedMarks": 14,
        "topics": [
          {
            "name": "Diagrams implementation details",
            "frequency": 5
          },
          {
            "name": "Equilibrium working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit III: Heat Treatment of Steels: TTT diagrams. Annealing, normalizing, hardening, tempering, austempering, and martempering. Surface hardening techniques: Carburizing, nitriding, cyaniding, and induction hardening.",
        "expectedMarks": 16,
        "topics": [
          {
            "name": "Treatment implementation details",
            "frequency": 5
          },
          {
            "name": "Steels working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit IV: Mechanical Properties & Testing: Elastic and plastic deformation, slip and twinning. Destructive testing: Tensile, hardness (Brinell, Rockwell, Vickers), impact (Izod, Charpy), fatigue, and creep testing.",
        "expectedMarks": 15,
        "topics": [
          {
            "name": "Mechanical implementation details",
            "frequency": 5
          },
          {
            "name": "Properties working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit V: Engineering Materials: Classification, properties, and applications of alloy steels, cast irons, non-ferrous alloys (Al, Cu, Mg, Ti). Introduction to polymers, ceramics, and composite materials.",
        "expectedMarks": 13,
        "topics": [
          {
            "name": "Engineering implementation details",
            "frequency": 5
          },
          {
            "name": "Materials working parameters",
            "frequency": 4
          }
        ]
      }
    ],
    "repeatedQuestions": [
      {
        "id": "rq-mat-me-1",
        "question": "Discuss the fundamental concepts of Crystal Structure & Imperfections: Unit cell. How is it implemented/used in Materials Technology?",
        "years": [
          2022,
          2024
        ],
        "frequency": 2,
        "importance": "Very High Probability"
      },
      {
        "id": "rq-mat-me-2",
        "question": "Discuss the fundamental concepts of Phase Diagrams & Equilibrium: Solid solutions. How is it implemented/used in Materials Technology?",
        "years": [
          2023,
          2025
        ],
        "frequency": 3,
        "importance": "High Probability"
      },
      {
        "id": "rq-mat-me-3",
        "question": "Discuss the fundamental concepts of Heat Treatment of Steels: TTT diagrams. Annealing. How is it implemented/used in Materials Technology?",
        "years": [
          2024
        ],
        "frequency": 4,
        "importance": "Medium Probability"
      }
    ],
    "oneNightRevision": {
      "topQuestions": [
        "Write short notes on key methodologies and design parameters of Materials Technology (Focus on Unit 3).",
        "Write short notes on key methodologies and design parameters of Materials Technology (Focus on Unit 4).",
        "Write short notes on key methodologies and design parameters of Materials Technology (Focus on Unit 5)."
      ],
      "definitions": [
        {
          "term": "Materials Technology",
          "definition": "Crystal lattice Miller defects dislocation, phase diagrams binary eutectic Fe-C phases, heat treatment annealing normalizing TTT surface, mechanical testing tensile fatigue creep, and non-ferrous alloys."
        },
        {
          "term": "Core Principle of ME-303",
          "definition": "The foundational architecture and operational logic that dictates the behavior of Materials Technology in engineering applications."
        }
      ],
      "diagrams": [
        {
          "title": "Materials Technology System Layout",
          "description": "Block diagram displaying the architectural configuration and interface linkages."
        }
      ],
      "formulas": [
        {
          "name": "ME-303 Efficiency Formula",
          "formula": "η = (Output Power / Input Power) * 100%",
          "explanation": "Calculates the performance ratio indicating total energy conversion efficiency."
        }
      ],
      "lastMinuteNotes": [
        "💡 Focus on the structural building blocks of Materials Technology and their practical design constraints.",
        "💡 Review unit-wise previous exam papers and standard notations for numerical stability."
      ]
    },
    "videos": []
  },
  {
    "id": "som-me",
    "name": "Strength of Materials",
    "code": "ME-304",
    "branchId": "me",
    "semester": 3,
    "description": "Hooke stress strain ductile brittle Mohr, SFD BMD cantilever simply supported overhanging UVL, pure bending flexural torsion shafts, double integration Macaulay beam deflection, and Euler Rankine columns.",
    "resourceCount": 26,
    "overview": {
      "syllabus": [
        "Unit I: Stress and Strain: Types of stresses and strains, Hooke’s Law, stress-strain curves for ductile and brittle materials. Elastic constants and their relationships. Thermal stresses, principal stresses, and Mohr’s Circle of stress.",
        "Unit II: Shear Force and Bending Moment: Concept of beams, types of loads and supports. SFD and BMD for cantilever, simply supported, and overhanging beams subjected to point loads, UDL, and uniformly varying loads (UVL).",
        "Unit III: Stresses in Beams & Torsion: Theory of pure bending, section modulus, flexural formula. Distribution of bending and shear stresses across various beam cross-sections. Torsion of circular solid and hollow shafts, torque transmission.",
        "Unit IV: Deflection of Beams & Thin Cylinders: Deflection equations using Double Integration, Macaulay’s, and Area-Moment methods. Thin cylindrical and spherical shells subjected to internal fluid pressure.",
        "Unit V: Columns and Struts: Buckling state, Euler’s column theory, crippling load derivation for different end conditions, limitations. Rankine’s empirical formula for columns."
      ],
      "weightageSummary": "Unit III: Stresses in Beams & Torsion: T typically represents around 40% of overall exam weightage."
    },
    "weightage": [
      {
        "unit": "Unit I: Stress and Strain: Types of stresses and strains, Hooke’s Law, stress-strain curves for ductile and brittle materials. Elastic constants and their relationships. Thermal stresses, principal stresses, and Mohr’s Circle of stress.",
        "expectedMarks": 12,
        "topics": [
          {
            "name": "Stress implementation details",
            "frequency": 5
          },
          {
            "name": "Strain working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit II: Shear Force and Bending Moment: Concept of beams, types of loads and supports. SFD and BMD for cantilever, simply supported, and overhanging beams subjected to point loads, UDL, and uniformly varying loads (UVL).",
        "expectedMarks": 14,
        "topics": [
          {
            "name": "Bending implementation details",
            "frequency": 5
          },
          {
            "name": "Moment working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit III: Stresses in Beams & Torsion: Theory of pure bending, section modulus, flexural formula. Distribution of bending and shear stresses across various beam cross-sections. Torsion of circular solid and hollow shafts, torque transmission.",
        "expectedMarks": 16,
        "topics": [
          {
            "name": "Stresses implementation details",
            "frequency": 5
          },
          {
            "name": "Torsion working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit IV: Deflection of Beams & Thin Cylinders: Deflection equations using Double Integration, Macaulay’s, and Area-Moment methods. Thin cylindrical and spherical shells subjected to internal fluid pressure.",
        "expectedMarks": 15,
        "topics": [
          {
            "name": "Deflection implementation details",
            "frequency": 5
          },
          {
            "name": "Cylinders working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit V: Columns and Struts: Buckling state, Euler’s column theory, crippling load derivation for different end conditions, limitations. Rankine’s empirical formula for columns.",
        "expectedMarks": 13,
        "topics": [
          {
            "name": "Columns implementation details",
            "frequency": 5
          },
          {
            "name": "Struts working parameters",
            "frequency": 4
          }
        ]
      }
    ],
    "repeatedQuestions": [
      {
        "id": "rq-som-me-1",
        "question": "Discuss the fundamental concepts of Stress and Strain: Types of stresses and strains. How is it implemented/used in Strength of Materials?",
        "years": [
          2022,
          2024
        ],
        "frequency": 2,
        "importance": "Very High Probability"
      },
      {
        "id": "rq-som-me-2",
        "question": "Discuss the fundamental concepts of Shear Force and Bending Moment: Concept of beams. How is it implemented/used in Strength of Materials?",
        "years": [
          2023,
          2025
        ],
        "frequency": 3,
        "importance": "High Probability"
      },
      {
        "id": "rq-som-me-3",
        "question": "Discuss the fundamental concepts of Stresses in Beams & Torsion: Theory of pure bending. How is it implemented/used in Strength of Materials?",
        "years": [
          2024
        ],
        "frequency": 4,
        "importance": "Medium Probability"
      }
    ],
    "oneNightRevision": {
      "topQuestions": [
        "Write short notes on key methodologies and design parameters of Strength of Materials (Focus on Unit 3).",
        "Write short notes on key methodologies and design parameters of Strength of Materials (Focus on Unit 4).",
        "Write short notes on key methodologies and design parameters of Strength of Materials (Focus on Unit 5)."
      ],
      "definitions": [
        {
          "term": "Strength of Materials",
          "definition": "Hooke stress strain ductile brittle Mohr, SFD BMD cantilever simply supported overhanging UVL, pure bending flexural torsion shafts, double integration Macaulay beam deflection, and Euler Rankine columns."
        },
        {
          "term": "Core Principle of ME-304",
          "definition": "The foundational architecture and operational logic that dictates the behavior of Strength of Materials in engineering applications."
        }
      ],
      "diagrams": [
        {
          "title": "Strength of Materials System Layout",
          "description": "Block diagram displaying the architectural configuration and interface linkages."
        }
      ],
      "formulas": [
        {
          "name": "ME-304 Efficiency Formula",
          "formula": "η = (Output Power / Input Power) * 100%",
          "explanation": "Calculates the performance ratio indicating total energy conversion efficiency."
        }
      ],
      "lastMinuteNotes": [
        "💡 Focus on the structural building blocks of Strength of Materials and their practical design constraints.",
        "💡 Review unit-wise previous exam papers and standard notations for numerical stability."
      ]
    },
    "videos": []
  },
  {
    "id": "mp-me",
    "name": "Manufacturing Processes",
    "code": "ME-305",
    "branchId": "me",
    "semester": 3,
    "description": "Pattern sand molding centrifugal casting die, metal forming forging rolling extrusion wire, sheet metal blanking spring-back deep drawing, gas arc TIG MIG resistance welding, and powder metallurgy injection.",
    "resourceCount": 26,
    "overview": {
      "syllabus": [
        "Unit I: Casting & Molding: Pattern types, materials, allowances. Molding sand properties and testing. Core making. Casting methods: Sand, centrifugal, investment, die casting. Defects in castings and remedies.",
        "Unit II: Metal Forming: Hot and cold working. Forging operations: Open and closed die forging. Rolling: Principle, rolling mills. Extrusion: Direct, indirect, and hydrostatic. Wire and tube drawing mechanics.",
        "Unit III: Sheet Metal Working: Die and punch assemblies. Operations: Shearing, blanking, punching, bending, deep drawing. Types of configurations, spring-back effect.",
        "Unit IV: Metal Joining (Welding): Gas welding, Arc welding (SMAW, TIG, MIG, SAW). Resistance welding: Spot, seam, projection. Solid-state welding paths. Brazing and soldering. Welding defects.",
        "Unit V: Powder Metallurgy & Plastics: Production of metal powders, mixing, compacting, and sintering operations. Processing of plastics: Injection molding, blow molding, extrusion, and thermoforming."
      ],
      "weightageSummary": "Unit III: Sheet Metal Working: Die and p typically represents around 40% of overall exam weightage."
    },
    "weightage": [
      {
        "unit": "Unit I: Casting & Molding: Pattern types, materials, allowances. Molding sand properties and testing. Core making. Casting methods: Sand, centrifugal, investment, die casting. Defects in castings and remedies.",
        "expectedMarks": 12,
        "topics": [
          {
            "name": "Casting implementation details",
            "frequency": 5
          },
          {
            "name": "Molding working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit II: Metal Forming: Hot and cold working. Forging operations: Open and closed die forging. Rolling: Principle, rolling mills. Extrusion: Direct, indirect, and hydrostatic. Wire and tube drawing mechanics.",
        "expectedMarks": 14,
        "topics": [
          {
            "name": "Forming implementation details",
            "frequency": 5
          },
          {
            "name": "working working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit III: Sheet Metal Working: Die and punch assemblies. Operations: Shearing, blanking, punching, bending, deep drawing. Types of configurations, spring-back effect.",
        "expectedMarks": 16,
        "topics": [
          {
            "name": "Working implementation details",
            "frequency": 5
          },
          {
            "name": "assemblies working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit IV: Metal Joining (Welding): Gas welding, Arc welding (SMAW, TIG, MIG, SAW). Resistance welding: Spot, seam, projection. Solid-state welding paths. Brazing and soldering. Welding defects.",
        "expectedMarks": 15,
        "topics": [
          {
            "name": "Joining implementation details",
            "frequency": 5
          },
          {
            "name": "Welding working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit V: Powder Metallurgy & Plastics: Production of metal powders, mixing, compacting, and sintering operations. Processing of plastics: Injection molding, blow molding, extrusion, and thermoforming.",
        "expectedMarks": 13,
        "topics": [
          {
            "name": "Powder implementation details",
            "frequency": 5
          },
          {
            "name": "Metallurgy working parameters",
            "frequency": 4
          }
        ]
      }
    ],
    "repeatedQuestions": [
      {
        "id": "rq-mp-me-1",
        "question": "Discuss the fundamental concepts of Casting & Molding: Pattern types. How is it implemented/used in Manufacturing Processes?",
        "years": [
          2022,
          2024
        ],
        "frequency": 2,
        "importance": "Very High Probability"
      },
      {
        "id": "rq-mp-me-2",
        "question": "Discuss the fundamental concepts of Metal Forming: Hot and cold working. Forging operations: Open and closed die forging. Rolling: Principle. How is it implemented/used in Manufacturing Processes?",
        "years": [
          2023,
          2025
        ],
        "frequency": 3,
        "importance": "High Probability"
      },
      {
        "id": "rq-mp-me-3",
        "question": "Discuss the fundamental concepts of Sheet Metal Working: Die and punch assemblies. Operations: Shearing. How is it implemented/used in Manufacturing Processes?",
        "years": [
          2024
        ],
        "frequency": 4,
        "importance": "Medium Probability"
      }
    ],
    "oneNightRevision": {
      "topQuestions": [
        "Write short notes on key methodologies and design parameters of Manufacturing Processes (Focus on Unit 3).",
        "Write short notes on key methodologies and design parameters of Manufacturing Processes (Focus on Unit 4).",
        "Write short notes on key methodologies and design parameters of Manufacturing Processes (Focus on Unit 5)."
      ],
      "definitions": [
        {
          "term": "Manufacturing Processes",
          "definition": "Pattern sand molding centrifugal casting die, metal forming forging rolling extrusion wire, sheet metal blanking spring-back deep drawing, gas arc TIG MIG resistance welding, and powder metallurgy injection."
        },
        {
          "term": "Core Principle of ME-305",
          "definition": "The foundational architecture and operational logic that dictates the behavior of Manufacturing Processes in engineering applications."
        }
      ],
      "diagrams": [
        {
          "title": "Manufacturing Processes System Layout",
          "description": "Block diagram displaying the architectural configuration and interface linkages."
        }
      ],
      "formulas": [
        {
          "name": "ME-305 Efficiency Formula",
          "formula": "η = (Output Power / Input Power) * 100%",
          "explanation": "Calculates the performance ratio indicating total energy conversion efficiency."
        }
      ],
      "lastMinuteNotes": [
        "💡 Focus on the structural building blocks of Manufacturing Processes and their practical design constraints.",
        "💡 Review unit-wise previous exam papers and standard notations for numerical stability."
      ]
    },
    "videos": []
  },
  {
    "id": "fm-me",
    "name": "Fluid Mechanics",
    "code": "ME-402",
    "branchId": "me",
    "semester": 4,
    "description": "Viscosity surface tension metacentric height, continuity Cartesian kinematics, Euler Bernoulli Venturi dynamics, Darcy-Weisbach pipe losses boundary layer thickness, and dimensional Buckingham stagnation.",
    "resourceCount": 28,
    "overview": {
      "syllabus": [
        "Unit I: Fluid Properties & Hydrostatics: Density, viscosity, surface tension, capillarity. Newton's law of viscosity. Fluid pressure measurement using manometers. Hydrostatic forces on plane and curved surfaces. Buoyancy, floatation, and metacentric height.",
        "Unit II: Fluid Kinematics: Types of fluid flow, streamlines, pathlines. Continuity equation in Cartesian coordinates. Velocity potential, stream function, vortex flow.",
        "Unit III: Fluid Dynamics: Euler’s equation, Bernoulli’s theorem derivation and structural applications (Venturimeter, Orificemeter, Pitot tube). Impulse-momentum equation and its application to pipe bends.",
        "Unit IV: Flow Through Pipes & Boundary Layer: Major and minor energy losses, Darcy-Weisbach equation. Hydraulic gradient line (HGL) and Total Energy Line (TEL). Pipes in series and parallel. Boundary layer concepts: Thickness, separation, and control.",
        "Unit V: Dimensional Analysis & Compressible Flow: Rayleigh's method and Buckingham’s π-theorem. Dimensionless numbers (Reynolds, Froude, Mach). Thermodynamic properties of compressible fluid flow, stagnation properties, sonic velocity."
      ],
      "weightageSummary": "Unit III: Fluid Dynamics: Euler’s equati typically represents around 40% of overall exam weightage."
    },
    "weightage": [
      {
        "unit": "Unit I: Fluid Properties & Hydrostatics: Density, viscosity, surface tension, capillarity. Newton's law of viscosity. Fluid pressure measurement using manometers. Hydrostatic forces on plane and curved surfaces. Buoyancy, floatation, and metacentric height.",
        "expectedMarks": 12,
        "topics": [
          {
            "name": "Properties implementation details",
            "frequency": 5
          },
          {
            "name": "Hydrostatics working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit II: Fluid Kinematics: Types of fluid flow, streamlines, pathlines. Continuity equation in Cartesian coordinates. Velocity potential, stream function, vortex flow.",
        "expectedMarks": 14,
        "topics": [
          {
            "name": "Kinematics implementation details",
            "frequency": 5
          },
          {
            "name": "streamlines working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit III: Fluid Dynamics: Euler’s equation, Bernoulli’s theorem derivation and structural applications (Venturimeter, Orificemeter, Pitot tube). Impulse-momentum equation and its application to pipe bends.",
        "expectedMarks": 16,
        "topics": [
          {
            "name": "Dynamics implementation details",
            "frequency": 5
          },
          {
            "name": "equation working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit IV: Flow Through Pipes & Boundary Layer: Major and minor energy losses, Darcy-Weisbach equation. Hydraulic gradient line (HGL) and Total Energy Line (TEL). Pipes in series and parallel. Boundary layer concepts: Thickness, separation, and control.",
        "expectedMarks": 15,
        "topics": [
          {
            "name": "Through implementation details",
            "frequency": 5
          },
          {
            "name": "Boundary working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit V: Dimensional Analysis & Compressible Flow: Rayleigh's method and Buckingham’s π-theorem. Dimensionless numbers (Reynolds, Froude, Mach). Thermodynamic properties of compressible fluid flow, stagnation properties, sonic velocity.",
        "expectedMarks": 13,
        "topics": [
          {
            "name": "Dimensional implementation details",
            "frequency": 5
          },
          {
            "name": "Analysis working parameters",
            "frequency": 4
          }
        ]
      }
    ],
    "repeatedQuestions": [
      {
        "id": "rq-fm-me-1",
        "question": "Discuss the fundamental concepts of Fluid Properties & Hydrostatics: Density. How is it implemented/used in Fluid Mechanics?",
        "years": [
          2022,
          2024
        ],
        "frequency": 2,
        "importance": "Very High Probability"
      },
      {
        "id": "rq-fm-me-2",
        "question": "Discuss the fundamental concepts of Fluid Kinematics: Types of fluid flow. How is it implemented/used in Fluid Mechanics?",
        "years": [
          2023,
          2025
        ],
        "frequency": 3,
        "importance": "High Probability"
      },
      {
        "id": "rq-fm-me-3",
        "question": "Discuss the fundamental concepts of Fluid Dynamics: Euler’s equation. How is it implemented/used in Fluid Mechanics?",
        "years": [
          2024
        ],
        "frequency": 4,
        "importance": "Medium Probability"
      }
    ],
    "oneNightRevision": {
      "topQuestions": [
        "Write short notes on key methodologies and design parameters of Fluid Mechanics (Focus on Unit 3).",
        "Write short notes on key methodologies and design parameters of Fluid Mechanics (Focus on Unit 4).",
        "Write short notes on key methodologies and design parameters of Fluid Mechanics (Focus on Unit 5)."
      ],
      "definitions": [
        {
          "term": "Fluid Mechanics",
          "definition": "Viscosity surface tension metacentric height, continuity Cartesian kinematics, Euler Bernoulli Venturi dynamics, Darcy-Weisbach pipe losses boundary layer thickness, and dimensional Buckingham stagnation."
        },
        {
          "term": "Core Principle of ME-402",
          "definition": "The foundational architecture and operational logic that dictates the behavior of Fluid Mechanics in engineering applications."
        }
      ],
      "diagrams": [
        {
          "title": "Fluid Mechanics System Layout",
          "description": "Block diagram displaying the architectural configuration and interface linkages."
        }
      ],
      "formulas": [
        {
          "name": "ME-402 Efficiency Formula",
          "formula": "η = (Output Power / Input Power) * 100%",
          "explanation": "Calculates the performance ratio indicating total energy conversion efficiency."
        }
      ],
      "lastMinuteNotes": [
        "💡 Focus on the structural building blocks of Fluid Mechanics and their practical design constraints.",
        "💡 Review unit-wise previous exam papers and standard notations for numerical stability."
      ]
    },
    "videos": []
  },
  {
    "id": "tom-me",
    "name": "Theory of Machines",
    "code": "ME-403",
    "branchId": "me",
    "semester": 4,
    "description": "Kinematic chains degrees of freedom quick return, velocity relative instantaneous Coriolis acceleration, cams radial followers SHM, gears involute epicyclic trains, and clutches brakes belt drives.",
    "resourceCount": 28,
    "overview": {
      "syllabus": [
        "Unit I: Mechanisms and Machines: Links, pairs, kinematic chains, degrees of freedom, Kutzbach criterion. Inversions of four-bar chain, single and double slider-crank chains. Quick return mechanisms.",
        "Unit II: Velocity and Acceleration Analysis: Relative velocity method, instantaneous center method, Kennedy’s theorem. Acceleration analysis: Link configurations, Coriolis component of acceleration.",
        "Unit III: Cams and Followers: Classification of cams and followers. Radial cam profiles for uniform velocity, Simple Harmonic Motion (SHM), uniform acceleration and retardation, and cycloidal motion.",
        "Unit IV: Gears and Gear Trains: Classification, law of gearing, tooth profiles (involute and cycloidal), interference and undercutting, minimum number of teeth. Gear trains: Simple, compound, reverted, and epicyclic gear trains.",
        "Unit V: Friction and Power Transmission: Friction in pivots and collars, plate clutches, cone clutches. Brakes: Block, band, and internal expanding shoe brakes. Belt, rope, and chain drives, slip and creep calculations."
      ],
      "weightageSummary": "Unit III: Cams and Followers: Classifica typically represents around 40% of overall exam weightage."
    },
    "weightage": [
      {
        "unit": "Unit I: Mechanisms and Machines: Links, pairs, kinematic chains, degrees of freedom, Kutzbach criterion. Inversions of four-bar chain, single and double slider-crank chains. Quick return mechanisms.",
        "expectedMarks": 12,
        "topics": [
          {
            "name": "Mechanisms implementation details",
            "frequency": 5
          },
          {
            "name": "Machines working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit II: Velocity and Acceleration Analysis: Relative velocity method, instantaneous center method, Kennedy’s theorem. Acceleration analysis: Link configurations, Coriolis component of acceleration.",
        "expectedMarks": 14,
        "topics": [
          {
            "name": "Velocity implementation details",
            "frequency": 5
          },
          {
            "name": "Acceleration working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit III: Cams and Followers: Classification of cams and followers. Radial cam profiles for uniform velocity, Simple Harmonic Motion (SHM), uniform acceleration and retardation, and cycloidal motion.",
        "expectedMarks": 16,
        "topics": [
          {
            "name": "Followers implementation details",
            "frequency": 5
          },
          {
            "name": "Classification working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit IV: Gears and Gear Trains: Classification, law of gearing, tooth profiles (involute and cycloidal), interference and undercutting, minimum number of teeth. Gear trains: Simple, compound, reverted, and epicyclic gear trains.",
        "expectedMarks": 15,
        "topics": [
          {
            "name": "Trains implementation details",
            "frequency": 5
          },
          {
            "name": "Classification working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit V: Friction and Power Transmission: Friction in pivots and collars, plate clutches, cone clutches. Brakes: Block, band, and internal expanding shoe brakes. Belt, rope, and chain drives, slip and creep calculations.",
        "expectedMarks": 13,
        "topics": [
          {
            "name": "Friction implementation details",
            "frequency": 5
          },
          {
            "name": "Transmission working parameters",
            "frequency": 4
          }
        ]
      }
    ],
    "repeatedQuestions": [
      {
        "id": "rq-tom-me-1",
        "question": "Discuss the fundamental concepts of Mechanisms and Machines: Links. How is it implemented/used in Theory of Machines?",
        "years": [
          2022,
          2024
        ],
        "frequency": 2,
        "importance": "Very High Probability"
      },
      {
        "id": "rq-tom-me-2",
        "question": "Discuss the fundamental concepts of Velocity and Acceleration Analysis: Relative velocity method. How is it implemented/used in Theory of Machines?",
        "years": [
          2023,
          2025
        ],
        "frequency": 3,
        "importance": "High Probability"
      },
      {
        "id": "rq-tom-me-3",
        "question": "Discuss the fundamental concepts of Cams and Followers: Classification of cams and followers. Radial cam profiles for uniform velocity. How is it implemented/used in Theory of Machines?",
        "years": [
          2024
        ],
        "frequency": 4,
        "importance": "Medium Probability"
      }
    ],
    "oneNightRevision": {
      "topQuestions": [
        "Write short notes on key methodologies and design parameters of Theory of Machines (Focus on Unit 3).",
        "Write short notes on key methodologies and design parameters of Theory of Machines (Focus on Unit 4).",
        "Write short notes on key methodologies and design parameters of Theory of Machines (Focus on Unit 5)."
      ],
      "definitions": [
        {
          "term": "Theory of Machines",
          "definition": "Kinematic chains degrees of freedom quick return, velocity relative instantaneous Coriolis acceleration, cams radial followers SHM, gears involute epicyclic trains, and clutches brakes belt drives."
        },
        {
          "term": "Core Principle of ME-403",
          "definition": "The foundational architecture and operational logic that dictates the behavior of Theory of Machines in engineering applications."
        }
      ],
      "diagrams": [
        {
          "title": "Theory of Machines System Layout",
          "description": "Block diagram displaying the architectural configuration and interface linkages."
        }
      ],
      "formulas": [
        {
          "name": "ME-403 Efficiency Formula",
          "formula": "η = (Output Power / Input Power) * 100%",
          "explanation": "Calculates the performance ratio indicating total energy conversion efficiency."
        }
      ],
      "lastMinuteNotes": [
        "💡 Focus on the structural building blocks of Theory of Machines and their practical design constraints.",
        "💡 Review unit-wise previous exam papers and standard notations for numerical stability."
      ]
    },
    "videos": []
  },
  {
    "id": "md1-me",
    "name": "Machine Design-I",
    "code": "ME-404",
    "branchId": "me",
    "semester": 4,
    "description": "Design codes selection properties safety, static loading failure theories Goodman Soderberg fatigue, threaded bolted welded joints, shaft key couplings rigid flexible, and helical springs levers.",
    "resourceCount": 28,
    "overview": {
      "syllabus": [
        "Unit I: Design Philosophy & Engineering Materials: Design codes, standards, selection of materials, mechanical properties. Manufacturing considerations in design. Factory of safety selection.",
        "Unit II: Design Under Static and Cyclic Loads: Failure theories under static loading (Maximum principal stress, shear stress, distortion energy theories). Stress concentration. Fatigue failure: S-N diagram, Goodman and Soderberg lines.",
        "Unit III: Design of Fasteners & Joints: Threaded fasteners, pre-loading of bolts. Welded joints: Eccentric loading configurations. Riveted joints: Efficiency, boiler joints, structural joints.",
        "Unit IV: Design of Shafts, Keys, and Couplings: Design of shafts under torsion, bending, and axial loads. ASME code for shaft design. Design of sunken keys. Rigid and flexible couplings (Flange and Bush-pin type).",
        "Unit V: Design of Springs & Levers: Helical springs: Stress and deflection equations, surge in springs. Leaf springs basics. Design of hand levers, foot levers, and bell-crank levers."
      ],
      "weightageSummary": "Unit III: Design of Fasteners & Joints:  typically represents around 40% of overall exam weightage."
    },
    "weightage": [
      {
        "unit": "Unit I: Design Philosophy & Engineering Materials: Design codes, standards, selection of materials, mechanical properties. Manufacturing considerations in design. Factory of safety selection.",
        "expectedMarks": 12,
        "topics": [
          {
            "name": "Design implementation details",
            "frequency": 5
          },
          {
            "name": "Philosophy working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit II: Design Under Static and Cyclic Loads: Failure theories under static loading (Maximum principal stress, shear stress, distortion energy theories). Stress concentration. Fatigue failure: S-N diagram, Goodman and Soderberg lines.",
        "expectedMarks": 14,
        "topics": [
          {
            "name": "Design implementation details",
            "frequency": 5
          },
          {
            "name": "Static working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit III: Design of Fasteners & Joints: Threaded fasteners, pre-loading of bolts. Welded joints: Eccentric loading configurations. Riveted joints: Efficiency, boiler joints, structural joints.",
        "expectedMarks": 16,
        "topics": [
          {
            "name": "Design implementation details",
            "frequency": 5
          },
          {
            "name": "Fasteners working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit IV: Design of Shafts, Keys, and Couplings: Design of shafts under torsion, bending, and axial loads. ASME code for shaft design. Design of sunken keys. Rigid and flexible couplings (Flange and Bush-pin type).",
        "expectedMarks": 15,
        "topics": [
          {
            "name": "Design implementation details",
            "frequency": 5
          },
          {
            "name": "Shafts working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit V: Design of Springs & Levers: Helical springs: Stress and deflection equations, surge in springs. Leaf springs basics. Design of hand levers, foot levers, and bell-crank levers.",
        "expectedMarks": 13,
        "topics": [
          {
            "name": "Design implementation details",
            "frequency": 5
          },
          {
            "name": "Springs working parameters",
            "frequency": 4
          }
        ]
      }
    ],
    "repeatedQuestions": [
      {
        "id": "rq-md1-me-1",
        "question": "Discuss the fundamental concepts of Design Philosophy & Engineering Materials: Design codes. How is it implemented/used in Machine Design-I?",
        "years": [
          2022,
          2024
        ],
        "frequency": 2,
        "importance": "Very High Probability"
      },
      {
        "id": "rq-md1-me-2",
        "question": "Discuss the fundamental concepts of Design Under Static and Cyclic Loads: Failure theories under static loading (Maximum principal stress. How is it implemented/used in Machine Design-I?",
        "years": [
          2023,
          2025
        ],
        "frequency": 3,
        "importance": "High Probability"
      },
      {
        "id": "rq-md1-me-3",
        "question": "Discuss the fundamental concepts of Design of Fasteners & Joints: Threaded fasteners. How is it implemented/used in Machine Design-I?",
        "years": [
          2024
        ],
        "frequency": 4,
        "importance": "Medium Probability"
      }
    ],
    "oneNightRevision": {
      "topQuestions": [
        "Write short notes on key methodologies and design parameters of Machine Design-I (Focus on Unit 3).",
        "Write short notes on key methodologies and design parameters of Machine Design-I (Focus on Unit 4).",
        "Write short notes on key methodologies and design parameters of Machine Design-I (Focus on Unit 5)."
      ],
      "definitions": [
        {
          "term": "Machine Design-I",
          "definition": "Design codes selection properties safety, static loading failure theories Goodman Soderberg fatigue, threaded bolted welded joints, shaft key couplings rigid flexible, and helical springs levers."
        },
        {
          "term": "Core Principle of ME-404",
          "definition": "The foundational architecture and operational logic that dictates the behavior of Machine Design-I in engineering applications."
        }
      ],
      "diagrams": [
        {
          "title": "Machine Design-I System Layout",
          "description": "Block diagram displaying the architectural configuration and interface linkages."
        }
      ],
      "formulas": [
        {
          "name": "ME-404 Efficiency Formula",
          "formula": "η = (Output Power / Input Power) * 100%",
          "explanation": "Calculates the performance ratio indicating total energy conversion efficiency."
        }
      ],
      "lastMinuteNotes": [
        "💡 Focus on the structural building blocks of Machine Design-I and their practical design constraints.",
        "💡 Review unit-wise previous exam papers and standard notations for numerical stability."
      ]
    },
    "videos": []
  },
  {
    "id": "te-me",
    "name": "Thermal Engineering",
    "code": "ME-405",
    "branchId": "me",
    "semester": 4,
    "description": "Boilers high pressure draught efficiency, nozzle critical pressure ratio supersaturated, steam turbines blade efficiency reaction governing, reciprocating intercooling air compressors, and turbojet gas turbine.",
    "resourceCount": 28,
    "overview": {
      "syllabus": [
        "Unit I: Steam Generators (Boilers): Classification, fire-tube (Cochran, Lancashire) and water-tube (Babcock & Wilcox) boilers. High-pressure boilers: Lamont, Benson, Loeffler. Boiler draught system. Performance parameters, efficiency.",
        "Unit II: Steam Nozzles: Velocity and discharge expressions, critical pressure ratio, choking in nozzles. Effect of friction, nozzle efficiency. Supersaturated flow configurations.",
        "Unit III: Steam Turbines: Classification, impulse turbines: Velocity diagrams, work done, blade efficiency, compounding methods. Reaction turbines: Velocity diagrams, degree of reaction, height of blade, governing of turbines.",
        "Unit IV: Steam Condensers & Air Compressors: Types of condensers, vacuum measurement, condenser efficiency. Air compressors: Reciprocating compressors, volumetric efficiency, multistage compression with intercooling.",
        "Unit V: Gas Turbines & Jet Propulsion: Open and closed cycle gas turbines, modifications: Regeneration, intercooling, reheating. Jet propulsion: Turbojet, turboprop, ramjet, rocket engines."
      ],
      "weightageSummary": "Unit III: Steam Turbines: Classification typically represents around 40% of overall exam weightage."
    },
    "weightage": [
      {
        "unit": "Unit I: Steam Generators (Boilers): Classification, fire-tube (Cochran, Lancashire) and water-tube (Babcock & Wilcox) boilers. High-pressure boilers: Lamont, Benson, Loeffler. Boiler draught system. Performance parameters, efficiency.",
        "expectedMarks": 12,
        "topics": [
          {
            "name": "Generators implementation details",
            "frequency": 5
          },
          {
            "name": "Boilers working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit II: Steam Nozzles: Velocity and discharge expressions, critical pressure ratio, choking in nozzles. Effect of friction, nozzle efficiency. Supersaturated flow configurations.",
        "expectedMarks": 14,
        "topics": [
          {
            "name": "Nozzles implementation details",
            "frequency": 5
          },
          {
            "name": "Velocity working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit III: Steam Turbines: Classification, impulse turbines: Velocity diagrams, work done, blade efficiency, compounding methods. Reaction turbines: Velocity diagrams, degree of reaction, height of blade, governing of turbines.",
        "expectedMarks": 16,
        "topics": [
          {
            "name": "Turbines implementation details",
            "frequency": 5
          },
          {
            "name": "Classification working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit IV: Steam Condensers & Air Compressors: Types of condensers, vacuum measurement, condenser efficiency. Air compressors: Reciprocating compressors, volumetric efficiency, multistage compression with intercooling.",
        "expectedMarks": 15,
        "topics": [
          {
            "name": "Condensers implementation details",
            "frequency": 5
          },
          {
            "name": "Compressors working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit V: Gas Turbines & Jet Propulsion: Open and closed cycle gas turbines, modifications: Regeneration, intercooling, reheating. Jet propulsion: Turbojet, turboprop, ramjet, rocket engines.",
        "expectedMarks": 13,
        "topics": [
          {
            "name": "Turbines implementation details",
            "frequency": 5
          },
          {
            "name": "Propulsion working parameters",
            "frequency": 4
          }
        ]
      }
    ],
    "repeatedQuestions": [
      {
        "id": "rq-te-me-1",
        "question": "Discuss the fundamental concepts of Steam Generators (Boilers): Classification. How is it implemented/used in Thermal Engineering?",
        "years": [
          2022,
          2024
        ],
        "frequency": 2,
        "importance": "Very High Probability"
      },
      {
        "id": "rq-te-me-2",
        "question": "Discuss the fundamental concepts of Steam Nozzles: Velocity and discharge expressions. How is it implemented/used in Thermal Engineering?",
        "years": [
          2023,
          2025
        ],
        "frequency": 3,
        "importance": "High Probability"
      },
      {
        "id": "rq-te-me-3",
        "question": "Discuss the fundamental concepts of Steam Turbines: Classification. How is it implemented/used in Thermal Engineering?",
        "years": [
          2024
        ],
        "frequency": 4,
        "importance": "Medium Probability"
      }
    ],
    "oneNightRevision": {
      "topQuestions": [
        "Write short notes on key methodologies and design parameters of Thermal Engineering (Focus on Unit 3).",
        "Write short notes on key methodologies and design parameters of Thermal Engineering (Focus on Unit 4).",
        "Write short notes on key methodologies and design parameters of Thermal Engineering (Focus on Unit 5)."
      ],
      "definitions": [
        {
          "term": "Thermal Engineering",
          "definition": "Boilers high pressure draught efficiency, nozzle critical pressure ratio supersaturated, steam turbines blade efficiency reaction governing, reciprocating intercooling air compressors, and turbojet gas turbine."
        },
        {
          "term": "Core Principle of ME-405",
          "definition": "The foundational architecture and operational logic that dictates the behavior of Thermal Engineering in engineering applications."
        }
      ],
      "diagrams": [
        {
          "title": "Thermal Engineering System Layout",
          "description": "Block diagram displaying the architectural configuration and interface linkages."
        }
      ],
      "formulas": [
        {
          "name": "ME-405 Efficiency Formula",
          "formula": "η = (Output Power / Input Power) * 100%",
          "explanation": "Calculates the performance ratio indicating total energy conversion efficiency."
        }
      ],
      "lastMinuteNotes": [
        "💡 Focus on the structural building blocks of Thermal Engineering and their practical design constraints.",
        "💡 Review unit-wise previous exam papers and standard notations for numerical stability."
      ]
    },
    "videos": []
  },
  {
    "id": "tm-me",
    "name": "Turbo Machinery",
    "code": "ME-501",
    "branchId": "me",
    "semester": 5,
    "description": "Euler turbine equation velocity triangles, centrifugal compressors slip factor surging choking, axial flow lift drag, Pelton Francis Kaplan hydraulic turbines draft tube, and centrifugal pumps indicator.",
    "resourceCount": 30,
    "overview": {
      "syllabus": [
        "Unit I: Energy Transfer in Turbo Machines: Application of first and second laws to turbo machines. Euler’s turbine equation, velocity triangles, components of energy transfer, degree of reaction, utilization factor.",
        "Unit II: Centrifugal Compressors & Fans: Structural elements, slip factor, work input factor, losses, compressor characteristics, surging, choking, stalling. Centrifugal fans baseline profiles.",
        "Unit III: Axial Flow Compressors: Blade design basics, velocity triangles, stage efficiency, work done factor, cascade nomenclature, lift and drag coefficients, secondary flow characteristics.",
        "Unit IV: Hydraulic Turbines: Classification. Pelton wheel: Work done, efficiency, design criteria. Francis and Kaplan turbines: Velocity triangles, work done, draft tube theory, cavitation causes and prevention.",
        "Unit V: Centrifugal Pumps: Working principle, indicator diagrams, heads and efficiencies, priming, minimum starting speed. Multistage pumps, specific speed, characteristic curves."
      ],
      "weightageSummary": "Unit III: Axial Flow Compressors: Blade  typically represents around 40% of overall exam weightage."
    },
    "weightage": [
      {
        "unit": "Unit I: Energy Transfer in Turbo Machines: Application of first and second laws to turbo machines. Euler’s turbine equation, velocity triangles, components of energy transfer, degree of reaction, utilization factor.",
        "expectedMarks": 12,
        "topics": [
          {
            "name": "Energy implementation details",
            "frequency": 5
          },
          {
            "name": "Transfer working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit II: Centrifugal Compressors & Fans: Structural elements, slip factor, work input factor, losses, compressor characteristics, surging, choking, stalling. Centrifugal fans baseline profiles.",
        "expectedMarks": 14,
        "topics": [
          {
            "name": "Centrifugal implementation details",
            "frequency": 5
          },
          {
            "name": "Compressors working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit III: Axial Flow Compressors: Blade design basics, velocity triangles, stage efficiency, work done factor, cascade nomenclature, lift and drag coefficients, secondary flow characteristics.",
        "expectedMarks": 16,
        "topics": [
          {
            "name": "Compressors implementation details",
            "frequency": 5
          },
          {
            "name": "design working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit IV: Hydraulic Turbines: Classification. Pelton wheel: Work done, efficiency, design criteria. Francis and Kaplan turbines: Velocity triangles, work done, draft tube theory, cavitation causes and prevention.",
        "expectedMarks": 15,
        "topics": [
          {
            "name": "Hydraulic implementation details",
            "frequency": 5
          },
          {
            "name": "Turbines working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit V: Centrifugal Pumps: Working principle, indicator diagrams, heads and efficiencies, priming, minimum starting speed. Multistage pumps, specific speed, characteristic curves.",
        "expectedMarks": 13,
        "topics": [
          {
            "name": "Centrifugal implementation details",
            "frequency": 5
          },
          {
            "name": "Working working parameters",
            "frequency": 4
          }
        ]
      }
    ],
    "repeatedQuestions": [
      {
        "id": "rq-tm-me-1",
        "question": "Discuss the fundamental concepts of Energy Transfer in Turbo Machines: Application of first and second laws to turbo machines. Euler’s turbine equation. How is it implemented/used in Turbo Machinery?",
        "years": [
          2022,
          2024
        ],
        "frequency": 2,
        "importance": "Very High Probability"
      },
      {
        "id": "rq-tm-me-2",
        "question": "Discuss the fundamental concepts of Centrifugal Compressors & Fans: Structural elements. How is it implemented/used in Turbo Machinery?",
        "years": [
          2023,
          2025
        ],
        "frequency": 3,
        "importance": "High Probability"
      },
      {
        "id": "rq-tm-me-3",
        "question": "Discuss the fundamental concepts of Axial Flow Compressors: Blade design basics. How is it implemented/used in Turbo Machinery?",
        "years": [
          2024
        ],
        "frequency": 4,
        "importance": "Medium Probability"
      }
    ],
    "oneNightRevision": {
      "topQuestions": [
        "Write short notes on key methodologies and design parameters of Turbo Machinery (Focus on Unit 3).",
        "Write short notes on key methodologies and design parameters of Turbo Machinery (Focus on Unit 4).",
        "Write short notes on key methodologies and design parameters of Turbo Machinery (Focus on Unit 5)."
      ],
      "definitions": [
        {
          "term": "Turbo Machinery",
          "definition": "Euler turbine equation velocity triangles, centrifugal compressors slip factor surging choking, axial flow lift drag, Pelton Francis Kaplan hydraulic turbines draft tube, and centrifugal pumps indicator."
        },
        {
          "term": "Core Principle of ME-501",
          "definition": "The foundational architecture and operational logic that dictates the behavior of Turbo Machinery in engineering applications."
        }
      ],
      "diagrams": [
        {
          "title": "Turbo Machinery System Layout",
          "description": "Block diagram displaying the architectural configuration and interface linkages."
        }
      ],
      "formulas": [
        {
          "name": "ME-501 Efficiency Formula",
          "formula": "η = (Output Power / Input Power) * 100%",
          "explanation": "Calculates the performance ratio indicating total energy conversion efficiency."
        }
      ],
      "lastMinuteNotes": [
        "💡 Focus on the structural building blocks of Turbo Machinery and their practical design constraints.",
        "💡 Review unit-wise previous exam papers and standard notations for numerical stability."
      ]
    },
    "videos": []
  },
  {
    "id": "mmc-me",
    "name": "Mechanical Measurement & Control",
    "code": "ME-502",
    "branchId": "me",
    "semester": 5,
    "description": "Accuracy precision error analysis, LVDT speed tachometer strain gauge rosette, RTD thermocouple pyrometer McLeod Pirani pressure, Venturi orifice load proving transmissibility, and control transfer.",
    "resourceCount": 30,
    "overview": {
      "syllabus": [
        "Unit I: Measurement System Fundamentals: Generalized measurement system blocks, static characteristics (accuracy, precision, sensitivity, linearity), dynamic response criteria, error analysis.",
        "Unit II: Displacement, Velocity & Strain Measurement: LVDT, capacitive transducers. Speed: Tachometers, stroboscopes. Strain gauges: Gauge factor, rosette configurations, bridge balancing circuits.",
        "Unit III: Temperature & Pressure Measurement: Bimetallic strips, RTDs, thermistors, thermocouples, total radiation pyrometers. Pressure: Bourdon tubes, bellows, diaphragms, McLeod gauge, Pirani gauge.",
        "Unit IV: Flow, Force & Torque Measurement: Venturi, orifice, rotameters, hot-wire anemometers. Force: Load cells, proving rings. Torque: Transmission and absorption dynamometers.",
        "Unit V: Control Systems: Open-loop and closed-loop networks, mathematical modeling of physical systems. Transfer functions, block diagram reduction. System response tracking."
      ],
      "weightageSummary": "Unit III: Temperature & Pressure Measure typically represents around 40% of overall exam weightage."
    },
    "weightage": [
      {
        "unit": "Unit I: Measurement System Fundamentals: Generalized measurement system blocks, static characteristics (accuracy, precision, sensitivity, linearity), dynamic response criteria, error analysis.",
        "expectedMarks": 12,
        "topics": [
          {
            "name": "Measurement implementation details",
            "frequency": 5
          },
          {
            "name": "System working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit II: Displacement, Velocity & Strain Measurement: LVDT, capacitive transducers. Speed: Tachometers, stroboscopes. Strain gauges: Gauge factor, rosette configurations, bridge balancing circuits.",
        "expectedMarks": 14,
        "topics": [
          {
            "name": "Displacement implementation details",
            "frequency": 5
          },
          {
            "name": "Velocity working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit III: Temperature & Pressure Measurement: Bimetallic strips, RTDs, thermistors, thermocouples, total radiation pyrometers. Pressure: Bourdon tubes, bellows, diaphragms, McLeod gauge, Pirani gauge.",
        "expectedMarks": 16,
        "topics": [
          {
            "name": "Temperature implementation details",
            "frequency": 5
          },
          {
            "name": "Pressure working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit IV: Flow, Force & Torque Measurement: Venturi, orifice, rotameters, hot-wire anemometers. Force: Load cells, proving rings. Torque: Transmission and absorption dynamometers.",
        "expectedMarks": 15,
        "topics": [
          {
            "name": "Torque implementation details",
            "frequency": 5
          },
          {
            "name": "Measurement working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit V: Control Systems: Open-loop and closed-loop networks, mathematical modeling of physical systems. Transfer functions, block diagram reduction. System response tracking.",
        "expectedMarks": 13,
        "topics": [
          {
            "name": "Control implementation details",
            "frequency": 5
          },
          {
            "name": "Systems working parameters",
            "frequency": 4
          }
        ]
      }
    ],
    "repeatedQuestions": [
      {
        "id": "rq-mmc-me-1",
        "question": "Discuss the fundamental concepts of Measurement System Fundamentals: Generalized measurement system blocks. How is it implemented/used in Mechanical Measurement & Control?",
        "years": [
          2022,
          2024
        ],
        "frequency": 2,
        "importance": "Very High Probability"
      },
      {
        "id": "rq-mmc-me-2",
        "question": "Discuss the fundamental concepts of Displacement. How is it implemented/used in Mechanical Measurement & Control?",
        "years": [
          2023,
          2025
        ],
        "frequency": 3,
        "importance": "High Probability"
      },
      {
        "id": "rq-mmc-me-3",
        "question": "Discuss the fundamental concepts of Temperature & Pressure Measurement: Bimetallic strips. How is it implemented/used in Mechanical Measurement & Control?",
        "years": [
          2024
        ],
        "frequency": 4,
        "importance": "Medium Probability"
      }
    ],
    "oneNightRevision": {
      "topQuestions": [
        "Write short notes on key methodologies and design parameters of Mechanical Measurement & Control (Focus on Unit 3).",
        "Write short notes on key methodologies and design parameters of Mechanical Measurement & Control (Focus on Unit 4).",
        "Write short notes on key methodologies and design parameters of Mechanical Measurement & Control (Focus on Unit 5)."
      ],
      "definitions": [
        {
          "term": "Mechanical Measurement & Control",
          "definition": "Accuracy precision error analysis, LVDT speed tachometer strain gauge rosette, RTD thermocouple pyrometer McLeod Pirani pressure, Venturi orifice load proving transmissibility, and control transfer."
        },
        {
          "term": "Core Principle of ME-502",
          "definition": "The foundational architecture and operational logic that dictates the behavior of Mechanical Measurement & Control in engineering applications."
        }
      ],
      "diagrams": [
        {
          "title": "Mechanical Measurement & Control System Layout",
          "description": "Block diagram displaying the architectural configuration and interface linkages."
        }
      ],
      "formulas": [
        {
          "name": "ME-502 Efficiency Formula",
          "formula": "η = (Output Power / Input Power) * 100%",
          "explanation": "Calculates the performance ratio indicating total energy conversion efficiency."
        }
      ],
      "lastMinuteNotes": [
        "💡 Focus on the structural building blocks of Mechanical Measurement & Control and their practical design constraints.",
        "💡 Review unit-wise previous exam papers and standard notations for numerical stability."
      ]
    },
    "videos": []
  },
  {
    "id": "kdom-me",
    "name": "Kinematics & Dynamics of Machines",
    "code": "ME-503",
    "branchId": "me",
    "semester": 5,
    "description": "D'Alembert piston crank engine effort, turned moment flywheel sizing governors Porter Hartnell isochronism, balancing rotating reciprocating V-engines, gyroscopic ship steering stability, and undamped forced vibration isolation.",
    "resourceCount": 30,
    "overview": {
      "syllabus": [
        "Unit I: Force Analysis of Mechanisms: Inertia forces, D’Alembert’s principle. Engine force analysis: Piston effort, thrust along connecting rod, crank effort. Dynamic equivalent systems.",
        "Unit II: Flywheels & Governors: Turning moment diagrams, fluctuation of energy and speed, flywheel sizing. Governors: Watt, Porter, Proell, and Hartnell governors. Sensitiveness, hunting, isochronism, stability.",
        "Unit III: Balancing of Rotating and Reciprocating Masses: Balancing of a single rotating mass, multiple masses in the same and different planes. Balancing of reciprocating engines: Primary and secondary unbalance, inline and V-engines.",
        "Unit IV: Gyroscopic Motion: Gyroscopic couple expression. Gyroscopic effects on naval ships during steering, pitching, and rolling. Stability analysis of four-wheelers and two-wheelers moving on curved paths.",
        "Unit V: Mechanical Vibrations: Basic elements, single degree of freedom free vibrations (undamped and damped). Forced vibrations, resonance, vibration isolation, transmissibility. Critical speed of shafts."
      ],
      "weightageSummary": "Unit III: Balancing of Rotating and Reci typically represents around 40% of overall exam weightage."
    },
    "weightage": [
      {
        "unit": "Unit I: Force Analysis of Mechanisms: Inertia forces, D’Alembert’s principle. Engine force analysis: Piston effort, thrust along connecting rod, crank effort. Dynamic equivalent systems.",
        "expectedMarks": 12,
        "topics": [
          {
            "name": "Analysis implementation details",
            "frequency": 5
          },
          {
            "name": "Mechanisms working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit II: Flywheels & Governors: Turning moment diagrams, fluctuation of energy and speed, flywheel sizing. Governors: Watt, Porter, Proell, and Hartnell governors. Sensitiveness, hunting, isochronism, stability.",
        "expectedMarks": 14,
        "topics": [
          {
            "name": "Flywheels implementation details",
            "frequency": 5
          },
          {
            "name": "Governors working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit III: Balancing of Rotating and Reciprocating Masses: Balancing of a single rotating mass, multiple masses in the same and different planes. Balancing of reciprocating engines: Primary and secondary unbalance, inline and V-engines.",
        "expectedMarks": 16,
        "topics": [
          {
            "name": "Balancing implementation details",
            "frequency": 5
          },
          {
            "name": "Rotating working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit IV: Gyroscopic Motion: Gyroscopic couple expression. Gyroscopic effects on naval ships during steering, pitching, and rolling. Stability analysis of four-wheelers and two-wheelers moving on curved paths.",
        "expectedMarks": 15,
        "topics": [
          {
            "name": "Gyroscopic implementation details",
            "frequency": 5
          },
          {
            "name": "Motion working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit V: Mechanical Vibrations: Basic elements, single degree of freedom free vibrations (undamped and damped). Forced vibrations, resonance, vibration isolation, transmissibility. Critical speed of shafts.",
        "expectedMarks": 13,
        "topics": [
          {
            "name": "Mechanical implementation details",
            "frequency": 5
          },
          {
            "name": "Vibrations working parameters",
            "frequency": 4
          }
        ]
      }
    ],
    "repeatedQuestions": [
      {
        "id": "rq-kdom-me-1",
        "question": "Discuss the fundamental concepts of Force Analysis of Mechanisms: Inertia forces. How is it implemented/used in Kinematics & Dynamics of Machines?",
        "years": [
          2022,
          2024
        ],
        "frequency": 2,
        "importance": "Very High Probability"
      },
      {
        "id": "rq-kdom-me-2",
        "question": "Discuss the fundamental concepts of Flywheels & Governors: Turning moment diagrams. How is it implemented/used in Kinematics & Dynamics of Machines?",
        "years": [
          2023,
          2025
        ],
        "frequency": 3,
        "importance": "High Probability"
      },
      {
        "id": "rq-kdom-me-3",
        "question": "Discuss the fundamental concepts of Balancing of Rotating and Reciprocating Masses: Balancing of a single rotating mass. How is it implemented/used in Kinematics & Dynamics of Machines?",
        "years": [
          2024
        ],
        "frequency": 4,
        "importance": "Medium Probability"
      }
    ],
    "oneNightRevision": {
      "topQuestions": [
        "Write short notes on key methodologies and design parameters of Kinematics & Dynamics of Machines (Focus on Unit 3).",
        "Write short notes on key methodologies and design parameters of Kinematics & Dynamics of Machines (Focus on Unit 4).",
        "Write short notes on key methodologies and design parameters of Kinematics & Dynamics of Machines (Focus on Unit 5)."
      ],
      "definitions": [
        {
          "term": "Kinematics & Dynamics of Machines",
          "definition": "D'Alembert piston crank engine effort, turned moment flywheel sizing governors Porter Hartnell isochronism, balancing rotating reciprocating V-engines, gyroscopic ship steering stability, and undamped forced vibration isolation."
        },
        {
          "term": "Core Principle of ME-503",
          "definition": "The foundational architecture and operational logic that dictates the behavior of Kinematics & Dynamics of Machines in engineering applications."
        }
      ],
      "diagrams": [
        {
          "title": "Kinematics & Dynamics of Machines System Layout",
          "description": "Block diagram displaying the architectural configuration and interface linkages."
        }
      ],
      "formulas": [
        {
          "name": "ME-503 Efficiency Formula",
          "formula": "η = (Output Power / Input Power) * 100%",
          "explanation": "Calculates the performance ratio indicating total energy conversion efficiency."
        }
      ],
      "lastMinuteNotes": [
        "💡 Focus on the structural building blocks of Kinematics & Dynamics of Machines and their practical design constraints.",
        "💡 Review unit-wise previous exam papers and standard notations for numerical stability."
      ]
    },
    "videos": []
  },
  {
    "id": "tegd-me",
    "name": "Thermal Engineering & Gas Dynamics",
    "code": "ME-601",
    "branchId": "me",
    "semester": 6,
    "description": "IC engine combustion SI CI delay diesel knock chambers, testing BHP IHP SFC heat balance emissions, Mach variable area isentropic nozzle, normal shock waves Prandtl-Meyer, and Fanno Rayleigh flow.",
    "resourceCount": 32,
    "overview": {
      "syllabus": [
        "Unit I: IC Engine Combustion & Cycles: Air-fuel cycles, fuel-air mixtures, actual cycles. Combustion in SI engines: Stages, flame propagation, detonation/knocking causes, combustion chambers. Combustion in CI engines: Delay period, diesel knock, injection systems.",
        "Unit II: IC Engine Testing & Performance: Performance parameters: BHP, IHP, mechanical efficiency, brake thermal efficiency, SFC. Heat balance sheets. Engine emissions, control norms (Bharat Stage parameters).",
        "Unit III: One-Dimensional Compressible Flow: Isentropic flow paths through variable area ducts, Mach number variations, area-velocity relationships. Flow through nozzles under off-design criteria.",
        "Unit IV: Normal Shock Waves: Development of shock waves, governing equations (continuity, momentum, energy). Prandtl-Meyer relation, property changes across a normal shock wave.",
        "Unit V: Fanno Flow & Rayleigh Flow: Adiabatic flow in constant area ducts with friction (Fanno flow), governing equations, Fanno lines. Isothermal/Frictionless flow with heat transfer (Rayleigh flow), Rayleigh lines."
      ],
      "weightageSummary": "Unit III: One-Dimensional Compressible F typically represents around 40% of overall exam weightage."
    },
    "weightage": [
      {
        "unit": "Unit I: IC Engine Combustion & Cycles: Air-fuel cycles, fuel-air mixtures, actual cycles. Combustion in SI engines: Stages, flame propagation, detonation/knocking causes, combustion chambers. Combustion in CI engines: Delay period, diesel knock, injection systems.",
        "expectedMarks": 12,
        "topics": [
          {
            "name": "Engine implementation details",
            "frequency": 5
          },
          {
            "name": "Combustion working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit II: IC Engine Testing & Performance: Performance parameters: BHP, IHP, mechanical efficiency, brake thermal efficiency, SFC. Heat balance sheets. Engine emissions, control norms (Bharat Stage parameters).",
        "expectedMarks": 14,
        "topics": [
          {
            "name": "Engine implementation details",
            "frequency": 5
          },
          {
            "name": "Testing working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit III: One-Dimensional Compressible Flow: Isentropic flow paths through variable area ducts, Mach number variations, area-velocity relationships. Flow through nozzles under off-design criteria.",
        "expectedMarks": 16,
        "topics": [
          {
            "name": "One-Dimensional implementation details",
            "frequency": 5
          },
          {
            "name": "Compressible working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit IV: Normal Shock Waves: Development of shock waves, governing equations (continuity, momentum, energy). Prandtl-Meyer relation, property changes across a normal shock wave.",
        "expectedMarks": 15,
        "topics": [
          {
            "name": "Normal implementation details",
            "frequency": 5
          },
          {
            "name": "Development working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit V: Fanno Flow & Rayleigh Flow: Adiabatic flow in constant area ducts with friction (Fanno flow), governing equations, Fanno lines. Isothermal/Frictionless flow with heat transfer (Rayleigh flow), Rayleigh lines.",
        "expectedMarks": 13,
        "topics": [
          {
            "name": "Rayleigh implementation details",
            "frequency": 5
          },
          {
            "name": "Adiabatic working parameters",
            "frequency": 4
          }
        ]
      }
    ],
    "repeatedQuestions": [
      {
        "id": "rq-tegd-me-1",
        "question": "Discuss the fundamental concepts of IC Engine Combustion & Cycles: Air-fuel cycles. How is it implemented/used in Thermal Engineering & Gas Dynamics?",
        "years": [
          2022,
          2024
        ],
        "frequency": 2,
        "importance": "Very High Probability"
      },
      {
        "id": "rq-tegd-me-2",
        "question": "Discuss the fundamental concepts of IC Engine Testing & Performance: Performance parameters: BHP. How is it implemented/used in Thermal Engineering & Gas Dynamics?",
        "years": [
          2023,
          2025
        ],
        "frequency": 3,
        "importance": "High Probability"
      },
      {
        "id": "rq-tegd-me-3",
        "question": "Discuss the fundamental concepts of One-Dimensional Compressible Flow: Isentropic flow paths through variable area ducts. How is it implemented/used in Thermal Engineering & Gas Dynamics?",
        "years": [
          2024
        ],
        "frequency": 4,
        "importance": "Medium Probability"
      }
    ],
    "oneNightRevision": {
      "topQuestions": [
        "Write short notes on key methodologies and design parameters of Thermal Engineering & Gas Dynamics (Focus on Unit 3).",
        "Write short notes on key methodologies and design parameters of Thermal Engineering & Gas Dynamics (Focus on Unit 4).",
        "Write short notes on key methodologies and design parameters of Thermal Engineering & Gas Dynamics (Focus on Unit 5)."
      ],
      "definitions": [
        {
          "term": "Thermal Engineering & Gas Dynamics",
          "definition": "IC engine combustion SI CI delay diesel knock chambers, testing BHP IHP SFC heat balance emissions, Mach variable area isentropic nozzle, normal shock waves Prandtl-Meyer, and Fanno Rayleigh flow."
        },
        {
          "term": "Core Principle of ME-601",
          "definition": "The foundational architecture and operational logic that dictates the behavior of Thermal Engineering & Gas Dynamics in engineering applications."
        }
      ],
      "diagrams": [
        {
          "title": "Thermal Engineering & Gas Dynamics System Layout",
          "description": "Block diagram displaying the architectural configuration and interface linkages."
        }
      ],
      "formulas": [
        {
          "name": "ME-601 Efficiency Formula",
          "formula": "η = (Output Power / Input Power) * 100%",
          "explanation": "Calculates the performance ratio indicating total energy conversion efficiency."
        }
      ],
      "lastMinuteNotes": [
        "💡 Focus on the structural building blocks of Thermal Engineering & Gas Dynamics and their practical design constraints.",
        "💡 Review unit-wise previous exam papers and standard notations for numerical stability."
      ]
    },
    "videos": []
  },
  {
    "id": "md2-me",
    "name": "Machine Design-II",
    "code": "ME-602",
    "branchId": "me",
    "semester": 6,
    "description": "Spur gear force Lewis Buckingham wear, Bevel worm gear design thermal efficiencies, sliding контакт bearings journal Sommerfeld, ball roller bearings dynamic life, and IC engine trunk pistons connecting rods.",
    "resourceCount": 32,
    "overview": {
      "syllabus": [
        "Unit I: Design of Transmission Gears: Spur gears: Force analysis, beam strength (Lewis equation), dynamic tooth load, wear strength (Buckingham equation). Helical gears: Virtual number of teeth, face width calculation.",
        "Unit II: Design of Bevel & Worm Gears: Bevel gears: Geometrical definitions, force tracking, design load steps. Worm gears: Thermal considerations, efficiency, wear estimation parameters.",
        "Unit III: Sliding Contact Bearings: Hydrodynamic lubrication theory, Sommerfeld number, journal bearing design parameters, thermal balance sheet.",
        "Unit IV: Rolling Contact Bearings: Types of ball and roller bearings, static and dynamic load capacities, equivalent bearing load, load-life relationship (L10 life), selection from manufacturer catalogs.",
        "Unit V: IC Engine Components Design: Structural tracking of engine assemblies. Design of trunk pistons, connecting rods (I-section profiling, buckling limits), and crankshafts."
      ],
      "weightageSummary": "Unit III: Sliding Contact Bearings: Hydr typically represents around 40% of overall exam weightage."
    },
    "weightage": [
      {
        "unit": "Unit I: Design of Transmission Gears: Spur gears: Force analysis, beam strength (Lewis equation), dynamic tooth load, wear strength (Buckingham equation). Helical gears: Virtual number of teeth, face width calculation.",
        "expectedMarks": 12,
        "topics": [
          {
            "name": "Design implementation details",
            "frequency": 5
          },
          {
            "name": "Transmission working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit II: Design of Bevel & Worm Gears: Bevel gears: Geometrical definitions, force tracking, design load steps. Worm gears: Thermal considerations, efficiency, wear estimation parameters.",
        "expectedMarks": 14,
        "topics": [
          {
            "name": "Design implementation details",
            "frequency": 5
          },
          {
            "name": "Geometrical working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit III: Sliding Contact Bearings: Hydrodynamic lubrication theory, Sommerfeld number, journal bearing design parameters, thermal balance sheet.",
        "expectedMarks": 16,
        "topics": [
          {
            "name": "Sliding implementation details",
            "frequency": 5
          },
          {
            "name": "Contact working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit IV: Rolling Contact Bearings: Types of ball and roller bearings, static and dynamic load capacities, equivalent bearing load, load-life relationship (L10 life), selection from manufacturer catalogs.",
        "expectedMarks": 15,
        "topics": [
          {
            "name": "Rolling implementation details",
            "frequency": 5
          },
          {
            "name": "Contact working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit V: IC Engine Components Design: Structural tracking of engine assemblies. Design of trunk pistons, connecting rods (I-section profiling, buckling limits), and crankshafts.",
        "expectedMarks": 13,
        "topics": [
          {
            "name": "Engine implementation details",
            "frequency": 5
          },
          {
            "name": "Components working parameters",
            "frequency": 4
          }
        ]
      }
    ],
    "repeatedQuestions": [
      {
        "id": "rq-md2-me-1",
        "question": "Discuss the fundamental concepts of Design of Transmission Gears: Spur gears: Force analysis. How is it implemented/used in Machine Design-II?",
        "years": [
          2022,
          2024
        ],
        "frequency": 2,
        "importance": "Very High Probability"
      },
      {
        "id": "rq-md2-me-2",
        "question": "Discuss the fundamental concepts of Design of Bevel & Worm Gears: Bevel gears: Geometrical definitions. How is it implemented/used in Machine Design-II?",
        "years": [
          2023,
          2025
        ],
        "frequency": 3,
        "importance": "High Probability"
      },
      {
        "id": "rq-md2-me-3",
        "question": "Discuss the fundamental concepts of Sliding Contact Bearings: Hydrodynamic lubrication theory. How is it implemented/used in Machine Design-II?",
        "years": [
          2024
        ],
        "frequency": 4,
        "importance": "Medium Probability"
      }
    ],
    "oneNightRevision": {
      "topQuestions": [
        "Write short notes on key methodologies and design parameters of Machine Design-II (Focus on Unit 3).",
        "Write short notes on key methodologies and design parameters of Machine Design-II (Focus on Unit 4).",
        "Write short notes on key methodologies and design parameters of Machine Design-II (Focus on Unit 5)."
      ],
      "definitions": [
        {
          "term": "Machine Design-II",
          "definition": "Spur gear force Lewis Buckingham wear, Bevel worm gear design thermal efficiencies, sliding контакт bearings journal Sommerfeld, ball roller bearings dynamic life, and IC engine trunk pistons connecting rods."
        },
        {
          "term": "Core Principle of ME-602",
          "definition": "The foundational architecture and operational logic that dictates the behavior of Machine Design-II in engineering applications."
        }
      ],
      "diagrams": [
        {
          "title": "Machine Design-II System Layout",
          "description": "Block diagram displaying the architectural configuration and interface linkages."
        }
      ],
      "formulas": [
        {
          "name": "ME-602 Efficiency Formula",
          "formula": "η = (Output Power / Input Power) * 100%",
          "explanation": "Calculates the performance ratio indicating total energy conversion efficiency."
        }
      ],
      "lastMinuteNotes": [
        "💡 Focus on the structural building blocks of Machine Design-II and their practical design constraints.",
        "💡 Review unit-wise previous exam papers and standard notations for numerical stability."
      ]
    },
    "videos": []
  },
  {
    "id": "ice-me",
    "name": "Internal Combustion Engines",
    "code": "ME-603",
    "branchId": "me",
    "semester": 6,
    "description": "Fuel system EFI CRDI supercharging supercharger turbocharger CI, cooling air liquid lubricants properties, alternative fuels CNG Bio-diesel Ethanol cells, dual fuel multi-fuel, and HCCI variable timing VVT hybrids.",
    "resourceCount": 32,
    "overview": {
      "syllabus": [
        "Unit I: Fuel Systems & Supercharging: Carburetion parameters, fuel injection pumps and injectors for CI engines. Electronic Fuel Injection (EFI, MPFI, CRDI). Supercharging and turbocharging.",
        "Unit II: Engine Cooling & Lubrication: Need for cooling, air and liquid cooling mechanisms. Lubrication configurations, types of lubricants, properties. Testing loops.",
        "Unit III: Alternative Fuels: Performance traits of alternative fuels in IC engines: CNG, LPG, Hydrogen, Bio-diesels, Ethanol blends. Fuel cells basics.",
        "Unit IV: Dual Fuel & Multi-fuel Engines: Operating principles, combustion characteristics, fuel transitions, structural modification needs.",
        "Unit V: Modern Engine Trends: Stratified charge engines, Lean burn engines, HCCI (Homogeneous Charge Compression Ignition), variable valve timing (VVT), hybrid powertrains."
      ],
      "weightageSummary": "Unit III: Alternative Fuels: Performance typically represents around 40% of overall exam weightage."
    },
    "weightage": [
      {
        "unit": "Unit I: Fuel Systems & Supercharging: Carburetion parameters, fuel injection pumps and injectors for CI engines. Electronic Fuel Injection (EFI, MPFI, CRDI). Supercharging and turbocharging.",
        "expectedMarks": 12,
        "topics": [
          {
            "name": "Systems implementation details",
            "frequency": 5
          },
          {
            "name": "Supercharging working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit II: Engine Cooling & Lubrication: Need for cooling, air and liquid cooling mechanisms. Lubrication configurations, types of lubricants, properties. Testing loops.",
        "expectedMarks": 14,
        "topics": [
          {
            "name": "Engine implementation details",
            "frequency": 5
          },
          {
            "name": "Cooling working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit III: Alternative Fuels: Performance traits of alternative fuels in IC engines: CNG, LPG, Hydrogen, Bio-diesels, Ethanol blends. Fuel cells basics.",
        "expectedMarks": 16,
        "topics": [
          {
            "name": "Alternative implementation details",
            "frequency": 5
          },
          {
            "name": "Performance working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit IV: Dual Fuel & Multi-fuel Engines: Operating principles, combustion characteristics, fuel transitions, structural modification needs.",
        "expectedMarks": 15,
        "topics": [
          {
            "name": "Multi-fuel implementation details",
            "frequency": 5
          },
          {
            "name": "Engines working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit V: Modern Engine Trends: Stratified charge engines, Lean burn engines, HCCI (Homogeneous Charge Compression Ignition), variable valve timing (VVT), hybrid powertrains.",
        "expectedMarks": 13,
        "topics": [
          {
            "name": "Modern implementation details",
            "frequency": 5
          },
          {
            "name": "Engine working parameters",
            "frequency": 4
          }
        ]
      }
    ],
    "repeatedQuestions": [
      {
        "id": "rq-ice-me-1",
        "question": "Discuss the fundamental concepts of Fuel Systems & Supercharging: Carburetion parameters. How is it implemented/used in Internal Combustion Engines?",
        "years": [
          2022,
          2024
        ],
        "frequency": 2,
        "importance": "Very High Probability"
      },
      {
        "id": "rq-ice-me-2",
        "question": "Discuss the fundamental concepts of Engine Cooling & Lubrication: Need for cooling. How is it implemented/used in Internal Combustion Engines?",
        "years": [
          2023,
          2025
        ],
        "frequency": 3,
        "importance": "High Probability"
      },
      {
        "id": "rq-ice-me-3",
        "question": "Discuss the fundamental concepts of Alternative Fuels: Performance traits of alternative fuels in IC engines: CNG. How is it implemented/used in Internal Combustion Engines?",
        "years": [
          2024
        ],
        "frequency": 4,
        "importance": "Medium Probability"
      }
    ],
    "oneNightRevision": {
      "topQuestions": [
        "Write short notes on key methodologies and design parameters of Internal Combustion Engines (Focus on Unit 3).",
        "Write short notes on key methodologies and design parameters of Internal Combustion Engines (Focus on Unit 4).",
        "Write short notes on key methodologies and design parameters of Internal Combustion Engines (Focus on Unit 5)."
      ],
      "definitions": [
        {
          "term": "Internal Combustion Engines",
          "definition": "Fuel system EFI CRDI supercharging supercharger turbocharger CI, cooling air liquid lubricants properties, alternative fuels CNG Bio-diesel Ethanol cells, dual fuel multi-fuel, and HCCI variable timing VVT hybrids."
        },
        {
          "term": "Core Principle of ME-603",
          "definition": "The foundational architecture and operational logic that dictates the behavior of Internal Combustion Engines in engineering applications."
        }
      ],
      "diagrams": [
        {
          "title": "Internal Combustion Engines System Layout",
          "description": "Block diagram displaying the architectural configuration and interface linkages."
        }
      ],
      "formulas": [
        {
          "name": "ME-603 Efficiency Formula",
          "formula": "η = (Output Power / Input Power) * 100%",
          "explanation": "Calculates the performance ratio indicating total energy conversion efficiency."
        }
      ],
      "lastMinuteNotes": [
        "💡 Focus on the structural building blocks of Internal Combustion Engines and their practical design constraints.",
        "💡 Review unit-wise previous exam papers and standard notations for numerical stability."
      ]
    },
    "videos": []
  },
  {
    "id": "hmt-me",
    "name": "Heat & Mass Transfer",
    "code": "ME-701",
    "branchId": "me",
    "semester": 7,
    "description": "Fourier law 3D Cartesian conduction critical radius insulation, fin uniform cross-section Biot Fourier transient Heisler, convection flat plate Grashof empirical, black body Planck Stefan Wien shape factor, and LMTD NTU exchangers Fick mass.",
    "resourceCount": 34,
    "overview": {
      "syllabus": [
        "Unit I: Conduction Fundamentals: Modes of heat transfer, Fourier’s law, thermal conductivity. General 3D heat conduction equation in Cartesian, cylindrical, and spherical coordinates. Steady-state 1D conduction without heat generation through planes, cylinders, spheres. Thermal resistance, insulation critical radius.",
        "Unit II: Extended Surfaces & Transient Conduction: Heat transfer from fins of uniform cross-section. Transient conduction: Lumped heat capacity analysis, Biot and Fourier numbers, Heisler charts application.",
        "Unit III: Convection: Boundary layer concepts. Forced convection: Dimensional analysis, empirical correlations for laminar and turbulent flow over flat plates and tubes. Natural convection: Grashof number, empirical formulations.",
        "Unit IV: Radiation Heat Transfer: Thermal radiation laws: Planck, Stefan-Boltzmann, Wien’s displacement, Kirchhoff’s laws. Black and gray body concepts. Shape factor algebra. Radiation exchange between gray surfaces, electrical analogy, radiation shields.",
        "Unit V: Heat Exchangers & Mass Transfer: Classification of heat exchangers, LMTD method, Effectiveness-NTU method. Mass Transfer: Fick’s law of diffusion, steady-state equimolar counter-diffusion."
      ],
      "weightageSummary": "Unit III: Convection: Boundary layer con typically represents around 40% of overall exam weightage."
    },
    "weightage": [
      {
        "unit": "Unit I: Conduction Fundamentals: Modes of heat transfer, Fourier’s law, thermal conductivity. General 3D heat conduction equation in Cartesian, cylindrical, and spherical coordinates. Steady-state 1D conduction without heat generation through planes, cylinders, spheres. Thermal resistance, insulation critical radius.",
        "expectedMarks": 12,
        "topics": [
          {
            "name": "Conduction implementation details",
            "frequency": 5
          },
          {
            "name": "Fundamentals working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit II: Extended Surfaces & Transient Conduction: Heat transfer from fins of uniform cross-section. Transient conduction: Lumped heat capacity analysis, Biot and Fourier numbers, Heisler charts application.",
        "expectedMarks": 14,
        "topics": [
          {
            "name": "Extended implementation details",
            "frequency": 5
          },
          {
            "name": "Surfaces working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit III: Convection: Boundary layer concepts. Forced convection: Dimensional analysis, empirical correlations for laminar and turbulent flow over flat plates and tubes. Natural convection: Grashof number, empirical formulations.",
        "expectedMarks": 16,
        "topics": [
          {
            "name": "Convection implementation details",
            "frequency": 5
          },
          {
            "name": "Boundary working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit IV: Radiation Heat Transfer: Thermal radiation laws: Planck, Stefan-Boltzmann, Wien’s displacement, Kirchhoff’s laws. Black and gray body concepts. Shape factor algebra. Radiation exchange between gray surfaces, electrical analogy, radiation shields.",
        "expectedMarks": 15,
        "topics": [
          {
            "name": "Radiation implementation details",
            "frequency": 5
          },
          {
            "name": "Transfer working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit V: Heat Exchangers & Mass Transfer: Classification of heat exchangers, LMTD method, Effectiveness-NTU method. Mass Transfer: Fick’s law of diffusion, steady-state equimolar counter-diffusion.",
        "expectedMarks": 13,
        "topics": [
          {
            "name": "Exchangers implementation details",
            "frequency": 5
          },
          {
            "name": "Transfer working parameters",
            "frequency": 4
          }
        ]
      }
    ],
    "repeatedQuestions": [
      {
        "id": "rq-hmt-me-1",
        "question": "Discuss the fundamental concepts of Conduction Fundamentals: Modes of heat transfer. How is it implemented/used in Heat & Mass Transfer?",
        "years": [
          2022,
          2024
        ],
        "frequency": 2,
        "importance": "Very High Probability"
      },
      {
        "id": "rq-hmt-me-2",
        "question": "Discuss the fundamental concepts of Extended Surfaces & Transient Conduction: Heat transfer from fins of uniform cross-section. Transient conduction: Lumped heat capacity analysis. How is it implemented/used in Heat & Mass Transfer?",
        "years": [
          2023,
          2025
        ],
        "frequency": 3,
        "importance": "High Probability"
      },
      {
        "id": "rq-hmt-me-3",
        "question": "Discuss the fundamental concepts of Convection: Boundary layer concepts. Forced convection: Dimensional analysis. How is it implemented/used in Heat & Mass Transfer?",
        "years": [
          2024
        ],
        "frequency": 4,
        "importance": "Medium Probability"
      }
    ],
    "oneNightRevision": {
      "topQuestions": [
        "Write short notes on key methodologies and design parameters of Heat & Mass Transfer (Focus on Unit 3).",
        "Write short notes on key methodologies and design parameters of Heat & Mass Transfer (Focus on Unit 4).",
        "Write short notes on key methodologies and design parameters of Heat & Mass Transfer (Focus on Unit 5)."
      ],
      "definitions": [
        {
          "term": "Heat & Mass Transfer",
          "definition": "Fourier law 3D Cartesian conduction critical radius insulation, fin uniform cross-section Biot Fourier transient Heisler, convection flat plate Grashof empirical, black body Planck Stefan Wien shape factor, and LMTD NTU exchangers Fick mass."
        },
        {
          "term": "Core Principle of ME-701",
          "definition": "The foundational architecture and operational logic that dictates the behavior of Heat & Mass Transfer in engineering applications."
        }
      ],
      "diagrams": [
        {
          "title": "Heat & Mass Transfer System Layout",
          "description": "Block diagram displaying the architectural configuration and interface linkages."
        }
      ],
      "formulas": [
        {
          "name": "ME-701 Efficiency Formula",
          "formula": "η = (Output Power / Input Power) * 100%",
          "explanation": "Calculates the performance ratio indicating total energy conversion efficiency."
        }
      ],
      "lastMinuteNotes": [
        "💡 Focus on the structural building blocks of Heat & Mass Transfer and their practical design constraints.",
        "💡 Review unit-wise previous exam papers and standard notations for numerical stability."
      ]
    },
    "videos": []
  },
  {
    "id": "rac-me",
    "name": "Refrigeration & Air Conditioning",
    "code": "ME-702",
    "branchId": "me",
    "semester": 7,
    "description": "Refrigeration Bell-Coleman aircraft refrigeration GWP ozone depletion, VCR subcooling superheating multi-evaporator, VAR absorption Li-Br steam jet thermoelectric, psychrometric bypass ADP comfort chart, and RSHF GSHF duct layout.",
    "resourceCount": 34,
    "overview": {
      "syllabus": [
        "Unit I: Refrigeration Cycles & Refrigerants: Reversed Carnot cycle, Air refrigeration systems (Bell-Coleman cycle), aircraft refrigeration loops. Refrigerants: Classification, nomenclature, eco-friendly properties, ozone depletion potential (ODP), global warming potential (GWP).",
        "Unit II: Vapor Compression Refrigeration (VCR): Working principle, P-H and T-S diagrams. Subcooling and superheating effects. Volumetric efficiency, actual VCR cycle tracking, multi-evaporator systems basics.",
        "Unit III: Vapor Absorption & Special Systems: Vapor Absorption Refrigeration (VAR): Aqua-Ammonia and Lithium-Bromide systems, COP derivation. Electrolux refrigerator. Steam jet refrigeration, thermoelectric refrigeration.",
        "Unit IV: Psychrometry & Conditioning Processes: Psychrometric properties, chart layouts. Processes: Sensible heating/cooling, humidification/dehumidification, bypass factor, ADP. Effective temperature, comfort charts.",
        "Unit V: Cooling Load & Duct Design: Components of cooling load (sensible and latent heat gains). RSHF, GSHF, ESHF alignments. Air distribution systems, duct design methods (Equal friction, Velocity reduction)."
      ],
      "weightageSummary": "Unit III: Vapor Absorption & Special Sys typically represents around 40% of overall exam weightage."
    },
    "weightage": [
      {
        "unit": "Unit I: Refrigeration Cycles & Refrigerants: Reversed Carnot cycle, Air refrigeration systems (Bell-Coleman cycle), aircraft refrigeration loops. Refrigerants: Classification, nomenclature, eco-friendly properties, ozone depletion potential (ODP), global warming potential (GWP).",
        "expectedMarks": 12,
        "topics": [
          {
            "name": "Refrigeration implementation details",
            "frequency": 5
          },
          {
            "name": "Cycles working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit II: Vapor Compression Refrigeration (VCR): Working principle, P-H and T-S diagrams. Subcooling and superheating effects. Volumetric efficiency, actual VCR cycle tracking, multi-evaporator systems basics.",
        "expectedMarks": 14,
        "topics": [
          {
            "name": "Compression implementation details",
            "frequency": 5
          },
          {
            "name": "Refrigeration working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit III: Vapor Absorption & Special Systems: Vapor Absorption Refrigeration (VAR): Aqua-Ammonia and Lithium-Bromide systems, COP derivation. Electrolux refrigerator. Steam jet refrigeration, thermoelectric refrigeration.",
        "expectedMarks": 16,
        "topics": [
          {
            "name": "Absorption implementation details",
            "frequency": 5
          },
          {
            "name": "Special working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit IV: Psychrometry & Conditioning Processes: Psychrometric properties, chart layouts. Processes: Sensible heating/cooling, humidification/dehumidification, bypass factor, ADP. Effective temperature, comfort charts.",
        "expectedMarks": 15,
        "topics": [
          {
            "name": "Psychrometry implementation details",
            "frequency": 5
          },
          {
            "name": "Conditioning working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit V: Cooling Load & Duct Design: Components of cooling load (sensible and latent heat gains). RSHF, GSHF, ESHF alignments. Air distribution systems, duct design methods (Equal friction, Velocity reduction).",
        "expectedMarks": 13,
        "topics": [
          {
            "name": "Cooling implementation details",
            "frequency": 5
          },
          {
            "name": "Design working parameters",
            "frequency": 4
          }
        ]
      }
    ],
    "repeatedQuestions": [
      {
        "id": "rq-rac-me-1",
        "question": "Discuss the fundamental concepts of Refrigeration Cycles & Refrigerants: Reversed Carnot cycle. How is it implemented/used in Refrigeration & Air Conditioning?",
        "years": [
          2022,
          2024
        ],
        "frequency": 2,
        "importance": "Very High Probability"
      },
      {
        "id": "rq-rac-me-2",
        "question": "Discuss the fundamental concepts of Vapor Compression Refrigeration (VCR): Working principle. How is it implemented/used in Refrigeration & Air Conditioning?",
        "years": [
          2023,
          2025
        ],
        "frequency": 3,
        "importance": "High Probability"
      },
      {
        "id": "rq-rac-me-3",
        "question": "Discuss the fundamental concepts of Vapor Absorption & Special Systems: Vapor Absorption Refrigeration (VAR): Aqua-Ammonia and Lithium-Bromide systems. How is it implemented/used in Refrigeration & Air Conditioning?",
        "years": [
          2024
        ],
        "frequency": 4,
        "importance": "Medium Probability"
      }
    ],
    "oneNightRevision": {
      "topQuestions": [
        "Write short notes on key methodologies and design parameters of Refrigeration & Air Conditioning (Focus on Unit 3).",
        "Write short notes on key methodologies and design parameters of Refrigeration & Air Conditioning (Focus on Unit 4).",
        "Write short notes on key methodologies and design parameters of Refrigeration & Air Conditioning (Focus on Unit 5)."
      ],
      "definitions": [
        {
          "term": "Refrigeration & Air Conditioning",
          "definition": "Refrigeration Bell-Coleman aircraft refrigeration GWP ozone depletion, VCR subcooling superheating multi-evaporator, VAR absorption Li-Br steam jet thermoelectric, psychrometric bypass ADP comfort chart, and RSHF GSHF duct layout."
        },
        {
          "term": "Core Principle of ME-702",
          "definition": "The foundational architecture and operational logic that dictates the behavior of Refrigeration & Air Conditioning in engineering applications."
        }
      ],
      "diagrams": [
        {
          "title": "Refrigeration & Air Conditioning System Layout",
          "description": "Block diagram displaying the architectural configuration and interface linkages."
        }
      ],
      "formulas": [
        {
          "name": "ME-702 Efficiency Formula",
          "formula": "η = (Output Power / Input Power) * 100%",
          "explanation": "Calculates the performance ratio indicating total energy conversion efficiency."
        }
      ],
      "lastMinuteNotes": [
        "💡 Focus on the structural building blocks of Refrigeration & Air Conditioning and their practical design constraints.",
        "💡 Review unit-wise previous exam papers and standard notations for numerical stability."
      ]
    },
    "videos": []
  },
  {
    "id": "cam-me",
    "name": "Computer Aided Engineering (CAM/CIM)",
    "code": "ME-801",
    "branchId": "me",
    "semester": 8,
    "description": "Geometric Bezier spline curve, NC CNC feedback stepper servo drive actuator, G M manual part programming canned cycles, OPITZ classification FMS group technology material handling, and CIM robotics end effector.",
    "resourceCount": 36,
    "overview": {
      "syllabus": [
        "Unit I: CAD Foundations & Transformation: CAD system hardware, geometric modeling (wireframe, surface, solid modeling), Bezier and B-spline curves. 2D and 3D transformations: Translation, scaling, rotation, homogeneous coordinates.",
        "Unit II: NC/CNC Machine Tools: Components of NC/CNC systems, NC coordinate system, classification of CNC machines. Feedback devices, actuating systems (stepper motors, servo drives).",
        "Unit III: CNC Part Programming: Part programming fundamentals, G-codes, M-codes. Manual part programming for turning and milling operations, canned cycles, tool compensation loops.",
        "Unit IV: Group Technology & FMS: Part families, parts classification and coding (OPITZ system). Flexible Manufacturing Systems (FMS): Workstations, material handling, central control architectures.",
        "Unit V: CIM & Robotics: Components of Computer Integrated Manufacturing (CIM). Industrial Robots: Anatomy, configurations, joints, end effectors, programming methods, and industrial applications."
      ],
      "weightageSummary": "Unit III: CNC Part Programming: Part pro typically represents around 40% of overall exam weightage."
    },
    "weightage": [
      {
        "unit": "Unit I: CAD Foundations & Transformation: CAD system hardware, geometric modeling (wireframe, surface, solid modeling), Bezier and B-spline curves. 2D and 3D transformations: Translation, scaling, rotation, homogeneous coordinates.",
        "expectedMarks": 12,
        "topics": [
          {
            "name": "Foundations implementation details",
            "frequency": 5
          },
          {
            "name": "Transformation working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit II: NC/CNC Machine Tools: Components of NC/CNC systems, NC coordinate system, classification of CNC machines. Feedback devices, actuating systems (stepper motors, servo drives).",
        "expectedMarks": 14,
        "topics": [
          {
            "name": "Machine implementation details",
            "frequency": 5
          },
          {
            "name": "Components working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit III: CNC Part Programming: Part programming fundamentals, G-codes, M-codes. Manual part programming for turning and milling operations, canned cycles, tool compensation loops.",
        "expectedMarks": 16,
        "topics": [
          {
            "name": "Programming implementation details",
            "frequency": 5
          },
          {
            "name": "programming working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit IV: Group Technology & FMS: Part families, parts classification and coding (OPITZ system). Flexible Manufacturing Systems (FMS): Workstations, material handling, central control architectures.",
        "expectedMarks": 15,
        "topics": [
          {
            "name": "Technology implementation details",
            "frequency": 5
          },
          {
            "name": "families working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit V: CIM & Robotics: Components of Computer Integrated Manufacturing (CIM). Industrial Robots: Anatomy, configurations, joints, end effectors, programming methods, and industrial applications.",
        "expectedMarks": 13,
        "topics": [
          {
            "name": "Robotics implementation details",
            "frequency": 5
          },
          {
            "name": "Components working parameters",
            "frequency": 4
          }
        ]
      }
    ],
    "repeatedQuestions": [
      {
        "id": "rq-cam-me-1",
        "question": "Discuss the fundamental concepts of CAD Foundations & Transformation: CAD system hardware. How is it implemented/used in Computer Aided Engineering (CAM/CIM)?",
        "years": [
          2022,
          2024
        ],
        "frequency": 2,
        "importance": "Very High Probability"
      },
      {
        "id": "rq-cam-me-2",
        "question": "Discuss the fundamental concepts of NC/CNC Machine Tools: Components of NC/CNC systems. How is it implemented/used in Computer Aided Engineering (CAM/CIM)?",
        "years": [
          2023,
          2025
        ],
        "frequency": 3,
        "importance": "High Probability"
      },
      {
        "id": "rq-cam-me-3",
        "question": "Discuss the fundamental concepts of CNC Part Programming: Part programming fundamentals. How is it implemented/used in Computer Aided Engineering (CAM/CIM)?",
        "years": [
          2024
        ],
        "frequency": 4,
        "importance": "Medium Probability"
      }
    ],
    "oneNightRevision": {
      "topQuestions": [
        "Write short notes on key methodologies and design parameters of Computer Aided Engineering (CAM/CIM) (Focus on Unit 3).",
        "Write short notes on key methodologies and design parameters of Computer Aided Engineering (CAM/CIM) (Focus on Unit 4).",
        "Write short notes on key methodologies and design parameters of Computer Aided Engineering (CAM/CIM) (Focus on Unit 5)."
      ],
      "definitions": [
        {
          "term": "Computer Aided Engineering (CAM/CIM)",
          "definition": "Geometric Bezier spline curve, NC CNC feedback stepper servo drive actuator, G M manual part programming canned cycles, OPITZ classification FMS group technology material handling, and CIM robotics end effector."
        },
        {
          "term": "Core Principle of ME-801",
          "definition": "The foundational architecture and operational logic that dictates the behavior of Computer Aided Engineering (CAM/CIM) in engineering applications."
        }
      ],
      "diagrams": [
        {
          "title": "Computer Aided Engineering (CAM/CIM) System Layout",
          "description": "Block diagram displaying the architectural configuration and interface linkages."
        }
      ],
      "formulas": [
        {
          "name": "ME-801 Efficiency Formula",
          "formula": "η = (Output Power / Input Power) * 100%",
          "explanation": "Calculates the performance ratio indicating total energy conversion efficiency."
        }
      ],
      "lastMinuteNotes": [
        "💡 Focus on the structural building blocks of Computer Aided Engineering (CAM/CIM) and their practical design constraints.",
        "💡 Review unit-wise previous exam papers and standard notations for numerical stability."
      ]
    },
    "videos": []
  },
  {
    "id": "ae-me",
    "name": "Automobile Engineering",
    "code": "ME-802",
    "branchId": "me",
    "semester": 8,
    "description": "Front engine layout chassis aerodynamic, clutch synchromesh gearbox universal differential rear axle transmission, camber caster kingpin toe independent suspension leaf shock, hydraulic air ABS brakes, and starter battery passive active ADAS.",
    "resourceCount": 36,
    "overview": {
      "syllabus": [
        "Unit I: Chassis & Frame Structures: Automobile layouts (front engine-rear drive, front engine-front drive). Types of frames, structural rigidity requirements, aerodynamic body design tracking.",
        "Unit II: Transmission Systems: Clutch assemblies (single-plate, multi-plate, diaphragm). Gearboxes: Synchromesh, sliding mesh. Propeller shaft, universal joints, differential gear tracking, rear axles.",
        "Unit III: Steering & Suspension Systems: Steering geometry: Camber, caster, kingpin inclination, toe-in, toe-out. Ackermann steering mechanism. Suspension: Leaf springs, coil springs, shock absorbers, torsion bars, independent suspension.",
        "Unit IV: Braking & Wheel Systems: Hydraulic brakes, master cylinder, wheel cylinders. Power brakes, air brakes. Anti-lock Braking System (ABS) layout. Tyres: Structure, wear patterns.",
        "Unit V: Automotive Electricals & Safety: Battery testing, charging system, starting motor. Lighting circuit, indicators. Passive and active safety loops: Airbags, crumple zones, seat belts, ADAS baselines."
      ],
      "weightageSummary": "Unit III: Steering & Suspension Systems: typically represents around 40% of overall exam weightage."
    },
    "weightage": [
      {
        "unit": "Unit I: Chassis & Frame Structures: Automobile layouts (front engine-rear drive, front engine-front drive). Types of frames, structural rigidity requirements, aerodynamic body design tracking.",
        "expectedMarks": 12,
        "topics": [
          {
            "name": "Chassis implementation details",
            "frequency": 5
          },
          {
            "name": "Structures working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit II: Transmission Systems: Clutch assemblies (single-plate, multi-plate, diaphragm). Gearboxes: Synchromesh, sliding mesh. Propeller shaft, universal joints, differential gear tracking, rear axles.",
        "expectedMarks": 14,
        "topics": [
          {
            "name": "Transmission implementation details",
            "frequency": 5
          },
          {
            "name": "Systems working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit III: Steering & Suspension Systems: Steering geometry: Camber, caster, kingpin inclination, toe-in, toe-out. Ackermann steering mechanism. Suspension: Leaf springs, coil springs, shock absorbers, torsion bars, independent suspension.",
        "expectedMarks": 16,
        "topics": [
          {
            "name": "Steering implementation details",
            "frequency": 5
          },
          {
            "name": "Suspension working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit IV: Braking & Wheel Systems: Hydraulic brakes, master cylinder, wheel cylinders. Power brakes, air brakes. Anti-lock Braking System (ABS) layout. Tyres: Structure, wear patterns.",
        "expectedMarks": 15,
        "topics": [
          {
            "name": "Braking implementation details",
            "frequency": 5
          },
          {
            "name": "Systems working parameters",
            "frequency": 4
          }
        ]
      },
      {
        "unit": "Unit V: Automotive Electricals & Safety: Battery testing, charging system, starting motor. Lighting circuit, indicators. Passive and active safety loops: Airbags, crumple zones, seat belts, ADAS baselines.",
        "expectedMarks": 13,
        "topics": [
          {
            "name": "Automotive implementation details",
            "frequency": 5
          },
          {
            "name": "Electricals working parameters",
            "frequency": 4
          }
        ]
      }
    ],
    "repeatedQuestions": [
      {
        "id": "rq-ae-me-1",
        "question": "Discuss the fundamental concepts of Chassis & Frame Structures: Automobile layouts (front engine-rear drive. How is it implemented/used in Automobile Engineering?",
        "years": [
          2022,
          2024
        ],
        "frequency": 2,
        "importance": "Very High Probability"
      },
      {
        "id": "rq-ae-me-2",
        "question": "Discuss the fundamental concepts of Transmission Systems: Clutch assemblies (single-plate. How is it implemented/used in Automobile Engineering?",
        "years": [
          2023,
          2025
        ],
        "frequency": 3,
        "importance": "High Probability"
      },
      {
        "id": "rq-ae-me-3",
        "question": "Discuss the fundamental concepts of Steering & Suspension Systems: Steering geometry: Camber. How is it implemented/used in Automobile Engineering?",
        "years": [
          2024
        ],
        "frequency": 4,
        "importance": "Medium Probability"
      }
    ],
    "oneNightRevision": {
      "topQuestions": [
        "Write short notes on key methodologies and design parameters of Automobile Engineering (Focus on Unit 3).",
        "Write short notes on key methodologies and design parameters of Automobile Engineering (Focus on Unit 4).",
        "Write short notes on key methodologies and design parameters of Automobile Engineering (Focus on Unit 5)."
      ],
      "definitions": [
        {
          "term": "Automobile Engineering",
          "definition": "Front engine layout chassis aerodynamic, clutch synchromesh gearbox universal differential rear axle transmission, camber caster kingpin toe independent suspension leaf shock, hydraulic air ABS brakes, and starter battery passive active ADAS."
        },
        {
          "term": "Core Principle of ME-802",
          "definition": "The foundational architecture and operational logic that dictates the behavior of Automobile Engineering in engineering applications."
        }
      ],
      "diagrams": [
        {
          "title": "Automobile Engineering System Layout",
          "description": "Block diagram displaying the architectural configuration and interface linkages."
        }
      ],
      "formulas": [
        {
          "name": "ME-802 Efficiency Formula",
          "formula": "η = (Output Power / Input Power) * 100%",
          "explanation": "Calculates the performance ratio indicating total energy conversion efficiency."
        }
      ],
      "lastMinuteNotes": [
        "💡 Focus on the structural building blocks of Automobile Engineering and their practical design constraints.",
        "💡 Review unit-wise previous exam papers and standard notations for numerical stability."
      ]
    },
    "videos": []
  }
];

// --- 10 BASE FIRST YEAR COMMON SUBJECTS ---
const FIRST_YEAR_GROUP_A_RAW: Omit<Subject, 'branchId' | 'semester'>[] = [
  {
    id: 'bt101',
    name: 'Engineering Chemistry',
    code: 'BT-101',
    description: 'Water analysis and treatments, lubricants significance, polymers & polymerization, corrosion prevention, and spectroscopic techniques.',
    resourceCount: 22,
    overview: {
      syllabus: [
        'Unit 1: Water Analysis, Treatments & Industrial Applications: Hardness, EDTA method, Alkalinity.',
        'Unit 2: Boiler problems (Sludge, Scale, Caustic Embrittlement) & Softening (Zeolite, Lime-Soda, Ion Exchange).',
        'Unit 3: Lubricants and Lubrication mechanisms, viscosity index, flash & fire points, cloud & pour points, acid number.',
        'Unit 4: Polymer & Polymerization mechanisms (Free radical & Ionic), preparation of PVC, PMMA, Teflon, Nylons, Buna-N/S, Vulcanization.',
        'Unit 5: Phase equilibrium of single component (Water) & binary Eutectic (Cu-Ag) systems. Corrosion types and mechanisms.',
        'Unit 6: Spectroscopic techniques: Principle, instrumentation, and applications of electronic, vibrational, and rotational spectroscopy.',
        'Unit 7: Periodic properties: effective nuclear charge, electronegativity, atomic/ionic sizes, oxidation states.'
      ],
      weightageSummary: 'EDTA Hardness & softening numericals (Unit 1 & 2) represent 30% marks. Phase diagram of Water (Unit 5) and Nylon/PVC synthesis (Unit 4) are highly repetitive.'
    },
    weightage: [
      { unit: 'Unit 1 & 2: Water & Softening', expectedMarks: 25, topics: [{ name: 'EDTA Method Hardness titration', frequency: 7 }, { name: 'Zeolite & Ion Exchange softeners', frequency: 5 }] },
      { unit: 'Unit 3: Lubricants', expectedMarks: 10, topics: [{ name: 'Viscosity Index & Flash/Fire points', frequency: 4 }] },
      { unit: 'Unit 4: Polymers', expectedMarks: 15, topics: [{ name: 'Nylon-6, Nylon-6,6, PMMA, Buna-S synthesis', frequency: 6 }, { name: 'Free Radical polymerization mechanism', frequency: 3 }] },
      { unit: 'Unit 5: Phase Rule & Corrosion', expectedMarks: 10, topics: [{ name: 'Phase Diagram of Water System', frequency: 5 }, { name: 'Electrochemical Corrosion & prevention', frequency: 4 }] },
      { unit: 'Unit 6 & 7: Spectroscopy & Periodic Properties', expectedMarks: 10, topics: [{ name: 'UV-Visible & IR Spectroscopy principles', frequency: 3 }] }
    ],
    repeatedQuestions: [
      { id: 'rq-che-1', question: 'Describe the EDTA method for determination of hardness of water with chemical equations and numerical examples.', years: [2022, 2023, 2024, 2025], frequency: 4, importance: 'Very High Probability' },
      { id: 'rq-che-2', question: 'Define Phase Rule. Draw and explain the phase diagram of a one-component water system showing triple point and critical points.', years: [2021, 2023, 2024, 2025], frequency: 4, importance: 'Very High Probability' },
      { id: 'rq-che-3', question: 'Explain scale and sludge formation in boilers. Discuss their disadvantages and methods of prevention.', years: [2022, 2024], frequency: 2, importance: 'High Probability' }
    ],
    oneNightRevision: {
      topQuestions: [
        'Perform hardness numerical calculations based on EDTA consumption.',
        'Write the mechanism of electrochemical corrosion with anodic and cathodic reactions.',
        'Compare Thermoplastic and Thermosetting polymers with examples.',
        'Discuss the preparation and properties of Buna-S and Buna-N synthetic rubbers.'
      ],
      definitions: [
        { term: 'Viscosity Index', definition: 'An arbitrary measure for the change of viscosity of a lubricant with variation in temperature.' },
        { term: 'Zeolite Softening', definition: 'A process in which hard water is filtered through hydrated sodium alumino silicate to exchange Ca2+ and Mg2+ for Na+.' }
      ],
      diagrams: [
        { title: 'Zeolite Softener Plant', description: 'Schematic representing inlet of hard water, zeolite bed exchanges, brine solution regenerator, and soft water outlet.' }
      ],
      formulas: [
        { name: 'Hardness (EDTA)', formula: 'Total Hardness = [V_edta * M_edta * 1000] / V_sample  [ppm]', explanation: 'Determines CaCO3 equivalent concentration.' }
      ],
      lastMinuteNotes: [
        '💡 Eriochrome Black-T indicator forms a weak wine-red complex with calcium/magnesium ions, which EDTA chelates into a steel-blue endpoint.',
        '💡 Caustic embrittlement occurs in boilers at high pressures due to NaOH reacting with iron at cracks.'
      ]
    },
    videos: [
      { id: 'v-che-1', title: 'EDTA Hardness Method Solved Numericals', unit: 1, duration: '19:40', youtubeId: 'efR1C6Cv1JC' },
      { id: 'v-che-2', title: 'Boiler Troubles: Scales, Sludges & Caustic Embrittlement', unit: 2, duration: '22:15', youtubeId: 'efR1C6Cv1JC' }
    ]
  },
  {
    id: 'bt102',
    name: 'Mathematics-I',
    code: 'BT-102',
    description: 'Calculus theorems, expansion of functions, beta-gamma functions, multiple integrals, convergence tests, vector spaces, and matrices.',
    resourceCount: 30,
    overview: {
      syllabus: [
        'Unit 1: Rolle’s Theorem, Mean Value Theorems, Maclaurin & Taylor expansions for single variable. Taylor’s theorem for two variables, Partial Differentiation, Maxima & Minima, Lagrange Multipliers.',
        'Unit 2: Definite Integral as limit of a sum, Beta & Gamma functions, Area & Volumes of revolutions. Multiple integrals, change of integration order, calculating areas & volumes.',
        'Unit 3: Convergence of sequences and series, convergence tests, power series, Exp, Trig, Log series. Fourier series, half range sine/cosine series, Parsevals theorem.',
        'Unit 4: Vector spaces, vector subspaces, linear combinations, linear dependency & independence, Basis of vector space, Linear Transformations.',
        'Unit 5: Rank of matrix, simultaneous linear equations by elementary transformations, consistency, Eigenvalues & Eigenvectors, Diagonalization, Cayley-Hamilton theorem.'
      ],
      weightageSummary: 'Calculus maxima/minima (Unit 1) and Cayley-Hamilton matrices (Unit 5) represent 40% of the exam. Beta-Gamma property calculations are highly recursive.'
    },
    weightage: [
      { unit: 'Unit 1: Calculus (Differential)', expectedMarks: 15, topics: [{ name: 'Lagrange Multipliers Maxima & Minima', frequency: 5 }, { name: 'Taylors Series expansions', frequency: 4 }] },
      { unit: 'Unit 2: Calculus (Integral)', expectedMarks: 15, topics: [{ name: 'Change the order of Integration', frequency: 6 }, { name: 'Beta & Gamma function integrations', frequency: 4 }] },
      { unit: 'Unit 3: Sequences & Series', expectedMarks: 15, topics: [{ name: 'Fourier Series coefficient calculations', frequency: 5 }, { name: 'D’Alembert ratio and Cauchy root tests', frequency: 3 }] },
      { unit: 'Unit 4: Vector Spaces', expectedMarks: 10, topics: [{ name: 'Checking Vector Space & Subspace properties', frequency: 4 }] },
      { unit: 'Unit 5: Matrices', expectedMarks: 15, topics: [{ name: 'Cayley-Hamilton Theorem verification', frequency: 7 }, { name: 'Eigenvalues and Eigenvectors of 3x3 matrices', frequency: 6 }] }
    ],
    repeatedQuestions: [
      { id: 'rq-m1-1', question: 'State and verify Rolle’s theorem for the function f(x) = x(x-3)^2 in the interval [0, 3].', years: [2022, 2023, 2024], frequency: 3, importance: 'High Probability' },
      { id: 'rq-m1-2', question: 'Change the order of integration for the double integral: ∫[0 to a] ∫[x^2/a to 2a-x] f(x, y) dy dx.', years: [2021, 2023, 2024, 2025], frequency: 4, importance: 'Very High Probability' },
      { id: 'rq-m1-3', question: 'State Cayley-Hamilton theorem. Verify it for matrix A = [[2, -1, 1], [-1, 2, -1], [1, -1, 2]] and find its inverse.', years: [2022, 2024, 2025], frequency: 3, importance: 'Very High Probability' }
    ],
    oneNightRevision: {
      topQuestions: [
        'Expand f(x, y) = e^x cos(y) in powers of x and y using Taylors theorem up to second degree.',
        'Find the values of a and b for which rank of matrix is 2.',
        'Determine Fourier Series expansion for f(x) = x^2 in the interval [-π, π].',
        'Find the coordinates of a vector relative to a given basis.'
      ],
      definitions: [
        { term: 'Linear Independence', definition: 'A set of vectors is linearly independent if no vector in the set can be written as a linear combination of the others.' },
        { term: 'Consistency of Equations', definition: 'A system of linear equations AX=B is consistent if the rank of the coefficient matrix A equals the rank of augmented matrix [A|B].' }
      ],
      diagrams: [
        { title: 'Order of Integration Region', description: 'Plot showing curves y = x^2/a and line y = 2a-x, shading the integration region for order change.' }
      ],
      formulas: [
        { name: 'Lagrange Equation', formula: '∇f = λ∇g', explanation: 'Optimizes f(x,y) subject to constraint g(x,y)=0.' }
      ],
      lastMinuteNotes: [
        '💡 In Fourier series, if f(x) is an even function, then Fourier coefficient b_n = 0.',
        '💡 Gamma of 1/2 is equal to square root of Pi (√π).'
      ]
    },
    videos: [
      { id: 'v-m1-1', title: 'Change of Integration Order Explained', unit: 2, duration: '24:10', youtubeId: 'O2L2UvGPbKE' },
      { id: 'v-m1-2', title: 'EigenValues & Eigenvectors Step-by-Step', unit: 5, duration: '28:30', youtubeId: 'KzZnrZ6pUis' }
    ]
  },
  {
    id: 'bt103',
    name: 'English for Communication',
    code: 'BT-103',
    description: 'Grammar review, active-passive, 7 Cs of communication, technical writing layouts, resumes, emails, and tenders.',
    resourceCount: 15,
    overview: {
      syllabus: [
        'Unit 1: Identifying Common Errors: Articles, Subject-Verb Agreement, Prepositions, Voice, Direct/Indirect reported speech.',
        'Unit 2: Vocabulary & Comprehension: foreign prefixes & suffixes, synonyms/antonyms, reading comprehension.',
        'Unit 3: Communication process, Oral & Written, 7 Cs of communication, barriers and overcoming strategies, nonverbal.',
        'Unit 4: Writing Skills: planning, drafting, editing, precise writing, technical definitions, Report writing structures.',
        'Unit 5: Business Letters, layouts, resumes writing, quotations sending, complaint, emails and tender notices.'
      ],
      weightageSummary: 'The 7 Cs of Communication (Unit 3) and Resume/Report writing formats (Unit 4 & 5) make up over 50% of marks.'
    },
    weightage: [
      { unit: 'Unit 1 & 2: Grammar & Vocab', expectedMarks: 15, topics: [{ name: 'Active to Passive voice corrections', frequency: 5 }] },
      { unit: 'Unit 3: Communication Theory', expectedMarks: 20, topics: [{ name: '7 Cs of Communication', frequency: 8 }, { name: 'Barriers to communication', frequency: 6 }] },
      { unit: 'Unit 4 & 5: Business Writing', expectedMarks: 35, topics: [{ name: 'Resume and Cover letter format', frequency: 7 }, { name: 'Structure of a Technical Report', frequency: 5 }] }
    ],
    repeatedQuestions: [
      { id: 'rq-eng-1', question: 'What is communication? Discuss the barriers to communication and explain how they can be overcome.', years: [2021, 2023, 2024], frequency: 3, importance: 'High Probability' },
      { id: 'rq-eng-2', question: 'What are the 7 C’s of effective communication? Explain each in detail with examples.', years: [2022, 2024, 2025], frequency: 3, importance: 'Very High Probability' },
      { id: 'rq-eng-3', question: 'Draft a formal Resume and Cover Letter for the post of Software Intern at a reputed IT organization.', years: [2022, 2023, 2025], frequency: 3, importance: 'Very High Probability' }
    ],
    oneNightRevision: {
      topQuestions: [
        'Explain the process of communication with a block diagram (Sender, Receiver, Feedback, Noise).',
        'Distinguish between Verbal and Non-Verbal communication.',
        'Write a technical report on a laboratory equipment failure.',
        'Write a precise summary of a given 300-word academic passage.'
      ],
      definitions: [
        { term: 'Kinesics', definition: 'The study of body language, gestures, postures, and facial expressions in non-verbal communication.' },
        { term: 'Précis Writing', definition: 'Summarizing a long passage to one-third of its original length, retaining all essential facts.' }
      ],
      diagrams: [
        { title: 'Communication Loop', description: 'Sender encodes message, sends via channel, receiver decodes, and transmits feedback back to sender.' }
      ],
      formulas: [],
      lastMinuteNotes: [
        '💡 The 7 Cs are: Clarity, Conciseness, Concreteness, Correctness, Consideration, Completeness, and Courtesy.',
        '💡 Always use a reverse-chronological order when listing educational qualifications in a Resume.'
      ]
    },
    videos: []
  },
  {
    id: 'bt104',
    name: 'Basic Electrical & Electronics Engineering',
    code: 'BT-104',
    description: 'DC circuit theorems, single phase and three phase AC, magnetic circuits, transformers, DC and AC motors, logic gates, and transistors.',
    resourceCount: 35,
    overview: {
      syllabus: [
        'Unit 1: DC Circuits: dependent/independent sources, KCL, KVL, Superposition, Thevenin theorems, Mesh/Nodal analysis, Star-Delta.',
        'Unit 2: 1-phase AC: sinusoidal generation, average, RMS, Form/Peak factor, Phasor, Power factor, RLC series/parallel. 3-phase AC: Star-Delta, star/line relation, balanced supply.',
        'Unit 3: Magnetic Circuits: inductance, electromagnetic induction laws, transformer construction, EMF equation, OC/SC test.',
        'Unit 4: Electrical Machines: DC machines, classification, working. Induction & Sync machines, 3-Phase Induction motor slip & Torque-slip.',
        'Unit 5: Basic Electronics: Number systems, De Morgans, logic gates, Half/Full adder, Flip-flops, Diodes, BJT CE/CB/CC configurations.'
      ],
      weightageSummary: 'Circuit theorems (Unit 1) and Transformer EMF/Tests (Unit 3) hold 40% weightage. Star-delta conversions and BJT configurations are frequently asked.'
    },
    weightage: [
      { unit: 'Unit 1: DC Circuits', expectedMarks: 15, topics: [{ name: 'Thevenin theorem network solution', frequency: 6 }, { name: 'Nodal and Mesh circuit analysis', frequency: 5 }] },
      { unit: 'Unit 2: AC Circuits', expectedMarks: 15, topics: [{ name: 'RLC series resonance & power factor', frequency: 5 }, { name: 'Line and Phase relations in Star/Delta', frequency: 4 }] },
      { unit: 'Unit 3: Transformers', expectedMarks: 15, topics: [{ name: 'EMF equation of transformer & losses', frequency: 6 }, { name: 'OC and SC test calculation problems', frequency: 4 }] },
      { unit: 'Unit 4: Electrical Machines', expectedMarks: 10, topics: [{ name: 'Torque-Slip characteristics of Induction motor', frequency: 5 }] },
      { unit: 'Unit 5: Basic Electronics', expectedMarks: 15, topics: [{ name: 'BJT Common Emitter input-output characteristics', frequency: 6 }, { name: 'JK and RS flip-flop logic design', frequency: 4 }] }
    ],
    repeatedQuestions: [
      { id: 'rq-ee-1', question: 'State and explain Thevenin’s theorem. Find the current flowing in a load resistor using it.', years: [2021, 2023, 2024, 2025], frequency: 4, importance: 'Very High Probability' },
      { id: 'rq-ee-2', question: 'Derive the E.M.F. equation of a single-phase transformer. Discuss open-circuit and short-circuit tests.', years: [2022, 2024, 2025], frequency: 3, importance: 'Very High Probability' },
      { id: 'rq-ee-3', question: 'Discuss the torque-slip characteristics of a three-phase induction motor. Explain why it can never run at synchronous speed.', years: [2022, 2023], frequency: 2, importance: 'High Probability' }
    ],
    oneNightRevision: {
      topQuestions: [
        'Solve a Star-Delta transformation circuit problem.',
        'Prove that line voltage is √3 times phase voltage in a star connection.',
        'Explain the construction and working of a DC Generator.',
        'State and prove De Morgan\'s theorems in digital electronics.'
      ],
      definitions: [
        { term: 'Form Factor', definition: 'The ratio of R.M.S. value to the average value of an alternating quantity. For a sine wave, it is 1.11.' },
        { term: 'Slip', definition: 'The fractional difference between synchronous speed Ns and actual rotor speed N of an induction motor.' }
      ],
      diagrams: [
        { title: 'Transformer Equivalent Circuit', description: 'Diagram showing primary resistance/reactance, core loss branch, and secondary equivalent values.' }
      ],
      formulas: [
        { name: 'Thevenin Voltage', formula: 'I_L = V_th / (R_th + R_L)', explanation: 'Finds load current in a simplified network.' }
      ],
      lastMinuteNotes: [
        '💡 Ideal voltage sources have zero internal resistance; ideal current sources have infinite internal resistance.',
        '💡 In a pure capacitor, alternating current leads voltage by exactly 90 degrees.'
      ]
    },
    videos: [
      { id: 'v-ee-1', title: 'Thevenin Theorem Network Numericals Solved', unit: 1, duration: '22:15', youtubeId: 'efR1C6Cv1JC' },
      { id: 'v-ee-2', title: 'Star-Delta Conversion Made Easy', unit: 1, duration: '14:30', youtubeId: 'efR1C6Cv1JC' }
    ]
  },
  {
    id: 'bt105',
    name: 'Engineering Graphics',
    code: 'BT-105',
    description: 'Lettering, scales, projection of points, lines, planes and solids. Development of surfaces and overview of CAD modeling.',
    resourceCount: 20,
    overview: {
      syllabus: [
        'Unit 1: Introduction to graphics, Drawing instruments, Ellipse, Parabola, Hyperbola, Cycloids, Involutes. Scales: Plain, Diagonal, and Vernier.',
        'Unit 2: Orthographic projections, Principle, Conventions, First & Third angle projection, Projection of points, projection of lines (inclined to both planes), Projection of planes.',
        'Unit 3: Projection of solids: Cylinders, Cones, Pyramids, Spheres (inclined to both planes). Simple building floor plans, fixtures.',
        'Unit 4: Section of solids: Pyramids, Prisms, Cylinders, Cones. Development of surfaces: Cube, Prism, Cylinder, Pyramid, Cone.',
        'Unit 5: Isometric projections and views: right solid prisms, compound solids. Introduction to CAD, coordinate entries, 2D and 3D modeling.'
      ],
      weightageSummary: 'Projection of lines (Unit 2) and Development of Surfaces (Unit 4) represent 50% of drawing sheet marks. CAD layouts are asked in theory.'
    },
    weightage: [
      { unit: 'Unit 1: Scales & Conics', expectedMarks: 15, topics: [{ name: 'Diagonal scale problem construction', frequency: 6 }] },
      { unit: 'Unit 2: Projection of Lines', expectedMarks: 20, topics: [{ name: 'Line inclined to both HP and VP', frequency: 8 }] },
      { unit: 'Unit 3: Projection of Solids', expectedMarks: 15, topics: [{ name: 'Cone or Cylinder inclined to both planes', frequency: 5 }] },
      { unit: 'Unit 4: Development of Surfaces', expectedMarks: 20, topics: [{ name: 'Development of cut Cone / Cylinder', frequency: 7 }] }
    ],
    repeatedQuestions: [
      { id: 'rq-eg-1', question: 'Construct a diagonal scale to read meters, decimeters and centimeters when 1 meter is represented by 2.5 cm. Measure up to 6 meters.', years: [2022, 2024], frequency: 2, importance: 'High Probability' },
      { id: 'rq-eg-2', question: 'A line AB 75 mm long has its end A 15 mm above HP and 20 mm in front of VP. AB is inclined at 30° to HP and 45° to VP. Draw its projections.', years: [2021, 2023, 2024, 2025], frequency: 4, importance: 'Very High Probability' },
      { id: 'rq-eg-3', question: 'A cone of base diameter 50 mm and axis 60 mm long is resting on its base in HP. It is cut by a section plane inclined at 45° to HP. Draw sectional top view and development of surfaces.', years: [2022, 2023, 2025], frequency: 3, importance: 'Very High Probability' }
    ],
    oneNightRevision: {
      topQuestions: [
        'Draw the projection of a regular pentagonal plate inclined at 45° to HP.',
        'Draw the isometric view of a hexagonal prism resting on HP.',
        'Explain basic transformation commands in AutoCAD (Move, Rotate, Mirror, Scale).',
        'Solve a cycloid problem of rolling circle diameter 50 mm.'
      ],
      definitions: [
        { term: 'Representative Fraction (RF)', definition: 'The ratio of the length of the object in the drawing to the actual physical length of the object.' },
        { term: 'Orthographic Projection', definition: 'A method of representing three-dimensional objects in two dimensions, using parallel projection lines perpendicular to the drawing plane.' }
      ],
      diagrams: [
        { title: 'Diagonal Scale Principle', description: 'Geometric construction showing division of a diagonal line into 10 equal horizontal segments.' }
      ],
      formulas: [
        { name: 'Length of Scale (LOS)', formula: 'LOS = RF * Maximum Distance to be measured', explanation: 'Gives the drawing sheet length of scale in cm.' }
      ],
      lastMinuteNotes: [
        '💡 In First Angle Projection, Top View is drawn below Front View; in Third Angle, Top View is drawn above Front View.',
        '💡 Continuous thick lines are used for visible outlines; dashed thin lines are used for hidden outlines.'
      ]
    },
    videos: []
  },
  {
    id: 'bt106',
    name: 'Manufacturing Practices (Lab)',
    code: 'BT-106',
    description: 'Practical training in manufacturing methods: casting, forming, machining, joining, CNC, carpentry, welding, and fitting operations.',
    resourceCount: 12,
    overview: {
      syllabus: [
        '1. Manufacturing Methods: casting, forming, machining, joining, advanced manufacturing methods.',
        '2. CNC machining, Additive manufacturing.',
        '3. Fitting operations & power tools.',
        '4. Electrical & Electronics.',
        '5. Carpentry.',
        '6. Plastic moulding, glass cutting.',
        '7. Metal casting.',
        '8. Welding (arc welding & gas welding), brazing.'
      ],
      weightageSummary: 'Being a practical-only lab course, assessment is based on lab records, job fabrication models (carpentry, fitting, welding), and viva-voce.'
    },
    weightage: [
      { unit: 'Jobs & Practice (Fitting/Carpentry/Welding)', expectedMarks: 30, topics: [{ name: 'Job accuracy and finish', frequency: 5 }] },
      { unit: 'Lab Record & Viva', expectedMarks: 20, topics: [{ name: 'Viva-voce questions on machine tools', frequency: 5 }] }
    ],
    repeatedQuestions: [
      { id: 'rq-mp-1', question: 'Explain the working principle and main parts of a Lathe Machine with a neat sketch.', years: [2022, 2023, 2024], frequency: 3, importance: 'Very High Probability' },
      { id: 'rq-mp-2', question: 'Differentiate between Arc Welding and Gas Welding. List safety precautions for welding.', years: [2022, 2024], frequency: 2, importance: 'High Probability' }
    ],
    oneNightRevision: {
      topQuestions: [
        'What are the various operations performed on a Lathe machine?',
        'Describe the process of making a T-lap joint in carpentry.',
        'Explain the steps in preparing a sand mould for metal casting.',
        'What is CNC machining and how does it differ from traditional machining?'
      ],
      definitions: [
        { term: 'CNC Machining', definition: 'Computer Numerical Control machining, a manufacturing process where pre-programmed computer software dictates the movement of factory tools and machinery.' },
        { term: 'Brazing', definition: 'A metal-joining process in which a filler metal is heated above 450°C and distributed between two close-fitting parts by capillary action.' }
      ],
      diagrams: [
        { title: 'Lathe Machine Diagram', description: 'Schematic highlighting headstock, tailstock, carriage, bed, lead screw, and tool post.' }
      ],
      formulas: [],
      lastMinuteNotes: [
        '💡 Fitting tools include files, hacksaws, scribers, and try-squares. Always file in a forward stroke.',
        '💡 In casting, the pattern is the replica of the object to be cast, whereas mold is the cavity.'
      ]
    },
    videos: []
  }
];

const FIRST_YEAR_GROUP_B_RAW: Omit<Subject, 'branchId' | 'semester'>[] = [
  {
    id: 'bt201',
    name: 'Engineering Physics',
    code: 'BT-201',
    description: 'Quantum mechanics wave equations, wave optics (interference/diffraction), free electron theory, lasers working principles, and electrostatics.',
    resourceCount: 25,
    overview: {
      syllabus: [
        'Unit 1: Wave nature of particles & Schrodinger equation: Quantum mechanics operators, Time-dependent & independent Schrodinger equations, Particle in a 1D Box, Uncertainty principle.',
        'Unit 2: Wave Optics: Huygens principle, Interference by wavefront and amplitude splitting, Newton’s rings, Michelson interferometer. Fraunhofer diffraction, Rayleigh criterion, diffraction gratings.',
        'Unit 3: Intro to Solids: Free electron theory, Fermi level, Density of states, Bloch theorem, Kronig-Penney model, origin of energy bands. PN junction, Zener, Solar Cell, Hall Effect.',
        'Unit 4: Lasers: Einstein coefficients, population inversion, He-Ne and CO2 gas lasers, Ruby and Nd-YAG solid lasers. Applications. Optical fibers: numerical aperture, V-number.',
        'Unit 5: Electrostatics in vacuum: Electric field calculation, displacement vector, dielectrics introduction. Divergence and Curl, Stokes & Gauss theorems, Maxwell’s equations, Poynting vector.'
      ],
      weightageSummary: 'Schrodinger equation derivation (Unit 1) and Newton rings (Unit 2) hold 30% marks. Maxwell equations (Unit 5) and Laser working (Unit 4) are guaranteed topics.'
    },
    weightage: [
      { unit: 'Unit 1: Quantum Mechanics', expectedMarks: 15, topics: [{ name: 'Particle in 1D box wave functions', frequency: 5 }, { name: 'Heisenberg Uncertainty principle', frequency: 4 }] },
      { unit: 'Unit 2: Wave Optics', expectedMarks: 15, topics: [{ name: 'Newtons rings experimental diameter', frequency: 6 }, { name: 'Michelson Interferometer fringe shift', frequency: 3 }] },
      { unit: 'Unit 3: Solid Physics', expectedMarks: 15, topics: [{ name: 'Hall Effect coefficient derivation', frequency: 5 }, { name: 'Kronig-Penney model band gaps', frequency: 3 }] },
      { unit: 'Unit 4: Lasers & Fibers', expectedMarks: 15, topics: [{ name: 'Einstein A & B coefficients relation', frequency: 6 }, { name: 'Numerical Aperture optical fiber', frequency: 4 }] },
      { unit: 'Unit 5: Electrostatics & Maxwell', expectedMarks: 10, topics: [{ name: 'Maxwell Equations in integral/differential form', frequency: 7 }, { name: 'Poynting Vector statement', frequency: 3 }] }
    ],
    repeatedQuestions: [
      { id: 'rq-phy-1', question: 'Derive time-independent Schrodinger wave equation for a free particle. Apply it to find the energy of a particle in a one-dimensional box.', years: [2022, 2023, 2024, 2025], frequency: 4, importance: 'Very High Probability' },
      { id: 'rq-phy-2', question: 'Explain the formation of Newton’s rings. Derive the expression for diameter of dark and bright rings in reflected light.', years: [2021, 2023, 2024, 2025], frequency: 4, importance: 'Very High Probability' },
      { id: 'rq-phy-3', question: 'Write Maxwell’s electromagnetic field equations in differential and integral forms. Explain the physical significance of each.', years: [2022, 2024, 2025], frequency: 3, importance: 'Very High Probability' }
    ],
    oneNightRevision: {
      topQuestions: [
        'Derive the relation between phase velocity (Vp) and group velocity (Vg).',
        'State Rayleigh’s criterion for limit of resolution of optical instruments.',
        'Explain the construction and working of Helium-Neon Gas Laser.',
        'Define Hall Effect. Derive the expression for Hall Voltage and Hall Coefficient.'
      ],
      definitions: [
        { term: 'Born Interpretation', definition: 'The physical interpretation that the square of the absolute value of wave function represents the probability density of finding a particle.' },
        { term: 'Population Inversion', definition: 'A state in which a higher energy state is more populated with atoms than a lower energy state, necessary for laser action.' }
      ],
      diagrams: [
        { title: 'He-Ne Laser Schematic', description: 'Diagram showing discharge tube, helium-neon gas mix, electrodes, and partial/fully reflective end mirrors.' }
      ],
      formulas: [
        { name: '1D Box Energy', formula: 'E_n = (n^2 * h^2) / (8 * m * L^2)', explanation: 'Gives the quantized energy levels of the particle.' }
      ],
      lastMinuteNotes: [
        '💡 In Newton rings, the central spot is dark due to a phase change of Pi (π) upon reflection from the glass plate (denses medium).',
        '💡 V-number determines whether an optical fiber is single-mode (V < 2.405) or multi-mode.'
      ]
    },
    videos: [
      { id: 'v-phy-1', title: 'Schrodinger Equation & Particle in a Box', unit: 1, duration: '28:15', youtubeId: 'efR1C6Cv1JC' },
      { id: 'v-phy-2', title: 'Newton Rings Experiment & Diameters Derivation', unit: 2, duration: '20:45', youtubeId: 'efR1C6Cv1JC' }
    ]
  },
  {
    id: 'bt202',
    name: 'Mathematics-II',
    code: 'BT-202',
    description: 'First order differential equations, higher order linear equations, Bessel & Legendre polynomials, partial differential equations, complex variables, and vector calculus.',
    resourceCount: 28,
    overview: {
      syllabus: [
        'Unit 1: First order ODEs (Leibnitz linear, Bernoulli, Exact), higher order ODEs with constant coefficients, homogeneous linear equations, simultaneous ODEs.',
        'Unit 2: Second order linear ODEs with variable coefficients, variation of parameters, power series solutions, Legendre polynomials, Bessel functions.',
        'Unit 3: Partial Differential Equations: formulation, linear & non-linear PDEs, homogeneous linear PDEs with constant coefficients.',
        'Unit 4: Complex Variables: Analytic functions, CR equations, Cauchy-Goursat theorem, Cauchy Integral formula, poles & residues, Residue theorem.',
        'Unit 5: Vector Calculus: Differentiation of vectors, Gradient, Divergence, Curl, line/surface/volume integrals, Gauss, Stokes, and Green theorems.'
      ],
      weightageSummary: 'Variation of Parameters (Unit 2) and Complex Residue integration (Unit 4) account for 40% marks. Gauss Divergence theorem calculations are highly recurrent.'
    },
    weightage: [
      { unit: 'Unit 1: ODE I', expectedMarks: 15, topics: [{ name: 'Exact and Bernoulli ODE solution', frequency: 5 }, { name: 'Second order constant coefficient ODEs', frequency: 4 }] },
      { unit: 'Unit 2: ODE II & Special Functions', expectedMarks: 15, topics: [{ name: 'Method of Variation of Parameters', frequency: 6 }] },
      { unit: 'Unit 3: PDEs', expectedMarks: 10, topics: [{ name: 'Lagrange linear partial differential equations', frequency: 4 }] },
      { unit: 'Unit 4: Complex Analysis', expectedMarks: 15, topics: [{ name: 'Residue theorem integration (Unit Circle)', frequency: 6 }, { name: 'C-R Equations verification', frequency: 5 }] },
      { unit: 'Unit 5: Vector Calculus', expectedMarks: 15, topics: [{ name: 'Gauss Divergence Theorem verification', frequency: 6 }, { name: 'Stokes Theorem surface integrals', frequency: 4 }] }
    ],
    repeatedQuestions: [
      { id: 'rq-m2-1', question: 'Solve the differential equation: d^2y/dx^2 + y = cosec(x) by the method of Variation of Parameters.', years: [2022, 2023, 2024, 2025], frequency: 4, importance: 'Very High Probability' },
      { id: 'rq-m2-2', question: 'Verify Gauss Divergence Theorem for F = (x^2 - yz)i + (y^2 - zx)j + (z^2 - xy)k taken over the rectangular parallelepiped [0, a]x[0, b]x[0, c].', years: [2021, 2023, 2024, 2025], frequency: 4, importance: 'Very High Probability' },
      { id: 'rq-m2-3', question: 'Evaluate ∫[c] (z^2 + 5) / (z - 2)(z^2 + 1) dz where C is the circle |z| = 3 using Cauchy’s Residue Theorem.', years: [2022, 2024, 2025], frequency: 3, importance: 'High Probability' }
    ],
    oneNightRevision: {
      topQuestions: [
        'Prove that Bessel function J_1/2(x) = √(2/πx) sin(x).',
        'Formulate the PDE by eliminating arbitrary constants from z = ax + by + ab.',
        'Find directional derivative of f(x,y,z) = x^2yz + 4xz^2 at (1,-2,-1) in direction of 2i-j-2k.',
        'Verify Cauchy-Riemann equations for f(z) = z^3.'
      ],
      definitions: [
        { term: 'Analytic Function', definition: 'A complex function is analytic in a domain if it is single-valued and differentiable at every point of the domain.' },
        { term: 'Divergence of Vector', definition: 'A scalar point function representing the rate of fluid expansion per unit volume. Denoted div F or ∇.F.' }
      ],
      diagrams: [],
      formulas: [
        { name: 'Cauchy-Riemann Eqns', formula: '∂u/∂x = ∂v/∂y  and  ∂u/∂y = -∂v/∂x', explanation: 'Conditions for complex differentiability.' }
      ],
      lastMinuteNotes: [
        '💡 Bessel\'s differential equation is x^2 y" + x y\' + (x^2 - n^2) y = 0.',
        '💡 A vector field is solenoidal if its divergence is zero, and irrotational if its curl is zero.'
      ]
    },
    videos: [
      { id: 'v-m2-1', title: 'Variation of Parameters Differential Eqn Solution', unit: 2, duration: '21:15', youtubeId: 'efR1C6Cv1JC' },
      { id: 'v-m2-2', title: 'Gauss Divergence Theorem Numericals Solved', unit: 5, duration: '26:50', youtubeId: 'efR1C6Cv1JC' }
    ]
  },
  {
    id: 'bt203',
    name: 'Basic Mechanical Engineering',
    code: 'BT-203',
    description: 'Engineering materials properties, iron-carbon diagram, lathe & drilling machines, Bernoulli fluids equations, laws of thermodynamics, and steam boilers.',
    resourceCount: 22,
    overview: {
      syllabus: [
        'Unit 1: Materials: wrought/cast iron, alloy steels, tensile stress-strain diagram (ductile/brittle), Hooks law, Iron-Carbon diagram, hardness & impact tests.',
        'Unit 2: Measurement & Production: accuracy, thermocouples, pressure/flow velocity, calipers. Lathe & Drilling machine parts, operational principles.',
        'Unit 3: Fluids: classification and properties, viscosity, Newtons law, Pascal law, discharge continuity, Euler & Bernoulli equations derivation.',
        'Unit 4: Thermodynamics: equilibrium, Zeroth law, pdV work, First & Second law, Entropy, steam properties, boilers classifications (mountings/accessories).',
        'Unit 5: Reciprocating Machines: IC Engine terminologies, 4-stroke & 2-stroke cycles, Carnot/Otto/Diesel cycles efficiencies, steam engines working, compressors.'
      ],
      weightageSummary: 'Bernoulli fluid derivation (Unit 3) and Steam/Boiler classifications (Unit 4) represent 40% marks. Otto/Diesel efficiency equations are core.'
    },
    weightage: [
      { unit: 'Unit 1: Engineering Materials', expectedMarks: 15, topics: [{ name: 'Stress-Strain diagram of Mild Steel (ductile)', frequency: 5 }, { name: 'Iron-Carbon phase equilibrium diagram', frequency: 4 }] },
      { unit: 'Unit 2: Lathe & Measurements', expectedMarks: 10, topics: [{ name: 'Lathe machine operations (turning/facing)', frequency: 4 }] },
      { unit: 'Unit 3: Fluid Mechanics', expectedMarks: 15, topics: [{ name: 'Bernoulli Equation derivation & assumptions', frequency: 7 }, { name: 'Continuity equation discharge calculations', frequency: 3 }] },
      { unit: 'Unit 4: Thermodynamics & Boilers', expectedMarks: 15, topics: [{ name: 'Boiler Mountings vs Accessories', frequency: 6 }, { name: 'First Law of Thermodynamics for closed system', frequency: 4 }] },
      { unit: 'Unit 5: IC Engines & Cycles', expectedMarks: 15, topics: [{ name: 'Otto Cycle air standard efficiency derivation', frequency: 6 }, { name: '2-Stroke vs 4-Stroke Petrol Engine working', frequency: 5 }] }
    ],
    repeatedQuestions: [
      { id: 'rq-me-1', question: 'Derive Bernoulli’s Equation from Euler’s equation of motion for steady, incompressible fluid flow. State all assumptions.', years: [2022, 2023, 2024, 2025], frequency: 4, importance: 'Very High Probability' },
      { id: 'rq-me-2', question: 'State the First and Second Laws of Thermodynamics. Discuss the concepts of Heat Engine, Refrigerator, and Heat Pump.', years: [2021, 2023, 2024], frequency: 3, importance: 'High Probability' },
      { id: 'rq-me-3', question: 'Differentiate between Boiler Mountings and Boiler Accessories. List at least three of each with their functions.', years: [2022, 2024, 2025], frequency: 3, importance: 'Very High Probability' }
    ],
    oneNightRevision: {
      topQuestions: [
        'Draw stress-strain curve for mild steel showing elastic limit, yield point, ultimate tensile strength, and breaking point.',
        'Derive air standard efficiency of Otto Cycle.',
        'Discuss lathe machine operations: turning, facing, knurling, and thread cutting.',
        'Write down the working principle of a centrifugal pump.'
      ],
      definitions: [
        { term: 'Hookes Law', definition: 'Within the elastic limit, the stress is directly proportional to the strain produced in a body.' },
        { term: 'Entropy', definition: 'A thermodynamic property that measures the degree of molecular disorder or randomness in a system.' }
      ],
      diagrams: [
        { title: 'Stress-Strain Curve', description: 'Graph of stress vs strain showing elastic region, plastic region, yielding, necking, and fracture.' }
      ],
      formulas: [
        { name: 'Bernoulli Equation', formula: 'p/ρg + v^2/2g + z = Constant', explanation: 'Represents conservation of mechanical energy in fluid.' }
      ],
      lastMinuteNotes: [
        '💡 Boiler mountings (safety valve, water level indicator) are mandatory for safety; accessories (economizer, superheater) increase efficiency.',
        '💡 2-stroke engines complete one power cycle in 1 revolution of crankshaft; 4-stroke engines require 2 revolutions.'
      ]
    },
    videos: [
      { id: 'v-me-1', title: 'Bernoulli Equation Assumptions & Derivation', unit: 3, duration: '24:50', youtubeId: 'efR1C6Cv1JC' },
      { id: 'v-me-2', title: 'Otto Cycle Efficiency Derivation Solved', unit: 5, duration: '20:15', youtubeId: 'efR1C6Cv1JC' }
    ]
  },
  {
    id: 'bt204',
    name: 'Basic Civil Engineering & Mechanics',
    code: 'BT-204',
    description: 'Concrete and building materials properties, surveying instruments (levels, EDM), Remote sensing, plane trusses joint methods, centroids, CG, and Shear Force / Bending Moment diagrams.',
    resourceCount: 22,
    overview: {
      syllabus: [
        'Unit 1: Building Materials: stone, brick, cement, concrete. Slump workability tests. Building components: foundations spreading, walls, roofing, stairs.',
        'Unit 2: Surveying: classification, levels, theodolites, plane table. Elevation measurements, reciprocal leveling, EDM.',
        'Unit 3: Mapping & Sensing: contouring, cross sectioning, remote sensing basics and GIS applications.',
        'Unit 4: Forces & Equilibrium: concurrent coplanar forces, free body diagram, trusses analysis (joints & sections methods), friction.',
        'Unit 5: Centroid, CG, Moment of Inertia, Radius of gyration. Support reactions, Shear Force & Bending Moment diagrams for Cantilever and Simply Supported beams.'
      ],
      weightageSummary: 'Truss joint solutions (Unit 4) and SFD/BMD diagram problems (Unit 5) represent 50% marks. Surveying reciprocal leveling is highly recursive.'
    },
    weightage: [
      { unit: 'Unit 1: Materials & Construct', expectedMarks: 15, topics: [{ name: 'Staircases types and Concrete curing', frequency: 4 }] },
      { unit: 'Unit 2: Surveying & Positioning', expectedMarks: 15, topics: [{ name: 'Reciprocal Leveling numerical calculations', frequency: 5 }] },
      { unit: 'Unit 3: Contour Mapping', expectedMarks: 10, topics: [{ name: 'Remote sensing applications in Civil', frequency: 3 }] },
      { unit: 'Unit 4: Mechanics & Trusses', expectedMarks: 15, topics: [{ name: 'Truss analysis by Method of Joints', frequency: 7 }, { name: 'Laws of static friction', frequency: 4 }] },
      { unit: 'Unit 5: SFD, BMD & CG', expectedMarks: 15, topics: [{ name: 'Simply Supported beam SFD/BMD calculations', frequency: 8 }, { name: 'Centroid of T and I sections', frequency: 5 }] }
    ],
    repeatedQuestions: [
      { id: 'rq-civ-1', question: 'Find the forces in all members of a plane pin-jointed truss using the Method of Joints.', years: [2022, 2023, 2024, 2025], frequency: 4, importance: 'Very High Probability' },
      { id: 'rq-civ-2', question: 'Draw Shear Force and Bending Moment Diagrams for a simply supported beam of span L carrying a point load W at its center.', years: [2021, 2023, 2024, 2025], frequency: 4, importance: 'Very High Probability' },
      { id: 'rq-civ-3', question: 'Discuss reciprocal leveling. Explain how it eliminates errors due to curvature of earth and refraction.', years: [2022, 2024], frequency: 2, importance: 'High Probability' }
    ],
    oneNightRevision: {
      topQuestions: [
        'Calculate centroid position for an asymmetric T-section.',
        'Determine support reactions for a beam with UDL (uniformly distributed load).',
        'Compare workability and strength properties of fresh concrete.',
        'Define contour line. List characteristics of contour maps.'
      ],
      definitions: [
        { term: 'Workability of Concrete', definition: 'The ease with which concrete can be mixed, transported, placed, and compacted without segregation.' },
        { term: 'Centroid', definition: 'The geometrical center of a two-dimensional planar area, representing the point where its area is balanced.' }
      ],
      diagrams: [
        { title: 'Shear Force simply supported load', description: 'Diagram showing steps in shear force transitions and bending moment peaks.' }
      ],
      formulas: [
        { name: 'Parallel Axis Theorem', formula: 'I_xx = I_g + A * h^2', explanation: 'Finds Moment of Inertia about any parallel axis.' }
      ],
      lastMinuteNotes: [
        '💡 In reciprocal leveling, the true difference in elevation is calculated by averaging observations taken from both stations.',
        '💡 At point of contraflexure, the bending moment changes sign (goes from positive to negative or vice-versa) and is zero.'
      ]
    },
    videos: [
      { id: 'v-civ-1', title: 'Method of Joints Truss Solved Problem', unit: 4, duration: '28:15', youtubeId: 'efR1C6Cv1JC' },
      { id: 'v-civ-2', title: 'Simply Supported Beam SFD and BMD Diagram', unit: 5, duration: '22:45', youtubeId: 'efR1C6Cv1JC' }
    ]
  },
  {
    id: 'bt205',
    name: 'Basic Computer Engineering',
    code: 'BT-205',
    description: 'CPU registers and bus layouts, OS files management, C++ OOP syntax and structures, OSI model networking, and DBMS cloud delivery models.',
    resourceCount: 22,
    overview: {
      syllabus: [
        'Unit 1: Computer organization (CPU, registers, buses, I/O). Operating System definition, functions, types, memory & file management. Office tools.',
        'Unit 2: Algorithms, flowcharts, OOP vs POP. C++ syntax: variable scopes, loops, control structures, arrays, functions.',
        'Unit 3: OOP concepts in C++: constructors, destructors, inheritance types, polymorphism, virtual functions, Friend functions. Data Structures introduction.',
        'Unit 4: Computer Networking: OSI & TCP/IP layers, Internet, Web, Security malware, firewall, ethics, cyber laws.',
        'Unit 5: DBMS: file vs database, schemas, Primary key, DDL/DML languages. Cloud computing: IaaS, PaaS, SaaS segments, hybrid/public deployment models.'
      ],
      weightageSummary: 'C++ inheritance/constructors (Unit 3) and OSI model layers (Unit 4) represent 45% of theory marks. Cloud models are frequently asked.'
    },
    weightage: [
      { unit: 'Unit 1: Computer & OS', expectedMarks: 10, topics: [{ name: 'Process and memory management OS', frequency: 4 }] },
      { unit: 'Unit 2: Algorithms & C++', expectedMarks: 15, topics: [{ name: 'Flowchart for linear search / sorting', frequency: 4 }, { name: 'OOP vs POP differences', frequency: 3 }] },
      { unit: 'Unit 3: Object Oriented C++', expectedMarks: 20, topics: [{ name: 'Inheritance types in C++ (multiple, multilevel)', frequency: 6 }, { name: 'Virtual Functions & Polymorphism', frequency: 5 }] },
      { unit: 'Unit 4: Networks & Cyber Security', expectedMarks: 15, topics: [{ name: 'OSI 7 Layer Reference Model functions', frequency: 7 }, { name: 'Cyber security threats malware worms', frequency: 4 }] },
      { unit: 'Unit 5: DBMS & Cloud', expectedMarks: 10, topics: [{ name: 'Cloud Service Models (IaaS PaaS SaaS)', frequency: 6 }, { name: 'Primary Key & Data Independence', frequency: 4 }] }
    ],
    repeatedQuestions: [
      { id: 'rq-bce-1', question: 'Differentiate between Object Oriented Programming (OOP) and Procedure Oriented Programming (POP) with examples.', years: [2022, 2023, 2024], frequency: 3, importance: 'High Probability' },
      { id: 'rq-bce-2', question: 'Explain the 7 layers of the ISO-OSI Reference Model in computer networking. List the primary functions of each layer.', years: [2021, 2023, 2024, 2025], frequency: 4, importance: 'Very High Probability' },
      { id: 'rq-bce-3', question: 'Discuss cloud computing service models: Infrastructure-as-a-Service (IaaS), Platform-as-a-Service (PaaS), and Software-as-a-Service (SaaS). Give examples.', years: [2022, 2024, 2025], frequency: 3, importance: 'Very High Probability' }
    ],
    oneNightRevision: {
      topQuestions: [
        'Write a C++ program to demonstrate multiple inheritance.',
        'Define constructor. Explain copy constructor with syntax.',
        'State differences between file system approach and database management system approach.',
        'What is a firewall? Explain its role in computer security.'
      ],
      definitions: [
        { term: 'Polymorphism', definition: 'The ability of a message or function to be displayed in more than one form in OOP.' },
        { term: 'Data Dictionary', definition: 'A repository of metadata containing descriptions of database structure, tables, and constraints.' }
      ],
      diagrams: [
        { title: 'OSI vs TCP/IP Layers', description: 'Side by side comparison map of 7 OSI layers and 4 TCP/IP layers.' }
      ],
      formulas: [],
      lastMinuteNotes: [
        '💡 Virtual functions are resolved at run-time (late binding); overloaded functions are resolved at compile-time (early binding).',
        '💡 In C++, class members are private by default; in struct, they are public by default.'
      ]
    },
    videos: [
      { id: 'v-bce-1', title: 'OSI 7 Layer Reference Model Details', unit: 4, duration: '18:40', youtubeId: 'efR1C6Cv1JC' },
      { id: 'v-bce-2', title: 'C++ Inheritance Types Made Simple', unit: 3, duration: '22:15', youtubeId: 'efR1C6Cv1JC' }
    ]
  },
  {
    id: 'bt206',
    name: 'Language Lab & Seminars',
    code: 'BT-206',
    description: 'Developing communication, public speaking, conversational skills, extempore, role plays, reading comprehension, and book reviews.',
    resourceCount: 10,
    overview: {
      syllabus: [
        'Unit 1: Introducing oneself, family, social roles.',
        'Unit 2: Public Speaking: conversational practice, extempore speech, JAM (Just a minute) sessions, describing objects, telephonic etiquette, debate.',
        'Unit 3: Reading Comprehension: Intensive reading, rapid reading, and reading aloud.',
        'Unit 4: Book Review writing: review guidelines for selected text.',
        'Unit 5: Role plays: preparation and delivery of assigned topics.'
      ],
      weightageSummary: 'Practical-only assessment focusing on oral presentations, JAM sessions performance, role-play delivery, and written book reviews.'
    },
    weightage: [
      { unit: 'Oral Presentation & JAM', expectedMarks: 25, topics: [{ name: 'Confidence, delivery and vocabulary', frequency: 5 }] },
      { unit: 'Book Review & Role Play', expectedMarks: 25, topics: [{ name: 'Role play execution and Book analysis', frequency: 5 }] }
    ],
    repeatedQuestions: [
      { id: 'rq-ll-1', question: 'Draft a short speech introducing yourself for a corporate placement interview.', years: [2023, 2024], frequency: 2, importance: 'Very High Probability' },
      { id: 'rq-ll-2', question: 'What is a JAM (Just a Minute) session? What are the key rules to succeed in a JAM session?', years: [2022, 2024], frequency: 2, importance: 'High Probability' }
    ],
    oneNightRevision: {
      topQuestions: [
        'How do you structure a professional book review?',
        'Discuss basic etiquettes of professional telephonic conversations.',
        'What is the difference between intensive reading and rapid reading?',
        'Describe steps to prepare for a debate on a technical topic.'
      ],
      definitions: [
        { term: 'JAM Session', definition: 'Just A Minute session, an extempore speaking event where the speaker has to talk on a given topic for one minute without repetition, hesitation, or deviation.' },
        { term: 'Active Listening', definition: 'A communication technique that requires the listener to fully concentrate, understand, respond, and then remember what is being said.' }
      ],
      diagrams: [],
      formulas: [],
      lastMinuteNotes: [
        '💡 In JAM sessions, avoid filler words like "uhm", "err", or "like" to keep your delivery smooth.',
        '💡 A book review should focus on critical analysis, themes, characters, and personal takeaways, not just plot summary.'
      ]
    },
    videos: []
  }
];

// --- DYNAMIC INJECTION FOR ALL BRANCHES ---
export const SUBJECTS: Subject[] = [];

// Push upper sem subjects directly
SUBJECTS.push(...UPPER_SEM_SUBJECTS);

// Duplicate 1st year subjects for each branch
BRANCHES.forEach(branch => {
  const isIT = ['cs', 'it', 'aiml'].includes(branch.id);
  const groupASem = isIT ? 1 : 2;
  const groupBSem = isIT ? 2 : 1;

  FIRST_YEAR_GROUP_A_RAW.forEach(sub => {
    SUBJECTS.push({
      ...sub,
      id: `${sub.id}-${branch.id}`,
      branchId: branch.id,
      semester: groupASem
    });
  });

  FIRST_YEAR_GROUP_B_RAW.forEach(sub => {
    SUBJECTS.push({
      ...sub,
      id: `${sub.id}-${branch.id}`,
      branchId: branch.id,
      semester: groupBSem
    });
  });
});

// --- NOTES PRESEED DECK ---
const BASE_NOTES = [
  { id: 'n-1', subjectPrefix: 'bt101', title: 'Water treatments & EDTA titration Notes', unit: 'Unit 1', category: 'Faculty Notes' as const, author: 'Dr. S. K. Vyas', uploadDate: '2025-08-10', fileSize: '3.5 MB', downloads: 840 },
  { id: 'n-2', subjectPrefix: 'bt102', title: 'Calculus Taylor Series & Rolle’s theorem Sheets', unit: 'Unit 1', category: 'Handwritten Notes' as const, author: 'Aditya Sharma', uploadDate: '2025-09-05', fileSize: '2.1 MB', downloads: 920 },
  { id: 'n-3', subjectPrefix: 'bt201', title: 'Newton rings Optics & Quantum Physics Handouts', unit: 'All Units', category: 'Faculty Notes' as const, author: 'Prof. N. K. Tiwari', uploadDate: '2025-09-11', fileSize: '4.2 MB', downloads: 1040 },
  { id: 'n-4', subjectPrefix: 'bt205', title: 'C++ Object Oriented inheritance cheat-sheet', unit: 'Unit 3', category: 'Short Notes' as const, author: 'Rishabh Sen', uploadDate: '2025-10-02', fileSize: '1.8 MB', downloads: 720 },
  { id: 'n-5', subjectPrefix: 'bt104', title: 'D.C. network theorems solved numerical guides', unit: 'Unit 1', category: 'Faculty Notes' as const, author: 'Prof. Amit Verma', uploadDate: '2025-09-18', fileSize: '2.8 MB', downloads: 640 },
  { id: 'n-6', subjectPrefix: 'bt203', title: 'Thermodynamics Otto & Diesel Cycle thermal efficiency sheets', unit: 'Unit 4', category: 'Handwritten Notes' as const, author: 'Praveen Nair', uploadDate: '2025-10-12', fileSize: '3.1 MB', downloads: 590 },
  { id: 'n-7', subjectPrefix: 'bt204', title: 'Mechanics Truss analysis Method of joints problems', unit: 'Unit 4', category: 'Student Notes' as const, author: 'Saurabh Kumar', uploadDate: '2025-10-25', fileSize: '2.4 MB', downloads: 480 },
  { id: 'n-8', subjectPrefix: 'bt105', title: 'Projection of Lines & Solids complete drafting sheets', unit: 'Unit 2', category: 'Faculty Notes' as const, author: 'Prof. K. K. Garg', uploadDate: '2025-08-22', fileSize: '5.2 MB', downloads: 1100 },
  { id: 'n-9', subjectPrefix: 'bt106', title: 'Manufacturing Practices Lab Workshop jobs file', unit: 'All Units', category: 'Handwritten Notes' as const, author: 'Pankaj Patel', uploadDate: '2025-09-20', fileSize: '4.8 MB', downloads: 540 },
  { id: 'n-10', subjectPrefix: 'bt206', title: 'Language Lab Conversation & JAM practice sheets', unit: 'All Units', category: 'Faculty Notes' as const, author: 'Dr. Anuradha Sen', uploadDate: '2025-10-05', fileSize: '1.5 MB', downloads: 340 }
];

export const INITIAL_NOTES: Note[] = [
  // preseed CS upper sem notes
  { id: 'n-ada-1', subjectId: 'ada', title: 'ADA Analysis & Design of Algorithms Lecture Notes', unit: 'All Units', category: 'Faculty Notes', author: 'Dr. R. K. Gupta (HOD CSE)', uploadDate: '2025-09-12', fileSize: '4.8 MB', downloads: 345, approved: true },
  { id: 'n-ada-2', subjectId: 'ada', title: 'ADA Greedy & Dynamic Programming Solved Sheets', unit: 'Unit 2', category: 'Handwritten Notes', author: 'Saurabh Kumar (CSE Rank 1)', uploadDate: '2025-10-02', fileSize: '1.2 MB', downloads: 189, approved: true },
  { id: 'n-ada-3', subjectId: 'ada', title: 'ADA Recurrance Relations Complexity Cheat-Sheet', unit: 'Unit 4', category: 'Short Notes', author: 'Anjali Sharma', uploadDate: '2025-11-20', fileSize: '0.6 MB', downloads: 412, approved: true },
  { id: 'n-se-1', subjectId: 'se', title: 'SDLC Models and Agile Methodology PPT Notes', unit: 'Unit 1', category: 'Faculty Notes', author: 'Prof. Vineeta Patel', uploadDate: '2025-08-15', fileSize: '2.5 MB', downloads: 142, approved: true },
  { id: 'n-se-2', subjectId: 'se', title: 'COCOMO Estimations and Cyclomatic Complexity Notes', unit: 'Unit 2', category: 'Short Notes', author: 'Priyanshu Verma', uploadDate: '2025-10-18', fileSize: '1.1 MB', downloads: 275, approved: true },
  { id: 'n-dbms-1', subjectId: 'dbms', title: 'Functional Dependency and Normalization (1NF-BCNF)', unit: 'Unit 3', category: 'Student Notes', author: 'Rishabh Sen', uploadDate: '2025-10-22', fileSize: '3.1 MB', downloads: 512, approved: true }
];

// Duplicate first year notes for all branches
BRANCHES.forEach(branch => {
  BASE_NOTES.forEach(note => {
    INITIAL_NOTES.push({
      id: `${note.id}-${branch.id}`,
      subjectId: `${note.subjectPrefix}-${branch.id}`,
      title: note.title,
      unit: note.unit,
      category: note.category,
      author: note.author,
      uploadDate: note.uploadDate,
      fileSize: note.fileSize,
      downloads: note.downloads,
      approved: true
    });
  });
});

// --- PYQS PRESEED DECK ---
const BASE_PYQS = [
  { id: 'pyq-bt101-2025', subjectPrefix: 'bt101', year: 2025, examType: 'Regular' as const, fileSize: '1.2 MB', downloads: 850 },
  { id: 'pyq-bt101-2024', subjectPrefix: 'bt101', year: 2024, examType: 'Regular' as const, fileSize: '1.1 MB', downloads: 710 },
  { id: 'pyq-bt102-2025', subjectPrefix: 'bt102', year: 2025, examType: 'Regular' as const, fileSize: '1.3 MB', downloads: 940 },
  { id: 'pyq-bt201-2025', subjectPrefix: 'bt201', year: 2025, examType: 'Regular' as const, fileSize: '1.2 MB', downloads: 1120 },
  { id: 'pyq-bt205-2025', subjectPrefix: 'bt205', year: 2025, examType: 'Regular' as const, fileSize: '1.1 MB', downloads: 680 },
  { id: 'pyq-bt104-2025', subjectPrefix: 'bt104', year: 2025, examType: 'Regular' as const, fileSize: '1.2 MB', downloads: 790 },
  { id: 'pyq-bt203-2025', subjectPrefix: 'bt203', year: 2025, examType: 'Regular' as const, fileSize: '1.3 MB', downloads: 820 },
  { id: 'pyq-bt204-2025', subjectPrefix: 'bt204', year: 2025, examType: 'Regular' as const, fileSize: '1.1 MB', downloads: 610 },
  { id: 'pyq-bt105-2025', subjectPrefix: 'bt105', year: 2025, examType: 'Regular' as const, fileSize: '1.4 MB', downloads: 1020 },
  { id: 'pyq-bt106-2025', subjectPrefix: 'bt106', year: 2025, examType: 'Regular' as const, fileSize: '0.8 MB', downloads: 350 },
  { id: 'pyq-bt206-2025', subjectPrefix: 'bt206', year: 2025, examType: 'Regular' as const, fileSize: '0.9 MB', downloads: 280 }
];

export const INITIAL_PYQS: PYQ[] = [
  // preseed CS upper sem pyqs
  { id: 'p-ada-2025', subjectId: 'ada', year: 2025, examType: 'Regular', fileSize: '1.1 MB', downloads: 1205, approved: true },
  { id: 'p-ada-2024', subjectId: 'ada', year: 2024, examType: 'Regular', fileSize: '1.2 MB', downloads: 980, approved: true },
  { id: 'p-ada-2023', subjectId: 'ada', year: 2023, examType: 'Regular', fileSize: '0.9 MB', downloads: 840, approved: true },
  { id: 'p-ada-2022', subjectId: 'ada', year: 2022, examType: 'Ex', fileSize: '1.0 MB', downloads: 650, approved: true },
  { id: 'p-ada-2021', subjectId: 'ada', year: 2021, examType: 'Regular', fileSize: '0.8 MB', downloads: 450, approved: true },
  { id: 'p-se-2025', subjectId: 'se', year: 2025, examType: 'Regular', fileSize: '1.3 MB', downloads: 780, approved: true },
  { id: 'p-se-2024', subjectId: 'se', year: 2024, examType: 'Regular', fileSize: '1.0 MB', downloads: 620, approved: true },
  { id: 'p-dbms-2025', subjectId: 'dbms', year: 2025, examType: 'Regular', fileSize: '1.2 MB', downloads: 1104, approved: true }
];

// Duplicate first year pyqs for all branches
BRANCHES.forEach(branch => {
  BASE_PYQS.forEach(pyq => {
    INITIAL_PYQS.push({
      id: `${pyq.id}-${branch.id}`,
      subjectId: `${pyq.subjectPrefix}-${branch.id}`,
      year: pyq.year,
      examType: pyq.examType,
      fileSize: pyq.fileSize,
      downloads: pyq.downloads,
      approved: true
    });
  });
});

// --- IMPORTANT QUESTIONS PRESEED DECK ---
const BASE_IMPORTANT_QUESTIONS = [
  // Chemistry
  { id: 'iq-bt101-1', subjectPrefix: 'bt101', unit: 1, type: '10 Marks' as const, question: 'Describe the EDTA method for determination of hardness of water with chemical equations and calculations.' },
  { id: 'iq-bt101-2', subjectPrefix: 'bt101', unit: 2, type: '5 Marks' as const, question: 'Explain scale and sludge formation in boilers, their disadvantages and prevention methods.' },
  { id: 'iq-bt101-3', subjectPrefix: 'bt101', unit: 4, type: 'Very Important' as const, question: 'Write the preparation, properties, and applications of Teflon, Nylon-6,6 and PMMA.' },
  // Physics
  { id: 'iq-bt201-1', subjectPrefix: 'bt201', unit: 1, type: '10 Marks' as const, question: 'Derive time-independent Schrodinger wave equation for a free particle in a one-dimensional box.' },
  { id: 'iq-bt201-2', subjectPrefix: 'bt201', unit: 4, type: 'Very Important' as const, question: 'Discuss Einstein\'s theory of matter-radiation interaction. Derive relations between A and B coefficients.' },
  // Math-I
  { id: 'iq-bt102-1', subjectPrefix: 'bt102', unit: 1, type: '10 Marks' as const, question: 'State and verify Rolle\'s theorem. Verify it for f(x) = x(x-3)^2 in [0,3].' },
  { id: 'iq-bt102-2', subjectPrefix: 'bt102', unit: 5, type: '5 Marks' as const, question: 'State Cayley-Hamilton theorem. Use it to find the inverse of matrix A.' },
  // Math-II
  { id: 'iq-bt202-1', subjectPrefix: 'bt202', unit: 2, type: '10 Marks' as const, question: 'Solve differential equation: d^2y/dx^2 + y = cosec(x) by method of Variation of Parameters.' },
  { id: 'iq-bt202-2', subjectPrefix: 'bt202', unit: 5, type: 'Very Important' as const, question: 'Verify Gauss Divergence Theorem for a given vector field.' },
  // BME
  { id: 'iq-bt203-1', subjectPrefix: 'bt203', unit: 3, type: '10 Marks' as const, question: 'Derive Bernoulli’s Equation from Euler’s equation of motion. State all assumptions.' },
  { id: 'iq-bt203-2', subjectPrefix: 'bt203', unit: 4, type: '5 Marks' as const, question: 'Differentiate between Boiler Mountings and Boiler Accessories with functions.' },
  // BCE
  { id: 'iq-bt205-1', subjectPrefix: 'bt205', unit: 3, type: '5 Marks' as const, question: 'Explain virtual functions and run-time polymorphism in C++ with sample code.' },
  { id: 'iq-bt205-2', subjectPrefix: 'bt205', unit: 4, type: 'Very Important' as const, question: 'Explain the 7 layers of ISO-OSI reference model in detail.' },
  // Basic Civil
  { id: 'iq-bt204-1', subjectPrefix: 'bt204', unit: 4, type: '10 Marks' as const, question: 'Explain method of joints and method of sections for plane pin-jointed trusses.' },
  { id: 'iq-bt204-2', subjectPrefix: 'bt204', unit: 5, type: 'Long Answer' as const, question: 'Draw Shear Force and Bending Moment diagrams for simply supported beam with UDL.' },
  // Manufacturing Practices
  { id: 'iq-bt106-1', subjectPrefix: 'bt106', unit: 1, type: '10 Marks' as const, question: 'Draw and explain main parts of a Lathe Machine. List five operations done on it.' },
  { id: 'iq-bt106-2', subjectPrefix: 'bt106', unit: 8, type: '5 Marks' as const, question: 'Differentiate between welding, soldering and brazing processes.' },
  // Language Lab
  { id: 'iq-bt206-1', subjectPrefix: 'bt206', unit: 2, type: '5 Marks' as const, question: 'What is a JAM (Just a Minute) session? Explain the guidelines to excel in JAM.' },
  { id: 'iq-bt206-2', subjectPrefix: 'bt206', unit: 4, type: '10 Marks' as const, question: 'Explain the format and important elements of a formal Book Review.' }
];

export const IMPORTANT_QUESTIONS: ImportantQuestion[] = [
  // CS upper sem questions
  { id: 'iq-ada-1', subjectId: 'ada', unit: 1, type: '2 Marks', question: 'Define Algorithm. What is time and space complexity?' },
  { id: 'iq-ada-2', subjectId: 'ada', unit: 1, type: '5 Marks', question: 'Solve the recurrence relation: T(n) = 2T(n/2) + n using Master Theorem.' },
  { id: 'iq-ada-3', subjectId: 'ada', unit: 1, type: '10 Marks', question: 'Explain Divide and Conquer paradigm. Show the steps for Merge Sort.' },
  { id: 'iq-ada-4', subjectId: 'ada', unit: 2, type: '2 Marks', question: 'State the Fractional Knapsack problem. Illustrate with a numerical.' },
  { id: 'iq-ada-5', subjectId: 'ada', unit: 2, type: '10 Marks', question: 'Write Prim\'s algorithm for finding the Minimum Spanning Tree of a weighted graph.' },
  { id: 'iq-ada-6', subjectId: 'ada', unit: 3, type: '5 Marks', question: 'State the Floyd-Warshall all-pairs shortest path algorithm with equations.' },
  { id: 'iq-ada-7', subjectId: 'ada', unit: 4, type: 'Very Important', question: 'Explain the 8-Queens problem. Show how backtracking finds the solution.' },
  { id: 'iq-ada-8', subjectId: 'ada', unit: 5, type: 'Long Answer', question: 'Compare P, NP, NP-Complete, and NP-Hard classes with definitions.' },
  { id: 'iq-se-1', subjectId: 'se', unit: 1, type: '5 Marks', question: 'What is Agile? Explain the Scrum framework with roles and sprints.' }
];

// Duplicate first year questions for all branches
BRANCHES.forEach(branch => {
  BASE_IMPORTANT_QUESTIONS.forEach(iq => {
    IMPORTANT_QUESTIONS.push({
      id: `${iq.id}-${branch.id}`,
      subjectId: `${iq.subjectPrefix}-${branch.id}`,
      unit: iq.unit,
      type: iq.type,
      question: iq.question
    });
  });
});

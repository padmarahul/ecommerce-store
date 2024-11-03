
# CPU Scheduling Algorithms Project

## Project Overview
This project implements and tests various CPU scheduling algorithms:
- **First-Come, First-Served (FCFS)**
- **Shortest Job First (SJF)**
- **Priority Scheduling**
- **Round-Robin (RR)**
- **Priority with Round-Robin**

Each algorithm is tested using several test case files, with varying numbers of tasks, burst times, and priority levels.

---

## Requirements
1. **Linux OS** (Ubuntu, Debian, etc.)
2. **GNU C++ Compiler** (`g++`)(`used cse linux unt servers`)
3. **Test Case Files** (e.g., `test_5_tasks_1.txt`, `test_5_tasks_2`, etc.)

---

## Setup

### 2. Project Files
Ensure that the following files are in the same directory:

-`scheduler.cpp`

-`generate_tests.cpp`

Test case files gets generated from `generate_tests.cpp`  (e.g., `test_5_tasks_1.txt`, `test_5_tasks_2.txt`, etc.)

---

## Compilation

To compile C++ file, use the following commands in the terminal:

```bash
   g++ generate_tests.cpp -o generate_tests
   g++ scheduler.cpp -o fcfs -DFCFS
   g++ scheduler.cpp -o sjf -DSJF
   g++ scheduler.cpp -o priority -DPRIORITY
   g++ scheduler.cpp -o rr -DRR
   g++ scheduler.cpp -o priority_rr -DPRIORITY_RR
```

This will generate six executables:
- `generate_tests`
- `fcfs`
- `sjf`
- `priority`
- `rr`
- `priority_rr`

---

## Running the Programs

1. The first step is to generate the test files by running `generate_tests` executable whoch would generate 15 test files(5 tasks for each processes-5,10,15). The priority and the burst time is generated randomnly where the burst time value would be from 5 to 50 ms and the priority would be from 1 to 15.

2. The next step is to run the scheduler file which has the conditional main executables written using if directives. When we compile by passinf the directive name, the executables are created for each algorithm type.

3. Now run the each algorithm by passing each test file name as command line argument.

### Example Command (Replace `test_5_tasks_1.txt` with your test file):
```bash
./generate_tests
./fcfs test_5_tasks_1.txt
./sjf test_5_tasks_1.txt
./priority test_5_tasks_1.txt
./round_robin test_5_tasks_1.txt
./priority_rr test_5_tasks_1.txt
```

### Running All Test Cases
To run each scheduling algorithm with multiple test cases, you can use a shell script. Here’s an example command that runs all algorithms with all test cases:

1. **Create a Shell Script** (optional):
   - Create a new file called `run_all_algos.sh`:

     ```bash
     nano run_all_algos.sh
     ```

   - Add the following code to automate testing: Uploaded the `run_all_algos.sh` file. Copy the content from that file.

2. **Make the Script Executable**:
   ```bash
   chmod +x run_all_tests.sh
   ```

3. **Run the Script**:
   ```bash
   ./run_all_tests.sh
   ```

This script will automatically execute each algorithm with all test cases and display the results in the output file called `all_algorithms_output.txt`. The output looks like below

Running fcfs with test_5_tasks_1.txt
----------------------------------------
Algorithm: fcfs

Input File: test_5_tasks_1.txt

Output:

FCFS - Average Waiting Time: 2.30

FCFS - Average Turnaround Time: 7.50

FCFS - Average Response Time: 2.30

----------------------------------------

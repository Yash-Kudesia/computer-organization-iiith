var jsonData = [
    {
        "q" : "Assembly language instruction corresponding to machine code 00af8020hex is ?",
        "opt1" : "sub $s0,$a1,$t7",
        "opt2" : "add $s0,$a1,$t7",
        "opt3" : "mul $s0,$a1,$t7",
        "answer" : "add $s0,$a1,$t7"
    },
    {
        "q" : "Register + branch address gives you the ?",
        "opt1" : "Stack address",
        "opt2" : "Queue address",
        "opt3" : "Program counter",
        "answer" : "Program counter"
    },
    {
        "q" : "For jumping to location 50 of memory MIPS has instruction ?",
        "opt1" : "j 50",
        "opt2" : "I 50",
        "opt3" : "d 50",
        "answer" : "j 50"
    },
    {
        "q" : "Give equation that describes a branch on register $s0 being equal to register $s1 is ?",
        "opt1" : "bne $s0,$s1, L1",
        "opt2" : "beq $s0,$s1, L1",
        "opt3" : "bql $s0,$s1, L1",
        "answer" : "beq $s0,$s1, L1"
    },
    {
        "q" : "In MIPS instruction fields, shamt field is of ?",
        "opt1" : "4bits",
        "opt2" : "5bits",
        "opt3" : "6bits",
        "answer" : "5bits"
    },
    {
        "q" : "Given instructions lw $t0,1200($t1); add $t0,$s2,$t0; sw $t0,1200($t1), are compiled instruction of expression ?",
        "opt1" : "A[300] = h + A[100]",
        "opt2" : "A[300] = h + A[200]",
        "opt3" : "A[300] = h + A[300]",
        "answer" : "A[300] = h + A[300]"
    },
    {
        "q" : "Full form of MIPS assembler is: ?",
        "opt1" : "Microprocessor with interlocked pipeline stage",
        "opt2" : "  Microprocessor without interlocked pipeline stage",
        "opt3" : "None",
        "answer" : "  Microprocessor without interlocked pipeline stage"
    },
    {
        "q" : "If any instruction in A1, . . . , A4, D, M1, . . . , M7 has same register destination as this instruction, then possible solution is ?",
        "opt1" : "Stalling the issue of the instruction in ID",
        "opt2" : "Stalling the issue of the instruction in EX",
        "opt3" : "Stalling the issue of the instruction in MEM",
        "answer" : "Stalling the issue of the instruction in ID"
    },
    {
        "q" : "Pipelining that allows to achieve higher clock rates by decomposing five-stage integer pipeline into eight stages, is refered as ?",
        "opt1" : "Bubbling",
        "opt2" : "Stalling",
        "opt3" : "Superpipelining",
        "answer" : "Superpipelining"
    },
    {
        "q" : "In pipelines with long-running operations, possible caused issue is called ?",
        "opt1" : "In-rage completion",
        "opt2" : "Out-of-range completion",
        "opt3" : "Out-of-order completion",
        "answer" : "Out-of-order completion"
    },
     {
        "q" : "Delays arising from use of a load result 1 or 2 cycles after loads, refers as ?",
        "opt1" : "Data stall",
        "opt2" : "Control stall",
        "opt3" : "Load stall",
        "answer" : "Load stall"
    }
];
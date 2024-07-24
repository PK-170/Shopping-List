#include <stdio.h>


void  greet(){
  printf("Welcome to here");
}

void add(int a, int b){
    int c = a+b;
    printf(" This sum is %d \n",c);
}

void multi(int a, int b){
    int h = a*b;
    printf("This multiply is %d", h);
}

void subtract(int a, int b){
    int c = a-b;
    printf("the subtraction of %d and %d is = %d \n", a, b, c);
}

int main(int argc, char const *argv[])
{
    /* code */
    greet();
    add(55555, 888888);
    printf("Hello World");
    multi(7777777, 999);
    subtract(60000, 50000);
    return 0;
}

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

int main(int argc, char const *argv[])
{
    /* code */
    greet();
    add(55555, 888888);
    printf("Hello World");
    multi(7777777, 999);
    return 0;
}

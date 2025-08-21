import { exec } from 'child_process';
import * as fs from 'fs';

export class ShellExecutor {
  public command: string;

  constructor(command: string) {
    this.command = command;
  }

  public run(): void {
    //console.log(`🚀 Executing: ${this.command}`);

    exec(this.command, (error, stdout, stderr) => {
      if (error) {
        console.error(`❌ Error: ${error.message}`);
        return;
      }
      if (stderr) {
        console.warn(`⚠️ Warning: ${stderr}`);
      }
      //console.log(`✅ Success:\n${stdout}`);
    });
  }

  // Optional: returns a Promise if you want to await it
  public runAsync(): Promise<string> {
    return new Promise((resolve, reject) => {
      exec(this.command, (error, stdout, stderr) => {
        if (error) {
          reject(`❌ Error: ${error.message}`);
        } else if (stderr) {
          reject(`⚠️ Stderr: ${stderr}`);
        } else {
          resolve(stdout);
        }
      });
    });
  }
}

export class ReportUtils {

  public async generateReport(): Promise<void> {
    let allureCommand = 'allure generate allure-results --clean -o allure-report';
    const executor = new ShellExecutor(allureCommand);
    try {
      const output = await executor.runAsync();
      console.log('🎉 Report generated successfully:\n', output);
    } catch (err) {
      console.error('❌ Failed to generate report:', err);
    }
  }

  public async cleanReports(): Promise<void> {

    let executor = new ShellExecutor('rmdir /s /q allure-results');
    try {
      if (fs.existsSync('allure-results') && fs.lstatSync('allure-results').isDirectory()) {
        //console.log('✅ Folder exists');
        const output = await executor.runAsync();
      }
      //console.log('🎉 allure-results folder deleted successfully: ', output);
    } catch (err) {
      console.error('❌ Failed to delete allure-results folder:', err);
    }
    executor = new ShellExecutor('rmdir /s /q allure-report');
    try {
      if (fs.existsSync('allure-report') && fs.lstatSync('allure-report').isDirectory()) {
        //console.log('✅ Folder exists');
        const output = await executor.runAsync();
      }
      //console.log('🎉 allure-report folder deleted successfully: ', output);
    } catch (err) {
      console.error('❌ Failed to delete allure-report folder:', err);
    }
  }
}
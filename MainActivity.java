package com.example.etape1;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.RadioButton;
import android.widget.RadioGroup;
import android.widget.Toast;

import androidx.appcompat.app.AppCompatActivity;

        public class MainActivity extends AppCompatActivity {

            private RadioGroup roleRadioGroup;
            private Button confirm_button;

            @Override
            protected void onCreate(Bundle savedInstanceState) {
                super.onCreate(savedInstanceState);
                setContentView(R.layout.activity_main);

                roleRadioGroup = findViewById(R.id.roleRadioGroup);
                confirm_button = findViewById(R.id.confirm_button);

                confirm_button.setOnClickListener(new View.OnClickListener() {
                    @Override
                    public void onClick(View v) {
                        int selectedRoleId = roleRadioGroup.getCheckedRadioButtonId();

                        if (selectedRoleId == -1) {
                            // No role selected
                            Toast.makeText(MainActivity.this, "Veuillez sélectionner un rôle", Toast.LENGTH_SHORT).show();
                        } else {
                            RadioButton selectedRoleBtn = findViewById(selectedRoleId);
                            String selectedRole = selectedRoleBtn.getText().toString();

                            // Ajouter une condition pour différencier l'étudiant et l'administrateur
                            if (selectedRole.equals("étudiant")) {
                                // Code à exécuter si l'étudiant est sélectionné
                                // Par exemple, démarrer l'activité étudiant
                                Intent intent = new Intent(MainActivity.this, connecter11.class);
                                startActivity(intent);
                            } else if (selectedRole.equals("Enseignant")) {
                                // Code à exécuter si l'administrateur est sélectionné
                                // Par exemple, démarrer l'activité admin
                                Intent intent = new Intent(MainActivity.this, connecter.class);
                                startActivity(intent);
                            }

                            // Afficher un toast avec le rôle sélectionné
                            Toast.makeText(MainActivity.this, "Le rôle sélectionné est : " + selectedRole, Toast.LENGTH_SHORT).show();
                        }
                    }

                });
            }

            public static class ajouter {
            }
        }



"use client";

import { CheckCircle2, Circle, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { mockCategories, mockServices } from "./data";

interface ServiceAssignmentDialogProps {
  open: boolean;
  onClose: () => void;
  selectedServiceIds: string[];
  onToggleService: (serviceId: string) => void;
}

export function ServiceAssignmentDialog({
  open,
  onClose,
  selectedServiceIds,
  onToggleService,
}: ServiceAssignmentDialogProps) {
  if (!open) return null;

  const servicesByCategory = mockServices.reduce(
    (acc, service) => {
      if (!acc[service.categoryId]) acc[service.categoryId] = [];
      acc[service.categoryId].push(service);
      return acc;
    },
    {} as Record<string, typeof mockServices>,
  );

  const hasChanges =
    JSON.stringify([...selectedServiceIds].sort()) !==
    JSON.stringify(["checkup", "emergency"].sort());

  return (
    <div className="absolute inset-0 z-[100] flex items-center justify-center bg-black/40 p-4">
      <Card
        id="tour-services-modal"
        className="w-full max-w-[600px] bg-white shadow-xl z-[101]"
      >
        {/* Header — matches DialogHeader */}
        <CardHeader className="pb-3">
          <div className="flex items-start justify-between">
            <div>
              <CardTitle>Assign Services – Dr. Emma Smith</CardTitle>
              <CardDescription className="mt-1.5">
                Select which services this staff member can provide. They will
                only appear in the booking widget for these services.
              </CardDescription>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 shrink-0"
              onClick={onClose}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </CardHeader>

        {/* Body — matches ScrollArea + service list */}
        <CardContent className="space-y-4">
          <div className="max-h-[340px] overflow-y-auto pr-2 space-y-4">
            {Object.entries(servicesByCategory).map(
              ([categoryId, services]) => {
                const category = mockCategories.find(
                  (c) => c.id === categoryId,
                );
                return (
                  <div key={categoryId} className="space-y-2">
                    {/* Category header */}
                    <h3 className="font-semibold text-sm text-gray-700 flex items-center gap-2">
                      {category?.color && (
                        <div
                          className="w-2 h-2 rounded-full"
                          style={{ backgroundColor: category.color }}
                        />
                      )}
                      {category?.name || categoryId}
                    </h3>

                    {/* Services in category */}
                    <div className="space-y-2">
                      {services.map((service) => {
                        const isSelected = selectedServiceIds.includes(
                          service.id,
                        );
                        return (
                          <button
                            key={service.id}
                            type="button"
                            onClick={() => onToggleService(service.id)}
                            className={`w-full flex items-start gap-3 p-3 rounded-lg border-2 transition-colors text-left ${
                              isSelected
                                ? "border-blue-500 bg-blue-50"
                                : "border-gray-200 hover:border-gray-300 bg-white"
                            }`}
                          >
                            {/* Checkbox Icon */}
                            <div className="shrink-0 mt-0.5">
                              {isSelected ? (
                                <CheckCircle2 className="h-5 w-5 text-blue-600" />
                              ) : (
                                <Circle className="h-5 w-5 text-gray-400" />
                              )}
                            </div>

                            {/* Service Info */}
                            <div className="flex-1">
                              <div className="flex items-center gap-2">
                                <p className="font-medium text-gray-900">
                                  {service.name}
                                </p>
                                {category?.color && (
                                  <div
                                    className="w-3 h-3 rounded-full border border-gray-300"
                                    style={{ backgroundColor: category.color }}
                                  />
                                )}
                              </div>
                              {service.description && (
                                <p className="text-sm text-gray-600 mt-0.5 line-clamp-1">
                                  {service.description}
                                </p>
                              )}
                              <div className="flex items-center gap-3 mt-1.5">
                                <Badge variant="secondary" className="text-xs">
                                  {service.duration} min
                                </Badge>
                                <Badge variant="secondary" className="text-xs">
                                  {service.price}
                                </Badge>
                              </div>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                );
              },
            )}
          </div>

          {/* Selection summary — matches real dialog footer info */}
          <div className="flex items-center justify-between pt-2 border-t">
            <p className="text-sm text-gray-600">
              {selectedServiceIds.length} of {mockServices.length} services
              selected
            </p>
            {hasChanges && <Badge>Unsaved changes</Badge>}
          </div>

          {/* Actions — matches DialogFooter */}
          <div className="flex justify-end gap-2 pt-1">
            <Button variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button className="bg-[#72e3ad] cursor-pointer" onClick={onClose}>
              Save Changes
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
